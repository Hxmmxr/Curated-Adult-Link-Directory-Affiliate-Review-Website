document.addEventListener('DOMContentLoaded', function () {
  fetch('/src/data/sites.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('site-list');
      data.forEach(site => {
        const div = document.createElement('div');
        div.innerHTML = <h3><a href="\" target="_blank">\</a></h3>;
        container.appendChild(div);
      });
    });
});
