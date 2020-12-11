import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';
import Pagination from 'reactjs-hooks-pagination';

function ItemList() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const [totalRecords, setTotalRecords] = useState(50);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(10)

    useEffect(() => {
        dispatch(userActions.getItemAll(pageLimit));
        //setTotalRecords(users.items.length)
    }, [currentPage]);

    function handleDeleteItem(id) {
        dispatch(user.le);
    }
    function handleSearch(event) {
        alert('search')
        alert(event.target.value)

    }
    
    // function handleItemDetail(id) {
    //     dispatch(userActions.getItemDetails(id));
    // }

    return (
        <div className="col-lg-12 offset-lg-2">
            {/* {JSON.stringify(users.items)} */}
            <h1>Hi {user.firstName}!</h1>
            <p>Item List!!</p>
            <p><input type="text" name="search" onChange={handleSearch} ></input></p>
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
             <Pagination
                        totalRecords={totalRecords}
                        pageLimit={pageLimit}
                        pageRangeDisplayed={1}
                        onChangePage={setCurrentPage}
                    />
                    </ul>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { ItemList };