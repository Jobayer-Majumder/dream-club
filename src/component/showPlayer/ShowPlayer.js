import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faMoneyCheckAlt, faPlus } from '@fortawesome/free-solid-svg-icons'

const ShowPlayer = (props) => {
    const eventHandle = props.handler;
    const { name, salary, club, image } = props.player;
    return (
        <div className='d-flex p-4 border border-success bg-light rounded mb-4'>
            <div className="col-md-4 text-center">
                <img className='w-50 border rounded bg-success' src={image} alt=""/>
            </div>
            <div className="col-md-8">
                <h4>{name}</h4>
                <p > <FontAwesomeIcon icon={faFutbol} /> {club}</p>
                <p className='font-weight-bold'><FontAwesomeIcon icon={faMoneyCheckAlt}/> Market Value  ${salary}</p>
                <button className="btn btn-success w-25 font-weight-bold" onClick={() => eventHandle(props.player)}><FontAwesomeIcon icon={faPlus}/> Select</button>
            </div>
        </div>
    );
};

export default ShowPlayer;