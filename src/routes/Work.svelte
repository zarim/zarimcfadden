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
	import WorkItem from './WorkItem.svelte';
    import WorkMenu from './WorkMenu.svelte'
	export const prerender = true;
	export let works;
    let i=""
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<Header page="work" />
<WorkMenu />

<div class="work-container">
    {#each works as w}
    <div class="work" id={w._id}>
        <WorkItem item={w} />
    </div>
    {/each}
</div>

<style>
    .work-container {
        display: flex;
        flex-flow: row wrap;
        padding: 8%;
        justify-content: center;
        background-color: #f7f9fa;
        overflow: hidden;
    }

    .work {
        display: contents;
    }
</style>