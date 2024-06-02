<script>
    import {goto} from "$app/navigation";
    import Notification from "$lib/Notification.svelte";
    import NotificationPopUp from "$lib/NotificationPopUp.svelte";
    import {loginStore} from "$lib/stores/login.store.js";

    let popUpSwitch = false;
    let name = $loginStore.firstName
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
    <img class="backGroundInf" src="/images/design-inferieur-wise.png" alt="">
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    <h1>Bienvenu {name}</h1>
    <div class="today">
        <h2>Aujourd'hui :</h2>
        <div class="feetData">
            <p class="statTitle">Objectif podométrique quotidien</p>
            <div class="allFeetData">
                <p class="feetNumber">8200/10000</p>
                <img class="feet" src="/home/feet.jpg" alt="feet">
                <img class="circle" src="/home/circle.jpg" alt="circle">
            </div>
        </div>
        <div class="feetOthersStats">
            <img class="feetImg" src="/home/water.jpg" alt="water">
            <img class="feetImg" src="/home/calories.jpg" alt="calories">
        </div>
    </div>
    <div class="history">
        <h2>Historique et activités :</h2>
        <div class="podoData">
            <p class="statTitle">Historique podométrique quotidien</p>
            <img class="podoImg" src="/home/pdo.jpg" alt="podo">
        </div>
        <div class="twoStats">
            <div class="heartData">
                <p class="statTitle2">Historique fréquence cardiaque :</p>
                <img class="heartImg" src="/home/heart.jpg" alt="heart">
            </div>
            <div class="nextExe">
                <p class="statTitle2">Exercice suivant :</p>
                <img class="nextExeImg" src="/home/person-work.jpg" alt="person">
                <p class="statTitle3">La posture au travail <br>Niv.3</p>
            </div>
        </div>
        <div class="lastActivity">
            <p class="statTitle">Dernières activités :</p>
            <div class="exo1">
                <img class="exo1Img" src="/home/person-work.jpg" alt="person">
                <p class="statTitle2">La posture au travail <br>Niv.3</p>
            </div>
            <div class="exo2">
                <img class="exo2Img" src="/images/account-stats.jpg" alt="person">
                <p class="statTitle2">Rythme cardiaque <br>Niv.1</p>
            </div>
        </div>
    </div>
</div>

<div id="navbar">
    <button class="buttonNavbar"><img class="nav" src="/navbar/halteres.png" alt="" on:click={trainingPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/sifllet.png" alt="" on:click={coachingPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/home-blue.png" alt="" on:click={homePage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/stats.png" alt="" on:click={statisticsPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/profil.png" alt="" on:click={accountPage}></button>
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

    .nav {
        width: 50px;
        height: 50px;
    }

    .logo {
        margin-top: 0.5rem;
        width: 18%;
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
        position: absolute;
        left: 0;
        z-index: -1;

    }

    .backGroundInf {
        width: 50%;
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

    .notifPopUp {
        display: flex;
        width: 100%;
    }

    h1 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        color: #41C1BA;
    }

    .today, .history {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 80%;
    }

    h2 {
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        color: #41C1BA;
        margin: 0;
    }

    .feetData, .podoData, .lastActivity {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 18px;
        background-color: #41C1BA;
    }

    .lastActivity {
        gap: 1rem;
        padding-bottom: 1rem;
    }

    .feetOthersStats, .allFeetData, .twoStats {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .allFeetData {
        align-items: center;
        gap: 0;
    }

    .feetImg {
        width: calc(50% - 0.5rem);
        aspect-ratio: 1;
        border-radius: 18px;
    }

    .heartData, .nextExe {
        width: calc(50% - 0.5rem);
        border-radius: 18px;
        background-color: #41C1BA;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding-bottom: 0.5rem;
    }

    .nextExe {
        background-color: #328DE8;
    }

    .statTitle, .statTitle2, .statTitle3 {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: white;
        margin: 0.5rem 0 0 0;
        text-align: center;
    }

    .statTitle2 {
        font-size: 0.75rem;
    }

    .statTitle3 {
        font-size: 0.65rem;
    }

    .feetNumber {
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        color: white;
    }

    .feet {
        width: 50px;
        height: 50px;
    }

    .circle {
        width: 100px;
        height: 100px;
    }

    .history {
        margin-top: 1rem;
    }

    .podoImg, .heartImg {
        width: 90%;
        margin-top: 1rem;
    }

    .nextExeImg {
        width: 70%;
        height: 50px;
        object-fit: cover;
        border-radius: 18px;
    }

    .exo1, .exo2 {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 90%;
        gap: 0.5rem;
    }

    .exo1Img, .exo2Img {
        width: 100px;
        height: 50px;
        object-fit: cover;
        border-radius: 18px;
    }
</style>