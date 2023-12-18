import React, { useEffect, useState } from "react";
import Navebar from "../../../shared/navbar";
import { apiGetMethod } from "../../../rest/rest";
import { appApiRoutes } from "../../../utility/apiRoutes";

const Dashboard = () => {
  useEffect(() => {
    getHomePageData();
  }, []);
  const [homePageList, setHomePageList] = useState([]);
  async function getHomePageData() {
    try {
      const headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTAxMzI2ODcsImV4cCI6MTY5MDEzMjgwN30.WAu5UU2uZYgtjF4SzQ-Zj7z8vU1IW9usJ0mW80KYZIg",
      };
      const response = await apiGetMethod(appApiRoutes.homePage, "", headers);
      if (response.status === 200) {
        setHomePageList(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Navebar />
      <div></div>
    </>
  );
};

export default Dashboard;
