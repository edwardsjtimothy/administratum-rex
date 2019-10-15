import React, { Component } from "react";
import "./form.css";
import { Select } from "antd";
import 'antd/es/select/style/css';
import Axios from "axios";
// import Radial from "../Radial";

const { Option } = Select;

const factionData = ["Imperial", "Chaos", "Xenos"];
const subData = {

    Imperial: ["Astra Militarum", "White Scars", "Ultramarines", "Salamanders", "Imperial Fists", "Iron Hands", "Space Wolves", "Blood Angels", "Death Watch", "Grey Knights", "Adeptus Custodes", "Adeptus Soroitas"],
    Chaos: ["Daemons of Nurgle", "Daemons of Khorne", "Daemons of Slaanesh", "Daemons of Tzeentch", "Thousand Sons", "Death Guard", "Emperor's Children", "Black Legion", "World Eaters"],
    Xenos: ["Aeldari", "Necrons", "Genestealer Cults", "Tyranids", "Tau", "Orks", "Harlequins", "Drukahri"],

};

let wins = 0;
let losses = 0;

export default class index extends Component {
    constructor(props) {
        super(props)
        
        // this.winOrLose = this.winOrLose.bind(this);
    }

    state = {
        factionData: factionData[0],
        faction: subData[factionData[0]],
        subfaction: subData[factionData[0]][0],
        victory: "I Won",
        win: 0,
        lose: 0
    };

    // getBeforeUpdate = () => {
    //     Axios.get("/api/stats")
    //     .then(res=> {
    //         let data = res.data;  
    //         this.setState({ data });
    //         this.getBeforeUpdate();
    //         console.log(data);
    //     }); 
    // }

    submitUpdate = () => {
        // this.getBeforeUpdate();
        let player = this.props.allData.currentUser;
        let data = this.props.allData.data;
        let subfaction = this.state.subfaction;
        let vic = this.state.victory
        console.log("victory" + vic);

        if (vic === true || "I Won") {
            wins++;
            // this.setState({ win: this.state.win + wins})
        } else {
            losses++;
            // this.setState({ lose: this.state.lose + losses})
        };

        console.log(this.state.win, this.state.lose);

        let playerGames = data.filter(game => {
            if (game.player === player && game.subfaction === subfaction) {
                return game
            }
        });

        console.log(playerGames);

        if (playerGames.length > 0) {
            console.log("playerGames exists")
            Axios.put("/api/stats/player", {
                player: player,
                subfaction: this.state.subfaction,
            },
            {
                wins: this.state.win,
                losses: this.state.lose
            });

        } else {
            console.log("playerGames does not exist")
            console.log(this.state.win, this.state.lose);
            Axios.post("/api/stats/player", {
                player: player,
                faction: this.state.factionData,
                subfaction: this.state.subfaction,
                wins: this.state.win + wins,
                losses: this.state.lose + losses
            });
        };
    };

    handleFactionChange = value => {
        this.setState({
            factionData: value,
            faction: subData[value],
            subfaction: subData[value][0],
        });
    };


    onSubChange = value => {
        this.setState({
            subfaction: value,
        });
    };

    winOrLose = value => {
        this.setState({ 
            victory: value, 
        }); 
        console.log(this.state.victory);
    };

    render() {
        // const { faction } = this.state;
        return (
            <div className="new-record">
                {/* <Radial></Radial> */}
                <form id="game-form">

                    <div className="form-group row">
                        <h5 className="form-heading col-sm-2">Faction</h5>
                        <div className="select-con col-sm-10">
                            <Select className="custom-select"
                                style={{ width: 300 }}
                                defaultValue={factionData[0]}
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
                            <Select id="win-lose" className="custom-select"
                                style={{ width: 300 }}
                                defaultValue="I Won"
                                value={this.state.victory}
                                onChange={this.winOrLose}
                            >

                                {/* {this.state.victory.map(vic => (
                                    <Option key={vic}>{vic}</Option>
                                ))} */}

                                <Option key={true}>I Won</Option>
                                <Option key={false}>I Lost</Option>
                            </Select>
                        </div>
                        <div className="form-submit">
                            <button type="button" className="btn btn-warning" onClick={this.submitUpdate}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}



