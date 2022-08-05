<script>
    export let items;
    export let type;
</script>

{#if type=="web"}
    <div class="menu-bar">
        <div class="left-side">
            {#each items as i}
                <a sveltekit:prefetch href="/WebWork#{i.title}"><h1 class="section-title-left">{i.title}</h1></a>
            {/each}
        </div>
        <div class="right-side">
            <a sveltekit:prefetch href="/WebWork#web" element={"web"}><h1 class="section-title-right" style="color: #323649" id="webMenu">WEB</h1></a>
            <a sveltekit:prefetch href="/iOSWork#ios" element={"ios"}><h1 class="section-title-right" id="iosMenu">iOS</h1></a>
        </div>
    </div>
{/if}

{#if type=="ios" }
    <div class="menu-bar">
        <div class="left-side">
            {#each items as i}
                <a href="/iOSWork# {i.title}"><h1 style="color: #323649" class="section-title-left">{i.title}</h1></a>
            {/each}
        </div>
        <div class="right-side">
            <a href="/WebWork#web" element={"web"}><h1 class="section-title-right" id="webMenu">WEB</h1></a>
            <a href="/iOSWork#ios" element={"ios"}><h1 class="section-title-right" style="color: #323649" id="iosMenu">iOS</h1></a>
        </div>
    </div>
{/if}



<style>
    .menu-bar {
        position: sticky;
        top: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 52px;
        border-bottom: 0.25px solid rgba(0, 0, 0, 0.2);
        transition: opacity 200ms ease 0s;
        opacity: 1;
        background-color: hsla(0, 0%, 100%, 0.9);
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
        z-index: 1;
    }

    .section-title-left {
		color: rgba(0, 0, 0, 0.3);
		font-family: 'Maison mono', sans-serif;
		font-size: 11px;
		line-height: 24px;
		font-weight: 700;
		letter-spacing: 1px;
		text-transform: uppercase;
		/* margin-bottom: 24px; */
        float: left;
	}

    .section-title-left:hover {
        color: #323649;
    }

    .section-title-right:hover {
        color: #323649;
    }

    .section-title-right {
		color: rgba(0, 0, 0, 0.3);
		font-family: 'Maison mono', sans-serif;
		font-size: 11px;
		line-height: 24px;
		font-weight: 700;
		letter-spacing: 1px;
        float: right;
	}

    .left-side {
        width: 40%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 10%;
    }

    .right-side {
        width: 20%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin: 0 10%;
    }
</style>