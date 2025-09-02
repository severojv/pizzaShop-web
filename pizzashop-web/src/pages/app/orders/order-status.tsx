type OrderStatusType = "pending" | "canceled" | "processing" | "delivering" | "delivered"

const OrderStatusMap: Record<OrderStatusType, string> = {
    pending: "pendente",
    canceled: "cancelado",
    delivered: "entregue",
    delivering: "em entrega",
    processing: "em processo",

}
interface OrderStatus {
    status: OrderStatusType
}

export function OrderStatus({ status }: OrderStatus) {
    return (
        <div className="flex items-center gap-2">
            {status === 'pending' && (
                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
            )}
            {status === "canceled" && (
                <span className="h-2 w-2 rounded-full bg-rose-400"></span>
            )}
            {status === "delivered" && (
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            )}
            {['processing', "delivering"].includes(status) && (
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
            )}


            <span className="font-medium text-muted-foreground ">{OrderStatusMap[status]}</span>
        </div>
    )
}