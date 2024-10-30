import { Response } from "express";
import { RegisterUserReq } from "../types";
import { UserService } from "../services/UserService";
import { NextFunction } from "express-serve-static-core";
import { Logger } from "winston";

export class AuthController {
    constructor(
        private userService: UserService,
        private logger: Logger,
    ) {
        this.userService = userService;
    }
    async register(req: RegisterUserReq, res: Response, next: NextFunction) {
        const { firstName, lastName, email, password } = req.body;
        this.logger.debug("New request to register a user", {
            firstName,
            lastName,
            email,
            password: "*****",
        });
        try {
            const user = await this.userService.create({
                firstName,
                lastName,
                email,
                password,
            });
            this.logger.info("User has been registered", { id: user.id });
            res.status(201).json({ id: user.id });
        } catch (err) {
            next(err);
            return;
        }
    }
}
