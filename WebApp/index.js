function showPasswordInput() {
  const appleId = document.getElementById('apple-id').value;
  if (appleId) {
    document.getElementById('password-group').style.display = 'block';
    document.getElementById('apple-id').disabled = true;
    document.querySelector('.arrow-button').style.display = 'none';
    document.querySelector('.login-button').style.display = 'block';
    document.getElementById('password').focus();
  } else {
    alert('Please enter your Username.');
  }
}

function login() {
  const password = document.getElementById('password').value;
  if (password) {
    window.location.href = 'dashboard/dashboard.html'; // Redirect to the dashboard page

  } else {
    alert('Please enter your password.');
  }
}