const skins = [
  {
    id: 1,
    nome: "AK-47 | Redline",
    raridade: "Épica",
    valor: 180.00,
    descricao: "Uma skin estilizada para AK-47, com um design moderno e cores vibrantes.",
    imagem: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_redline_light_large.6e7d3be0d1a295f32b8a2e5a040d0d0d4d86e6ef.png"
  },
  {
    id: 2,
    nome: "AWP | Asiimov",
    raridade: "Lendária",
    valor: 220.00,
    descricao: "Design futurista para a sniper AWP inspirado em tecnologia e ficção científica.",
    imagem: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_asiimov_light_large.11b7ecda3357e05eb6b8695d1dff8c3e7e842db1.png"
  },
  {
    id: 3,
    nome: "USP-S | Cyrex",
    raridade: "Rara",
    valor: 140.00,
    descricao: "Pistola silenciada com design elegante e moderno para combates furtivos.",
    imagem: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_cyrex_light_large.620b6d31c93707b5a6a43da8b9ca78815e5c0f30.png"
  },
  {
    id: 4,
    nome: "P250 | Sand Dune",
    raridade: "Comum",
    valor: 50.00,
    descricao: "Uma skin básica e discreta, perfeita para quem prefere simplicidade.",
    imagem: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_sand_dune_light_large.5352f7386b01f3b0d8394a42d16eac9d5d9678b3.png"
  },
  {
    id: 5,
    nome: "Glock-18 | Candy Apple",
    raridade: "Incomum",
    valor: 80.00,
    descricao: "Design brilhante e colorido para a Glock-18, chama atenção em combate.",
    imagem: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_candy_apple_light_large.48ecf3d4c840d97c21b0d0e65edcbd08d63f6fdb.png"
  }
];

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function mostrarDetalhes(skin) {
  const container = document.getElementById("detalhes-container");
  container.innerHTML = `
    <div class="detalhes-flex">
      <img class="detalhes-img" src="${skin.imagem}" alt="${skin.nome}" />
      <div class="detalhes-info">
        <h2 class="detalhes-nome">${skin.nome}</h2>
        <p class="detalhes-raridade"><strong>Raridade:</strong> ${skin.raridade}</p>
        <p>${skin.descricao}</p>
        <p class="detalhes-valor">Preço: R$ ${skin.valor.toFixed(2)}</p>
        <button class="botao-adicionar">Adicionar ao carrinho</button>
      </div>
    </div>
  `;
}

function main() {
  const id = parseInt(getQueryParam("id"));
  if (!id) {
    alert("Skin não encontrada.");
    window.location.href = "index.html";
    return;
  }
  
  const skin = skins.find(s => s.id === id);
  if (!skin) {
    alert("Skin não encontrada.");
    window.location.href = "index.html";
    return;
  }

  mostrarDetalhes(skin);
}

main();
