import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: fdh94ry93fs98e</DialogTitle>
                <DialogDescription>Detalhes do pedido</DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>

                    <TableBody>
                        <TableRow>

                            <TableCell className="text-muted-foreground ">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="font-medium text-muted-foreground ">Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>

                            <TableCell>Cliente</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-muted-foreground ">Joey</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>

                            <TableCell>Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-muted-foreground ">(48) 9999-9999</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>

                            <TableCell>E-mail</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-muted-foreground ">severojv31@gmail.com</span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>

                            <TableCell>Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-muted-foreground ">3 minutos</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>

                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qnt.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Pizza Peperoni Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69.90</TableCell>
                            <TableCell className="text-right">R$ 139,80</TableCell>

                        </TableRow>
                        <TableRow>
                            <TableCell>Pizza Mussarela Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 59.90</TableCell>
                            <TableCell className="text-right">R$ 119,80</TableCell>

                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do Pedido</TableCell>
                            <TableCell className="text-right font-medium">R$ 259,60</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>


        </DialogContent>

    )
}