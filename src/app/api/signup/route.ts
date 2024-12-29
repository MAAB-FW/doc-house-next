import { userInput } from "@/types/types";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../lib/connectDB";

export const POST = async (request: NextRequest) => {
    const db = await connectDB();
    const body: userInput = await request.json();
    const { email, password, username } = body;
    const isExist = await db.collection("users").findOne({ $or: [{ email }, { username }] });
    if (isExist) {
        return NextResponse.json({ message: "user already exists!", status: 400 });
    }
    const hash = bcrypt.hashSync(password, 14);
    try {
        await db.collection("users").insertOne({ ...body, password: hash });
        return NextResponse.json({ message: "user created successfully!", status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "something went wrong!", status: 500 });
    }
};
