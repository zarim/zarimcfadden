<script context="module">
    export async function load({fetch}) {
		const res = await fetch('/todos/project')
		const jsonRes = await res.json()
		return {
			props: {
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
    export let ios;
    export let element;

    console.log(element)
</script>

<svelte:head>
  <title>Work</title>
</svelte:head>

<Header page="work" />
<WorkMenu items={ios} type={"ios"}/>

{#each ios as i}
<div class="work-container" id={i.title}>
    <div class="work" id={i.title} style="background-color: {i.backgroundColor};">
        <WorkItem item={i} />
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

    .work {
        display: contents;
    }
</style>