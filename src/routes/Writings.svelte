<script context="module">
	export async function load({fetch}) {
		const resWriting = await fetch('/todos/writing')
		const jsonResWriting = await resWriting.json()

		if (jsonResWriting.writingItems.length == 0) {
            jsonResWriting.writingItems = []
        } 

		return {
			props: {
				writings: jsonResWriting.writingItems,
			}
		}
	}
</script>

<script>
	import Header from './Header.svelte';
	export const prerender = true;
	export let writings;

    console.log(writings);
</script>

<svelte:head>
  <title>Writings</title>
</svelte:head>
<Header page="writings" />

<div class="writings-container">
	<a class="section-content" target="_blank" href="https://repository.lib.ncsu.edu/items/c66770ec-a5c1-4a0b-ba49-9df08d96306c">Zari McFadden. <span id="title-style">"A Rubric for Addressing Systems of Oppression in AI Ethics Research."</span> 2023. North Carolina State University. <strong>Dissertation.</strong></a>
    {#if writings.length > 0}
        {#each writings as w}
            <a class="section-content" target="_blank" href={w.link}>{w.author}. <span id="title-style">"{w.title}."</span> {w.year}.</a>
        {/each}
    {/if}
</div>

<style>
	.writings-container {
		margin: auto;
		width: 50%;
		display: flex;
		flex-direction: column;
		padding: 56px 0;
	}

    #title-style {
        font-weight: 400;
    }

    .section-content {
		margin: 2% 0;
        font-size: 16px;
		line-height: 24px;
        font-weight: 200;
        font-family: 'Maison mono', sans-serif;
		color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
	}
</style>