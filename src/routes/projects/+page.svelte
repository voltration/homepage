<script lang="ts">
   import { getLanguageColor } from "$lib/getLanguageColor";

   let { data } = $props();
</script>

{#snippet repoCard(repo: Repository)}
   <div class="flex flex-col gap-2 hover:bg-white/10 ease-in-out duration-150 bg-white/5 border border-white/10 backdrop-blur py-2 px-6 rounded-xl">
      <div class="flex flex-row justify-between items-center">
         <a class="hover:text-white/30 ease-in-out duration-150 i400 text-white/80" href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
         <div class="flex flex-row items-center gap-2">
            <p class="i400 text-white/80">{repo.stargazers_count} stars</p>
            <p class="w-[1px] h-4 bg-white/15"></p>
            <a class="hover:opacity-30 opacity-80 ease-in-out duration-150" href={repo.html_url} target="_blank" rel="noopener noreferrer">
               <img class="h-[1.15rem]" src="/github.svg" alt="Github Link">
            </a>
         </div>
      </div>
      <div class="flex flex-row gap-2">
         {#each repo.languages as lang}
            {@render langCard(getLanguageColor(lang[0]) ?? "#ffffff", lang[0])}
         {/each}
      </div>
   </div>
{/snippet}

{#snippet langCard(color: string, name: string)}
   <div style="background-color: {color}10;" class="shadow-md px-4 rounded-full border border-white/5 flex flex-row items-center gap-2">
      <div style="background-color: {color}" class="size-2 rounded-full border border-white/20"></div>
      <p class="text-white i400">{name}</p>
   </div>
{/snippet}

<div class="flex flex-col gap-4">
   <div class="flex flex-col gap-2">
      <p class="i400 text-white/80">all of my public projects on github</p>
      <div class="w-full h-[1px] bg-white/10 shadow"></div>
   </div>
   <div class="flex flex-col gap-6">
      {#each data.repos.sort((a, b) => b.stargazers_count - a.stargazers_count) as repo}
        {@render repoCard(repo)}         
      {/each}
    </div>
</div>