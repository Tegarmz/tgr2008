const submitBtn = document.getElementById('submitBtn');
const answerInput = document.getElementById('answer');
const responseDiv = document.getElementById('response');

submitBtn.addEventListener('click', () => {
  const answer = answerInput.value.trim();
  if (!answer) {
    responseDiv.textContent = "Please type something!";
    responseDiv.style.color = '#e74c3c';
    return;
  }

  fetch('/submit-answer', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ answer })
  })
  .then(res => res.json())
  .then(data => {
    if(data.status === 'success'){
      responseDiv.textContent = "Thanks! Your answer was sent.";
      responseDiv.style.color = '#27ae60';
      answerInput.value = '';
    } else {
      responseDiv.textContent = "Failed to send answer.";
      responseDiv.style.color = '#e74c3c';
    }
  })
  .catch(() => {
    responseDiv.textContent = "Error sending answer.";
    responseDiv.style.color = '#e74c3c';
  });
});
