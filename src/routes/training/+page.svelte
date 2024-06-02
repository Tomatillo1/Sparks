<script>
    import { goto } from "$app/navigation";
    import TrainingChoice from "$lib/TrainingChoice.svelte";
    import Notification from "$lib/Notification.svelte";
    import NotificationPopUp from "$lib/NotificationPopUp.svelte";
    import PopupTraining from "$lib/PopupTraining.svelte";
    import {offerStore} from "$lib/stores/offer.store.js";

    const titleService1 = "Exercices posturaux :";
    const titleService2 = "Exercices de respiration :";
    const textService1 = "Découvrez des exercices posturaux et des conseils pour mieux comprendre votre corps, et apprendre à bien réaliser les exercices, pour une performance optimale.";
    const textService2 = "Retrouvez des vidéos de professionnels et des exercices détaillés pour apprendre à mieux comprendre votre respiration, et  apprendre à bien faire les exercices pour progresser.";

    let popUpSwitch = false;
    let trainPopup = false;

    function togglePopUp() {
        popUpSwitch = !popUpSwitch
    }

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

    function trainingNeural() {
        if ($offerStore.offer === 'Vital') {
            trainPopup = true
        } else {
            goto("/training/neural")
        }
    }

    function trainingVital() {
        if ($offerStore.offer === 'Neural') {
            trainPopup = true
        } else {
            goto("/training/vital")
        }
    }

    function closeTrain() {
        trainPopup = false
    }
</script>

<div class="global-background">
    {#if trainPopup === true}
        <div class="popupTrain">
            <PopupTraining {closeTrain}/>
        </div>
    {/if}
    {#if (popUpSwitch === true)}
        <div class="notifPopUp">
            <NotificationPopUp {togglePopUp}/>
        </div>
    {/if}
    <div class="notif">
        <Notification {togglePopUp}/>
    </div>
    <img class="backGroundSup" src="/images/design-superieur-wise.png" alt="">
    <img class="backGroundInf" src="/images/design-inferieur-wise.png" alt="">
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    <TrainingChoice whatImage="/Logo-wise-neural.png" whatTitle={titleService1} whatText={textService1}
                    whatLink={trainingNeural}/>
    <TrainingChoice whatImage="/Logo-Wise-Vital.png" whatTitle={titleService2} whatText={textService2}
                    whatLink={trainingVital}/>
</div>
<div id="navbar">
    <button class="buttonNavbar"><img class="navImage" src="/navbar/halteres-blue.png" alt="" on:click={trainingPage}>
    </button>
    <button class="buttonNavbar"><img class="navImage" src="/navbar/sifllet.png" alt="" on:click={coachingPage}>
    </button>
    <button class="buttonNavbar"><img class="navImage" src="/navbar/home.png" alt="" on:click={homePage}></button>
    <button class="buttonNavbar"><img class="navImage" src="/navbar/stats.png" alt="" on:click={statisticsPage}>
    </button>
    <button class="buttonNavbar"><img class="navImage" src="/navbar/profil.png" alt="" on:click={accountPage}></button>
</div>

<style>
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
    }

    .buttonNavbar {
        width: 20%;
        background-color: #41C1BA;
        border: none;
    }

    .navImage {
        width: 50px;
        height: 50px;
    }

    .logo {
        margin-top: 0.5rem;
        width: 20%;
        aspect-ratio: 1;
    }

    .global-background {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 5rem;
        position: relative;
    }

    .backGroundSup {
        width: 60%;
        height: 60%;
        position: absolute;
        left: 0;
        z-index: -1;

    }

    .backGroundInf {
        width: 50%;
        height: 50%;
        position: absolute;
        left: -1rem;
        bottom: 0;
        z-index: -1;
    }

    .notif {
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
    }

    .notifPopUp, .popupTrain {
        display: flex;
        width: 100%;
    }
</style>