const signupFormHandler = async function(event) {
  event.preventDefault();

  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: titleEl.value,
      contents: contentsEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to post');
  }
};

document
  .addEventListener('submit', signupFormHandler);

// make delete and update to posts only from dashboard
