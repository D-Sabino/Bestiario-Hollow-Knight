// Função para alternar entre os temas
function alternarTema() {
  const body = document.body;
  const botao = document.getElementById('botao-alterar-tema');
  const imagemBotao = botao.querySelector('.imagem-botao');

  // Verifica o tema atual
  const temaAtual = localStorage.getItem('tema');

  // Altera o tema
  if (temaAtual === 'claro') {
    body.classList.remove('tema-claro');
    imagemBotao.src = './src/imagens/Amuleto-Branco.png';
    localStorage.setItem('tema', 'escuro');
  } else {
    body.classList.add('tema-claro');
    imagemBotao.src = './src/imagens/Amuleto-Preto.png';
    localStorage.setItem('tema', 'claro');
  }
}

// Adiciona o evento de clique ao botão
const botaoAlterarTema = document.getElementById('botao-alterar-tema');
botaoAlterarTema.addEventListener('click', alternarTema);

// Verifica o tema atual ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
  const temaAtual = localStorage.getItem('tema');
  const body = document.body;
  const botao = document.getElementById('botao-alterar-tema');
  const imagemBotao = botao.querySelector('.imagem-botao');

  if (temaAtual === 'claro') {
    body.classList.add('tema-claro');
    imagemBotao.src = './src/imagens/Amuleto-Preto.png';
  } else {
    body.classList.remove('tema-claro');
    imagemBotao.src = './src/imagens/Amuleto-Branco.png';
  }
});
