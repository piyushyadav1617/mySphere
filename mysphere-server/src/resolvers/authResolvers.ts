import prisma from "../db/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const loginResolver = async (_: any, { username, password }: { username: string, password: string }) => {
    // Find the user by username
    try {
        const user = await prisma.user.findUnique({
            where: { username }
        })
        if (!user) {
            throw new Error('User not found');
        }

        // Check if the password is correct
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new Error('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign(
            { user_id: user.user_id, username: user.username },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        return {
            token, 
            user: {
                username: user.username,
                user_id: user.user_id,
            }

        };
    } catch (error) {
        console.error(error);

    }
}

export const signupResolver = async (_: any, { email, username, password, full_name }: { email: string, username: string, password: string, full_name: string }) => {
    //check if the username is already taken
    //todo send email and let the user confirm
    try {
        const exists = await prisma.user.findUnique({
            where: { username }

        })
        if (exists) {
            throw new Error("Username already taken");
        }
        //a user with one email can have multiple accounts so no need to check for that
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
                full_name
            }
        })
        //todo:send email to confirm the account and then only let them login

        // Generate JWT token
        const token = jwt.sign(
            { user_id: user.user_id, username: user.username },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        return {
            token,
            user: {
                username: user.username,
                user_id: user.user_id,
            }
        };

    } catch (error: any) {
        console.log(error);
        throw new Error(error);
    }


}