import React, { Component } from "react";
import "./form.css";
import { Select } from 'antd';

const { Option } = Select;
const factionData = ["Imperial", "Chaos", "Xenos"];

const subData = {

    Imperial: ["Astra Militarum", "White Scars", "Ultramarines", "Salamanders", "Imperial Fists", "Iron Hands", "Space Wolves", "Blood Angels", "Death Watch" , "Grey Knights", "Adeptus Custodes"],
    Chaos: ["Daemons of Nurgle", "Daemons of Khorne", "Daemons of Slaanesh", "Daemons of Tzeentch", "Thousand Sons", "Death Guard", "Emperor's Children","Black Legion", "World Eaters"],
    Xenos: ["Aeldari", "Necrons", "Genestealer Cults", "Tyranids", "Tau", "Orks", "Harlequins", "Dark Eldar"],

};

    
    export default class index extends Component {

        state = {
            faction: subData[factionData[0]],
            subfaction: subData[factionData[0]][0],
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
            const { factions } = this.state;
            return (
                <div className="new-record">
                    <form id="game-form">
                        <div className="form-group row">
                            <h5 className="form-heading col-sm-2">Faction</h5>
                            <div className="select-con col-sm-10">
                                <Select
                                    defaultValue={factionData[0]}
                                    style={{ width: 120 }}
                                    onChange={this.handleFactionChange}
                                >
                                    {factionData.map(faction => (
                                        <Option key={faction}>{faction}</Option>
                                    ))}
                                </Select>
                            </div>
                            <h5 className="form-heading col-sm-2">Subfaction</h5>
                            <div className="select-con col-sm-10">
                                <Select
                                    style={{ width: 120 }}
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
                                <select className="custom-select">
                                    <option selected>Choose...</option>
                                    <option value="win">I won</option>
                                    <option value="lose">I lost</option>
                                </select>
                            </div>
                            <div className="form-submit">
                                <button className="btn btn-warning">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    
    

