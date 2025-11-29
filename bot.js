const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: "JAD_GO.aternos.me",
    port: 56097,
    username: "BOT1",
    version: "1.21.4"
  });

  bot.on("spawn", () => {
    console.log("دخل البوت!");
    setTimeout(() => {
      bot.chat("/login jadoda1212");
    }, 4000);
  });

  bot.on("kicked", console.log);
  bot.on("error", console.log);
  bot.on("end", () => {
    console.log("فُصل البوت… إعادة الاتصال");
    setTimeout(startBot, 5000);
  });
}

startBot();  // ⚠️ مهم جداً!
