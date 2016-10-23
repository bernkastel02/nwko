'use strict';
var request = require("request"), rp = require("request-promise-any")
var url = ("https://api.github.com/")

class GitReposAPI {
    getUsersRepos(user) {
        return rp.get({
            uri: `${url}users/${user}/repos`,
            headers: {
                'User-Agent': 'nwko'
            }
        }).then((data) => { 
            return JSON.parse(data);
        });
    }
}

module.exports = GitReposAPI;