import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header/Header';
import ShowPlayer from './component/showPlayer/ShowPlayer';
import data from './playerData.json';
import { useEffect, useState } from 'react';
import SelectPlayer from './component/cart/SelectPlayer';


function App() {
  // stored players data from json file by useEffect
  let [players, setPlayers] = useState([])
  useEffect(() => {
    setPlayers(data)
  }, [])

  // created new array by useState  
  let [select, setSelect] = useState([])

  // select button event handler 
  const eventHandle = (data) => {
    const newSelect = [...select, data]
    setSelect(newSelect);
  }

  return (
    <div>
      <Header></Header>
      <div className="container d-flex py-5">
        <div className='col-md-8'>
          <button className="btn btn-lg btn-success mb-4">Available Player <span className="badge badge-light">{players.length}</span></button>
          {
            players.map(player => <ShowPlayer key={player.id} handler={eventHandle} player={player}></ShowPlayer>)
          }
        </div>
        <div className='col-md-4 mt-2'>
           <SelectPlayer count={select.length} data={select}></SelectPlayer>
        </div>
      </div>
    </div>
  );
}

export default App;
