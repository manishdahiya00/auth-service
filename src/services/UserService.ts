import { Repository } from "typeorm";
import { User } from "../entity/User";
import { UserData } from "../types";
import createHttpError from "http-errors";

export class UserService {
    constructor(private userRepository: Repository<User>) {}
    async create({ firstName, lastName, email, password }: UserData) {
        try {
            return await this.userRepository.save({
                firstName,
                lastName,
                email,
                password,
            });
            /* eslint-disable @typescript-eslint/no-unused-vars */
        } catch (err) {
            const error = createHttpError(
                500,
                "Failed to save user in the database",
            );
            throw error;
        }
    }
}
