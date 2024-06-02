<script>
    import {goto} from "$app/navigation";
    import NotificationPopUp from "$lib/NotificationPopUp.svelte";
    import Notification from "$lib/Notification.svelte";
    import CoachingHome from "$lib/CoachingHome.svelte";
    import {coachMessageStore} from "$lib/stores/coachMessage.store.js";
    import {coachStore} from "$lib/stores/coach.store.js";

    let message1 = $coachMessageStore.message1;
    let message2 = $coachMessageStore.message2;
    let message3 = $coachMessageStore.message3;
    let message4 = $coachMessageStore.message4;
    let message5 = $coachMessageStore.message5;
    let message6 = $coachMessageStore.message6;
    let message7 = $coachMessageStore.message7;

    let popUpSwitch = false;
    let deleteSwitch = false;

    function homePage() {
        goto("/home")
    }

    function statisticsPage() {
        goto("/statistics")
    }

    function accountPage() {
        goto("/account")
    }

    function trainingPage() {
        goto("/training")
    }

    function coachingPage() {
        goto("/coaching")
    }

    function togglePopUp() {
        popUpSwitch = !popUpSwitch
    }

    function toggleDelete() {
        deleteSwitch = !deleteSwitch
    }

    function newCoach() {
        goto("/coaching/coachs-list")
    }

    function deleteCoach1() {
        coachStore.update((old) => ({
            coach1: false,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: old.coach7,
        }))
    }
    function deleteCoach2() {
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: false,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: old.coach7,
        }))
    }
    function deleteCoach3() {
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: old.coach2,
            coach3: false,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: old.coach7,
        }))
    }
    function deleteCoach4() {
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: false,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: old.coach7,
        }))
    }
    function deleteCoach5() {
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: false,
            coach6: old.coach6,
            coach7: old.coach7,
        }))
    }
    function deleteCoach6() {
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: false,
            coach7: old.coach7,
        }))
    }
    function deleteCoach7() {
        coachStore.update((old) => ({
            coach1: old.coach1,
            coach2: old.coach2,
            coach3: old.coach3,
            coach4: old.coach4,
            coach5: old.coach5,
            coach6: old.coach6,
            coach7: false,
        }))
    }

    function textToCoach1() {
        goto("/coaching/coach-1")
    }

    function textToCoach2() {
        goto("/coaching/coach-2")
    }

    function textToCoach3() {
        goto("/coaching/coach-3")
    }

    function textToCoach4() {
        goto("/coaching/coach-4")
    }

    function textToCoach5() {
        goto("/coaching/coach-5")
    }

    function textToCoach6() {
        goto("/coaching/coach-6")
    }

    function textToCoach7() {
        goto("/coaching/coach-7")
    }
</script>
<div class="globalBody">
    {#if (popUpSwitch === true)}
        <div class="notifPopUp">
            <NotificationPopUp {togglePopUp}/>
        </div>
    {/if}
    <button class="delete" on:click={toggleDelete}>
        <svg viewBox="0 0 448 512" class="svgIcon">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
        </svg>
    </button>
    <button class="plusButton" on:click={newCoach}>
        <img class="plus" src="/images/plus.png" alt="add">
    </button>
    <div class="notif">
        <Notification {togglePopUp}/>
    </div>
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    <h1>Mes conversations :</h1>
    {#if ($coachStore.coach1 === true)}
        <CoachingHome whatPerson="/coach/coach-1.jpeg" name="Guillaume" date="Aujourd'hui - 13h22" message={message1} textTo={textToCoach1}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach1}>Supprimer</p>
        {/if}
    {/if}
    {#if ($coachStore.coach2 === true)}
        <CoachingHome whatPerson="/coach/coach-2.jpeg" name="Gaël" date="Aujourd'hui - 10h59" message={message2} textTo={textToCoach2}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach2}>Supprimer</p>
        {/if}
    {/if}
    {#if ($coachStore.coach3 === true)}
        <CoachingHome whatPerson="/coach/coach-3.jpeg" name="Éric" date="Aujourd'hui - 8h42" message={message3} textTo={textToCoach3}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach3}>Supprimer</p>
        {/if}
    {/if}
    {#if ($coachStore.coach4 === true)}
        <CoachingHome whatPerson="/coach/coach-4.jpeg" name="Grégory" date="Hier - 11h16" message={message4} textTo={textToCoach4}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach4}>Supprimer</p>
        {/if}
    {/if}
    {#if ($coachStore.coach5 === true)}
        <CoachingHome whatPerson="/coach/coach-5.jpeg" name="Fredryk" date="2 jours - 16h31" message={message5} textTo={textToCoach5}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach5}>Supprimer</p>
        {/if}
    {/if}
    {#if ($coachStore.coach6 === true)}
        <CoachingHome whatPerson="/coach/coach-6.jpeg" name="Jean-Christophe" date="1 sem - 14h02" message={message6} textTo={textToCoach6}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach6}>Supprimer</p>
        {/if}
    {/if}
    {#if ($coachStore.coach7 === true)}
        <CoachingHome whatPerson="/coach/coach-7.jpeg" name="Caroline" date="1 mois - 17h18" message={message7} textTo={textToCoach7}/>
        {#if (deleteSwitch === true)}
            <p class="deleteMessage" on:click={deleteCoach7}>Supprimer</p>
        {/if}
    {/if}
</div>


<div id="navbar">
    <button class="buttonNavbar"><img class="nav" src="/navbar/halteres.png" alt="" on:click={trainingPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/sifllet-blue.png" alt="" on:click={coachingPage}>
    </button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/home.png" alt="" on:click={homePage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/stats.png" alt="" on:click={statisticsPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/profil.png" alt="" on:click={accountPage}></button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .globalBody {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-bottom: 8rem;
        position: relative;
    }

    #navbar {
        background-color: #41C1BA;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 8%;
        position: fixed;
        bottom: 0;
    }

    @media screen and (min-width: 1024px) {
        #navbar {
            width: 375px;
        }

        .globalBody {
            height: 100svh;
        }
    }

    .buttonNavbar {
        width: 20%;
        background-color: #41C1BA;
        border: none;
    }

    .nav {
        width: 50px;
        height: 50px;
    }

    .logo {
        margin-top: 0.5rem;
        width: 20%;
        aspect-ratio: 1;
    }

    h1 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        text-align: center;
        color: #41C1BA;
    }

    .notif {
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
    }

    .notifPopUp {
        display: flex;
        width: 100%;
    }

    .delete, .plusButton {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #41C1BA;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.164);
        position: absolute;
    }

    .delete {
        top: 0.75rem;
        left: 0.75rem;
    }

    .svgIcon {
        width: 12px;
    }

    .svgIcon path {
        fill: white;
    }

    .deleteMessage {
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
        color: #BC1823;
        font-style: italic;
        margin: 0;
    }

    .plusButton {
        position: absolute;
        bottom: 4.5rem;
        right: 1rem;
    }

    .plus {
        width: 12px;
        height: 12px;
    }
</style>