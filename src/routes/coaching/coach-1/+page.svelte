<script>
    import Message from "$lib/Message.svelte";
    import {goto} from "$app/navigation";
    import {coachMessageStore} from "$lib/stores/coachMessage.store.js";
    import {coachStore} from "$lib/stores/coach.store.js";
    import {arrayOfMessagesStore} from "$lib/stores/arrayOfMessages.store.js";
    import Profil from "$lib/Profil.svelte";

    let messageValue = '';
    let close = false;

    function backHome() {
        goto("/coaching")
    }

    function closeProfil() {
        close = false
    }

    function openProfil() {
        close = true;
    }

    function sendMessage1() {
        coachMessageStore.update((old) => ({
            message1: 'Vous : ' + messageValue,
            message2: old.message2,
            message3: old.message3,
            message4: old.message4,
            message5: old.message5,
            message6: old.message6,
            message7: old.message7,
        }))
        coachStore.update((old) => ({
            coach1: true,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: old.coach7,
        }))
        arrayOfMessagesStore.update((old) => {
            const idx = old.findIndex((coach) => coach.name === 1);
            old[idx].messages.push(messageValue)
            return [...old];
        })
        messageValue = ''
    }
</script>

<div class="globalMessage">
    {#if (close === true)}
        <div class="profil">
            <Profil coachName="Guillaume" head="/coach/coach-1.jpeg" closePop={closeProfil}/>
        </div>
    {/if}
    <div class="header">
        <button class="backToHome" on:click={backHome}>
            <img class="backImg" src="/images/arrow-left.png" alt="arrow">
            <p class="backText">retour</p>
        </button>
        <div class="whichCoach">
            <img src="/coach/coach-1.jpeg" alt="coach1" on:click={openProfil}>
            <h1>Guillaume</h1>
        </div>
    </div>
    <div class="allMessages">
        <p class="messageTo">Bonjour Guillaume, je vous contacte car j’aimerais savoir comment mes salariés peuvent
            accéder à leurs résultats et à leur progression.<br> Merci et bonne journée à vous.</p>
        <p class="messageFrom">Bonjour, pouvez-vous m’en dire plus sur votre problème ?<br>Guillaume.</p>
        <p class="messageTo">Nous cherchons à savoir si depuis l’application, les salariés peuvent avoir accès à leur
            progression, ou juste moi ?<br>Merci.</p>
        <p class="messageFrom">En effet, il est possible pour vous et vos équipes grâce à l’application d’accéder à vos
            derniers cours et voir votre évolution. Ils pourront donc accéder à leurs données directement depuis leur
            compte. Si ils n’ont pas les accès, contactez nous afin que nous puissions les aider dans les plus brefs
            délais.<br>Bonne journée à vous, Guillaume.</p>
        {#each $arrayOfMessagesStore[0].messages as message}
            <p class="messageTo">{message}</p>
        {/each}
    </div>

</div>
<div class="messageBottom">
    <Message bind:value={messageValue} sendMessage={sendMessage1}/>
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

    .profil {
        display: flex;
        width: 100%;
        z-index: 100;
    }
</style>