import { PRIdentifier } from "./prData";

export interface PRDetails {
    title: string;
    state: string;
    merged: boolean;
    html_url: string;
    repository_url: string;
    created_at: string;
    number: number;
    user: {
        login: string;
        avatar_url: string;
    };
    base: {
        repo: {
            full_name: string;
            owner: {
                avatar_url: string;
            }
        }
    }
}

export async function fetchPRDetails(pr: PRIdentifier): Promise<PRDetails | null> {
    try {
        const response = await fetch(`/api/pr-details?owner=${pr.owner}&repo=${pr.repo}&number=${pr.number}`);
        if (!response.ok) {
            console.error(`Failed to fetch PR ${pr.owner}/${pr.repo}#${pr.number}: ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        return data as PRDetails;
    } catch (error) {
        console.error(`Error fetching PR ${pr.owner}/${pr.repo}#${pr.number}:`, error);
        return null;
    }
}
