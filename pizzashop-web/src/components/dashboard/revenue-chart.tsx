import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import colors from "tailwindcss/colors"

const data = [

    { date: "10/12", revenue: 1200 },
    { date: "11/12", revenue: 800 },
    { date: "12/12", revenue: 400 },
    { date: "13/12", revenue: 2300 },
    { date: "14/12", revenue: 200 },
    { date: "15/12", revenue: 900 },
    { date: "16/12", revenue: 500 },


]

export function RevenueChart() {
    return (

        <Card className="col-span-6">
            <CardHeader className="flex-row itens-center justify-between pb-8">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">
                        Receita no periodo
                    </CardTitle>
                    <CardDescription>Receita diaria no periodo</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
                        <YAxis stroke="#888" axisLine={false} width={80}
                        tickLine={false} tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })} />
                        <CartesianGrid vertical={false} className="stroke-muted"/>
                        <Line type="linear" dataKey="revenue" stroke={colors.violet['500']}/>
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}