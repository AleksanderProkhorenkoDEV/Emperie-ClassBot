import TelegramBot from "node-telegram-bot-api";
import { traslate } from "./i18n";
import fs from "node:fs";

// Verifica que el token esté definido
if (!process.env.TELEGRAM_TOKEN) {
  throw new Error("❌ Falta el token de Telegram. Añádelo en .env");
}

// Inicializa el bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const lang = msg.from.language_code;
  const name = msg.from.first_name;
  const chatId = msg.chat.id;

  const t = traslate(lang, "welcome");

  const message = `${t.title.replace(/{{name}}/g, name)}\n\n${t.description}`;
  bot.sendMessage(chatId, message, { parse_mode: "HTML" });
});

bot.onText(/\/cursos/, (msg) => {
  const chatId = msg.chat.id;
  const lang = msg.from.language_code;

  const t = traslate(lang, "stampingNailMaraton");
  const message = `${t.title}\n\n${t.summary}`;

  bot.sendMessage(chatId, message, { parse_mode: "HTML" });
  bot.sendPhoto(chatId, "https://res.cloudinary.com/dvrcz4v6x/image/upload/v1752599470/bot-emperie_kpa5ni.jpg");
});

// Manejo de errores
bot.on("polling_error", (error) => {
  console.error(`⚠️ Error en el bot: ${error.message}`);
});

console.log("✅ Bot activo. Usa /start para probar.");
