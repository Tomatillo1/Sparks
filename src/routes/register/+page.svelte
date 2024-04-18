<script>
    import CountForm from "$lib/CountForm.svelte";
    import ChangeLog from "$lib/ChangeLog.svelte";

</script>

<div class="global-background">
    <img src="/images/wise-logo.png" alt="wise-logo">
    <CountForm/>
    <ChangeLog textButton="S'inscrire" textChange="Déjà un compte ?" textLink="Se connecter" link="/"/>
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