import { Home, Pizza, Tally1, UtensilsCrossed } from "lucide-react";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-togle";
import { AccountMenu } from "./acount-menu";

export function Header() {

    return (
        <div className="border-b mt-5">
            <div className="flex h-16 itens-center gap-6  px-6">
                <Pizza className="h-6 w-6" />

                <Tally1 className="h-6" />

                <nav className="flex itens-center space-x-4 lg:space-x-6">
                    <NavLink to='/'>
                        <Home className="h-4 w-4" />
                        Inicio
                    </NavLink>

                    <NavLink to='/orders'>
                        <UtensilsCrossed className="h-4 w-4" />
                        Pedidos
                    </NavLink>
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <ThemeToggle/>
                    <AccountMenu/>
                </div>
            </div>


        </div>
    )
}