import { Outlet } from "react-router-dom";
import { Pizza } from "lucide-react";
export function AuthLayout() {

    return (
        <div className="grid min-h-screen grid-cols-2 antialiased">
            <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
                <div className="flex itens-center gap-3 text-lg text-foreground">
                    <Pizza className="h-5 w-5" />
                    <span className="font-semibold">pizza.shop</span>
                </div>
                <footer className="text-sm">
                    Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
                </footer>
            </div>

            <div className="flex flex-col itens-center justify-center relative">
                <Outlet />
            </div>
        </div>
    )
}