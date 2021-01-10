import axios from "axios";
import appConfig from "../../config";

export default async (req, res) => {
  const urlQuery = constructUrlQuery(req.query);
  try {
    const response = await axios.get(appConfig.GITHUB_API + urlQuery);
    res.statusCode = 200;
    res.json(response.data);
  } catch (err) {
    res.statusCode = 500;
    res.json({ message: err.message });
  }
};

function constructUrlQuery(query) {
  const queryKeys = Object.keys(query);
  let urlQuery = "";
  queryKeys.forEach((key, index) => {
    urlQuery += `${index === 0 ? "?" : "&"}${key}=${query[key].replace(
      " ",
      "+"
    )}`;
  });
  return urlQuery;
}

async function fetch(urlQuery, res) {
  try {
    const response = await axios.get(appConfig + urlQuery);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
