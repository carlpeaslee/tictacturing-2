/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';
import Game from './Game'
import Player from './Player'

const Move = Model.define('move', {

  moveId: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV1,
    primaryKey: true
  },

  gameId: {
    type: DataType.STRING
    // references: {
    //   model: Game,
    //   key: Game.gameId
    // }
  },

  playerId: {
    type: DataType.STRING
    // references: {
    //   model: Player,
    //   key: Player.playerId
    // }
  },

  moveLocation: {
    type: DataType.STRING
  }
}, {
  indexes: [
    { fields: ['moveId'] },
  ],
});

export default Move;
