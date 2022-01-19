import React, { createContext } from 'react';
import useData from '../hooks/useData';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const AllValue = useData();
    return (
        <AuthContext.Provider value={AllValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;