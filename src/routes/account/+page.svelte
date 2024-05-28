<script>
    import {goto} from "$app/navigation";
    import Notification from "$lib/Notification.svelte";
    import NotificationPopUp from "$lib/NotificationPopUp.svelte";
    import {loginStore} from "$lib/stores/login.store.js";
    import Loading from "$lib/Loading.svelte";

    let popUpSwitch = false;
    let avatar, fileinput;
    let pseudo = "Thomas";
    let firstName = $loginStore.firstName;
    let load = false;

    const onFileSelected = (e) => {
        let image = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = e => {
            avatar = e.target.result
        };
    }

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

    function pricing() {
        goto("/account/pricing")
    }

    function informationAccount() {
        goto("/account/informations")
    }

    function logout() {
        load = true;
        setTimeout(goLogout, 1000)
    }

    function goLogout() {
        goto("/")
    }
</script>

{#if (load === true)}
    <div class="loadPop">
        <Loading/>
    </div>
{/if}

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
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    {#if avatar}
        <img class="avatar" src="{avatar}" alt="avatar"/>
    {:else}
        <img class="avatar" src="/navbar/profil-blue.png" alt="profile-none"/>
    {/if}
    <div class="chan" on:click={()=>{fileinput.click();}}>Changer</div>
    <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)}
           bind:this={fileinput}>
    {#if (firstName === '')}
        <p class="pseudo">Bienvenue {pseudo} !</p>
    {:else}
        <p class="pseudo">Bienvenue {firstName} !</p>
    {/if}
    <button class="myInformations" on:click={informationAccount}>Mes données</button>
    <button class="featuresChange" on:click={pricing}><img class="buttonImg" src="/images/crown.png">Changer de forfait</button>
    <div class="twoStats">
        <div class="stat1">
            <p class="statTitle">Exercices effectués</p>
            <p class="statText">11</p>
        </div>
        <div class="stat2">
            <p class="statTitle">Durée totale (min)</p>
            <p class="statText">137</p>
        </div>
    </div>
    <div class="globalStats">
        <img class="moreStats" src="/images/plus.png" on:click={statisticsPage}>
        <h1 class="globalStatsTitle">Dernier exercice</h1>
        <div class="profilStats">
            <img class="profilImg" src="/images/account-stats.jpg">
            <div class="lastExo">
                <p class="lastExoTitle">Rythme cardiaque</p>
                <p class="lastExoTitle">Niv.2</p>
                <div class="dateAndTime">
                    <div class="date">
                        <p class="styleDate">Date :</p>
                        <p class="styleDate">11 avr 2024</p>
                    </div>
                    <div class="time">
                        <p class="styleTime">Temps :</p>
                        <p class="styleTime">25 min</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="logoutButton" on:click={logout}><img class="buttonImg" src="/images/logout.png">Se déconnecter</button>
</div>
<div id="navbar">
    <button class="buttonNavbar"><img class="imgNav" src="/navbar/halteres.png" alt="" on:click={trainingPage}></button>
    <button class="buttonNavbar"><img class="imgNav" src="/navbar/sifllet.png" alt="" on:click={coachingPage}></button>
    <button class="buttonNavbar"><img class="imgNav" src="/navbar/home.png" alt="" on:click={homePage}></button>
    <button class="buttonNavbar"><img class="imgNav" src="/navbar/stats.png" alt="" on:click={statisticsPage}></button>
    <button class="buttonNavbar"><img class="imgNav" src="/navbar/profil-blue.png" alt="" on:click={accountPage}>
    </button>
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

    .imgNav {
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
        position: relative;
        padding-bottom: 5rem;
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

    .chan {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: white;
        background-color: #328DE8;
        border-radius: 18px;
        margin-top: 0.5rem;
        padding: 0.25rem 0.5rem;
    }

    .avatar {
        display: flex;
        width: 100px;
        height: 100px;
        border: 1px solid #328DE8;
        border-radius: 100px;
        object-fit: cover;
        margin-top: 1rem;
    }

    .pseudo {
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        color: #328DE8;
        margin: 1rem 0 0 0;
    }

    .featuresChange, .myInformations, .logoutButton {
        width: 80%;
        text-align: center;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: #FFFFFF;
        margin: 0.75rem 0 0 0;
        padding: 0.25rem 0;
        border: none;
        border-radius: 18px;
        position: relative;
    }

    .featuresChange {
        background-color: #EEBA2B;
    }

    .myInformations {
        background-color: #41C1BA;
    }

    .logoutButton {
        background-color: #BC1823;
        margin-top: 1.5rem;
    }

    .buttonImg {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 1.25rem;
        top: 6px;
    }

    .twoStats {
        display: flex;
        flex-direction: row;
        width: 80%;
        margin-top: 1.5rem;
        gap: 1rem;
    }

    .stat1, .stat2 {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 1rem;
    }

    .statTitle, .statText {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: #328DE8;
        margin: 0;
        text-align: center;
    }

    .statText {
        font-weight: bold;
        font-size: 1.25rem;
    }

    .globalStats {
        width: 80%;
        background-color: #41C1BA;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.5rem 1rem 0.5rem;
        position: relative;
        gap: 0.5rem;
        border-radius: 18px;
        margin-top: 1.5rem;
    }

    .globalStatsTitle {
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        color: white;
        margin: 0;
    }

    .profilStats {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }

    .profilImg {
        width: 80px;
        height: 80px;
        border-radius: 18px;
    }

    .lastExo {
        display: flex;
        flex-direction: column;
    }

    .lastExoTitle {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: white;
        margin: 0;
        text-align: center;
    }

    .dateAndTime {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 0.25rem;
    }

    .date, .time {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }

    .date {
        border-right: 1px solid white;
    }

    .styleDate, .styleTime {
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
        color: white;
        margin: 0;
        text-align: center;
    }

    .moreStats {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
    }

    .loadPop {
        display: flex;
        width: 100%;
    }
</style>