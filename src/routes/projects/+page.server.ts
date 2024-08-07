import { ACCESS_TOKEN } from "$env/static/private";

export async function load() {
    const headers = {
        'Authorization': `token ${ACCESS_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    }

    let repos: Repository[] = [];

    const res = await fetch(`https://api.github.com/users/voltration/repos`, { headers });
    repos = await res.json();

    const promises = repos.map(async (repo) => {
        const res = await fetch(repo.languages_url, { headers });
        const lang = await res.json();
        repo.languages = Object.entries(lang);
        return repo;
    });

    repos = await Promise.all(promises);

    return { repos };
}