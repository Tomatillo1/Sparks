<script>
import NotificationPopUp from "$lib/NotificationPopUp.svelte";
import Notification from "$lib/Notification.svelte";
import NeuralOrVital from "$lib/NeuralOrVital.svelte";
import VideoTraining from "$lib/VideoTraining.svelte";
import {goto} from "$app/navigation";

let popUpSwitch = false;
const titleServcice = "Exercices posturaux :";
const textService = "Retrouvez des vidéos de professionnels et des exercices détaillés pour apprendre à mieux lire votre corps, et  apprendre à effectuer correctement les mouvements ";
const video1 = "https://youtu.be/wKo3_CHOvuw?si=5HyLUzbwYiJSbdVn"
const video2 = "https://www.youtube.com/watch?v=b09fKBMjMBY&ab_channel=MajorMouvement"
const video3 = "https://youtu.be/I77IMHFjBPA?si=kq81N6XBGnK9wA5o"
const video4 = "https://www.youtube.com/watch?v=14rCYj4nW4M&pp=ygUbZXhlcmNpY2UgcG9zdHVyZSBhdSB0cmF2YWls"
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
</script>

<div class="global-background">
    {#if (popUpSwitch === true)}
        <div class="notifPopUp">
            <NotificationPopUp {togglePopUp}/>
        </div>
    {/if}
    <div class="notif">
        <Notification {togglePopUp}/>
    </div>
    <img class="backGroundSup" src="/images/design-superieur-wise.png" alt="">
    <img class="logo" src="/Logo-wise-neural.png" alt="neural-logo">
    <div class="description">
        <NeuralOrVital titleService={titleServcice} textService={textService}/>
    </div>
    <div class="videos">
        <VideoTraining whatVideo="/videos/neural1.png" whatLink={video1}/>
        <VideoTraining whatVideo="/videos/neural2.png"whatLink={video2}/>
        <VideoTraining whatVideo="/videos/neural3.png" whatLink={video3}/>
        <VideoTraining whatVideo="/videos/neural4.png" whatLink={video4}/>
    </div>
    <h2>Vos vidéos personnalisées</h2>
    <p>Aucune vidéos</p>
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    #navbar {
        background-color: #41C1BA;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 8%;
        position: fixed;
        bottom: 0;
    }

    @media screen and (min-width: 1024px){
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
        width: 30%;
        aspect-ratio: 1;
    }

    .global-background {
        width: 100%;
        height: 100svh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-bottom: 11rem;
    }

    .backGroundSup {
        width: 60%;
        height: 60%;
        position: absolute;
        left: 0;
        z-index: -1;

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

    .videos {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 60%;
        flex-grow: 1;
        gap: 1rem;
        margin-top: 1rem;
    }


    h2 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        color: #41C1BA;
        margin: 0 0 0 0;
    }

    p {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: #41C1BA;
        text-align: center;
        width: 85%;
        margin: 0;
        font-style: italic;
    }
</style>