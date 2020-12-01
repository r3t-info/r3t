import axios from "axios";

export default async function getData(dataset) {

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_R3T_CMS_HOST + "/" + dataset);
    const data = res.data;
    return data;
  } catch (error) {
    return error;
  }
}
