const skins = [
  {
    id: 1,
    nome: "AK-47 | Redline",
    raridade: "Épica",
    valor: 180.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSI_-RHGavzOtyufRkASq2lkxx4W-HnNyqJC3FZwYoC5p0Q7FfthW6wdWxPu-371Pdit5HnyXgznQeHYY5wyA/360fx360f"
  },
  {
    id: 2,
    nome: "AWP | Asiimov",
    raridade: "Lendária",
    valor: 220.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V6V-Kf2cGFidxOp_pewnF3nhxEt0sGnSzN76dH3GOg9xC8FyEORftRe-x9PuYurq71bW3d8UnjK-0H0YSTpMGQ/360fx360f"
  },
  {
    id: 3,
    nome: "USP-S | Cyrex",
    raridade: "Rara",
    valor: 140.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1vouRxcCS2kRQyvnPdmN-tJXmXbAJyApIlF7JcsRO6xNDnZLvisQzd3d1Fmyyr3Cwf6io6_a9cBmchrxE-/360fx360f"
  },
  {
    id: 4,
    nome: "P250 | Sand Dune",
    raridade: "Comum",
    valor: 50.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjFU0OGvZqBSLPmUBnPelesn5-RrSXDlwRhx5TjSwtmocCifPwQpDpshReBfsxPrk4DhNu3jshue1dy8VcXxuA/360fx360f"
  },
  {
    id: 5,
    nome: "Glock-18 | Candy Apple",
    raridade: "Incomum",
    valor: 80.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1I4M28baBSLPmUBnPelb93teA-FivjzB5wsjzTyI2pIn_CPAMoW8N3ROJZshm5w9zgNbnk5xue1dyMA9ZU_Q/360fx360f"
  },
  {
    id: 6,
    nome: "AWP | Dragon Lore",
    raridade: "Lendária 1",
    valor: 800.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk4veqYaF7IfysCnWRxuF4j-B-Xxa_nBovp3Pdwtj9cC_GaAd0DZdwQu9fuhS4kNy0NePntVTbjYpCyyT_3CgY5i9j_a9cBkcCWUKV/360fx360f"
  },
  {
    id: 7,
    nome: "Karambit | Saphira",
    raridade: "Lendária 2",
    valor: 760.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Q7uCvZaZkNM-SA1iUzv5mvOR7cDm7lA4i4gKJk4jxNWXFb1cpDJR2FOFbsBTql9bjYbzq7gPZiN1MxH7_2ytNuCdpte1UB_Ui5OSJ2GbkVqni/360fx360f"
  },
  {
    id: 8,
    nome: "Butterfly | Gamma Doppler",
    raridade: "Lendária 3",
    valor: 161.00,
    imagem: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Z-ua6bbZrLOmsD2qvxu97veBWSyajhREioQKVko7qJHj4Ml93UtZuTbULtxfsxNDjZejqtFbajIMUyy36iytOvS1u5-ZXVPAt_PbejgiSZap9v8cjE0cexQ/360fx360f"
  }
];

let saldo = 1000;
const custoCaixa = 150;

const btnAbrirCaixa = document.getElementById("btnAbrirCaixa");
const valorSaldo = document.getElementById("valorSaldo");
const carrossel = document.getElementById("carrossel");
const resultado = document.getElementById("resultado");
const historicoContainer = document.getElementById("historicoContainer");
const barraProgresso = document.getElementById("barraProgresso");

const somRoleta = document.getElementById('somRoleta');
const somPremio = document.getElementById('somPremio');

function atualizarSaldo() {
  valorSaldo.textContent = `Saldo: R$ ${saldo.toFixed(2)}`;
  btnAbrirCaixa.disabled = saldo < custoCaixa;
}

function criarSlide(skin, posX) {
  const div = document.createElement("div");
  div.classList.add("skin-slide");
  div.style.left = posX + "px";
  const img = document.createElement("img");
  img.src = skin.imagem;
  img.alt = skin.nome;
  div.appendChild(img);
  carrossel.appendChild(div);
  return div;
}

function abrirCaixa() {
  if (saldo < custoCaixa) {
    alert("Saldo insuficiente!");
    return;
  }

  saldo -= custoCaixa;
  atualizarSaldo();

  resultado.innerHTML = "";
  carrossel.innerHTML = "";
  barraProgresso.style.width = "0%";

  somRoleta.currentTime = 0;
  somRoleta.play();

  const slides = [];
  const slideWidth = 130;
  const totalSlides = 20;

  // Cria slides e adiciona no carrossel
  for (let i = 0; i < totalSlides; i++) {
    const skin = skins[Math.floor(Math.random() * skins.length)];
    slides.push(skin);
    criarSlide(skin, i * slideWidth);
  }

  btnAbrirCaixa.disabled = true;

  let posicao = 0;
  const maxPos = slideWidth * 10;

  let velocidadeMax = 40;
  let velocidadeMin = 2;
  let tempoTotal = 6000;
  let inicio = null;

  function animar(time) {
    if (!inicio) inicio = time;
    let tempoDecorrido = time - inicio;

    let progresso = Math.min(tempoDecorrido / tempoTotal, 1);
    let velocidadeAtual = velocidadeMax - (velocidadeMax - velocidadeMin) * progresso;

    posicao += velocidadeAtual;

    const slidesDivs = carrossel.querySelectorAll('.skin-slide');
    slidesDivs.forEach(div => {
      let left = parseFloat(div.style.left);
      left -= velocidadeAtual;
      if (left < -slideWidth) {
        left += slideWidth * totalSlides;
      }
      div.style.left = left + "px";
    });

    barraProgresso.style.width = (progresso * 100) + "%";

    if (progresso < 1) {
      requestAnimationFrame(animar);
    } else {
      somRoleta.pause();
      somRoleta.currentTime = 0;
      somPremio.play();

      // Skin vencedora = a que está mais próxima do centro do carrossel (650px largura)
      const centro = 650 / 2;
      let skinVencedora = null;
      let menorDistancia = Infinity;

      slidesDivs.forEach((div, idx) => {
        const left = parseFloat(div.style.left);
        const centroSlide = left + slideWidth / 2;
        const distancia = Math.abs(centroSlide - centro);
        if (distancia < menorDistancia) {
          menorDistancia = distancia;
          skinVencedora = slides[idx];
        }
      });

      mostrarResultado(skinVencedora);
      adicionarHistorico(skinVencedora);

      btnAbrirCaixa.disabled = false;
    }
  }

  requestAnimationFrame(animar);
}

function mostrarResultado(skin) {
  resultado.innerHTML = `
    <p>Parabéns! Você ganhou:</p>
    <div style="margin-top:10px; display:flex; flex-direction: column; align-items: center;">
      <img src="${skin.imagem}" alt="${skin.nome}" style="width: 150px; border: 3px solid #00ff99; border-radius: 12px;" />
      <strong style="margin-top: 10px;">${skin.nome} (${skin.raridade})</strong>
      <span>Valor: R$ ${skin.valor.toFixed(2)}</span>
    </div>
  `;
}

function adicionarHistorico(skin) {
  const item = document.createElement("div");
  item.classList.add("historico-item");
  item.innerHTML = `
    <img src="${skin.imagem}" alt="${skin.nome}" />
    <div>${skin.nome} (${skin.raridade})</div>
  `;
  historicoContainer.prepend(item);

  if (historicoContainer.children.length > 20) {
    historicoContainer.removeChild(historicoContainer.lastChild);
  }
}

btnAbrirCaixa.addEventListener("click", abrirCaixa);

atualizarSaldo();
