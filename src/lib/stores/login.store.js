import {writable} from "svelte/store";

export const loginStore = writable({
    username: "",
    password: "",
});