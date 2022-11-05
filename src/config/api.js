import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.v2.kontenbase.com/query/api/v1/ea53c928-f02d-4a9a-a302-08e539770820/",
});