<script context="module">
    export async function load({fetch}) {
		const res = await fetch('/todos/project')
		const jsonRes = await res.json()
		return {
			props: {
                web: jsonRes.webItems
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

</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<Header page="work" />
<WorkMenu items={web} type={"web"}/>

{#each web as w}
<div class="work-container" id={w.title}>
    <div class="work" id={w.title} style="background-color: {w.backgroundColor};">
        <WorkItem item={w} />
    </div>
</div>
{/each}

<style>
    .work-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        overflow: hidden;
    }

    .work-container:active {
        color: #323649
    }

    .work {
        display: contents;
    }
</style>