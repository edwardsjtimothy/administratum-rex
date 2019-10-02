import React, { Component } from 'react'
import Axios from "axios";
import "./body.css";
import Form from "../Form";
import Card from "../Card";
import Loader from "react-loader-spinner";
import { Scrollbars } from "react-custom-scrollbars";

export default class Body extends Component {
    state = {
        loading: false,
        data: [],
        clickedNum: 0
    }

    componentDidMount () {
        this.setState({ loading: true});
        Axios.get("/api/stats")
        .then(res=> {
            let data = res.data; 
            console.log(data);   
            this.setState({ data });
            
            this.setState({ loading: false});
        });
    };

    tabFocus(e) {

        let clicked = e.target.id;
        let clickedNum = clicked.replace(/^\D+/g, '');
        let tab1 = document.getElementById("tab-1")
        let tab2 = document.getElementById("tab-2")
        let tab3 = document.getElementById("tab-3")

        console.log(clicked);
        console.log("clicked num " + clickedNum);

    
        switch (clicked) {
            case "tab-1":
                // document.getElementById("#tab-2").style.background = "rgba(46, 49, 49, .9)";
                tab2.style.background = "rgba(46, 49, 49, .9)";
                tab3.style.background = "rgba(46, 49, 49, .9)";


                break;
            case "tab-2":
                // document.getElementById("#tab-1").style.background = "rgba(46, 49, 49, .9)";
                tab1.style.background = "rgba(46, 49, 49, .9)";
                tab3.style.background = "rgba(46, 49, 49, .9)";

                // document.getElementById("#tab-3").style.background = "rgba(46, 49, 49, .9)";
                break;
            case "tab-3":
                // document.getElementById("#tab-2").style.background = "rgba(46, 49, 49, .9)";
                // document.getElementById("#tab-1").style.background = "rgba(46, 49, 49, .9)";
                tab1.style.background = "rgba(46, 49, 49, .9)";
                tab2.style.background = "rgba(46, 49, 49, .9)";

                break;
        }


        document.getElementById(clicked).style.background = "rgba(46, 49, 49, .7)";
    } 

    render() {
            return (
                <div className="body-wrap container">
                    <div className="row">
                        <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                            <div className="sub-nav">
                                <h1 className="nav-user">Tim</h1>
                                <div className="nav-tabs">
                                    <button className="nav-btn btn" id="tab-1" onClick={this.tabFocus}>Leaderboard</button>
                                    <button className="nav-btn btn" id="tab-2" onClick={this.tabFocus}>Your Stats</button>
                                    <button className="nav-btn btn" id="tab-3" onClick={this.tabFocus}>Add New</button>
                                </div>
                            </div>
                            <div className="clear-float"></div>
                            <div className="body-con">

                                <div className="card-con"> 
                               
                               {this.state.loading===true? 
                               <Loader className="loader"
                                       type="Grid"
                                       color="#334d4d"
                                       height={600}
                                       width={400}
                                   />
                               
                               : 
                               
                                    <Scrollbars>
                                    {this.state.data.map(stats => (
                                        <Card 
                                        player={stats.player} 
                                        faction={stats.faction} 
                                        sub={stats.sub} 
                                        wins={stats.wins} 
                                        losses={stats.losses} />
                                    ))}
                                    </Scrollbars>
                               }
                                </div>
                            </div>
                        </div>
                        <div className="col-0 col-sm-0 col-md-1 col-lg-1"></div>
                    </div>
                </div>
            )
            
        }
    }



