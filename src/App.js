import { useEffect, useState } from "react";
import Signin from "./components/Signin";
import Mechanic from "./components/Mechanic";
import Cashier from './components/Cashier'
import Manager from './components/Manager'
import {url, fetchData, objectify} from './api/apiFunctions'


function App() {
  const [currentCarInventory, setCurrentCarInventory] = useState([])
  
  useEffect(() => {
    fetchData(url, 'current_car_inventory', setCurrentCarInventory)
  }, [])
  


  
  const [currentUser, setCurrentUser] = useState('sign in')

  const users = [
    {user:'mech',pass:'mech1',role:'mechanic'},
    {user:'man',pass:'man1',role:'manager'},
    {user:'cash',pass:'cash1',role:'cashier'},
  ]

  return (
    <div>
      {currentUser === 'sign in' && <Signin setCurrentUser={setCurrentUser} passwordData={users}/>}
      {currentUser === 'mechanic' && <Mechanic currentCarInventory={objectify(currentCarInventory, 'current car inventory')} setCurrentUser={setCurrentUser}/>}  
      {currentUser === 'manager' && <Manager setCurrentUser={setCurrentUser}/>}
      { currentUser === 'cashier' && <Cashier setCurrentUser={setCurrentUser}/>}
    </div>
  );
}

export default App;
