import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

interface paginationProps {
    totalCount: number;
    pageIndex: number,
    perPage: number,
}


export function Pagination({ totalCount, pageIndex, perPage }: paginationProps) {
    const pages = Math.ceil(totalCount / perPage);

    return (
        <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
                Total de {totalCount} de item(s)
            </span>

            <div className="flex items-center gap-6 lg:gap-6">
                <div className="text-sm font-medium">
                    Pagina {pageIndex + 1} de {pages}
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ChevronsLeft className="h-4 w-4 " />
                        <span className="sr-only">Primeira pagina</span>
                    </Button>

                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ChevronLeft className="h-4 w-4 " />
                        <span className="sr-only">Primeira anterior</span>
                    </Button>

                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ChevronRight className="h-4 w-4 " />
                        <span className="sr-only">proxima pagina</span>
                    </Button>

                    <Button variant="outline" className="h-8 w-8 p-0">
                        <ChevronsRight className="h-4 w-4 " />
                        <span className="sr-only">ultima pagina</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}