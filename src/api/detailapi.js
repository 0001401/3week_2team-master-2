import axios from "axios";
import { addComment } from "../Redux/modules/detail";

const BASE_URL = "http://localhost:3030";

export const addCommentApi = (comment) => {
  axios.post(`${BASE_URL}/comments`, comment);
};
