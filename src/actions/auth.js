import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import * as actionTypes from '../constants/actionTypes';

function setMe(user) {
    return {
        type: actionTypes.ME_SET,
        user
    };
}

export function auth() {
    return function (dispatch) {
        SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

        SC.connect().then((session) => {
            fetch(`//api.soundcloud.com/me?oauth_token=${session.oauth_token}`)
                .then((response) => response.json())
                .then((me) => {
                    dispatch(setMe(me));
                });
        });
    };
};
