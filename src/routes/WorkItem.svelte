<script>
    export let item

    let src = item.image || "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
</script>

<div class="work-item" style="background-color: {item.backgroundColor};">
    <div class="image">
        <img src={src} class="image" alt={item.alt} />
    </div>
    <div class="text">
        {#if item.link != ""}
            <a href="{item.link}" target="_blank" class="work-text" style="color:{item.textColor}"><b>{item.title}</b></a>
        {:else}
            <p class="work-text" style="color:{item.textColor}"><b>{item.title}</b></p>
        {/if}

        <p class="work-subtext" style="color:{item.textColor}">{item.subtitle}</p>
        <p class="work-subtext" style="color:{item.textColor}">{item.description}</p>
        {#if item.techStack.length > 0}
            <p class="work-subtext" style="color:{item.textColor}; margin: 0 2.5%; text-decoration: underline">Tech Stack</p>
            {#each item.techStack as t}
            <p class="work-subtext" style="color:{item.textColor}; margin: 0 2.5%;">&emsp-  {t}</p>
            {/each}
        {/if}
    </div>
</div>

<style>
    .work-item {
        display: flex;
        width: 100%;
        height: 100vh;
        position: relative;
        padding: 8%;
    }

    .image {
        width: 65vw;
        height: 100%;
        object-fit: contain;
        display: flex;
        justify-content: center;
    }

    .work-text {
        font-size: 1.25em;
        margin: 2.5%;
        text-decoration: none;
    }

    .work-subtext {
        font-size: 0.75em;
        margin: 2.5%;
    }

    .text {
        display: flex;
        width: 30%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
    }
</style>