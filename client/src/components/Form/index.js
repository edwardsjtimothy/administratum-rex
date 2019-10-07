import React, { Component } from "react";
import "./form.css";
import {Select} from "antd";
import 'antd/es/select/style/css';
import Axios from "axios";
// import Radial from "../Radial";

const {Option} = Select;

const factionData = ["Imperial", "Chaos", "Xenos"];
const subData = {

    Imperial: ["Astra Militarum", "White Scars", "Ultramarines", "Salamanders", "Imperial Fists", "Iron Hands", "Space Wolves", "Blood Angels", "Death Watch", "Grey Knights", "Adeptus Custodes"],
    Chaos: ["Daemons of Nurgle", "Daemons of Khorne", "Daemons of Slaanesh", "Daemons of Tzeentch", "Thousand Sons", "Death Guard", "Emperor's Children", "Black Legion", "World Eaters"],
    Xenos: ["Aeldari", "Necrons", "Genestealer Cults", "Tyranids", "Tau", "Orks", "Harlequins", "Drukahri"],

};

export default class index extends Component {

    state = {
        faction: subData[factionData[0]],
        subfaction: subData[factionData[0]][0],
    };



    submitUpdate =(props,e)=> {
        e.preventDefault();
        let data = props.allData.data;
        let player = props.allData.player;

        let playerGames = data.filter(game=> {
            if (game.player === player) {
                return true
            }
            console.log(playerGames);
        })

    
        playerGames.forEach(game=>{
            if (this.state.subfaction === game.sub) {
                Axios.update("/player")
                .then(res=> {
                    console.log(res.body);
                });
            } else {
                Axios.post("/player")
                .then(res=> {
                    console.log(res.body)
                    
                });
            };
        });
    };

    handleFactionChange = value => {
        this.setState({
            faction: subData[value],
            subfaction: subData[value][0],
        });
    };

    
    onSubChange = value => {
        this.setState({
            subfaction: value,
        });
    };

    render() {
        const { faction } = this.state;
        return (
            <div className="new-record">
                {/* <Radial></Radial> */}
                <form id="game-form">

                    <div className="form-group row">
                        <h5 className="form-heading col-sm-2">Faction</h5>
                        <div className="select-con col-sm-10">
                            <Select className="custom-select"
                                defaultValue={factionData[0]}
                                style={{ width: 300 }}
                                onChange={this.handleFactionChange}
                                
                            >
                                {factionData.map(faction => (
                                    <Option key={faction}>{faction}</Option>
                                ))}
                            </Select>
                        </div>
                        <h5 className="form-heading col-sm-2">Subfaction</h5>
                        <div className="select-con col-sm-10">
                            <Select className="custom-select"
                                style={{ width: 300 }}
                                value={this.state.subfaction}
                                onChange={this.onSubChange}
                            >
                                {this.state.faction.map(sub => (
                                    <Option key={sub}>{sub}</Option>
                                ))}
                            </Select>
                        </div>
                        <h5 className="form-heading col-sm-2">Outcome</h5>
                        <div className="select-con col-sm-10">
                            <Select className="custom-select"
                                defaultValue="I Won"
                                style={{ width: 300 }}
                            >
                                <Option value="win">I Won</Option>
                                <Option value="lose">I Lost</Option>
                            </Select>
                        </div>
                        <div className="form-submit">
                            <button className="btn btn-warning" onClick={this.submitUpdate}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

    

