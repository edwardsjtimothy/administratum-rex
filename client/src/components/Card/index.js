import React from 'react'
import "./card.css";

export default function Card(props) {
    return (
        <div class="card">
            <div class="card-body">
                <p>{props.stats}</p>
            </div>
        </div>
    )
}
