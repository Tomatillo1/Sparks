<script>
    import CountForm from "$lib/CountForm.svelte";
    import ChangeLog from "$lib/ChangeLog.svelte";
    import {goto} from "$app/navigation";
    import {loginStore} from "$lib/stores/login.store.js";

    let bool1 = false
    function goHome() {
        if ($loginStore.email !== '' && $loginStore.password !== '') {
            goto("/home")
        } else {
            bool1 = true
        }
    }

</script>
<div class="global-background">
    <img src="/images/wise-logo.png" alt="wise-logo">
    <CountForm/>
    <ChangeLog textButton="Connexion" textChange="Pas encore inscrit ?" textLink="S'inscrire" whatPage={goHome} error={bool1} link="/register"/>
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