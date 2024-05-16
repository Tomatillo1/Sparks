<script>
    import {loginStore} from "$lib/stores/login.store.js";

    let notificationActive = true;
    function toggleButton() {
        notificationActive = !notificationActive;
    }

    let mailRegister = $loginStore.email;
    let passwordRegister = $loginStore.password;
    let phoneValue = $loginStore.phone;
    let firstNameValue = $loginStore.firstName;
    let lastNameValue = $loginStore.lastName;
    let birthValue = $loginStore.birth;
    let paymentValue = $loginStore.payment;

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

    function firstNameChange (e) {
        loginStore.update((old) => ({
            email: old.email,
            password: old.password,
            firstName: e.target.value,
            lastName: old.lastName,
            phone: old.phone,
            payment: old.payment,
            birth: old.birth,
        }))
    }

    function lastNameChange (e) {
        loginStore.update((old) => ({
            email: old.email,
            password: old.password,
            firstName: old.firstName,
            lastName: e.target.value,
            phone: old.phone,
            payment: old.payment,
            birth: old.birth,
        }))
    }

    function phoneChange (e) {
        loginStore.update((old) => ({
            email: old.email,
            password: old.password,
            firstName: old.firstName,
            lastName: old.lastName,
            phone: e.target.value,
            payment: old.payment,
            birth: old.birth,
        }))
    }

    function paymentChange (e) {
        loginStore.update((old) => ({
            email: e.target.value,
            password: old.password,
            firstName: old.firstName,
            lastName: old.lastName,
            phone: old.phone,
            payment: e.target.value,
            birth: old.birth,
        }))
    }

    function birthChange (e) {
        loginStore.update((old) => ({
            email: old.email,
            password: old.password,
            firstName: old.firstName,
            lastName: old.lastName,
            phone: old.phone,
            payment: old.payment,
            birth: e.target.value,
        }))
    }

</script>

<div class="globalInfosForm">
    <label for="telID" class="labelID">Téléphone</label>
    <div class="tel-wrapper">
        <img src="/images/french-flag.png" alt="french-flag">
        <p class="number">+33</p>
        <input type="text" class="telID" name="telID" maxlength="10" placeholder="Téléphone" value={phoneValue} on:input={phoneChange}>
    </div>
    <label for="lastName" class="labelID">Nom<span class="stars">*</span></label>
    <input type="text" class="lastName" name="lastName" placeholder="Nom" maxlength="8" value={lastNameValue} on:input={lastNameChange}>
    <label for="firstName" class="labelID">Prénom<span class="stars">*</span></label>
    <input type="text" class="firstName" name="firstName" placeholder="Prénom" maxlength="8" value={firstNameValue} on:input={firstNameChange}>
    <label for="emailID" class="labelID">Email<span class="stars">*</span></label>
    <input type="email" class="emailID" name="emailID" placeholder="Email" maxlength="20" value={mailRegister} on:input={emailChange}>
    <div class="legalMention">
        <p class="legalMentionText">Votre e-mail sera utilisé pour recevoir des reçus bancaires, et des informations sur les nouvelles informations de Wise. Elle ne sera pas transmise a des entreprises tierces. </p>
    </div>
    <label for="password" class="labelID">Mot de passe<span class="stars">*</span></label>
    <input type="password" class="password" name="password" placeholder="Mot de passe" maxlength="8" value={passwordRegister} on:input={passwordChange}>
    <label for="birthday" class="labelID">Date de naissance<span class="stars">*</span></label>
    <input type="text" class="birthday" name="birthday" placeholder="jj/mm/aaaa" maxlength="10" value={birthValue} on:input={birthChange}>
    <label for="payement" class="labelID">Moyen de paiement</label>
    <input type="password" class="payement" name="payement" placeholder="XXXX XXXX XXXX XXXX" maxlength="20" value={paymentValue} on:input={paymentChange}>
    <div class="notificationSection">
        <p class="notification">Notifications</p>
        <div class={`notificationColor ${notificationActive ? 'notificationColorGreen' : 'notificationColorGray'}`}>
            <button class={`toggleNot ${notificationActive ? 'toggleRight' : 'toggleLeft'}`} on:click={toggleButton}></button>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .tel-wrapper {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 0.5rem;
    }

    .globalInfosForm {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 80%;
        z-index: 1;
    }

    .telID, .lastName, .firstName, .emailID, .payement, .birthday, .password {
        margin-top: 0.25rem;
        border: 2px solid #41C1BA;
        background-color: white;
        border-radius: 18px;
        width: 100%;
        padding: 0.5rem 0 0.25rem 0.5rem;
        box-sizing: border-box;
        color: black;
        outline: none;
    }

    .telID::placeholder, .lastName::placeholder, .firstName::placeholder, .emailID::placeholder, .payement::placeholder, .birthday::placeholder, .password::placeholder {
        color: black;
        font-family: Poppins, sans-serif;
        opacity: 0.3;
        font-size: 0.75rem;
    }

    label {
        font-family: Poppins, sans-serif;
        color: #328DE8;
        padding-left: 0.5rem;
        font-size: 1rem;
        text-shadow: 1px 1px 1px #a9cbec;
        margin-top: 0.35rem;
    }

    .stars {
        color: #41C1BA;
    }

    .number {
        font-family: Poppins, sans-serif;
        color: #328DE8;
        margin: 0;
    }

    .legalMention {
        width: 100%;
        margin: 1rem 0 0 0;
        border-radius: 18px;
        border: 2px solid #41C1BA;
        display: flex;
        text-align: center;
        padding: 0.5rem;
        box-sizing: border-box;
    }

    .legalMentionText {
        color: #328DE8;
        margin: 0;
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
    }

    .notificationSection {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }

    .notification {
        font-family: Poppins, sans-serif;
        color: #328DE8;
        padding-left: 0.5rem;
        font-size: 1rem;
        text-shadow: 1px 1px 1px #a9cbec;
        margin-top: 0.5rem;
    }

    .notificationColor {
        margin-top: 0.75rem;
        width: 40px;
        height: 20px;
        border-radius: 18px;
        position: relative;
    }

    .notificationColorGreen {
        background-color: green;
    }

    .notificationColorGray {
        background-color: #D4D4D4;
    }

    .toggleNot {
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 100px;
        border: none;
    }

    .toggleRight {
        position: absolute;
        right: 0;
    }

    .toggleLeft {
        position: absolute;
        left: 0;
    }

    img {
        width: 5%;
        aspect-ratio: 1;
    }
</style>