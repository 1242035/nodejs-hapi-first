var Hapi = require('hapi');
var config = require('./config');
console.log(config);
// Create a server with a host and port
var server = new Hapi.Server();

server.connection({ 
    host: config.app.host, 
    port: config.app.port
});
var routes = require('./routes');
// Add the route
server.route(routes);
// Start the server
server.start();