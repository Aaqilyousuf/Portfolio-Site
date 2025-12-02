import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const owner = searchParams.get('owner');
    const repo = searchParams.get('repo');
    const number = searchParams.get('number');

    if (!owner || !repo || !number) {
        return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const token = process.env.GITHUB_TOKEN;
    const headers: HeadersInit = {
        'Accept': 'application/vnd.github.v3+json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/pulls/${number}`, {
            headers,
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `GitHub API error: ${response.statusText}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
