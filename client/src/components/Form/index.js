import React from "react"
import "./form.css";

export default function index() {

    const selectListData = {

        "subfaction": {
            imp: {
                text: ["Astra Militarum", "White Scars", "Ultramarines", "Salamanders", "Imperial Fists", "Iron Hands", "Space Wolves", "Blood Angels", "Death Watch" , "Grey Knights", "Adeptus Custodes"],
                value: ["Mil", "WScars", "Ultra", "Sala", "IFists", "IHands", "SWolves", "BAngels", "DWatch", "GKnights", "Cus"]
            },
            cha: {
                text: ["Daemons of Nurgle", "Daemons of Khorne", "Daemons of Slaanesh", "Daemons of Tzeentch", "Thousand Sons", "Death Guard", "Emperor's Children","Black Legion", "World Eaters"],
                value: ["Nurgle","Khorne","Slaanesh","Tzeentch","TSons","DGuard","EChildren","BLegion","WEaters"]
            },
            xen: {
                text: ["Aeldari", "Necrons", "Genestealer Cults", "Tyranids", "Tau", "Orks", "Harlequins", "Dark Eldar"],
                value: ["Eld", "Nec", "Gene", "Tyr", "Tau", "Orks", "Harl", "DEld"]
            },
        }
    }


    return (
        <div className="new-record">
            <form id="game-form">
                <div className="form-group row">
                    <h5 className="form-heading col-sm-2">Faction</h5>
                    <div className="select-con col-sm-10">
                        <select name="faction" className="custom-select mr-sm-2">
                            <option selected>Choose...</option>
                            <option value="imp">Imperium</option>
                            <option value="cha">Chaos</option>
                            <option value="xen">Xenos</option>
                        </select>
                    </div>
                    <h5 className="form-heading col-sm-2">Subfaction</h5>
                    <div className="select-con col-sm-10">
                        <select name="subfaction" id="subfaction" className="custom-select mr-sm-2">
                            <option selected>Choose...</option>
                            
                        </select>
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

