const QueryString = require("qs");
const modelsitems = require("../models/productModel");

const AllApi = async (req, res) => {
  let { company, name, feature, sort ,select} = req.query;
  let queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    //regex is used for searching purpose find all the similar
    // things  i represent caseincenctive
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (feature) {
    queryObject.feature = feature;
  }

  let Apiresult = modelsitems.find(queryObject);

  if (sort) {
    //   query sort (name price)
    // url sort = name,price
    let urlProblem = sort.split(",").join(" ");
    Apiresult = Apiresult.sort(urlProblem);
  }
  
  if(select){
    let urlselect = select.split(',').join(' ');
    Apiresult = Apiresult.select(urlselect)
  }
 
  let page = Number(req.query.page) || 1 ;
  let limit = Number(req.query.limit) || 4   ;
let skip = (page - 1) * limit 

Apiresult = Apiresult.skip(skip).limit(limit);
  let productdata = await Apiresult;
  res.status(200).json({ productdata });

 
};

module.exports = AllApi;
