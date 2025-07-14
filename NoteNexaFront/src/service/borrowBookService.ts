import type {BorrowBookForm, updateBookForm} from "../models/BorrowBook.ts";
import {apiClient_1} from "./apiClient.ts";

export const saveBorrowBook = async(borrowBook:BorrowBookForm)=>{
    const response = await apiClient_1.post("/booksBorrow/saveBorrowBook",borrowBook);
    console.log("return response data",response.data);
    return response.data;
}
//update use parameter to borrowBook
export const updateBorrowBook = async(borrowBook:BorrowBookForm)=>{
    const response = await apiClient_1.post("/booksBorrow/updateBorrowBook", borrowBook);
    console.log("return response data",response.data);
    return response.data;
}
export const getAllBorrowBook = async()=>{
    const response = await apiClient_1.get("/booksBorrow/getAll");
    console.log("return response data",response.data);
    return response.data;
}
