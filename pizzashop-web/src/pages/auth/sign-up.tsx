import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from "sonner"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { registerRestaurant } from "@/api/register-restaurant"

const SignUpForm = z.object({
    email: z.string().email(),
    restaurantName: z.string(),
    managerName: z.string(),
    phone: z.string(),

})

type signUpFormType = z.infer<typeof SignUpForm>

export function SignUp() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<signUpFormType>()

    const { mutateAsync: registerRestaurantFn } = useMutation({
        mutationFn: registerRestaurant,
    })
    async function handleSignUpSubmit(data: signUpFormType) {

        try {

            await registerRestaurantFn({
                managerName: data.managerName,
                restaurantName: data.restaurantName,
                email: data.email,
                phone: data.phone,
            })

            toast.success("Restaurante cadastrado com sucesso", {
                action: {
                    label: "Login",
                    onClick: () => navigate(`/sign-in?email=${data.email}`),
                },
            })
            console.log(data)

        } catch {
            toast.error("Erro ao cadastrar restaurante")
        }
    }
    return (
        <>
            <div className="p-8 flex justify-center">
                <Button variant='ghost' asChild className="absolute right-8 top-8 ">
                    <Link to='/sign-in'>
                        Fazer Login
                    </Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className=" flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Criar conta gratis
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Seja um parceiro e começe suas vendas
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUpSubmit)}>
                        <div className="space-y-2">
                            <Label htmlFor="restaurantName">Nome do Restaurante</Label>
                            <Input id="restaurantName" type="text" {...register('restaurantName')} />

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="managerName">Seu Nome</Label>
                            <Input id="managerName" type="text" {...register('managerName')} />

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Seu telefone</Label>
                            <Input id="phone" type="tel" {...register('phone')} />

                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />

                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>Finalizar cadastro</Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, voce concorda com nossos {' '}
                            <a href="" className="underline underline-offset-4">termos de serviçoes</a>{' '} e {' '}
                            <a href="" className="underline underline-offset-4">politicas de privacidade.</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}