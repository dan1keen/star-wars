import React, {Component} from "react";
import './list-objects.css';
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";
export default class ListObjects extends Component{

    constructor() {
        super();
        this.state = {
            people: null,
        }
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((people) =>{
                this.setState({
                    people
                })
            })
    }

    renderItems(arr) {
        return arr.map(({id, name}) =>{
            return(
                <li className='list-group-item' key={id}
                onClick={() => {this.props.onItemClicked(id)}}>
                    {name}
                </li>
            )
        })
    }

    render() {

        const {people} = this.state;

        if(!people){
            return <Spinner/>
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(people)}
            </ul>

        )
    }

}