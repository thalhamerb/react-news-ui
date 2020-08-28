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
            <p>Also, this app does not have thorough test cases. Just tried to go through different types of test
                cases to understand how to write them</p>
            <p>Uses the new Recoil beta library by Facebook rather than Redux because it will probably become more
                popular due to its ease of use and performance. Some of the functionality that uses Recoil probably could have been
                solved by raising state
            </p>
        </>
    )

}
