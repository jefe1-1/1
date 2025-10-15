import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Chọn lệnh bên dưới:", {
    reply_markup: {
      keyboard: [["/1"]],
      resize_keyboard: true,
    },
  });
});

bot.onText(/\/1/, async (msg) => {
  const chatId = msg.chat.id;

  const album = [
    { type: "photo", media: "https://picsum.photos/600/400?image=10" },
    { type: "photo", media: "https://picsum.photos/600/400?image=20" },
    { type: "photo", media: "https://picsum.photos/600/400?image=30" },
    { type: "photo", media: "https://picsum.photos/600/400?image=40" }
  ];

  await bot.sendMediaGroup(chatId, album);
});

console.log("🚀 Bot đang chạy...");
