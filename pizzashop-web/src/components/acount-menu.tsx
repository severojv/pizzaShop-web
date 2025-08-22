import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSubContent, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getMenagedRestaurant } from "@/api/get-menaged-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";

export function AccountMenu() {
    const { data: profile, isLoading: isloadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
    })
    const { data: menagedRestaurant, isLoading: isLoadingMenagedRestaurant } = useQuery({
        queryKey: ['menaged-restaurant'],
        queryFn: getMenagedRestaurant,
        staleTime: Infinity,

    })
    return (
        <Dialog >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='outline'
                        className="flex select-none items-center gap-2"
                    >
                        {isLoadingMenagedRestaurant ? (
                            <Skeleton className="h-4 w-40" />
                        ) : menagedRestaurant?.name
                        }
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger >
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        <span>{profile?.name}</span>
                        <span className="text-xs font-normal text-muted-foreground"
                        >{profile?.email}</span>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild>

                        <DropdownMenuItem>
                            <Building className="mr-2 h-4 w-4" />
                            <span>Perfil da loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem>
                        <LogOut className="text-rose-500 dark:text-rose-400" />
                        <span>Sair</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>

            </DropdownMenu>

            <StoreProfileDialog />
        </Dialog>


    )
}