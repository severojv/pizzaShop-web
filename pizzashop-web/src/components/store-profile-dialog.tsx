import { getMenagedRestaurant } from "@/api/get-menaged-restaurant";
import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";

const storeProfileSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
    const { data: menagedRestaurant } = useQuery({
        queryKey: ['menaged-restaurant'],
        queryFn: getMenagedRestaurant,
        staleTime:Infinity,
    })


    const { register, handleSubmit, formState: { isSubmitting } } = useForm<StoreProfileSchema>({
        resolver: zodResolver(storeProfileSchema),
        values: {
            name: menagedRestaurant?.name ?? '',
            description: menagedRestaurant?.description ?? " ",
        }
    })

    const { mutateAsync: updateProfileFn } = useMutation({
        mutationFn: updateProfile
    })
    async function handleUpdateProfile(data: StoreProfileSchema) {
        try {
            await updateProfileFn({
                name: data.name,
                description: data.description,

            })
            toast.success('Perfil atualizado com sucesso')
        } catch {
            toast.error('Não foi possivel atualizar perfil')

        }

    }
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>
                    atualize as informações do estabelecimento
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                        <Input className="col-span-3" id="name" {...register('name')} />
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                            Descrição
                        </Label>
                        <Textarea className="col-span-3" id="description" {...register('description')} />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='ghost' type="button">cancelar</Button>
                    </DialogClose>
                    <Button type="submit" variant="sucess" disabled={isSubmitting}>salvar</Button>

                </DialogFooter>
            </form>

        </DialogContent>
    )
}