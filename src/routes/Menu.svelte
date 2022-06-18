<script>
    export let page = "";
</script>

<div class="menu">
    {#if page == "about"}
        <a href="/" style="color: #323649;">About</a>
        <a href="/Work" >Work</a>
        <a href="/Resume">Resume</a>
    {/if}
    {#if page == "work" }
        <a href="/">About</a>
        <a href="/Work" style="color: #323649;">Work</a>
        <a href="/Resume">Resume</a>
    {/if}
    {#if page == "resume" }
        <a href="/">About</a>
        <a href="/Work" >Work</a>
        <a href="/Resume" style="color: #323649;">Resume</a>
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
        width: 20%;
        padding-bottom: 50px;
    }

</style>