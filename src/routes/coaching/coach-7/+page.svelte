<script>
    import Message from "$lib/Message.svelte";
    import {goto} from "$app/navigation";
    import {coachMessageStore} from "$lib/stores/coachMessage.store.js";
    import {coachStore} from "$lib/stores/coach.store.js";
    import {arrayOfMessagesStore} from "$lib/stores/arrayOfMessages.store.js";

    let messageValue = '';

    function backHome() {
        goto("/coaching")
    }

    function sendMessage7() {
        coachMessageStore.update((old) => ({
            message1: old.message1,
            message2: old.message2,
            message3: old.message3,
            message4: old.message4,
            message5: old.message5,
            message6: old.message6,
            message7: 'Vous : ' + messageValue,
        }))
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: true,
        }))
        $arrayOfMessagesStore = [...$arrayOfMessagesStore, {
            message: messageValue
        }]
        messageValue = ''
    }
</script>

<div class="globalMessage">
    <div class="header">
        <button class="backToHome" on:click={backHome}>
            <img class="backImg" src="/images/arrow-left.png" alt="arrow">
            <p class="backText">retour</p>
        </button>
        <div class="whichCoach">
            <img src="/coach/coach-7.jpeg" alt="coach7">
            <h1>Caroline</h1>
        </div>
    </div>
    <div class="allMessages">
        <p class="messageTo">Bonjour Caroline, je vous contacte car j’aimerais savoir comment mes salariés peuvent
            accéder à leurs résultats et à leur progression.<br> Merci et bonne journée à vous.</p>
        <p class="messageFrom">Bonjour, pouvez-vous m’en dire plus sur votre problème ?<br>Caroline.</p>
        <p class="messageTo">Nous cherchons à savoir si depuis l’application, les salariés peuvent avoir accès à leur
            progression, ou juste moi ?<br>Merci.</p>
        <p class="messageFrom">En effet, il est possible pour vous et vos équipes grâce à l’application d’accéder à vos
            derniers cours et voir votre évolution. Ils pourront donc accéder à leurs données directement depuis leur
            compte. Si ils n’ont pas les accès, contactez nous afin que nous puissions les aider dans les plus brefs
            délais.<br>Bonne journée à vous, Caroline.</p>
        {#each $arrayOfMessagesStore as messageText}
            <p class="messageTo">{messageText.message}</p>
        {/each}
    </div>

</div>
<div class="messageBottom">
    <Message bind:value={messageValue} sendMessage={sendMessage7}/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .messageBottom {
        display: flex;
    }

    .globalMessage {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        padding-bottom: 4rem;
    }

    .backToHome {
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
        position: absolute;
        top: 0.75rem;
        left: 0.75rem;
        align-items: center;
        background-color: transparent;
        border: none;
        padding: 0;
    }

    .backText {
        margin: 0;
        color: #41C1BA;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
    }

    .backImg {
        width: 30px;
        height: 30px;
    }

    .whichCoach {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
        margin-top: 2.5rem;
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 100px;
    }

    h1 {
        color: #41C1BA;
        font-family: Poppins, sans-serif;
        font-size: 2.25rem;
    }

    .allMessages {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        height: 100%;
        margin-top: 9rem;
    }

    .messageTo {
        margin: 0 1rem 0 0;
        width: 70%;
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
        border: 2px solid white;
        color: white;
        padding: 0.5rem;
        border-radius: 18px;
        background-color: #41C1BA;
        align-self: end;
        word-wrap: break-word;
        overflow-wrap: break-word;
        box-sizing: border-box;
        white-space: normal;

    }

    .messageFrom {
        margin: 0 0 0 1rem;
        width: 70%;
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
        border: 2px solid #41C1BA;
        color: black;
        padding: 0.5rem;
        border-radius: 18px;
        background-color: white;
        word-wrap: break-word;
        overflow-wrap: break-word;
        box-sizing: border-box;
        white-space: normal;
    }

    .header {
        display: flex;
        position: fixed;
        background-color: #FFFFFF;
        width: 100%;
        justify-content: center;
    }
</style>