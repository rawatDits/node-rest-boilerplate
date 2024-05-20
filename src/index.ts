import { Server } from './helper/server';
import dotenv from 'dotenv';
import { connectToMongo } from './utils/mongodb/mongodb'
import { loggerStart } from './utils/logger/winston'

dotenv.config();
const Port = process.env.PORT;
const server = new Server(Number(Port));
server.start();
connectToMongo()
loggerStart();
