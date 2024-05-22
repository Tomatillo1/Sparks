<script>
    import NotificationPopUp from "$lib/NotificationPopUp.svelte";
    import Notification from "$lib/Notification.svelte";
    import NeuralOrVital from "$lib/NeuralOrVital.svelte";
    import VideoTraining from "$lib/VideoTraining.svelte";
    import {goto} from "$app/navigation";

    let popUpSwitch = false;
    const titleServcice = "Exercices de respiration :";
    const textService = "Retrouvez des vidéos de professionnels et des exercices détaillés pour apprendre à mieux comprendre votre respiration, et  apprendre à bien faire les exercices pour progresser.";
    const video5 = "https://www.youtube.com/watch?v=5tBtaK4fAdA&pp=ygUYZXhlcmNpY2UgZGUgcmVzcGlyYXRpb24g"
    const video6 = "https://www.youtube.com/watch?v=3VrB3r29GlU&pp=ygUYZXhlcmNpY2UgZGUgcmVzcGlyYXRpb24g"
    const video7 = "https://www.youtube.com/watch?v=INwspBJQcIw&pp=ygUYZXhlcmNpY2UgZGUgcmVzcGlyYXRpb24g"
    const video8 = "https://www.youtube.com/watch?v=h-sedNrPI4M&pp=ygUYZXhlcmNpY2UgZGUgcmVzcGlyYXRpb24g"
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
    <img class="logo" src="/Logo-Wise-Vital.png" alt="vital-logo">
    <NeuralOrVital titleService={titleServcice} textService={textService}/>
    <div class="videos">
        <VideoTraining whatVideo="/videos/vital1.png" whatLink={video5}/>
        <VideoTraining whatVideo="/videos/vital2.png" whatLink={video6}/>
        <VideoTraining whatVideo="/videos/vital3.png" whatLink={video7}/>
        <VideoTraining whatVideo="/videos/vital4.png" whatLink={video8}/>
    </div>
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
        left: 0;
        bottom: -8rem;
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
        flex-grow: 1;
        gap: 1rem;
        margin-top: 1rem;
        padding-bottom: 2rem;
    }
</style>