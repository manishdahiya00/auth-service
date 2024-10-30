import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";
const startServer = () => {};
try {
    const PORT = Config.PORT;
    app.listen(PORT, () =>
        logger.info("Server listening on port ", { port: PORT }),
    );
} catch (err) {
    console.log(err);
    process.exit(1);
}

startServer();
