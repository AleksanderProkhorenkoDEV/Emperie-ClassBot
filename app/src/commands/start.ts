import TelegramBot from "node-telegram-bot-api";
import { traslate } from "../i18n";

export const start = (bot: TelegramBot) => {
  bot.onText(/\/start/, (msg) => {
    const lang = msg.from.language_code;
    const name = msg.from.first_name;
    const chatId = msg.chat.id;

    const t = traslate(lang, "welcome");

    const message = `${t.title.replace(/{{name}}/g, name)}\n\n${t.description}`;
    bot.sendMessage(chatId, message, { parse_mode: "HTML" });
  });
};
