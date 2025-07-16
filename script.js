// Lista de caixas
const caixas = [
  "Caixa do Fogo", "Caixa Sombria", "Caixa do Hacker", "Caixa Gelo Mortal", "Caixa Cósmica",
  "Caixa do Dragão", "Caixa Samurai", "Caixa Neon", "Caixa Fantasma", "Caixa de Elite",
  "Caixa Subterrânea", "Caixa do Caos", "Caixa Tropical", "Caixa da Tempestade", "Caixa do Destino",
  "Caixa Sangrenta", "Caixa Eclipse", "Caixa Urbana", "Caixa Cyber", "Caixa Selvagem",
  "Caixa do Deserto", "Caixa Noturna", "Caixa Real", "Caixa do Festival", "Caixa Glitch",
  "Caixa Toxic", "Caixa Prisma", "Caixa Espacial", "Caixa Explosiva", "Caixa das Sombras",
  "Caixa de Gelo", "Caixa da Sorte", "Caixa do Medo", "Caixa Ancestral", "Caixa Alien",
  "Caixa Gloriosa", "Caixa Elite Pro", "Caixa Steam", "Caixa de Sangue", "Caixa de Cristal",
  "Caixa Techno", "Caixa Vortex", "Caixa Assassina", "Caixa do Norte", "Caixa do Inferno",
  "Caixa Metálica", "Caixa do Caçador", "Caixa do Trovão", "Caixa do Silêncio", "Caixa Cibernética"
];

// Gerar caixas dinamicamente
const grid = document.querySelector('.caixas-grid');
if (grid) {
  caixas.forEach((nome) => {
    const card = document.createElement('div');
    card.className = 'caixa-card';
    card.onclick = () => alert(`Você clicou na ${nome}`);
    card.innerHTML = `
      <img src="https://via.placeholder.com/200x120?text=${encodeURIComponent(nome)}" alt="${nome}" />
      <h3>${nome}</h3>
    `;
    grid.appendChild(card);
  });
}

// Controle de saldo (simulado)
const balanceSpan = document.getElementById("user-balance");
let saldo = parseFloat(localStorage.getItem("saldo")) || 0;
updateBalance();

function updateBalance() {
  if (balanceSpan) {
    balanceSpan.textContent = `R$ ${saldo.toFixed(2).replace('.', ',')}`;
  }
}

function adicionarSaldo(valor) {
  saldo += valor;
  localStorage.setItem("saldo", saldo);
  updateBalance();
}
