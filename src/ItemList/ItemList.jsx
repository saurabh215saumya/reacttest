import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

function ItemList() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getItemAll());
    }, []);

    function handleDeleteItem(id) {
        dispatch(userActions.deleteItem(id));
    }

    // function handleItemDetail(id) {
    //     dispatch(userActions.getItemDetails(id));
    // }

    return (
        <div className="col-lg-12 offset-lg-2">
            {/* {JSON.stringify(users.items)} */}
            <h1>Hi {user.firstName}!</h1>
            <p>Item List!!</p>
            <ul>
            { users  && users.items && users.items.map((user, index) =>
            <div>
                <table border="1px">
                    <tr>
                        <td id={user.id}>{user.title}</td>
                        <td>{
                                user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteItem(user.id)} className="text-primary">Delete</a></span>
                            }</td>
                            {/* <a onClick={() => handleItemDetail(user.id)} className="text-primary">Detail</a> */}
                    </tr>
                </table>
            </div>
                    )} 
            
                    </ul>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { ItemList };