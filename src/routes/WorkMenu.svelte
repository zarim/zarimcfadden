<script>
    export let id;
</script>

<div class="menu-bar">
    <div class="left-side">
        <a href="/Work#{id}"><h1 class="section-title-left">WORK 1</h1></a>
        <a href="/Work#{id}"><h1 class="section-title-left">WORK 2</h1></a>
        <a href="/Work#{id}"><h1 class="section-title-left">WORK 3</h1></a>
    </div>
    <div class="right-side">
        <a href="/Work#"><h1 class="section-title-right">WEB</h1></a>
        <a href="/Work#"><h1 class="section-title-right">iOS</h1></a>
    </div>
</div>

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
		/* text-transform: uppercase; */
		/* margin-bottom: 24px; */
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