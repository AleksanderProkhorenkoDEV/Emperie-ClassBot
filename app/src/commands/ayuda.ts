import TelegramBot from "node-telegram-bot-api";
import { traslate } from "../i18n";

export const ayuda = (bot: TelegramBot) => {
  bot.onText(/\/ayuda/, (msg) => {
    const chatId = msg.chat.id;
    const lang = msg.from.language_code;

    const t = traslate(lang, "help");
    const message = `${t.title}\n\n${t.description}`;

    bot.sendMessage(chatId, message, { parse_mode: "HTML" });
  });
};
