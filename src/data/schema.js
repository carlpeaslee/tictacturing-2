/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import me from './queries/me';
import content from './queries/content';
import news from './queries/news';
import addMoveToDB from './mutations/addMoveToDB'

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
      me,
      content,
      news,
  }
})

let inMemoryStore = {}

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'The root mutation',
  fields: {
    addMove: {
      type: GraphQLString,
      args: {
        moveId: {
          type: GraphQLString
        },
        playerId: {
          type: GraphQLString
        },
        gameId: {
          type: GraphQLString
        },
        moveLocation: {
          type: GraphQLString
        }
      },
      resolve(source, args) {
        addMoveToDB(args.gameId, args.playerId, args.moveLocation)
        return source
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

export default schema;
