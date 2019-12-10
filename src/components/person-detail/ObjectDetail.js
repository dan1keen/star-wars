import React, {Component} from "react";
import './person-detail.css';
import SwapiService from "../../services/SwapiService";
export default class ObjectDetail extends Component{

    constructor(props) {

        super(props);

        this.swapiService = new SwapiService();
    }



    render() {

            return (
                <div className="person-details card">
                    <img className="person-image"
                         src={`https://starwars-visualguide.com/assets/img/characters/1.jpg`}/>

                    <div className="card-body">
                        <h4>name</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <span className="term">Gender</span>
                                <span>gender</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Birth Year</span>
                                <span>birthYear</span>
                            </li>
                            <li className="list-group-item">
                                <span className="term">Eye Color</span>
                                <span>eyeColor</span>
                            </li>
                        </ul>
                    </div>
                </div>

            )
    }

}