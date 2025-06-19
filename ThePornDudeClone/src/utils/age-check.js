if (!localStorage.getItem('ageVerified')) {
  const confirmAge = confirm('This site contains adult content. Are you 18+?');
  if (!confirmAge) {
    window.location.href = 'https://google.com';
  } else {
    localStorage.setItem('ageVerified', 'true');
  }
}
