let button = document.getElementById('sort');

let listT1 = document.getElementById('T1');

let listT2 = document.getElementById('T2');


button.addEventListener('click', ()=>{
    let players = document.getElementById('players').value.split(',');
    let playersArray = [];

    for (let index = 0; index < players.length; index++){
        playersArray.push(players[index].trim());
    }    

    if ((playersArray.length%2)!=0){
        alert("You must have an even number of players to complete the teams!");
    } else {
        playersArray = shuffle(playersArray);

        listT1.innerHTML = "";
        listT2.innerHTML = "";

        for (let index = 0; index < playersArray.length; index++){
            if (index < (playersArray.length/2)){
                let row = document.createElement('tr')
                let player = document.createElement('td');
                player.setAttribute('class', 'text-center');
                player.textContent = playersArray[index];
                row.appendChild(player);
                listT1.appendChild(row);
            } else {
                let row = document.createElement('tr')
                let player = document.createElement('td');
                player.setAttribute('class', 'text-center');
                player.textContent = playersArray[index];
                row.appendChild(player);
                listT2.appendChild(row);
            }
        }
    }

})

function shuffle(array) {
    let m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
}
  
