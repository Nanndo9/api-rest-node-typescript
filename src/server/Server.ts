import express from "express";
import 'dotenv/config';
import { router } from './routes';


const server = express();


server.use(express.json());  //para o express entender o formato json

server.use(router);




export { server };

//npx ts-node-dev index.ts

