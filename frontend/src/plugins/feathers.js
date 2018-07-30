const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');

const socket = io('http://api.localhost/');
const client = feathers();

export default client.configure(socketio(socket));

export const pollsService = client.service('polls');
