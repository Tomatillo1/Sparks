import {writable} from "svelte/store";

export const coachStore = writable({
    coach1: true,
    coach2: false,
    coach3: false,
    coach4: true,
    coach5: false,
    coach6: false,
    coach7: true,
});