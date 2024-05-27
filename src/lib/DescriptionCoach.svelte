<script>
    import {goto} from "$app/navigation";

    export let nameCoach;
    export let descp;
    export let head;
    export let buttonText;
    export let link;
    function discussionWithCoachs() {
        goto("/coaching/coach"+link)
    }

</script>

<div class="infosCoach">
    <img src={head}>
    <div class="infos">
        <h1>{nameCoach}</h1>
        <p>{descp}</p>
        <button on:click={discussionWithCoachs}>{buttonText}</button>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .infosCoach {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        width: 90%;
        margin-top: 1.5rem;
    }

    .infos {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    h1 {
        font-family: Poppins, sans-serif;
        color: #41C1BA;
        font-size: 1rem;
        margin: 0;
    }

    p {
        font-family: Poppins, sans-serif;
        color: #41C1BA;
        font-size: 0.75rem;
        margin: 0;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 100px;
        object-fit: cover;
    }

    button {
        color: #FFFFFF;
        background-color: #41C1BA;
        border: 1px solid #41C1BA;
        border-radius: 18px;
        text-align: center;
        width: 60%;
        margin-top: 0.5rem;
    }
</style>