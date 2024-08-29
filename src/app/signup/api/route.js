import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const db = await connectDB();
    const body = await request.json();
    const { email, password } = body;
    const isExist = await db.collection("users").findOne({ email });
    if (isExist) {
        return NextResponse.json({ message: "user already exists!", status: 400 });
    }
    const hash = bcrypt.hashSync(password, 14);
    await db.collection("users").insertOne({ ...body, password: hash });
    return NextResponse.json({ message: "user created successfully!", status: 200 });
};
