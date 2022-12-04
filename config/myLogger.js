import log4js from "log4js";

import * as dotenv from "dotenv";
dotenv.config();

log4js.configure({
  appenders: {
    myLoggerConsole: { type: "console" },
    myLoggerFile: { type: "file", filename: "info.log" },
    myLoggerFile2: { type: "file", filename: "warn.log" },
    myLoggerFile3: { type: "file", filename: "error.log" },
  },
  categories: {
    default: { appenders: ["myLoggerConsole", "myLoggerFile"], level: "trace" },
    consola: { appenders: ["myLoggerConsole"], level: "debug" },
    archivo1: { appenders: ["myLoggerFile"], level: "info" },
    archivo2: { appenders: ["myLoggerFile2"], level: "warn" },
    archivo3: { appenders: ["myLoggerFile3"], level: "error" },
    prod: { appenders: ["myLoggerConsole", "myLoggerFile2"], level: "error" },
  },
});

/** ORDER
 * trace
 * debug
 * info
 * warn
 * error
 * fatal
 */

const logger = log4js.getLogger();
logger.level = process.env.LOGGER_MODE;

export default logger;
