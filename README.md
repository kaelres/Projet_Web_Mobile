#Logiciels

Afin de faire fonctionner l'application suivante il est nécessaire d'avoir els logiciels suivant :
* MongoDB
* NodeJS
* Ionic
* Cordova
Veillez à les installer, sans quoi il ne sera pas possible de faire fonctionner le projet.


#Dépendances

Afin de faire fonctionner l'application Web (et l'application Mobile) il est nécessaire d'installer les dépendances utilisées par ceux-ci, à savoir :
* `path`
* `express`
* `body-parser`
* `jsonwebtoken`
* `uuid/v4`
* `mongoose`
* `bcrypt`

La procédure d'installation vous demandera d'ouvrir le terminale et de vous placer dans le répertoire de l'application (`Web` ou `Mobile') puis d'executer la commande suivantes :

```
>npm install 
```

Celle-ci installera toutes les dépendances indiqués par les fichiers angular comme étant requises.

#Fichier de configuration

Afin de rendre plus simple l'utilisation et la configuration de l'application par l'utilisateur certaines informations utilisées par l'application se trouvent dans un fichier `config.js` :

```
var uuidv4 = require('uuid/v4');
module.exports = {
    'secret': uuidv4(),
    'port' : 8095,
    'urlDB' : 'mongodb://localhost/projet_liste'
}
```

Ces informations peuvent être modifiés par l'utilisateur s il en a besoin. Nous recommandons cependant de conserver la variable secret et de ne modifier que le port sur lequel l'application Web sera disponible ainsi que l'adresse d'accès à la base de données mongoDB.

#Démarrer MongoDB

##Pour les utilisateurs windows :

Si vous avez ajoutée le fichier contenant les executables mongoDB au path, il vous suffira d'executer la commande :
```
mongod
```
Cependant si vous n'avez pas modifié la variable path, il vous faudra aller dans le dossier ou mongoD s'est installé (ex : `C:\Program Files\MongoDB\`) et d'ouvir l'arborescence telle quelle : `Server\3.6\bin`. Dans ce dossier se trouve l'executable mondod.exe que vous pouvez lancer.

##Pour les utilisateurs linux :
Lancer mongod demande l'utilisateion de la commande :
```
mongo
ou
mongod
```

#Démarrer l'application Web

####_Afin de faire fonctionner l'application web il est nécessaire d'avoir lancer le service mongod auparavant._

* Installez les dépendances dans le dossier `Web` comme expliqué dans la partie "Dépendances".
* Lancez un terminal et placez vous dans le dossier `Web`, puis utiliseé la commande suivante :

```
node app.js
```

* Une suite de message dans la console devrait vous avertir de la réussite ou non du lancement de l'appplication. Il y a deux messages d'avertissement différents pour l'accès à la base de données.
*Si l'application ne rencontre pas d'erreurs lors de son lancement elle sera disponible à l'adresse http://localhost au port `config.js`.

#Démarrer l'application Mobile


####_Afin de pouvoir faire fonctionner l'application mobile il est nécessaire d'avoir lancé le service mongod ainsi que l'application web auparavant._

##Depuis un terminal

* Installez les dépendances dans le dossier `Mobile` comme expliqué dans la partie "Dépendances".
*Ouvrez un terminal et placez vous dans le dossier `Mobile`, puis utilisez la commande suivante :
```
ionic serve
```
*Si l'application ne rencontre pas d'erreurs lors de son lancement elle sera disponible à l'adresse http://localhost au port 8100.
































