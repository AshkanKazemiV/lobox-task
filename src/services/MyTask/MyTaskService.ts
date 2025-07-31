import axios from "axios";
import { MyTaskUrls } from "./urls";
import { IGetData } from "./Models";

export class MyTaskService {
  async GetData() {
    try {
      const response = await axios.get<IGetData[]>(MyTaskUrls.getData);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
