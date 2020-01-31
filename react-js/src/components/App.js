import React from 'react';
import user from '../user.json';
import Profile from './profile/Profile'
import statistical from '../statistical.json'
import Statistic from './statistic/Statistic'
const App=()=>{
  return(
    <>
    <Profile user={user} />
    <Statistic statistic={statistical} title=' stats' />
    </>
  )
}
export default App;
