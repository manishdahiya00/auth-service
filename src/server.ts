import app from "./app";
import { Config } from "./config";
import { AppDataSource } from "./config/data-source";
import logger from "./config/logger";
const startServer = async () => {
    const PORT = Config.PORT;

    try {
        await AppDataSource.initialize();
        logger.info("Database connection established");
        app.listen(PORT, () =>
            logger.info("Server listening on port ", { port: PORT }),
        );
    } catch (err) {
        if (err instanceof Error) {
            logger.error(err.message);
            process.exit(1);
        }
    }
};

startServer();
