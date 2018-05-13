# Logiciels

Afin de faire fonctionner l'application suivante il est nécessaire d'avoir les logiciels suivant :
* MongoDB
* NodeJS
* Ionic
* Cordova

Veillez à les installer, sans quoi il ne sera pas possible de faire fonctionner le projet.


# Dépendances

Afin de faire fonctionner l'application Web (et l'application Mobile) il est nécessaire d'installer les dépendances utilisées par ceux-ci, à savoir :
* `path`
* `express`
* `body-parser`
* `jsonwebtoken`
* `uuid/v4`
* `mongoose`
* `bcrypt`

La procédure d'installation vous demandera d'ouvrir le terminal et de vous placer dans le répertoire de l'application (`Web` ou `Mobile`) puis d'exécuter la commande suivante :

```
>npm install 
```

Celle-ci installera toutes les dépendances indiquées par les fichiers angular comme étant requises.

# Fichier de configuration

Afin de rendre plus simple la configuration par l'utilisateur certaines informations utilisées par l'application se trouvent dans un fichier `config.js` :

```
var uuidv4 = require('uuid/v4');
module.exports = {
    'secret': uuidv4(),
    'port' : 8095,
    'urlDB' : 'mongodb://localhost/projet_liste'
}
```

Ces informations peuvent être modifiés par l'utilisateur s'il en a besoin. Je recommande cependant de laisser la variable `secret` telle quelle, elle n'aura pas un grand impact sur l'application.Il est aussi possible de modifier le port sur lequel l'application Web sera disponible ainsi que l'adresse d'accès à la base de données mongoDB si ceux par défaut ne vous conviennent pas.

# Démarrer MongoDB

## Pour les utilisateurs windows :

Si vous avez ajoutée le fichier contenant les exécutables mongoDB au path, il vous suffira d'executer la commande :
```
mongod
```
Cependant si vous n'avez pas modifié la variable path, il vous faudra aller à l'intérieur du dossier où mongoD est installé (ex : `C:\Program Files\MongoDB\`) et de parcourir l'arborescence du dossier ainsi : `Server\3.6\bin`. Dans ce dossier se trouve l'exécutable mongod.exe que vous pouvez utiliser pour lancer le service mongod.

## Pour les utilisateurs linux :
Lancer le service mongod demande l'utilisation de la commande :
```
mongo
ou
mongod
```

# Démarrer l'application Web

#### _Afin de faire fonctionner l'application web il est nécessaire d'avoir lancé le service mongod auparavant._

* Installez les dépendances dans le dossier `Web` comme expliqué dans la partie _Dépendances_.
* Lancez un terminal et placez vous dans le dossier `Web`, puis utilisez la commande suivante :

```
node app.js
```

* Une suite de message dans la console devrait vous avertir de la réussite ou non du lancement de l'appplication. Il y a deux messages d'avertissement différents pour l'accès à la base de données et un message pour le lancement de l'application elle-même.
* Si l'application ne rencontre pas d'erreurs lors de son lancement elle sera disponible à l'adresse http://localhost au port renseigné dans le fichier `config.js`.

# Démarrer l'application Mobile


#### _Afin de pouvoir utiliser l'application mobile il est nécessaire d'avoir lancé le service mongod ainsi que l'application web auparavant._

## Depuis un terminal

* Installez les dépendances dans le dossier `Mobile` comme expliqué dans la partie _Dépendances_.
* Ouvrez un terminal et placez vous dans le dossier `Mobile`, puis exécutez la commande suivante :
```
ionic serve
```
* Si l'application ne rencontre pas d'erreurs lors de son lancement elle sera disponible à l'adresse http://localhost au port 8100.
































