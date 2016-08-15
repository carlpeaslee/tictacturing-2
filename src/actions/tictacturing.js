import fetch from 'isomorphic-fetch'

/* Actions */
export const TICTAC_MOVE = 'TICTAC_MOVE'
export const READY = 'READY'
export const START_GAME = 'START_GAME'
export const RECEIVE_OPPONENT_MOVE = 'RECEIVE_OPPONENT_MOVE'
export const END_GAME = 'END_GAME'
export const TURING_TEST = 'TURING_TEST'

export const REQUEST_SHIT = 'FETCH_SHIT'
export const PRESS_FBUTTON = 'PRESS_FBUTTON'
export const RECEIVE_SHIT = 'RECEIVE_SHIT'


/* Action creators */



export function fetchShit(shit){
  const query = JSON.stringify({
    query: '{news{title}}',
  })

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    body: query,
    credentials: 'include'
  }
  console.log('fetchShit ran')
  return function (dispatch) {
    dispatch(requestShit(shit))

    return fetch('/graphql', options).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      dispatch(receiveShit(shit, data))
    });
  }
}


export function requestShit(shit) {
  console.log('request shit ran')
  return {
    type: REQUEST_SHIT,
    shit
  }
}

export function receiveShit(shit, json) {
  console.log('receive shit ran')
  console.log('data', json)
  return {
    type: RECEIVE_SHIT,
    shit,
    data: json.data.news.map(item => item.title),
    receivedAt: Date.now()
  }
}

export function asyncTicTacMove(position, player) {
  const mutation = JSON.stringify({
    query: 'mutation{addMove(playerId:"' + player +'", moveLocation:"' + position + '")}',
  })

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'content-type': 'application/json',
    },
    body: mutation,
    credentials: 'include'
  }
  return function (dispatch) {
    dispatch(makeTicTacMove(position, player))

    return fetch('/graphql', options).then((res) => {
      return res.json()
    }).then((data) =>{
      console.log(data)
      //dispatch(receiveTicTacMoveConfirmation(data))
    })
  }

}

export function makeTicTacMove(position, mark) {
  return {
    type: TICTAC_MOVE,
    position,
    mark
  }
}

export function readyAction() {
  return {
    type: READY
  }
}

export function startGame() {
  return {
    type: START_GAME
  }
}

export function receiveOpponentMove(position) {
  return {
    type: RECEIVE_OPPONENT_MOVE,
    position
  }
}

export function endGame(winningPlayer, locationOfWin) {
  return {
    type: END_GAME,
    winningPlayer,
    locationOfWin
  }
}

export function turingTest(choice) {
  return {
    type: TURING_TEST,
    choice
  }
}
