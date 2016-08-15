import sequelize from '../sequelize'
import Move from '../models/Move'


function addMoveToDB(gameId, playerId, moveLocation) {
  Move.build({
    gameId: gameId,
    playerId: playerId,
    moveLocation: moveLocation
  })
  .save()
  .then( function(anotherTask){
    console.log(anotherTask.dataValues)
    return anotherTask.dataValues
  })
  .catch( function (error) {
    console.log(error)
  })
}

export default addMoveToDB
