document.getElementById('userInfoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Peatab vormi tavapärase esitamise

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const country = document.getElementById('country').value;
  const subscribe = document.getElementById('subscribe').checked;

  const userData = {
    username,
    email,
    country,
    subscribe,
  };

  console.log(userData);
  // Siit saab jätkata andmete saatmist serverisse
});
