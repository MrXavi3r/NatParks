//user selects a state from input field 1
//user selects max number of results from input field 2, default to 10
//a list of parks in given state is returned by search
//parks results must include full name, description and URL,
//(add address to results for bonus points)
//results refresh upon each search

const API = 'gJywAlQJozR0s8EH8RKm23XckEJ3Vg8ygzdQMdGP';

function getParks() {
    fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=gJywAlQJozR0s8EH8RKm23XckEJ3Vg8ygzdQMdGP')
      .then(response => response.json())
      .then(responseJson => 
        displayResults(responseJson))
      .catch(error => alert('Something went wrong. Try again later.'));
  }

  function displayResults(responseJson) {
    console.log(responseJson);
    let parkName = responseJson.data.map(obj => `<h3 class="full-name">${obj.fullName}</h3> <p class="description">${obj.description}</p> <p class="url">${obj.url}</p>`);
    $('.results').html(parkName)
  }

  console.log(getParks())




$('.state').submit()