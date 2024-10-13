<script>
    export let page = "";
</script>

<div class="menu">
    {#if page == "about"}
        <a sveltekit:prefetch href="/" style="color: #323649;">About</a>
        <a sveltekit:prefetch href="/WebWork" >Work</a>
        <a sveltekit:prefetch href="/Resume">Resume</a>
        <a sveltekit:prefetch href="/Writings">Writings</a>
    {/if}
    {#if page == "work" }
        <a sveltekit:prefetch href="/">About</a>
        <a sveltekit:prefetch href="/WebWork" style="color: #323649;">Work</a>
        <a sveltekit:prefetch href="/Resume">Resume</a>
        <a sveltekit:prefetch href="/Writings">Writings</a>
    {/if}
    {#if page == "resume" }
        <a sveltekit:prefetch href="/">About</a>
        <a sveltekit:prefetch href="/WebWork" >Work</a>
        <a sveltekit:prefetch href="/Resume" style="color: #323649;">Resume</a>
        <a sveltekit:prefetch href="/Writings">Writings</a>
    {/if}
    {#if page == "writings" }
        <a sveltekit:prefetch href="/">About</a>
        <a sveltekit:prefetch href="/WebWork" >Work</a>
        <a sveltekit:prefetch href="/Resume">Resume</a>
        <a sveltekit:prefetch href="/Writings" style="color: #323649;">Writings</a>
    {/if}
</div>

<style>
    a {
        margin: 0 0 0 5%;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.2);
        margin: auto;
    }

    .menu {
        justify-content: center;
        display: flex;
        font-size: 20px;
        font-weight: 300;
        margin: auto;
        width: 30%;
        padding-bottom: 50px;
    }

</style>