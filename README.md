# nwko
##### An NPM Module designed to use numerous APIS, mainly Anime ones.

Package: [npmjs.com/package/nwko](npmjs.com/package/nwko)<br>
Github: [https://github.com/nekonez/nwko](https://github.com/nekonez/nwko)

`npm install nwko`

```js
var nwko = require("nwko")
```

# Documentation

### Github Repositories API
`getUsersRepos(user)`

Gets the repositories of a user

Example: 
```js
'use strict';
var gh = new nwko.RepoAPI()

gh.getUsersRepos("nekonez").then((data) => { console.log(data[0]) }) // Returns the first repository the user owns
```

### Minecraft Server API
`getServer(serverIP)`

Gets information about a server, basically queries it.

Example:
```js
var mc = new nwko.MCServerAPI()

mc.getServer("eu.mineplex.com").then((data) => { console.log(data) })
```

### Pokemon API
`getPokemon(pokemon)`

Gets information about a pokemon

Example:
```js
var pkmn = new nwko.PokemonAPI()

pkmn.getPokemon("Charmander").then((data) => { console.log(data) })
```

# This module is a WIP but is still usable!
