const CONFIG = {
  whatsapp: "5562996966304", // coloque aqui o número real, com DDI + DDD
  message: "Eu vou para o Pós-Encontro! Nos vemos hoje às 20h!",
  friendMessage: "Bora para o Pós-Encontro quinta?  20h na Comunidade Nossa Senhora Aparecida. Você vem comigo?"
};

const link = (message) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

document.getElementById("goWhatsapp").href = link(CONFIG.message);
document.getElementById("finalWhatsapp").href = link(CONFIG.message);
document.getElementById("floatingWhatsapp").href = link(CONFIG.message);
document.getElementById("friendWhatsapp").href = link(CONFIG.friendMessage);
