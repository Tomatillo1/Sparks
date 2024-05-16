<script>
export let whatImage;
export let whatTitle;
export let whatText;

export let whatLink;
</script>

<div class="globalService">
    <img src="{whatImage}">
    <h1>{whatTitle}</h1>
    <p>{whatText}</p>
    <button on:click={whatLink}>C’est parti !</button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .globalService {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        margin-top: 1rem;
        width: 35%;
        aspect-ratio: 1;
    }

    h1 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        color: #41C1BA;
        margin: 0 0 1rem 0;
    }

    p {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: #41C1BA;
        text-align: center;
        width: 85%;
        margin: 0;
    }

    button {
        margin-top: 1rem;
        background-color: #41C1BA;
        color: #FFFFFF;
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        border: none;
        width: 80%;
        border-radius: 18px;
        padding: 0.25rem 0;
    }
</style>