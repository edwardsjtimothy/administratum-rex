import React from 'react'
import "./card.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="float-left">
                    <h5>Player: {props.player}</h5>
                    <h5>Faction: {props.faction}</h5>
                    <h5>Subfaction: {props.sub}</h5>
                </div>
                <div id="spacer" className="score-board float-right">
                    <h2>Defeat</h2>
                    <h2 className="red">{props.losses}</h2>
                </div>
                <div className="score-board float-right">
                    <h2>Victory</h2>
                    <h2 className="green">{props.wins}</h2>
                </div>
            </div>
        </div>
    )
}
