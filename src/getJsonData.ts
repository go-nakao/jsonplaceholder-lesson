import axios from "axios";
import { jsonData } from "./constants/jsonData";
// import { useEffect, useState } from "react";

//引数にnameを渡すし、マッチするuserIdをリターンする。
const jdata = jsonData.filter((ser) => {
  return ser.name === "hokkaido";
})[0].userId;

export const getJsonData = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      console.log(res.data);
      return res.data.filter((e: { userId: string }) => {
        return jdata === e.userId;
      }).title;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(jsonData);
};
