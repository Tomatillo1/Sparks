<script>
    import InformationsForm from "$lib/InformationsForm.svelte";
    import {goto} from "$app/navigation";
    import {loginStore} from "$lib/stores/login.store.js";
    import {offerStore} from "$lib/stores/offer.store.js";
    import Loading from "$lib/Loading.svelte";

    let error = false;
    let load = false

    function validate() {
        if ($loginStore.email === '' || $loginStore.password === '' || $loginStore.firstName === '' || $loginStore.lastName === '' || $loginStore.birth === '') {
            error = true;
        } else if ($offerStore.offer === 'Aucune') {
            load = true;
            setTimeout(saveAndOffer, 1000)
        } else {
            load = true;
            setTimeout(save, 1000)
        }
    }

    function save() {
        goto("/account")
    }

    function saveAndOffer() {
        goto("/account/pricing")
    }
</script>

<div class="global-background">
    {#if (load === true)}
        <div class="loadPop">
            <Loading/>
        </div>
    {/if}
    <img class="backGroundSup" src="/images/design-superieur-wise.png" alt="">
    <img class="backGroundInf" src="/images/design-inferieur-wise.png" alt="">
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    <InformationsForm/>
    {#if error === true}
        <p class="error">Un des champs requis est vide !</p>
    {/if}
    <button class="validate" on:click={validate}>Valider</button>
</div>

<style>
    .global-background {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
        position: relative;
    }

    .logo {
        margin-top: 0.5rem;
        width: 15%;
        aspect-ratio: 1;
    }

    .validate {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        background-color: #41C1BA;
        color: #FFFFFF;
        border: none;
        margin: 0;
        padding: 0.5rem 2rem;
        border-radius: 18px;
    }

    .error {
        color: red;
        font-style: italic;
        font-family: Poppins, sans-serif;
        font-size: 0.65rem;
        margin: 0 0 1rem 0;
    }

    .backGroundSup {
        width: 60%;
        height: 60%;
        position: absolute;
        left: 0;

    }

    .backGroundInf {
        width: 50%;
        height: 50%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: -1;
    }

    @media screen and (min-width: 1024px) {
        .backGroundSup {
            z-index: -1;
        }
    }

    .loadPop {
        display: flex;
        width: 100%;
    }
</style>