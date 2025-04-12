// script.js

const figuras = [
  {
    nome: "Quadrado",
    desenhar: (el) => {
      limparEstilos(el);
      el.style.width = "100px";
      el.style.height = "100px";
      el.style.background = "#3498db";
    },
    explicacao: "O quadrado possui 4 lados iguais e 4 ângulos retos.",
  },
  {
    nome: "Retângulo",
    desenhar: (el) => {
      limparEstilos(el);
      el.style.width = "150px";
      el.style.height = "100px";
      el.style.background = "#9b59b6";
    },
    explicacao: "O retângulo tem lados opostos iguais e 4 ângulos retos.",
  },
  {
    nome: "Círculo",
    desenhar: (el) => {
      limparEstilos(el);
      el.style.width = "100px";
      el.style.height = "100px";
      el.style.background = "#e74c3c";
      el.style.borderRadius = "50%";
    },
    explicacao: "O círculo é uma figura curva onde todos os pontos estão à mesma distância do centro.",
  },
  {
    nome: "Triângulo",
    desenhar: (el) => {
      limparEstilos(el);
      el.style.width = "0";
      el.style.height = "0";
      el.style.borderLeft = "50px solid transparent";
      el.style.borderRight = "50px solid transparent";
      el.style.borderBottom = "100px solid #e67e22";
    },
    explicacao: "O triângulo possui 3 lados e pode ter ângulos variados.",
  },
  {
    nome: "Trapézio",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg width='120' height='80'><polygon points='20,80 100,80 80,20 40,20' fill='#2ecc71'/></svg>`;
    },
    explicacao: "O trapézio tem dois lados paralelos e os outros dois não.",
  },
  {
    nome: "Losango",
    desenhar: (el) => {
      limparEstilos(el);
      el.style.width = "100px";
      el.style.height = "100px";
      el.style.background = "#1abc9c";
      el.style.transform = "rotate(45deg)";
    },
    explicacao: "O losango tem todos os lados iguais e ângulos opostos iguais.",
  },
  {
    nome: "Pentágono",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg width='120' height='120'><polygon points='60,10 110,50 90,110 30,110 10,50' fill='#f39c12'/></svg>`;
    },
    explicacao: "O pentágono possui 5 lados e 5 ângulos internos.",
  },
  {
    nome: "Hexágono",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg width='120' height='120'><polygon points='60,10 110,35 110,85 60,110 10,85 10,35' fill='#8e44ad'/></svg>`;
    },
    explicacao: "O hexágono possui 6 lados iguais e é comum em colmeias.",
  },
  {
    nome: "Heptágono",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg width='140' height='140'><polygon points='70,10 115,30 130,75 100,115 40,115 10,75 25,30' fill='#16a085'/></svg>`;
    },
    explicacao: "O heptágono tem 7 lados e 7 ângulos internos.",
  },
  {
    nome: "Octógono",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg width='140' height='140'><polygon points='50,10 90,10 120,40 120,80 90,110 50,110 20,80 20,40' fill='#d35400'/></svg>`;
    },
    explicacao: "O octógono possui 8 lados e é comum em placas de trânsito.",
  },
  {
    nome: "Elipse",
    desenhar: (el) => {
      limparEstilos(el);
      el.style.width = "120px";
      el.style.height = "80px";
      el.style.background = "#c0392b";
      el.style.borderRadius = "50%";
    },
    explicacao: "A elipse é uma curva fechada semelhante a um círculo achatado.",
  },
  {
    nome: "Estrela",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg width='120' height='120'><polygon points='60,10 72,45 110,45 78,70 90,110 60,85 30,110 42,70 10,45 48,45' fill='#f1c40f'/></svg>`;
    },
    explicacao: "A estrela é uma figura composta com pontas e simetria radial.",
  },
  {
    nome: "Coração",
    desenhar: (el) => {
      limparEstilos(el);
      el.innerHTML = `<svg viewBox='0 0 32 29.6' width='100' height='90'><path d='M23.6,0c-3.4,0-6.4,2.2-7.6,5.3C14.8,2.2,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,4.3,3.4,7.9,10.3,13.9l6.1,5.2l6.1-5.2C28.6,16.3,32,12.7,32,8.4C32,3.8,28.2,0,23.6,0z' fill='#e84393'/></svg>`;
    },
    explicacao: "O coração é uma forma composta, usada para representar amor.",
  }
];

let figuraAtual = 0;
let acertos = 0;
let erros = 0;

const figuraDiv = document.getElementById("figura");
const opcoesDiv = document.getElementById("opcoes");
const resultadoDiv = document.getElementById("resultado");
const proximaBtn = document.getElementById("proxima");
const acertosSpan = document.getElementById("acertos");
const errosSpan = document.getElementById("erros");

function limparEstilos(el) {
  el.innerHTML = "";
  el.removeAttribute("style");
  el.style.display = "flex";
  el.style.margin = "30px auto";
  el.style.justifyContent = "center";
  el.style.alignItems = "center";
  el.style.background = "none";
  el.style.border = "none";
  el.style.borderRadius = "0";
  el.style.width = "auto";
  el.style.height = "auto";
  el.style.transform = "none";
}

function mostrarFigura() {
  resultadoDiv.textContent = "";
  proximaBtn.style.display = "none";
  const figura = figuras[figuraAtual];
  figura.desenhar(figuraDiv);

  const opcoes = [...figuras].sort(() => Math.random() - 0.5);
  opcoesDiv.innerHTML = "";
  opcoes.forEach((f) => {
    const btn = document.createElement("button");
    btn.textContent = f.nome;
    btn.onclick = () => verificarResposta(f.nome);
    opcoesDiv.appendChild(btn);
  });
}

function verificarResposta(resposta) {
  const figura = figuras[figuraAtual];
  if (resposta === figura.nome) {
    resultadoDiv.innerHTML = `✅ Correto!<br><small>${figura.explicacao}</small>`;
    acertos++;
  } else {
    resultadoDiv.innerHTML = `❌ Errado! Era <strong>${figura.nome}</strong>.<br><small>${figura.explicacao}</small>`;
    erros++;
  }

  acertosSpan.textContent = acertos;
  errosSpan.textContent = erros;
  proximaBtn.style.display = "inline-block";
  const botoes = opcoesDiv.querySelectorAll("button");
  botoes.forEach((btn) => (btn.disabled = true));
}

proximaBtn.onclick = () => {
  figuraAtual = (figuraAtual + 1) % figuras.length;
  mostrarFigura();
};

mostrarFigura();
