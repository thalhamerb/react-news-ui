import React from 'react';
import {useRecoilState} from "recoil";
import {userState} from "../../store";
import {useHistory} from "react-router-dom";
import * as routes from "../../route.constants";
import {STORIES} from "../../route.constants";
import HeaderLink from "../../common/header/HeaderLink";
import InlineDropdown from "../../common/dropdown/InlineDropdown";
import InlineDropdownButton from "../../common/dropdown/InlineDropdownButton";

export default function UserDropdown() {

    const [user, setUser] = useRecoilState(userState);
    const history = useHistory();

    const signOut = () => {
        setUser(null);
        history.push(STORIES);
    }

    return (
        user != null ?
            <InlineDropdown value={`Hi, ${user.firstName}`}>
                <InlineDropdownButton clickFunction={signOut} value="Sign out"/>
            </InlineDropdown>
            :
            <HeaderLink route={routes.SIGN_UP} value="SignUp"/>
    );
}

