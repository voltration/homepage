<script lang="ts">
    import { page } from '$app/stores';  
    import { onNavigate } from "$app/navigation";
    import Header from "$lib/components/Header.svelte";

    import "../app.css";
    import '@fontsource-variable/inter';
    import '@fontsource-variable/jetbrains-mono';

    let { children } = $props();;

    onNavigate((navigation) => {
	if (!(document as any).startViewTransition) return;

	return new Promise((resolve) => {
		(document as any).startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
</script>

<svelte:head>
    <title>sander.lol | {$page.url.pathname}</title>
    <meta charset="UTF-8">
    <meta name="description" content="Sander's personal homepage.">
</svelte:head>

<div class="flex flex-col gap-8 my-12 mx-2 xl:mx-80">
    <Header />
    {@render children()}
</div>

<div class="fixed inset-0 -z-10 min-h-screen w-full bg-[#181A1B] bg-[radial-gradient(#242829_1px,transparent_1px)] [background-size:16px_16px]"></div>