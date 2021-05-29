import React from 'react';
import {useRecoilValue} from "recoil";
import {userState} from "../store";

export default function About() {

    const user = useRecoilValue(userState);
    let userIntro = "";
    if (user != null) {
        userIntro = `Hi, ${user.firstName} ${user.lastName}. `;
    }

    return (
        <>
            <p>{userIntro}</p>
            <p>This app is an exercise in using React. It's primary focus is not making everything look pretty.
                Although I've done my best to do so.</p>
        </>
    )

}
