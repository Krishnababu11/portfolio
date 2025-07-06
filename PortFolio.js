function viewProject(name) {
  alert('Opening details for: ' + name);
}

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert('Thank you, ' + name + '! Your message has been sent.');
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('Please fill in all fields.');
  }
}
