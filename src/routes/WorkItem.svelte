<script>
    export let item

    let src = item.photo || "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png"
</script>

<div class="work-item">
    <div class="image">
        <img src={src} class="image" alt="" />
    </div>
    <div class="text">
        <p class="work-text"><b>{item.title}</b></p>
        <p class="work-subtext">{item.subtitle}</p>
        <p class="work-subtext">{item.dates}</p>
    </div>
</div>

<style>
    .work-item {
        width: 400px;
        height: 250px;
        display: inline;
        margin: 3%;
        border: 1px;
        border-style: solid;
        border-color: #323649;
        position: relative;
    }

    .image {
        width: 100%;
        height: 75%;
        object-fit: contain;
        display: flex;
        margin: auto;
    }

    .work-text {
        font-size: 20px;
        text-align: center;
    }

    .work-subtext {
        font-size: 15px;
        text-align: center;
    }

    .text {
        display: inline;
        bottom: 0;
        position: absolute;
        padding: 1%;
        width: 100%;
    }
</style>