// باز و بسته شدن چت
const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");
chatIcon.addEventListener("click", () => {
  chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
});

// پاسخ‌های ساده
const responses = {
  "لنت": "برای BMW و Benz برند Bosch و Brembo موجود داریم.",
  "فیلتر": "فیلتر هوا و روغن برای BMW, Benz, Audi موجوده.",
  "تسمه": "تسمه دینام و تایم از برند Continental موجوده.",
  "bmw": "قطعات BMW شامل لنت، فیلتر، تسمه و باتری موجوده.",
  "benz": "قطعات Benz اورجینال موجود داریم. مثل لنت، فیلتر، و پمپ روغن.",
  "audi": "قطعات Audi از برند اصلی در فروشگاه هست.",
  "سلام": "سلام! خوش اومدی 😊 چه قطعه‌ای نیاز داری؟"
};

// عملکرد ارسال پیام
const sendBtn = document.getElementById("send-btn");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;

  appendMessage("user", userMsg);

  // پیدا کردن پاسخ مناسب
  let botReply = "متوجه نشدم، لطفاً دقیق‌تر بنویس چه قطعه‌ای می‌خوای 😊";
  for (let key in responses) {
    if (userMsg.includes(key)) {
      botReply = responses[key];
      break;
    }
  }

  setTimeout(() => appendMessage("bot", botReply), 500);
  chatInput.value = "";
}

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

