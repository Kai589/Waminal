const MESSAGE = [
  `My Love(Althea),`,

  `From the moment I first saw you, everything in my world became brighter and more beautiful. 
Your presence turns ordinary moments into memories I will never forget, and your smile lights up even my darkest days. 
You are my Iris, the one who stands out in every crowd, the one I cannot stop thinking about, the one who makes my heart feel alive.`,

  `I call you my Iris because just like the flower, you represent hope, faith, and cherished love in my life. 
You are rare, delicate, and stunning in every way. Being with you makes me feel seen, understood, and inspired to be the best version of myself. 
You are not just the person I love, you are my safe place, my greatest blessing, and the light that guides me through everything.`,

  `No matter what challenges or distances we may face, I promise to stand by your side, 
to cherish you endlessly, and to keep choosing you every day. 
My love for you grows deeper with every passing moment, and in my heart, you are my forever.`,

'Courting you, for me, means showing love in every way I know how. I want my words to lift you up and remind you how beautiful and important you are. I want my actions to prove that I will always be here to support you. Loving you is not only something I feel, it is something I want to show you every single day through the way I care for you.',

'I treasure the time we share, whether it is filled with laughter, long talks, or simply sitting quietly together. I love the warmth of your hand in mine and the comfort of being close to you. Every moment with you feels like something worth holding on to, no matter how simple it may seem.',

'Sometimes I want to surprise you with little things, small gifts, thoughtful gestures, or anything that makes you smile. For me, courting you is not about one grand act, it is about loving you through words, actions, time, touch, and thoughtfulness. It is about making sure you never forget how deeply my heart belongs to you. I love youuu erp \u{1F979}\u{1F979}\u{1F979}',

  `With all my love,`,
  'LAMBIGUIT, JOHN CARLO G.'
];

const tapToStart = document.getElementById("tapToStart");
const firstPage = document.getElementById("firstPage");
const secondPage = document.getElementById("secondPage");
const messageBox = document.getElementById("messageBox");
const bgMusic = document.getElementById("bgMusic");

tapToStart.addEventListener("click", () => {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
  bgMusic.play();
  showMessage();
});

function showMessage() {
  let i = 0;

  function typeParagraph() {
    if (i < MESSAGE.length) {
      const p = document.createElement("p");
      messageBox.appendChild(p);

      let j = 0;
      function typeLine() {
        if (j < MESSAGE[i].length) {
          p.textContent += MESSAGE[i][j];
          j++;
          setTimeout(typeLine, 35);
          messageBox.scrollTop = messageBox.scrollHeight;
        } else {
          i++;
          setTimeout(typeParagraph, 600);
        }
      }
      typeLine();
    }
  }

  typeParagraph();
}

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}