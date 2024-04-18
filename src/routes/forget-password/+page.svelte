<script>
    let bool = false;
    let emailValue = '';
    let boolMail = false

    function sendMail() {
        if (emailValue != '') {
            bool = true;
        } else {
            boolMail = true;
        }
    }

</script>
<div class="global-background">
    {#if bool === false}
        <img src="/images/wise-logo.png" alt="wise-logo">
        <p class="textMail">Entrer l’adresse mail associé avec votre compte et nous vous enverrons un lien pour
            réinitialiser votre mot de passe</p>
        <div class="form">
            <label for="email">Email</label>
            <input type="email" class="email" name="email" bind:value={emailValue}>
            {#if boolMail === true}
                <p class="error">Un email est manquant !</p>
            {/if}
                <button class="continue" on:click={sendMail}>Continuer</button>
        </div>
        <p class="noAccount">Vous n'avez pas de compte ?</p>
        <a href="/register">Inscrivez-vous</a>
    {:else}
        <div class="emailSent">
            <img src="/images/wise-logo.png" alt="wise-logo">
        </div>
        <div class="textsMails">
            <p class="textMailSent">Un mail vous a été envoyé à l’adresse renseignée.</p>
            <a href="/">Se connecter</a>
        </div>
    {/if}

</div>
<style>
    .global-background {
        background-image: url("/images/background-wise.svg");
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
        margin-bottom: 2rem;
    }

    .textMail, .textMailSent {
        color: #328DE8;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        text-shadow: 1px 1px 1px #a9cbec;
        text-align: center;
        margin: 0;
        width: 85%;
    }

    .textMailSent {
        color: #41C1BA;
    }

    .form {
        display: flex;
        flex-direction: column;
        width: 75%;
        margin-top: 1rem;
    }

    .email {
        margin: 0.25rem 0 0 0;
        border: 2px solid #41C1BA;
        background-color: #41C1BA;
        border-radius: 18px;
        padding: 0.25rem 0 0.25rem 0.5rem;
        box-sizing: border-box;
        color: #FFFFFF;
        outline: none;
    }

    .email::placeholder {
        color: #FFFFFF;
        font-family: Poppins, sans-serif;
        opacity: 0.8;
        font-size: 0.65rem;
    }

    .email:focus {
        background-color: #FFFFFF;
        border: 2px solid #41C1BA;
        color: #41C1BA;
    }

    label {
        font-family: Poppins, sans-serif;
        color: #328DE8;
        padding-left: 0.5rem;
        font-size: 0.85rem;
        text-shadow: 1px 1px 1px #a9cbec;
        margin-top: 0.5rem;
    }

    .continue {
        background-color: #FFFFFF;
        border: 2px solid #41C1BA;
        color: #41C1BA;
        border-radius: 18px;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        padding: 0.25rem 0;
        margin-top: 1rem;
    }

    .noAccount {
        color: #41C1BA;
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        text-shadow: 1px 1px 1px #a9cbec;
        margin: 2rem 0 0 0;
    }

    a {
        color: #328DE8;
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
        font-style: italic;
        padding-left: 0.5rem;
        text-shadow: 1px 1px 1px #a9cbec;
        margin-top: 0.25rem;
    }

    .emailSent {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }

    .textsMails {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 55%;

    }

    .error {
        color: red;
        font-style: italic;
        font-family: Poppins, sans-serif;
        font-size: 0.65rem;
        margin: 0.5rem 0 0 0.5rem;
    }
</style>