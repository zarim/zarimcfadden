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
<div class="social-media">
    <a class="image-link" target="_blank" href="https://www.linkedin.com/in/zari-mcfadden-45262978/"><img class="icon-image" src="https://i.ibb.co/wrVVYTH/linkedin.png" alt="linkedin" border="0"></a>
    <a class="image-link" target="_blank" href="https://github.com/zarim"><img class="icon-image" src="https://i.ibb.co/yqchxF6/github.png" alt="github" border="0"></a>
    <a class="image-link" target="_blank" href="https://twitter.com/ZariMcFadden"><img class="icon-image" src="https://i.ibb.co/ssN6MZ5/twitter.png" alt="twitter" border="0"></a>
</div>
<div class="intro-container">
    <Intro />
    <img class="zari" src={src} alt="zari" /> 
</div>

<style>
    .intro-container {
        display: flex;
        margin: 1% auto;
        flex-direction: row;
        width: 45%;
    }

    .zari {
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
        font-weight: 400;
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
    
    .social-media {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .icon-image {
        height: 30px;
    }

    .image-link {
        margin: 0 1%;
    }
</style>