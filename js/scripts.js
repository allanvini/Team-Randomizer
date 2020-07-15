let insertButton = document.getElementById('insert');

let noPlayerAlert = document.getElementById('noPlayer');

let playersNicknames = document.getElementById('playersNicknames');

let sort = document.getElementById('sort');

let failAlert = document.getElementById('fail');

let successAlert = document.getElementById('success');

let listT1 = document.getElementById('T1');

let listT2 = document.getElementById('T2');

let playersArray = [];

insertButton.addEventListener('click', ()=>{

    let newPlayer = document.getElementById('newPlayer');

    if(newPlayer.value == ''){
        showElement(noPlayerAlert);
        hideElement(noPlayerAlert);
    } else {
        playersArray.push(newPlayer.value.trim());
        newPlayer.value = '';
        console.log(playersArray);
        renderPlayers(playersNicknames, playersArray);
    }

});


sort.addEventListener('click', ()=>{

    if ((playersArray.length%2)!=0 || playersArray.length == 0){

        showElement(failAlert);

        hideElement(failAlert);


    } else {

        showElement(successAlert);

        hideElement(successAlert);

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

function renderPlayers(grid, players){

    grid.innerHTML = '';

    for (player of players){

        let playerContainer = document.createElement('div');
        playerContainer.setAttribute('class', 'playerNickname');

        let playerNickname = document.createElement('div');
        playerNickname.setAttribute('id', 'player');
        playerNickname.setAttribute('class', 'container');


        let nickName = document.createElement('strong');
        nickName.appendChild(document.createTextNode(player));

        let excludeButton = document.createElement('button');
        excludeButton.setAttribute('type', 'button');
        excludeButton.setAttribute('class', 'exclude');

        let spanButton = document.createElement('span');

        let pos = players.indexOf(player);

        spanButton.setAttribute('aria-hidden','false');
        spanButton.appendChild(document.createTextNode('x'));
        spanButton.setAttribute('onclick', `deletePlayer(${pos})`);

        excludeButton.appendChild(spanButton);

        playerContainer.appendChild(playerNickname);

        playerNickname.appendChild(nickName);
        playerNickname.appendChild(excludeButton);

        grid.appendChild(playerContainer);
        
    }

}

function deletePlayer(pos){
    playersArray.splice(pos, 1);
    renderPlayers(playersNicknames, playersArray);
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

function showElement(element){
    element.style.display = 'block';
}

function hideElement(element){
    setTimeout(()=>{
        element.style.display = 'none';
    }, 5000);
}

function insertPlayer(nick){
    return nick.value.trim();
}