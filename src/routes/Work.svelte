<script context="module">
    export async function load({fetch}) {
		const res = await fetch('/todos/project')
		const jsonRes = await res.json()
		return {
			props: {
                web: jsonRes.webItems,
                ios: jsonRes.iosItems
			}
		}
	}
</script>

<script>
	import Header from './Header.svelte';
	import WorkItem from './WorkItem.svelte';
    import WorkMenu from './WorkMenu.svelte'
	export const prerender = true;
    export let web;
    export let ios;
    export let element;
    

    console.log(element)
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<Header page="work" />
<WorkMenu />

<div class="work-container" id="web">
    {#each web as w}
    <div class="work" id={w._id} style="background-color: {w.backgroundColor};">
        <WorkItem item={w} />
    </div>
    {/each}
</div>

<div class="work-container" id="ios">
    {#each ios as i}
    <div class="work" id={i._id} style="background-color: {i.backgroundColor};">
        <WorkItem item={i} />
    </div>
    {/each}
</div>

<style>
    .work-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        overflow: hidden;
    }

    .work {
        display: contents;
    }
</style>