import {writable} from "svelte/store";

export const loginStore = writable({
    email: "totofarkas@gmail.com",
    password: "1234",
    phone: "",
    firstName: "Thomas",
    lastName: "Farkas",
    birth: "11/05/2003",
    payment: "",
});