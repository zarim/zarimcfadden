<script>
    import Menu from "./Menu.svelte";
    export let page = "";
</script>

<div class="header-container">
    <p class="name">Zari McFadden</p>
    <p class="sub-text">Ph.D. Candidate / Durham Native / Spelman Woman</p>
    <Menu page={page}/>
</div>

<style>
    .header-container {
        display: flex;
        flex-direction: column;
        border-bottom: 0.25px solid rgba(0, 0, 0, 0.2);
    }

    .name {
        text-align: center;
        padding-top: 170px;
        font-size: 32px;
        line-height: 48px;
        font-weight: 500;
    }

    .sub-text {
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
        font-size: 20px;
        line-height: 26px;
        padding-bottom: 70px;
    }
</style>