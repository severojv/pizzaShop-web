import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { toast } from "sonner"
import { Link, useSearchParams } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { signIn } from "@/api/sign-in"


const SignInForm = z.object({
    email: z.string().email(),
})

type signInFormType = z.infer<typeof SignInForm>

export function SignIn() {
    const [searchParams] = useSearchParams()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<signInFormType>({
        defaultValues: {
            email: searchParams.get("email") ?? '',

        }
    })

    const { mutateAsync: authenticate } = useMutation({
        mutationFn: signIn,
    })
    async function handleSignInSubmit(data: signInFormType) {

        try {

            await authenticate({ email: data.email })
            toast.success("enviado", {
                action: {
                    label: "reenviar",
                    onClick: () => handleSignInSubmit(data)
                },
            })
            console.log(data)

            toast.success("Enviamos um link para seu email")

        } catch {
            toast.error("Credencias invalidas")
        }
    }
    return (
        <>
            <div className="p-8 flex justify-center">
                <Button variant="ghost" asChild className="absolute right-8 top-8 ">
                    <Link to='/sign-up'>
                        novo estabelecimento
                    </Link>
                </Button>
                <div className="flex w-[350px] flex-col justify-center gap-6">
                    <div className=" flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Acessar painel
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Acompanhe suas vendas pelo painel do parceiro!
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignInSubmit)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu e-mail</Label>
                            <Input id="email" type="email" {...register('email')} />

                        </div>
                        <Button className="w-full" type="submit" disabled={isSubmitting}>Acessar painel</Button>
                    </form>
                </div>
            </div>
        </>
    )
}