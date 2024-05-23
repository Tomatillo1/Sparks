<script>
    import CountForm from "$lib/CountForm.svelte";
    import ChangeLog from "$lib/ChangeLog.svelte";
    import {goto} from "$app/navigation";
    import {loginStore} from "$lib/stores/login.store.js";

    let bool2 = false

    function goAccountForm() {
        if ($loginStore.email !== '' && $loginStore.password !== '') {
            goto("/account/informations")
        } else {
            bool2 = true
        }
    }
</script>

<div class="global-background">
    <img src="/images/wise-logo.png" alt="wise-logo">
    <CountForm/>
    <ChangeLog textButton="S'inscrire" textChange="Déjà un compte ?" textLink="Se connecter" whatPage={goAccountForm} error={bool2} link="/"/>
</div>

<style>
    .global-background {
        background-image: url("/images/background-wise.svg") ;
        width: 100%;
        height: 100svh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 25%;
        aspect-ratio: 1;
        margin-bottom: 3rem;
    }
</style>