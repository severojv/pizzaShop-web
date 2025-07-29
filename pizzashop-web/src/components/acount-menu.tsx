import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";

export function AccountMenu(){

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant='outline'
                    className="flex select-none items-center gap-2"
                >
                    Pizza Shop
                    <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>JOey</span>
                    <span className="text-xs font-normal text-muted-foreground"
                    >diego@rocktseat</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                    <DropdownMenuItem>
                        <Building className="mr-2 h-4 w-4"/>
                        <span>Perfil da loja</span>
                    </DropdownMenuItem>
                     <DropdownMenuItem>
                        <LogOut className="text-rose-500 dark:text-rose-400"/>
                        <span>Sair</span>
                    </DropdownMenuItem>
            </DropdownMenuContent>
        
        </DropdownMenu>


    )
}