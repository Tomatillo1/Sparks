<script>
    import { goto } from "$app/navigation";
    import Notification from "$lib/Notification.svelte";
    import NotificationPopUp from "$lib/NotificationPopUp.svelte";
    import { loginStore } from "$lib/stores/login.store.js";
    import { offerStore } from "$lib/stores/offer.store.js";

    let popUpSwitch = false;
    let offer = $offerStore.offer
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
    <div class="historyPodo">
        <h2>Historique podométrique :</h2>
        {#if (offer != 'Neural')}
            <div class="podoData">
                <p class="statTitle">Historique podométrique quotidien</p>
                <img class="podoImg" src="/home/pdo.jpg" alt="podo">
            </div>
            <div class="feetNumber">
                <p class="statTitle">Nombre de pas</p>
                <p class="statBig">10348 pas</p>
            </div>
        {/if}
        {#if (offer != 'Vital')}
            <div class="stat1And2">
                <div class="stat">
                    <p class="statTitle2">Vitesse de marche :</p>
                    <p class="statBig2">3,7km/h</p>
                </div>
                <div class="stat">
                    <p class="statTitle2">Étages montés :</p>
                    <p class="statBig2">6 étages</p>
                </div>
            </div>
            <div class="stat3And4">
                <div class="stat">
                    <p class="statTitle2">Irrégularité de la marche :</p>
                    <p class="statBig2">12%</p>
                    <p class="statTitle3">Correct</p>
                </div>
                <div class="stat">
                    <p class="statTitle2">Temps de double-appui :</p>
                    <p class="statBig2">30,2%</p>
                    <p class="statTitle3">Correct</p>
                </div>
            </div>
        {/if}
    </div>
    {#if (offer != 'Neural')}
        <div class="historyHeart">
            <h2>Historique cardiaque :</h2>
            <div class="heartData">
                <p class="statTitle">Historique cardiaque quotidien</p>
                <img class="heartImg" src="/home/heart.jpg" alt="heart">
            </div>
            <div class="sleepNumber">
                <p class="statTitle">Apnée du sommeil</p>
                <p class="statBig">À surveiller</p>
            </div>
        </div>
        <h2 class="waterTitle">Hydratation :</h2>
        <div class="historyWater">
            <img class="waterImg" src="/home/water.jpg" alt="water">
            <div class="waterData">
                <p class="statTitle">7 derniers jours</p>
                <p class="statTitle2">6/7 atteints</p>
            </div>
        </div>
    {/if}
    <div class="wiseAndYou">
        <h2>WISE & Vous :</h2>
        {#if (offer != 'Neural')}
            <div class="stat1And2">
                <div class="stat2">
                    <p class="statTitle2">Nombre d’exercices réalisés :</p>
                    <p class="statBig2">34</p>
                </div>
                <div class="stat2">
                    <p class="statTitle2">Nombre d’heures effectués</p>
                    <p class="statBig2">27</p>
                </div>
            </div>
            <div class="caloNumber">
                <p class="statTitle">Nombre de calories dépensés</p>
                <p class="statBig">23400 calories</p>
            </div>
        {/if}
        <div class="stat3And4">
            {#if (offer != 'Neural')}
                <div class="stat2">
                    <p class="statTitle2">Niveau exercice Wise Vital</p>
                    <p class="statBig2">4</p>
                </div>
            {/if}
            {#if (offer != 'Vital')}
                <div class="stat">
                    <p class="statTitle2">Niveau exercice Wise Neural</p>
                    <p class="statBig2">6</p>
                </div>
            {/if}
        </div>
        <p class="startCount statTitle2">Début de votre programme : 9 octobre 2023</p>
    </div>
    <h2 class="bilan">Vos bilans personnalisés</h2>
    <p class="bilanText">Aucun bilan personnalisés</p>
</div>

<div id="navbar">
    <button class="buttonNavbar"><img class="nav" src="/navbar/halteres.png" alt="" on:click={trainingPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/sifllet.png" alt="" on:click={coachingPage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/home.png" alt="" on:click={homePage}></button>
    <button class="buttonNavbar"><img class="nav" src="/navbar/stats-blue.png" alt="" on:click={statisticsPage}>
    </button>
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

    @media screen and (min-width: 1024px) {
        .backGroundInf {
            left: 0;
        }
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

    .historyPodo, .historyHeart, .wiseAndYou {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 80%;
        margin-top: 1rem;
    }

    .historyWater {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 80%;
        margin-top: 1rem;
        justify-content: center;
        background-color: #41C1BA;
        border-radius: 18px;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    h2 {
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        color: #41C1BA;
        margin: 0;
        text-align: center;
    }

    .podoData, .feetNumber, .sleepNumber, .heartData, .caloNumber {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 18px;
        background-color: #41C1BA;
        padding-bottom: 0.5rem;
    }

    .statTitle, .statBig, .statTitle2, .statTitle3, .statBig2 {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: white;
        margin: 0.5rem 0 0 0;
        text-align: center;
    }

    .statBig {
        font-size: 2rem;
        margin: 0;
    }

    .statBig2 {
        font-size: 1.5rem;
        margin: 0;
    }

    .statTitle2 {
        font-size: 0.75rem;
        margin: 0;
    }

    .statTitle3 {
        font-size: 0.65rem;
        font-style: italic;
        margin: 0;
    }

    .podoImg, .heartImg {
        width: 90%;
        margin-top: 1rem;
    }

    .bilan {
        margin-top: 1rem;
    }

    .bilanText {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: #41C1BA;
        margin: 0;
        text-align: center;
        font-style: italic;
    }

    .stat1And2, .stat3And4 {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .stat, .stat2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #328DE8;
        width: calc(50% - 0.5rem);
        gap: 0.25rem;
        padding: 1rem 0;
        border-radius: 18px;
    }

    .stat2 {
        background-color: #41C1BA;
    }

    .startCount {
        background-color: #41C1BA;
        padding: 0.25rem;
        border-radius: 18px;
    }

    .waterData {
        width: calc(50% - 0.5rem);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: center;
    }

    .waterImg {
        width: calc(50% - 0.5rem);
    }

    .waterTitle {
        margin-top: 1rem;
    }
</style>