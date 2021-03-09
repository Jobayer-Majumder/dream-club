import React from 'react';

const SelectPlayer = (props) => {
    const players = props.data;
    const totalBudget = players.reduce((init, player) => init + player.salary, 0)
    return (
        <div>
            <button className='btn btn-lg btn-success mb-3'>Club Summary</button>
            <h5>Selected Player <span className="badge badge-success"> {props.count}</span> </h5>
            {
                players.map(player => <div className='bg-light p-2 text-center'>
                    <p key={player.id}>{player.name} <span className="badge badge-success">$ {player.salary}</span></p>
                </div>)
            }
            <h5 className='text-center'>Total Budget : $ {totalBudget}</h5>
        </div>
    );
};

export default SelectPlayer;