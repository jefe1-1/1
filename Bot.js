import TelegramBot from "node-telegram-bot-api";

const token = "8379557762:AAHlu0CnL4k9tsa_qAPya-0A-3mek2EKp6A";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text?.toLowerCase() || "";

  if (text === "/1") {
    bot.sendMediaGroup(chatId, [
      { type: "photo", media: "https://picsum.photos/200/300?random=1" },
      { type: "photo", media: "https://picsum.photos/200/300?random=2" },
      { type: "photo", media: "https://picsum.photos/200/300?random=3" },
      { type: "photo", media: "https://picsum.photos/200/300?random=4" }
    ]);
  } else {
    bot.sendMessage(chatId, `Bạn vừa gửi: ${msg.text}`);
  }
});

console.log("🚀 Bot đang chạy...");
