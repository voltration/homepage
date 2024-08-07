<script lang="ts">
    
</script>

{#snippet link(name: string, href?: string)}
    <a class="i400 text-white hover:text-white/20 ease-in-out duration 150" href="/{href ?? name}">{name}</a>
{/snippet}


<div class="sticky top-2 z-50 shadow-xl flex flex-row items-center justify-between px-8 w-full h-12 bg-white/5 backdrop-blur rounded-3xl border border-white/10">
    {@render link("sanderson", "")}
    <div class="flex flex-row items-center gap-4">
        {@render link("blog")}
        <p class="text-white/20 i400 select-none">/</p>
        {@render link("projects")}
        <p class="text-white/20 i400 select-none">/</p>
        {@render link("about")}
    </div>
</div>