module.exports = [
    { method: 'GET', path: '/products',  handler: getProducts },
    { method: 'GET', path: '/products/{id}', handler: getProduct  },
    { method: 'POST', path: '/products', handler: addProduct }
];

var products = [{
        id: 1,
        name: 'Guitar'
    },
    {
        id: 2,
        name: 'Banjo'
    }
];

function getProducts(request) {

    if (request.query.name) {
        request.reply(findProducts(request.query.name));
    }
    else {
        request.reply(products);
    }
}

function findProducts(name) {

    return products.filter(function(product) {
        return product.name.toLowerCase() === name.toLowerCase();
    });
}

function getProduct(request) {

    var product = products.filter(function(p) {
        return p.id === parseInt(request.params.id);
    }).pop();

    request.reply(product);
}

function addProduct(request) {

    var product = {
        id: products[products.length - 1].id + 1,
        name: request.payload.name
    };

    products.push(product);

    request.reply(product).code(201).header('Location', '/products/' + product.id);
}