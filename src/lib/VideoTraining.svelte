<script>
    export let whatVideo;
    export let whatLink;

    function onYouTube() {
        window.open(whatLink, '_blank')
        console.log('test')
    }
</script>

<button on:click={onYouTube}>
    <img src="{whatVideo}">
</button>

<style>
    button {
        border-radius: 40px;
        width: 60%;
        height: 20%;
        border: 2px solid #41C1BA;
        padding: 0;
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 38px;
    }
</style>