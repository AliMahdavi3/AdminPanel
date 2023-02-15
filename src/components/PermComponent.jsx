import React from 'react'
import { Navigate } from 'react-router-dom';
import { useHasPermissions } from '../hook/permissionsHook'

const PermComponent = ({component, pTitle}) => {

    const hasPerm = useHasPermissions(pTitle);
    return hasPerm ? component : <Navigate to={"/"}/>
}

export default PermComponent