import React, {Component} from "react";
import AppHeader from "./app-header";
import SliderComponent from "./slider";
import ListObjects from "./list-objects";
import ObjectDetail from "./person-detail";
import './app.css';

export default class App extends Component{


    constructor() {
        super();
        this.state = {
            selectedPerson: null
        }
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render(){
           return(
               <div className='app'>
                    <AppHeader />
                    <SliderComponent />
                    <div className='row justify-content-center mb-2'>
                        <div className='col-md-6 '>
                            <ListObjects onItemClicked = {this.onPersonSelected}/>
                        </div>
                        <div className='col-md-6 '>
                            <ObjectDetail personId={this.state.selectedPerson}/>
                        </div>
                    </div>
               </div>
           );
    }

}
