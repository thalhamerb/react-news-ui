import React from 'react';
import {useRecoilState} from "recoil";
import {userState} from "../store";
import {Link, useHistory} from "react-router-dom";
import * as routes from "../routes";
import {STORIES} from "../routes";

export default function UserDropdown() {

    const [user, setUser] = useRecoilState(userState);
    const history = useHistory();

    const signOut = () => {
        setUser(null);
        history.push(STORIES);
    }

    return (
        user != null ?
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                    Hi, {user.firstName}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="javascript:void(0);" onClick={signOut}>Sign out</a>
                </div>
            </div>
            :
            <Link className="col-2 text-muted" to={routes.SIGN_UP}>
                SignUp
            </Link>
    );
}

