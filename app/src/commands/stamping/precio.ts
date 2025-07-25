import TelegramBot from "node-telegram-bot-api";
import { traslate } from "../../i18n";
import fs from "node:fs";

export const stampingPrince = (bot: TelegramBot) => {
  bot.onText(/\/precio/, (msg) => {
    const chatId = msg.chat.id;
    const lang = msg.from.language_code;

    const t = traslate(lang, "stampingPrice");
    const message = `${t.title}\n\n${t.summary}\n\n${t.details}\n\n${t.stampingDate}\n\n${t.stampingRegister}`;

    bot.sendMessage(chatId, message, { parse_mode: "HTML" });

    const buffer = fs.readFileSync("/app/public/images/qr-bot.png");
    bot.sendPhoto(
      chatId,
      buffer,
      {},
      {
        filename: "QR_Olga_Prokhorenko.jpg",
        contentType: "image/png",
      }
    );
  });
};
