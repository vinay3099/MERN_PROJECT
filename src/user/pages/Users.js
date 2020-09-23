import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
     const USERS = [{id:'u1',name:'Vinnu', image:'/images/2.jpg',places: 3 },
     {id:'u2',name:'Jack',image:'/images/1.jpg',places: 1 },
     {id:'u3',name:'Jhon',image:'/images/3.jpg',places: 2 }

];

    return(
        <UsersList items={USERS}/>

    );
};

export default Users;