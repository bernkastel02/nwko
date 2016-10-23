'use strict';
// 
var request = require("request"), rp = require("request-promise-any")
var url = ("https://mcapi.ca/")

class MCServerAPI {
    getServer(serverIP) {
        return rp.get({
            uri: `${url}query/${serverIP}/info`,
            headers: {
                'User-Agent': 'nwko'
            }
        }).then((data) => { 
            return data;
        });
    }
    getMOTD(serverIP) {
        return rp.get({
            uri: `${url}query/${serverIP}/motd`,
            headers: {
                'User-Agent': 'nwko'
            }
        }).then((data) => { 
            return data;
        });
    }
}

module.exports = MCServerAPI;