import TelegramBot from "node-telegram-bot-api";
import { stamping } from "./stamping/stamping";
import { start } from "./start";
import { ayuda } from "./ayuda";

export const setUpBotCommands = (bot: TelegramBot) => {
  start(bot);
  stamping(bot);
  ayuda(bot)
};
