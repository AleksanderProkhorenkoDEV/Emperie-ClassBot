import { handlePollingError } from "./commands/errors/polling_error";
import TelegramBot from "node-telegram-bot-api";
import { setUpBotCommands } from "./commands";

if (!process.env.TELEGRAM_TOKEN) {
  throw new Error("❌ Falta el token de Telegram. Añádelo en .env");
}

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

setUpBotCommands(bot);
handlePollingError(bot)