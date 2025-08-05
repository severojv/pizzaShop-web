import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Search, X } from "lucide-react";

export function OrderTableFilters() {
    return (
        <form className="flex items-center gap-2 ">
            <span className="text-sm font-semibold ">Filtros:</span>
            <input placeholder="Nome do cliente " className=" h-8  w-[320px]" />
            <input placeholder="Id do pedido" className=" h-8  w-[320px]" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos Status</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>

                </SelectContent>
            </Select>

            <Button type='submit' variant='secondary' size='xm'>
                <Search className="h-4 mr-2 " />
                Filtrar resultados
            </Button>

            <Button type='button' variant='outline' size='xm'>
                <X className="h-4 mr-2 " />
                Remover resultados
            </Button>
        </form>
    )
}