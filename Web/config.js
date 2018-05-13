var uuidv4 = require('uuid/v4');
module.exports = {
    'secret': uuidv4(),
    'port' : 8095,
    'urlDB' : 'mongodb://localhost/projet_liste'
}//Constantes pouvant nécessiter une modification par l'utilisateur