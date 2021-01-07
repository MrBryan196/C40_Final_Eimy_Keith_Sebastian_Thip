const axios = require('axios');
// const Representatives = require('../db/models/representatives');

exports.getYelpAPI = async (request, response) => {
  try {
    const data = await axios.get(
      'https://api.yelp.com/v3/businesses/search?location="33127"&term="business"&radius=300',
      { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
    );
    response.json(data.data.businesses);
  } catch (e) {
    console.log(e);
  }
};

exports.searchYelpAPI = async (request, response) => {
  try {
    const { location } = request.query;
    const data = await axios.get(
      `https://api.yelp.com/v3/businesses/search?location=${location}`,
      { headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` } }
    );
    response.json(data.data.businesses);
  } catch (e) {
    console.log(e);
  }
};

//Ciceros API

// exports.getRepByZipcode = async (req, res) => {
//     try {
//         const address = req.query.address;
//         const { data } = await axios({
//             url: `https://cicero.azavea.com/v3.1/official?search_postal=${address}&search_country=US&order=district_type&sort=desc&format=json&key=${process.env.CICERO_API_KEY}`,
//             method: 'GET'
//         });
//         const response = data.response.results.candidates[0];
//         res.status(200).json(response);
//     } catch (error) {
//         console.log(error);
//     }
// };
