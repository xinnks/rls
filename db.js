const faunadb = require('faunadb');
const { getFaunaError } = require('./db-utils.js');
const faunaClient = new faunadb.Client({
  secret: FAUNA_SECRET
})
const {Create, Collection, Match, Index, Get, Ref, Paginate, Sum, Delete, Add, Select, Let, Var, Update} = faunadb.query;

async function getLink(short){
  try {
    const result = await faunaClient.query(
      Select(
        ["data", "link"],
        Get(
          Match(
            Index('link_from_short'), short
          )
        )
      )
    );
    
    return {
      state: "success",
      body: result
    }
  } catch (error) {
    return {
      state: "error",
      body: getFaunaError(error)
    };
  }
}

async function searchLink(link){
  try {
    const result = await faunaClient.query(
      Select(
        ["data", "short"],
        Get(
          Match(
            Index('short_from_link'), link
          )
        )
      )
    );
    
    return {
      state: "success",
      body: result
    }
  } catch (error) {
    return {
      state: "error",
      body: getFaunaError(error)
    };
  }
}

async function saveLink(link, short){
  try {
    const result = await faunaClient.query(
      Create(
        Collection('links'),
        {
          data: {
            link,
            short
          }
        }
      )
    );
    
    return {
      state: "success",
      body: result.data.short
    }
  } catch (error) {
    return {
      state: "error",
      body: getFaunaError(error)
    };
  }
}

module.exports = {
  getLink,
  searchLink,
  saveLink
}