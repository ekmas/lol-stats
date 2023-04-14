const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const {region, puuid } = event.queryStringParameters;

    const url = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=15&api_key=${process.env.VITE_API_KEY}`

    const { data } = await axios.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};