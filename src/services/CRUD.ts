import { userInput } from "@/types/types";
import axios from "axios";

// create a new user
export const createUser = async (userData: userInput) => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, userData);
    return res;
};
