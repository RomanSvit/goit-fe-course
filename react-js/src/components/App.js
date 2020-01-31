import React from "react";
import user from "../user.json";
import statistic from "../statistical_data.json";
import Profile from "./profile/Profile";
import Statistic from "./statistic/Statistic";
​
// console.log(statistical);
​
const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistic statistic={statistic} />
    </>
  );
};
​
export default App;