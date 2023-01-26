const signupFormHandler = async function(event) {
  event.preventDefault();

  const titleEl = document.querySelector('#title-input');
  const contentsEl = document.querySelector('#contents-input');

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
  .querySelector('#post-form')
  .addEventListener('submit', signupFormHandler);
