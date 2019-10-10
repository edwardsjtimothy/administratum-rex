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

let update = 0;
let victory = true;
export default class index extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        faction: subData[factionData[0]],
        subfaction: subData[factionData[0]][0],

    };

    winOrLose = () => {
        victory === true ?
            victory = false 
            :
            victory = true
        console.log(victory)
    }


    submitUpdate = () => {
        
        let player = this.props.allData.currentUser;
        Axios.post("/api/stats/player", {
                        player: player,
                        faction: "Imperial",
                        sub: this.state.subfaction,
                        wins: +1,
                        losses: 0
                    })

        


        // let data = this.props.allData.data;
        // let player = this.props.allData.currentUser;
        // console.log(data);
        // console.log(player);

        // let playerGames = data.filter(game => {
        //     if (game.player === player) {
        //         console.log(game)
        //         return game
        //     }
        // })
        // console.log(playerGames);

        // if (victory === true) {
        //     if (playerGames.length > 0) {
        //         playerGames.forEach(game => {
        //             if (this.state.subfaction === game.sub) {
        //                 console.log(game.sub);
        //                 console.log("put win");
        //                 Axios.put("/api/stats/player", {
        //                     wins: +1
        //                 });
        //                 return;
        //             } else {
        //                 console.log("for each post win");
        //                 Axios.post("/api/stats/player", {
        //                     faction: this.state.faction,
        //                     sub: this.state.subfaction,
        //                     wins: +1
        //                 });
        //                 return;
        //             };
        //         });
        //     } else {
        //         console.log("NFEP Win")
        //         Axios.post("/api/stats/player", {
        //             player: player,
        //             faction: this.state.faction,
        //             sub: this.state.subfaction,
        //             wins: +1
        //         })
        //     }
        // } else {
        //     if (playerGames.length > 0) {
        //         playerGames.forEach(game => {
        //             if (this.state.subfaction === game.sub) {
        //                 console.log(game.sub);
        //                 console.log("put loss");
        //                 Axios.put("/api/stats/player", {
        //                     losses: +1
        //                 });
        //                 return;
        //             } else {
        //                 console.log("for each post loss");
        //                 Axios.post("/api/stats/player", {
        //                     faction: this.state.faction,
        //                     sub: this.state.subfaction,
        //                     losses: +1
        //                 });
        //                 return;
        //             };
        //         });
        //     } else {
        //         console.log("NFEP loss")
        //         Axios.post("/api/stats/player", {
        //             player: player,
        //             faction: this.state.faction,
        //             sub: this.state.subfaction,
        //             losses: +1
        //         });
        //     };
        // };

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
        // const { faction } = this.state;
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
                            <Select id="win-lose" className="custom-select"
                                defaultValue="I Won"
                                style={{ width: 300 }}
                                onChange={(e) => this.winOrLose(e)}
                            >
                                <Option value={true}>I Won</Option>
                                <Option value={false}>I Lost</Option>
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



