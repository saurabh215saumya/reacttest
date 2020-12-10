import { userConstants } from '../_constants';
import { itemService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const itemActions = {
    // login,
    // logout,
    // register,
    getAll,
    delete: _delete
};



function logout() {
    itemService.logout();
    return { type: userConstants.LOGOUT };
}




function getAll() { console.log("Hello World!")
    return dispatch => {
        dispatch(request());

        itemService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        itemService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}