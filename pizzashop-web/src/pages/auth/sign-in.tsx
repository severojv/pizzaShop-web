import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import {toast} from "sonner"


const SigInForm = z.object({
    email: z.string().email(),
})

type sigInFormType = z.infer<typeof SigInForm>

export function SignIn() {


    const { register, handleSubmit, formState: { isSubmitting }} = useForm<sigInFormType>()


    async function handleSignInSubmit(data: sigInFormType) {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)

        toast.success("Enviamos um link para seu email")

    }
    return (
        <>
            <div className="p-8 flex justify-center">
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