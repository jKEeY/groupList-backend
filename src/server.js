/**
 *  Server config
 *  file for starting server with settings
 */
import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import cors from 'cors'

import schema from './schemas';

import dotenv from 'dotenv';
dotenv.config();

export function InitServer() {
  return new Promise((resolve, reject) => {
    const dev = process.env.PRODUCTION; // if production false, then dev true
    const server = express();
    /**
     * Middlewere
     */
    server.use(express.json())

    server.use(express.urlencoded({ // url encoded body parser
      extended: true
    }))

    server.use(cors('*'))

    if (dev) {
      server.use('/api', graphiqlExpress({
        endpointURL: '/graphql'
      }))
    }
    server.use('/graphql', 
      graphqlExpress(req => ({
        schema,
      }))
    )
    /**
     * Start to server
     */
    server.listen(process.env.PORT, () => {
      resolve('Server is started...');
    })
  });
};