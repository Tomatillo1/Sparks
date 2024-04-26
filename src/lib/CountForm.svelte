<script>
    import {loginStore} from "$lib/stores/login.store.js";

    function emailChange (e) {
        loginStore.update((old) => ({
            email: e.target.value,
            password: old.password,
            firstName: old.firstName,
            lastName: old.lastName,
            phone: old.phone,
            payment: old.payment,
            birth: old.birth,
        }))
    }

    function passwordChange (e) {
        loginStore.update((old) => ({
            email: old.email,
            password: e.target.value,
            firstName: old.firstName,
            lastName: old.lastName,
            phone: old.phone,
            payment: old.payment,
            birth: old.birth,
        }))
    }

</script>
<div class="globalForm">
    <label for="nameID" class="labelNameID">Email</label>
    <input type="email" class="nameID" name="nameID" placeholder="Email" maxlength="20" on:input={emailChange}>
    <label for="passwordID" class="labelpasswordID">Mot de passe</label>
    <input type="password" class="passwordID" name="passwordID" placeholder="Mot de passe" maxlength="8" on:input={passwordChange}>
    <a href="/forget-password">Mot de passe oublié ?</a>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .globalForm {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 70%;
    }

    .passwordID, .nameID {
        margin-top: 0.25rem;
        border: 2px solid #41C1BA;
        background-color: #41C1BA;
        border-radius: 18px;
        width: 100%;
        padding: 0.25rem 0 0.25rem 0.5rem;
        box-sizing: border-box;
        color: #FFFFFF;
        outline: none;
    }

    .passwordID::placeholder, .nameID::placeholder {
        color: #FFFFFF;
        font-family: Poppins, sans-serif;
        opacity: 0.8;
        font-size: 0.85rem;
    }

    .passwordID:focus, .nameID:focus {
        background-color: #FFFFFF;
        border: 2px solid #41C1BA;
        color: #41C1BA;
    }

    .labelpasswordID {
        margin-top: 0.5rem;
    }

    label {
        font-family: Poppins, sans-serif;
        color: #328DE8;
        padding-left: 0.5rem;
        font-size: 1rem;
        text-shadow: 1px 1px 1px #a9cbec;
    }

    a {
        color: #328DE8;
        font-family: Poppins, sans-serif;
        font-size: 0.85rem;
        font-style: italic;
        padding-left: 0.5rem;
        margin-top: 0.5rem;
        text-shadow: 1px 1px 1px #a9cbec;
    }
</style>