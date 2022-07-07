if(process.env.NODE_ENV === 'projuction'){
    module.exports = require('./prod');
}else {
    module.exports = require('./dev');
}