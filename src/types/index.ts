import { Request } from "express";

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RegisterUserReq extends Request {
    body: UserData;
}

export interface AuthRequest extends Request {
    auth: {
        sub: number;
        role: number;
    };
}
