<script context="module">
	export async function load({fetch}) {
		const resWork = await fetch('/todos/work')
		const resEducation = await fetch('/todos/education')
		const jsonResWork = await resWork.json()
		const jsonResEducation = await resEducation.json()

		if (jsonResWork.workItems.length == 0) {
            jsonResWork.workItems = []
        } 

		if (jsonResEducation.educationItems.length == 0) {
			jsonResEducation.educationItems = []
		}

		return {
			props: {
				works: jsonResWork.workItems,
				educations: jsonResEducation.educationItems
			}
		}
	}
</script>

<script>
	import Header from './Header.svelte';
	export const prerender = true;
	export let works;
	export let educations;

	let skills = ["iOS App Development", "Qualitative Data Analysis", "Frontend Web Development"]

	let languages = ["HTML / CSS / JavaScript", "Svelte / SvelteKit", "Swift / SwiftUI", "Python", "Java", "C++"]
</script>

<svelte:head>
  <title>Resume</title>
</svelte:head>
<Header page="resume" />

<div class="resume-container">
	<div class="left-panel">
		<div class="education-sidebar">
			<p class="section-title">Education</p>
			{#each educations as e}
				<p class="item-title">{e.school}</p>
				<p class="section-content">{e.major}</p>
				<p class="item-dates">{e.dates}</p>
			{/each}
		</div>
		{#if skills.length > 0}
			<div class="resume-sidebar">
				<p class="section-title">Skills</p>
				{#each skills as s}
					<p class="section-content">{s}</p>
				{/each}
			</div>
		{/if}
		{#if languages.length > 0}
			<div class="resume-sidebar">
				<p class="section-title">Languages & Frameworks</p>
				{#each languages as l}
					<p class="section-content">{l}</p>
				{/each}
			</div>
		{/if}
		<div class="resume-sidebar">
			<p class="download-title">Download</p>
			<a class="section-content" href="https://drive.google.com/file/d/1ZvGoIbqnHH7DE_ZYVrPj73k-s_PqDbrQ/view?usp=sharing" target="_blank" download="Zari-McFadden-Resume.pdf">Download PDF</a>
		</div>
		
	</div>
	<div class="right-panel">
		<p class="section-title">Work Experience</p>
		{#each works as w}
		<div class="work-experience">
			<div class="company-description">
				<p class="item-title">{w.subtitle}</p>
				<p class="item-subtitle">{w.title}</p>
			</div>
			<p class="item-dates">{w.dates}</p>
			<p class="section-content">{w.description}</p>
		</div>
		{/each}
	</div>
</div>

<style>
	.resume-container {
		margin: auto;
		width: 65%;
		display: flex;
		flex-direction: row;
		/* height: 750px; */
		padding-top: 56px;
	}

	.left-panel {
		display: flex;
		flex-direction: column;
		width: 40%;
		/* background-color: cadetblue; */
		height: 100%;
		padding-right: 16px;
	}

	.right-panel {
		display: flex;
		flex-direction: column;
		width: 60%;
		/* background-color: darksalmon; */
		height: 100%;
		padding-left: 16px;
	}

	.education-sidebar {
		margin-bottom: 32px;
	}

	.resume-sidebar {
		margin-bottom: 32px;
		padding-top: 32px;
		border-top: 0.25px solid rgba(0, 0, 0, 0.2);
		width: 90%;
	}

	.work-experience {
		margin-bottom: 56px;
	}

	.section-title {
		color: rgba(0, 0, 0, 0.3);
		font-family: 'Maison mono', sans-serif;
		font-size: 11px;
		line-height: 24px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		margin-bottom: 24px;
	}

	.download-title {
		color: rgba(0, 0, 0, 0.3);
		font-family: 'Maison mono', sans-serif;
		font-size: 11px;
		line-height: 24px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
	}


	.item-title {
		margin-top: 0px;
		margin-bottom: 0px;
		font-family: Maisonneue, sans-serif;
		color: rgba(0, 0, 0, 0.9);
		font-size: 16px;
    	line-height: 24px;
		font-weight: 600;
	}

	.item-subtitle {
		margin-top: 0px;
		margin-bottom: 0px;
		font-family: Maisonneue, sans-serif;
		color: rgba(0, 0, 0, 0.9);
		font-size: 16px;
    	line-height: 24px;
		padding-left: 4px;
	}

	.item-dates {
		margin-top: 0px;
		margin-bottom: 8px;
		font-family: Maisonneue, sans-serif;
		color: rgba(0, 0, 0, 0.7);
		font-size: 13px;
		line-height: 24px;
		font-weight: 500;
	}

	.section-content {
		margin-bottom: 0px;
		font-family: Maisonneue, sans-serif;
		color: rgba(0, 0, 0, 0.7);
		font-size: 16px;
		line-height: 24px;
		font-weight: 400;
	}

	.company-description {
		display: flex;
		flex-direction: row;
	}
</style>