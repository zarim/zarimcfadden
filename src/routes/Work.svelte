<script context="module">
	export async function load({fetch}) {
		const res = await fetch('/todos/work')
		const jsonRes = await res.json()
		return {
			props: {
				works: jsonRes.workItems
			}
		}
	}
</script>

<script>
	import Header from './Header.svelte';
	import WorkItem from './WorkItem.svelte'
	export const prerender = true;
	export let works;
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<Header page="work" />

<div class="work-container">
    {#each works as w}
    <div class="work">
        <WorkItem item={w} />
    </div>
    {/each}
</div>

<style>
    .work-container {
        display: flex;
        flex-flow: row wrap;
        margin: 8%;
        justify-content: center;
    }

    .work {
        display: contents;
    }
</style>