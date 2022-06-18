<script>
	import Intro from './Intro.svelte'
    import Header from './Header.svelte'
    let src="https://i.ibb.co/NFRyV8D/zari.jpg"
    export const prerender = true;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<Header page="about"/>
<a href="mailto:zmuhammad55@gmail.com" class="link-block">
    <p class="email">Email me!</p>
</a>
<div class="intro-container">
    <Intro />
    <img src={src} alt="zari" /> 
</div>

<style>
    .intro-container {
        display: flex;
        margin: 3% auto;
        /* justify-content: space-between; */
        flex-direction: row;
        width: 45%;
    }

    img {
        height: 400px;
        float: right;
        width: fit-content;
        margin: 3% auto;
        display: flex;
        align-items: center;
    }

    .email {
        margin-top: 0px;
        margin-bottom: 40px;
        font-family: 'Maison mono', sans-serif;
        color: rgba(0, 0, 0, 0.3);
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        text-decoration: none;
    }

    .link-block {
        display: block;
        margin-right: auto;
        margin-left: auto;
        text-decoration: none;
        width: fit-content;
        padding-top: 80px;
    }
    
</style>