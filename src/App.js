import './App.css';
import FriendsReferred from './Pages/FriendsReferred/FriendsReferred';
import ReferandEarn from './Pages/Refer&Earn/ReferandEarn';
import { Routes , Route } from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound/PageNotFound';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/FriendsReferred' element={ <FriendsReferred /> } />
        <Route path='/' element={ <ReferandEarn /> }/>
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
