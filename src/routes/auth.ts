import express, {
    NextFunction,
    Request,
    RequestHandler,
    Response,
} from "express";
import { AuthController } from "../controllers/AuthController";
import { UserService } from "../services/UserService";
import { AppDataSource } from "../config/data-source";
import { User } from "../entity/User";
import logger from "../config/logger";
import registerValidator from "../validators/register-validator";
import { TokenService } from "../services/TokemService";
import { RefreshToken } from "../entity/RefreshToken";
import loginValidator from "../validators/login-validator";
import { CredentialService } from "../services/CredentialService";
import authenticate from "../middlewares/authenticate";
import { AuthRequest } from "../types";

const router = express.Router();
const userRepository = AppDataSource.getRepository(User);
const refreshTokenRepository = AppDataSource.getRepository(RefreshToken);
const userService = new UserService(userRepository);
const tokenService = new TokenService(refreshTokenRepository);
const credentialService = new CredentialService();
const authController = new AuthController(
    userService,
    logger,
    tokenService,
    credentialService,
);

// Register route
router.post(
    "/register",
    registerValidator,
    (req: Request, res: Response, next: NextFunction) => {
        authController.register(req, res, next);
    },
);

// Login route
router.post(
    "/login",
    loginValidator,
    (req: Request, res: Response, next: NextFunction) => {
        authController.login(req, res, next);
    },
);

// Self route
router.get(
    "/self",
    authenticate as RequestHandler,
    (req: Request, res: Response) => {
        authController.self(req as AuthRequest, res);
    },
);

export default router;
