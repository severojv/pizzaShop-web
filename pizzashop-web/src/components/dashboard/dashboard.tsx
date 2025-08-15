import { DayOrdersAmmountCard } from "./day-orders-ammount-card";
import { CanceledAmmountCard } from "./month-canceled-ammount";
import { MonthOrdersAmmountCard } from "./month-orders-ammount-card";
import { MonthRevenueCard } from "./month-revenue-cards";
import { PieCharts } from "./pie-chart";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">DashBoard</h1>
            <div className="grid grid-cols-4 gap-4">
                <MonthRevenueCard />
                <MonthOrdersAmmountCard />
                <DayOrdersAmmountCard/>
                <CanceledAmmountCard/>
            </div>
            <div className="grid grid-cols-9 gap-4">
                <RevenueChart/>
                <PieCharts/>
            </div>
        </div>
    )
}