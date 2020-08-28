import {atom} from "recoil";

export const userState = atom({
    key: "userState",
    default: null
});

export const favoriteStoriesState = atom({
    key: "favoriteStoriesState",
    default: new Map()
})