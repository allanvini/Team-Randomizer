let button = document.getElementById('sort');

let listT1 = document.getElementById('T1');

let listT2 = document.getElementById('T2');


button.addEventListener('click', ()=>{
    let players = document.getElementById('players').value.split(',');
    let playersArray = [];
    
    for (player of players){
        playersArray.push(player.trim());
    }

    if ((playersArray.length%2)!=0){

        alert("You must have an even number of players to complete the teams!");

    } else {
        console.log (playersArray);
        playersArray = shuffle(playersArray);

        renderT1(listT1, playersArray);
        renderT2(listT2, playersArray);
    }

})

function renderT1(T1, players){

    T1.innerHTML = "";

    for (let index = 0; index < (players.length/2); index++){

        let row = document.createElement('tr')
        let player = document.createElement('td');
        player.setAttribute('class', 'text-center');
        player.textContent = players[index];
        row.appendChild(player);
        T1.appendChild(row);

    }

}

function renderT2(T2, players){

    T2.innerHTML = "";

    for (let index = (players.length/2); index < players.length; index++){

        let row = document.createElement('tr')
        let player = document.createElement('td');
        player.setAttribute('class', 'text-center');
        player.textContent = players[index];
        row.appendChild(player);
        T2.appendChild(row);

    }

}

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
