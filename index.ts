import TelegramBot from "node-telegram-bot-api";

// Verifica que el token esté definido
if (!process.env.TELEGRAM_TOKEN) {
    throw new Error("❌ Falta el token de Telegram. Añádelo en .env");
}

// Inicializa el bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Manejo de errores
bot.on("polling_error", (error) => {
    console.error(`⚠️ Error en el bot: ${error.message}`);
});

console.log("✅ Bot activo. Usa /start para probar.");