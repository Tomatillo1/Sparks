import {writable} from "svelte/store";

export const loginStore = writable({
    email: "",
    password: "",
    phone: "",
    firstName: "",
    lastName: "",
    birth: "",
    payment: "",
});