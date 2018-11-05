const prev = document.getElementById('prev');
const next = document.getElementById('next');
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://the-cat-fact.herokuapp.com/api/randomfact';


fetch(proxyurl + url)
  .then((resp) => resp.json())
  .then(function(data) {
    let catFact = data.data[0].fact;
    console.log(catFact);
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });
