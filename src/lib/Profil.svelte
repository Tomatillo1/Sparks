<script>
    export let coachName;
    export let head;
    export let closePop;
</script>

<div class="backBlack">
    <div class="card-client">
        <img class="back" src="/images/back.png" alt="close" on:click={closePop}>
        <div class="user-picture">
            <img class="head" src={head} alt="coach">
        </div>
        <p class="name-client"> {coachName}
            <span class="job">Coach WISE
        </span>
        </p>
        <p class="tel">Tel : +0683743645</p>
        <p class="mail">Mail : contact@wise.com</p>
    </div>
</div>
<style>
    .card-client {
        background: white;
        width: 13rem;
        padding: 25px 20px;
        border: 4px solid #41C1BA;
        box-shadow: 0 6px 10px #212121;
        border-radius: 10px;
        text-align: center;
        color: #41C1BA;
        font-family: Poppins, sans-serif;
        position: relative;
    }

    .head {
        overflow: hidden;
        object-fit: cover;
        width: 5rem;
        height: 5rem;
        border: 4px solid #41C1BA;
        border-radius: 999px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
    }

    .name-client {
        margin: 20px 0 0 0;
        font-weight: 600;
        font-size: 1.25rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #41C1BA;
    }

    .job, .mail, .tel {
        display: block;
        font-weight: 200;
        font-size: 16px;
        margin: 0;
        font-family: Poppins, sans-serif;
    }

    .backBlack{
        background-color: rgb(0, 0, 0, 0.8);
        width: 100%;
        height: 100svh;
        position: fixed;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tel {
        margin-top: 1rem;
    }

    .back {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
    }
</style>