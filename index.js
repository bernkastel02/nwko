const GithubRepos = require("./GitHubAPI/repository");
const MCServer = require("./MinecraftAPI/serverQuery");
const PKMNNameAPI = require("./PokemonAPI/pokemon.js")

function nwko() {
    return;
}


/* GITHUB API */
nwko.RepoAPI = GithubRepos;

/* MINECRAFT API */
nwko.MCServerAPI = MCServer;

/* POKEMON API */
nwko.PokemonAPI = PKMNNameAPI;


module.exports = nwko;