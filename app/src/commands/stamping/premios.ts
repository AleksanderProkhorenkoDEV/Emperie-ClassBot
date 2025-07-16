import TelegramBot from "node-telegram-bot-api";
import { traslate } from "../../i18n";

export const premiosStamping = (bot: TelegramBot) => {
  bot.onText(/\/premios/, (msg) => {
    const chatId = msg.chat.id;
    const lang = msg.from.language_code;

    const t = traslate(lang, "stampingAwards");
    const message = `${t.title}\n\n${t.summary}`;

    bot.sendMessage(chatId, message, { parse_mode: "HTML" });
  });
};
