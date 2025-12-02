"use client"
import React, { useEffect, useState } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { GitMerge, GitPullRequest, ExternalLink, Loader2 } from 'lucide-react'
import { prList } from '../lib/prData'
import { fetchPRDetails, PRDetails } from '../lib/github'

interface GroupedPRs {
    [orgName: string]: {
        prs: PRDetails[];
        logo: string; // We'll map this manually or fetch
    }
}

const OpenSource = () => {
    const [groupedPRs, setGroupedPRs] = useState<GroupedPRs>({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPRs = async () => {
            const results = await Promise.all(prList.map(pr => fetchPRDetails(pr)));
            const validPRs = results.filter((pr): pr is PRDetails => pr !== null);

            const grouped: GroupedPRs = {};

            // Helper to map org name to logo (using placeholders as before)
            const getLogo = (orgName: string) => {
                const map: { [key: string]: string } = {
                    "AlphaOneLabs": "/alphaonelabs.png",
                    "OpenScienceLabs": "/opensciencelabs.png",
                    "EbookFoundation": "/ebookfoundation.png",
                    "Joomla-CMS": "/joomla.png",
                    "Vacanza/holidays": "/vacanza.png",
                    "Excalidraw": "/excalidraw.png"
                };
                return map[orgName] || "/githubicon.png";
            };

            // Map back to our org structure
            // We need to associate the fetched PR back to the orgName from prList
            // Since fetchPRDetails returns the PR data, we can match by html_url or just iterate carefully.
            // A better way: map prList index to result index.
            
            prList.forEach((item, index) => {
                const prData = results[index];
                if (prData) {
                    const orgName = item.orgName || item.owner;
                    if (!grouped[orgName]) {
                        grouped[orgName] = {
                            prs: [],
                            logo: getLogo(orgName)
                        };
                    }
                    grouped[orgName].prs.push(prData);
                }
            });

            setGroupedPRs(grouped);
            setLoading(false);
        };

        loadPRs();
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center py-10'>
                <Loader2 className="animate-spin text-zinc-500" />
            </div>
        )
    }

    return (
        <div className='mt-16'>
            <h2 className='text-3xl font-bold mb-8 text-white'>Open Source Contributions</h2>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-2" defaultValue="AlphaOneLabs">
                {Object.entries(groupedPRs).map(([orgName, { prs, logo }], index) => (
                    <AccordionItem key={index} value={orgName} className="border-none">
                        <AccordionTrigger className="hover:no-underline py-3 px-2 hover:bg-zinc-900/50 rounded-lg transition-colors">
                            <div className='flex items-center gap-3'>
                                <div className='w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 overflow-hidden'>
                                    {/* Use the fetched owner avatar if available, else local placeholder */}
                                    {prs[0]?.base.repo.owner.avatar_url ? (
                                        <img src={prs[0].base.repo.owner.avatar_url} alt={orgName} className="w-full h-full object-cover" />
                                    ) : (
                                        <span>{orgName[0]}</span>
                                    )}
                                </div>
                                <span className='text-lg text-zinc-200'>{orgName}</span>
                                <span className='text-xs text-zinc-500 ml-auto mr-2'>{prs.length} PRs</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                            <div className='flex flex-col gap-6 mt-4 pl-2 border-l border-zinc-800 ml-3'>
                                {prs.map((pr, i) => (
                                    <div key={i} className='relative pl-6'>
                                        {/* Timeline dot */}
                                        <div className='absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700'></div>
                                        
                                        <div className='flex items-start gap-3 mb-1'>
                                            {pr.merged ? (
                                                <GitMerge size={18} className="text-purple-400 shrink-0 mt-0.5" />
                                            ) : pr.state === 'closed' ? (
                                                <GitPullRequest size={18} className="text-red-400 shrink-0 mt-0.5" />
                                            ) : (
                                                <GitPullRequest size={18} className="text-green-400 shrink-0 mt-0.5" />
                                            )}
                                            <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className='text-zinc-200 font-medium hover:text-blue-400 hover:underline flex items-start gap-2 leading-snug'>
                                                {pr.title}
                                                <ExternalLink size={12} className="opacity-50 mt-1" />
                                            </a>
                                            <span className='text-zinc-500 text-sm ml-auto shrink-0'>#{pr.number}</span>
                                        </div>
                                        <div className='text-zinc-500 text-sm pl-8 flex gap-2 items-center'>
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] border ${
                                                pr.merged 
                                                    ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                                                    : pr.state === 'open' 
                                                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                                            }`}>
                                                {pr.merged ? 'Merged' : pr.state === 'open' ? 'Open' : 'Closed'}
                                            </span>
                                            <span className='text-xs opacity-60'>{new Date(pr.created_at).toLocaleDateString()}</span>
                                            <span className='text-xs opacity-60'>• {pr.base.repo.full_name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default OpenSource
