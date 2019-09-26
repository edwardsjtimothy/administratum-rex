import React from 'react'
import "./card.css";

export default function Card(props) {
    return (
        <div class="card">
            <div class="card-body">
                <p>Player: {props.player} | Faction: {props.faction} | Subfaction: {props.sub} | Wins: {props.wins} | Loses: {props.loses}</p>
            </div>
        </div>
    )
}
