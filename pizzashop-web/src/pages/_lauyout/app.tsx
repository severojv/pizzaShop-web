import { Outlet } from "react-router-dom";

export function AppLayout(){

    return (
        <div>
            <div>cabecalho</div>
            <Outlet/>
        </div>
    )   
}