import axios from "axios";
import { configuration } from "../configure";

const api = axios.create({
  baseURL: configuration.apiUrl,
});
export { api };
