const {Client}= require('pg');
const config = require('config');

const client = new Client(config.get('db.postgres.uri'));
client.connect();

const getdata = async (string) => {
    const data = await client.query(string);
    return data
  };
  
  module.exports = getdata;
