document.addEventListener("DOMContentLoaded", () => {

  const messages = {
    1: "I love you more every single day. 💗",
    2: "L is for the love that makes my world brighter.",
    3: "Y is for 'you' — the reason I smile so much.",
    4: "One of my favorite photos of you. You're beautiful.",
    5: "This picture always melts my heart.",
    6: "R because you are my reason for everything.",
    7: "A for always — because I’ll always choose you.",
    8: "I, because you complete every part of me.",
    9: "video"
  };

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  // Card click
  document.querySelectorAll(".card[data-box]").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.box;

      if (id === "9") {
        modalContent.innerHTML = `
          <video controls autoplay style="width:100%; border-radius:12px;">
            <source src="videos/vid.mp4" type="video/mp4" />
          </video>
        `;
      } else {
        modalContent.textContent = messages[id];
      }

      modal.classList.remove("hidden");
    });
  });

  const close = () => modal.classList.add("hidden");
  closeModal.addEventListener("click", close);
  modal.addEventListener("click", e => { if(e.target===modal) close(); });

  // Music
  const bg = document.getElementById("bgMusic");
  const toggle = document.getElementById("toggleMute");
  bg.play().catch(()=>{});
  bg.muted = true;

  toggle.addEventListener("click", () => {
    if(bg.muted) { bg.muted=false; bg.play(); toggle.textContent="🔊 Unmute"; }
    else { bg.muted=true; toggle.textContent="🔈 Play Music"; }
  });

});
