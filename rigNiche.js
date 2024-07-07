const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formm = event.target;
  const name = formm.elements.name.value;
  const email = formm.elements.email.value;
  const message = formm.elements.message.value;

  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
});
