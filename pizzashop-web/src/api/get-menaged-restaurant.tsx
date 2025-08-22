import { api } from "@/lib/axios";

interface GetMenagedRestaurant {
    name: string;
    id: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}

export async function getMenagedRestaurant() {

    const response = await api.get<GetMenagedRestaurant>('/managed-restaurant')

    return response.data
}