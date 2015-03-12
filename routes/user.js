module.exports = [
    { method: 'GET', path: '/users', handler: function (request, reply) {reply('users get');} },
    { method: 'GET', path: '/users/{id}', handler: function (request, reply) {reply('users id get');} }
];
