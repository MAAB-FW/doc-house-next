import bcrypt from "bcrypt";
import NextAuth, { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../lib/connectDB";

type Credentials = {
    email: string;
    password: string;
};

const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials: Credentials | undefined): Promise<User | null> {
                try {
                    if (!credentials) {
                        return null;
                    }
                    const { email, password } = credentials;
                    if (!email || !password) {
                        return null;
                    }
                    const db = await connectDB();
                    const currentUser = await db.collection("users").findOne({ $or: [{ email: email }, { username: email }] });
                    if (!currentUser) {
                        return null;
                    }
                    console.log(currentUser);
                    const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                    if (!passwordMatched) {
                        return null;
                    }
                    return currentUser;
                } catch (error) {
                    return null;
                }
            },
        }),
    ],
    pages: { signIn: "/signin" },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
