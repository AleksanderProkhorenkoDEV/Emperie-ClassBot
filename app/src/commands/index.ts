import TelegramBot from "node-telegram-bot-api";
import { stamping } from "./stamping/stamping";
import { start } from "./start";

export const setUpBotCommands = (bot: TelegramBot) => {
  start(bot);
  stamping(bot);
};
