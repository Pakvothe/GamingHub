import React from "react";
import { AdminBarLogic } from './SideBarLogic.js'

export const AdminSidebar = () => {


    return (
        <div>
            <h1>GAMINGHUB</h1>
            <AdminBarLogic width={300} height={"100vh"}>
                <h2>Productos</h2>
                <h2>Categorias</h2>
                <h2>Ordenes</h2>
                <h2>Usuarios</h2>
            </AdminBarLogic>
        </div>
    )
};