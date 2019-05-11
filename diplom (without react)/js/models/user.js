const users = [];
const Datastore = require('nedb');
const connect = require('camo').connect;
const Document = require('camo').Document;

class UserScheme extends Document {
    constructor() {
        super();
        this.name = String;
        this.age = Number;
    }
}
module.exports = UserScheme;