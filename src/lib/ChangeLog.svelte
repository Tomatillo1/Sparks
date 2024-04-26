<script>
    export let textButton;
    export let textChange;
    export let textLink;
    export let link;

    export let whatPage;
    export let error;




</script>
{#if error === true}
    <p class="error">Un nom d'utilisateur ou mot de passe est vide !</p>
{/if}
<div class="globalValidation">
    <button class="buttonRegisterLogin" on:click={whatPage}>{textButton}</button>
    <p class="notRegisterOrAccount">{textChange}</p>
    <a href="{link}">{textLink}</a>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .globalValidation {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        align-items: center;
        margin-top: 2rem;
    }

    .buttonRegisterLogin {
        border-radius: 18px;
        border: 1px solid #41C1BA;
        background-color: #FFFFFF;
        color: #41C1BA;
        font-size: 1.5rem;
        padding: 0.5rem 2rem;
        font-family: Poppins, sans-serif;
    }

    .notRegisterOrAccount {
        color: #41C1BA;
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        text-shadow: 1px 1px 1px #a9cbec;
        margin: 1rem 0 0 0;
    }

    a {
        color: #328DE8;
        font-family: Poppins, sans-serif;
        font-size: 0.65rem;
        font-style: italic;
        padding-left: 0.5rem;
        text-shadow: 1px 1px 1px #a9cbec;
    }

    .error {
        color: red;
        font-style: italic;
        font-family: Poppins, sans-serif;
        font-size: 0.65rem;
        margin: 0.5rem 0 0 0;
    }
</style>