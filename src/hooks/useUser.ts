// import { useState } from 'react';

export interface User {
    id: string;
    username: string;
    email: string;
    role: [string];
}

// export const useUser = () => {
//     const {user, setUser} = useContext(AuthContext);
    

//     const addUser = (user: User) => {
//         setUser(user);
//     };

//     const removeUser = () => {
//         setUser(null);
//     };

//     return { user, addUser, removeUser };
// };