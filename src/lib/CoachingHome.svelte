<script>
    export let whatPerson;
    export let name;
    export let date;
    export let message;

    export let textTo;
</script>


<button class="oneCoach" on:click={textTo}>
    <div class="person">
        <img src={whatPerson}>
    </div>
    <div class="allInfos">
        <div class="nameDate">
            <p class="name">{name}</p>
            <p class="date">{date}</p>
        </div>
        <p class="message">{message}</p>
    </div>
</button>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .oneCoach {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        border-radius: 100px;
        border: 2px solid #41C1BA;
        width: 90%;
        padding: 0.25rem 0.15rem;
        margin: 0.5rem 0;
        background-color: transparent;
    }

    .person {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        width: 20%;
        align-items: center;
    }

    img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100px;
    }

    .allInfos {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .nameDate {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
    }

    .name {
        margin: 0;
        font-family: Poppins, sans-serif;
        font-size: 0.875rem;
        color: #41C1BA;
    }

    .date {
        margin: 0;
        font-family: Poppins, sans-serif;
        font-size: 0.65rem;
        color: black;
    }

    .message {
        margin: 0;
        font-family: Poppins, sans-serif;
        font-size: 0.875rem;
        color: black;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 180px;
        text-align: left;
    }
</style>