document.addEventListener("DOMContentLoaded", () => {

  const messages = {
  1: "I, I stands for I love you langlang ko. Hi baby, happy 19th birthday. Una sa lahat, tapos na, thank you. Joke, start ka sa I bebe, hanggang mabuo mo yung ILY RAI, tas last na yung nasa gitna, surprise yon.",
  2: "L, lablab, sana ma‑appreciate mo tong ginawa ko. Pasensya ka na, wala ako gift sayo HAHAHAHA hiya ako ihhh. Salamat pala baby sa lahat ng ginawa mo sakin. Simula pa noong una, kahit napaka‑unpredictable kong tao, pinilit mo pa ring iniintindi ako. Thank you dahil binalik mo ulit ang sigla sa aking puso. You made me believe in love again, baby. Andami ko pa sanang gustong sabihin e HAHAHA kaso nakalimutan ko, kagabi kasi nag‑mumuni‑muni na ako kung anong magandang ipang‑surprise sayo, e wala naman ako sa tabi muh, edi gawan na lang kita kung saan ako magalenggg HAHAHAHAH pero hindi ako magaling ha, magaling mag‑prompt lang ganun. Basta baby, andami ko sanang gustong sabihin kaso di ko na malala, sana sinulat ko na lang kagabi AHAHAHAHA. Pero kahit nakalimutan ko yon, na‑send ko naman thru telepathy, siguro???",
  3: "Y, \"Tell me Y, ain't nothin' but a heartache. Tell me Y, ain't nothin' but a mistake. Tell me Y, I never wanna hear you say…\" HAHAHAHHAAH kumanta?? Minsan napapaisip ako, why?? Bakit ako? Bakit tayo? Bakit tayo nagkausap, sa dinami‑raming tao na nakalaro ko sa Roblox, bakit tayo? Yun pala, ikaw ang magbibigay sakin ng ganang magmahal ulit. O tama na, kaoahan na to.",
  4: "may secret vm jan, hanapin mo nalang. Baka ungol ko na yan hehe",
  5: "sa gitna yan yung old video ko",
  6: "R, for ready ka na ba maging 20 yrs old? Kasi kung oo, matagal pa yun hahaha, sana umabot sana, sana. Para ma‑kant… kantahan kita ng happy birthday sa personal",
  7: "A, aylabyo",
  8: "I, for this last message, hindi man ito kahabaan pero may laman naman. Palaman cheese whiz. Baby, thank you for everything, sana mag‑enjoy ka sa ginawa ko kahit walang kwenta. I just wanted to say na I love you so much baby, kahit na palagi tayong nag‑aaway, salamat at hindi mo napiling i‑end ang lahat. Wag na mag‑message kasi nakakaheyaaa. Tapos ang totoo, bakit hende ako naka‑riply kanina, kasi nag‑cocode ako sa project na ito. Oo, ito mismo, gusto sana kitang i‑ano na kunwari hindi rereplyan HAHAHAHAH, pero hindi ko kaya, baka i‑end mo pa e. Naguguluhan na ko kanina e, andami kong gustong sabihin sayo pero nawala, sana pala sinulat ko na lang yon. Anyways, baby, I love you so muchhhhh. Sana di ka magsawa dahil pa‑ulit‑ulit na lang yung mga nangyayari satin. Salamat sa lahat, alam mo na yan garrrr. Enjoy your dayyyy, mwaaa. I, for I love you, baby ko.",
  9: "video"
};


  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

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
