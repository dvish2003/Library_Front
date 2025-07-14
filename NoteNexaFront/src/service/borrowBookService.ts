import type {BorrowBookForm} from "../models/BorrowBook.ts";
import {apiClient_1} from "./apiClient.ts";

export const saveBorrowBook = async(borrowBook:BorrowBookForm)=>{
    const response = await apiClient_1.post("/booksBorrow/saveBorrowBook",borrowBook);
    console.log("return response data",response.data);
    return response.data;
}