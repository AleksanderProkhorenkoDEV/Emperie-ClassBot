import TelegramBot from "node-telegram-bot-api";
import { traslate } from "../../i18n";

export const detallesStamping = (bot: TelegramBot) => {
  bot.onText(/\/detalles/, (msg) => {
    const chatId = msg.chat.id;
    const lang = msg.from.language_code;

    const t = traslate(lang, "stampingDetails");
    const message = `${t.titlePlanning}\n\n${t.summaryPlanning}\n\n${t.titleDinamica}\n\n${t.summaryDinamica}\n\n${t.titleTiempos}\n\n${t.summaryTiempos}`;
    bot.sendMessage(chatId, message, {parse_mode: "HTML"});
  });
};
