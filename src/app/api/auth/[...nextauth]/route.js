import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../lib/connectDB";
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
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
            async authorize(credentials) {
                const { emailOrUsername, password } = credentials;
                console.log(emailOrUsername, password);
                if (!emailOrUsername || !password) {
                    return null;
                }
                const db = await connectDB();
                const currentUser = await db
                    .collection("users")
                    .findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] });
                if (!currentUser) {
                    return null;
                }
                console.log(currentUser);
                const passwordMatched = bcrypt.compareSync(password, currentUser.password);
                if (!passwordMatched) {
                    return null;
                }
                return currentUser;
            },
        }),
    ],
    pages: { signIn: "/signin" },
});
export { handler as GET, handler as POST };
