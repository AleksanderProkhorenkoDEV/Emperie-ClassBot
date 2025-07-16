import TelegramBot from "node-telegram-bot-api";

export const handlePollingError = (bot: TelegramBot) => {
  bot.on("polling_error", (error) => {
    console.error(`⚠️ Error en el bot: ${error.message}`);
  });
};
