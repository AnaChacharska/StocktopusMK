import axios from 'axios';
import { StockDTO } from "../model/dto/stockDTO.ts";
import config from "../config/config.ts";
import {StockDetailsDTO} from "../model/dto/stockDetailsDTO.ts";
const BASE_URL = config.API_BASE_URL;

interface PaginationParams {
    page: number;
    size: number;
}

export const getItems = async ({ page, size, stockName }: PaginationParams & { stockName?: string }) => {
    try {
        const response = await axios.get<{
            totalElements: number;
            content: StockDTO[];
        }>(`${BASE_URL}/stocks`, {
            params: {
                page,
                size,
                stockName
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching stocks:", error);
        throw error;
    }
};


export const deleteItem = async (id: number) => {
    try {
        const response = await axios.delete(`${BASE_URL}/stocks/${id}`);
        if (response.status !== 200) {
            throw new Error('Failed to delete item');
        }
    }finally {
        console.log()
    }
};

export const editItem = async (id: number, data: StockDTO) => {
    await axios.post(`${BASE_URL}/stocks/edit/${id}`, data);

}

export const getBestFourStocks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/stocks/getBestFour`);
        return response.data;
    } catch (error) {
        console.error("Error fetching the best four stocks:", error);
        throw error;
    }
};

export const getStockById = async (id: number): Promise<StockDTO> => {
    try {
        const response = await axios.get<StockDTO>(`${BASE_URL}/stocks/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching stock with ID ${id}:`, error);
        throw error;
    }
};
export const getMostTradedStocks = async (): Promise<StockDetailsDTO[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/stock-details/getMostTraded`);

        if (Array.isArray(response.data)) {
            return response.data.map((stock: any) => ({
                detailsId: stock.detailsId || 0,
                stockId: stock.stockId || 0,
                stockName: stock.stockName || 'N/A',
                date: stock.date ? new Date(stock.date) : new Date(),
                lastTransactionPrice: stock.lastTransactionPrice?.toString() || '0',
                maxPrice: stock.maxPrice?.toString() || '0',
                minPrice: stock.minPrice?.toString() || '0',
                averagePrice: stock.averagePrice?.toString() || '0',
                percentageChange: stock.percentageChange?.toString() || '0%',
                quantity: stock.quantity?.toString() || '0',
                tradeVolume: stock.tradeVolume?.toString() || '0',
                totalVolume: stock.totalVolume?.toString() || '0',
            }));
        } else {
            console.error('Invalid data format received:', response.data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching most traded stocks:', error);
        return [];
    }
};