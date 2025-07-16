function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Recupera os usuários registrados do localStorage
  let users = JSON.parse(localStorage.getItem('users') || '{}');

  // Verifica se o usuário existe e a senha está correta
  if (users[user] === pass) {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('currentUser', user);
    window.location.href = 'index.html';
  } else {
    alert('Usuário ou senha inválidos!');
  }
}

// Se já estiver logado, redireciona direto
if (localStorage.getItem('loggedIn') === 'true') {
  window.location.href = 'index.html';
}
