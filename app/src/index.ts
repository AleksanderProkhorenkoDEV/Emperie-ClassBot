import TelegramBot from "node-telegram-bot-api";
import fs from 'node:fs';

// Verifica que el token esté definido
if (!process.env.TELEGRAM_TOKEN) {
    throw new Error("❌ Falta el token de Telegram. Añádelo en .env");
}

// Inicializa el bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

bot.on("message", (msg) => {
    const lang = msg.from.language_code;
    const name = msg.from.first_name;
    const chatId = msg.chat.id

    const t = traslate(lang, "welcome");

    const message = `${t.title.replace(/{{name}}/g, name)}\n\n${t.description}`;
    bot.sendMessage(chatId,message,{ parse_mode: 'Markdown' })

});

// Manejo de errores
bot.on("polling_error", (error) => {
    console.error(`⚠️ Error en el bot: ${error.message}`);
});

console.log("✅ Bot activo. Usa /start para probar.");

const loadTraslation = (languajeCode: string = 'es') => {
    const filePath = `./lang/${languajeCode}.json`
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
}

const traslate = (languajeCode: string = "es", section: string) => {
    const file = loadTraslation(languajeCode);
    return file[section] as Record<string, string>;
}