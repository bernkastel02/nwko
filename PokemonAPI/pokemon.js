'use strict';
// 
var request = require("request"), rp = require("request-promise-any")
var url = ("http://pokeapi.co/api/v2/")

class PokemonAPI {
    getPokemon(pkmn) {
        var pkmnLower = pkmn.toLowerCase()
        return rp.get({
            uri: `${url}pokemon/${pkmnLower}`,
            headers: {
                'User-Agent': 'nwko'
            }
        }).then((data) => { 
            return JSON.parse(data)
        });
    }
}

module.exports = PokemonAPI;