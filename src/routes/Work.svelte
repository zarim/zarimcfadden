<script context="module">
    import { onMount } from 'svelte';
	// export async function load({fetch}) {
	// 	const res = await fetch('/todos/work')
	// 	const jsonRes = await res.json()
	// 	return {
	// 		props: {
	// 			works: jsonRes.workItems
	// 		}
	// 	}
	// }

    export async function load({fetch}) {
		const res = await fetch('/todos/project')
		const jsonRes = await res.json()
		return {
			props: {
				projects: jsonRes.projectItems
			}
		}
	}
</script>

<script>
	import Header from './Header.svelte';
	import WorkItem from './WorkItem.svelte';
    import WorkMenu from './WorkMenu.svelte'
	export const prerender = true;
	// export let works;
    export let projects;
    export let i;

    // onMount(async () => {
	// 	console.log(i)
	// });

</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<Header page="work" />
<WorkMenu i={i}/>

<div class="work-container">
    {#each projects as p}
    <div class="work" bind:this={i} id={p._id} style="background-color: {p.backgroundColor};">
        <WorkItem item={p} />
    </div>
    {/each}
</div>

<style>
    .work-container {
        display: flex;
        flex-flow: row wrap;
        /* padding: 8%; */
        justify-content: center;
        /* background-color: #f7f9fa; */
        overflow: hidden;
    }

    .work {
        display: contents;
    }
</style>