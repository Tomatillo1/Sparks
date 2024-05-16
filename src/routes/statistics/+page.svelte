<script>
    import {goto} from "$app/navigation";

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

<div id="navbar">
    <button class="buttonNavbar"><img src="/navbar/halteres.png" alt="" on:click={trainingPage}></button>
    <button class="buttonNavbar"><img src="/navbar/sifllet.png" alt="" on:click={coachingPage}></button>
    <button class="buttonNavbar"><img src="/navbar/home.png" alt="" on:click={homePage}></button>
    <button class="buttonNavbar"><img src="/navbar/stats-blue.png" alt="" on:click={statisticsPage}></button>
    <button class="buttonNavbar"><img src="/navbar/profil.png" alt="" on:click={accountPage}></button>
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

    img {
        width: 50px;
        height: 50px;
    }
</style>