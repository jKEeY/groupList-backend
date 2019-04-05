/**
 * Entry point file where run db and graphql server
 */
import { InitServer } from './server';
import { InitDB } from './db';

/**
 * Run db server
 */
InitDB()
  // if good output message and run graphql server
  .then((text) => {
    console.log(text);
    /**
     * Run graphql server
     */
    InitServer()
      // if good output message and run graphql server
      .then((text) => {
        console.log(text);
      })
  })
  // else output error text
  .catch((err_text) => {
    console.log(err_text);
  })