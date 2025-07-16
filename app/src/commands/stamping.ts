import TelegramBot from "node-telegram-bot-api";
import { traslate } from "../i18n";
import fs from 'node:fs';

export const stamping = (bot: TelegramBot) => {
  bot.onText(/\/stamping/, (msg) => {
    const chatId = msg.chat.id;
    const lang = msg.from.language_code;

    const t = traslate(lang, "stampingNailMaraton");
    const message = `${t.title}\n\n${t.summary}`;

    bot.sendMessage(chatId, message, { parse_mode: "HTML" });
    const buffer = fs.readFileSync("/app/public/images/bot-emperie.jpg");
    bot.sendPhoto(
      chatId,
      buffer,
      {},
      {
        filename: "Cartel_stamping_maraton.jpg",
        contentType: "image/jpeg",
      }
    );
  });
};
