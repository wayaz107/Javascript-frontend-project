
fetch('http://localhost:3000/api/v1/perfumes')
  .then(response => response.json())
  .then(data => console.log(data));