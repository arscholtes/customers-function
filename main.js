// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element


(function() {

  'use strict';

  fetch('https://randomuser.me/api/?results=12')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log(json)
      let result = json.results
      result.forEach(function(user) {
        console.log("Name: " + user.name.first)
        console.log("Emain: " + user.email)
      })
    })
})();
