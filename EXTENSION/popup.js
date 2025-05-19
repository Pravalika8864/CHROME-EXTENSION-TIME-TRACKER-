fetch('http://localhost:3000/api/summary')
  .then(res => {
    if (!res.ok) {
      throw new Error(`Network response was not ok. Status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    document.getElementById('summary').innerHTML = `
      <p>Productive: ${data.productive}s</p>
      <p>Unproductive: ${data.unproductive}s</p>
    `;
  })
  .catch(error => {
    console.error('Fetch error:', error);
    document.getElementById('summary').innerHTML = '<p>Failed to load summary data.</p>';
  });
