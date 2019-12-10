import React, {Component} from "react";
import './slider-planet.css';
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";
export default class SliderComponent extends Component{

    constructor() {
        super();
        this.state = {
            planet: {},
            loading: true,

        };
        this.swapiService = new SwapiService();



    }
    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 1500);
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false

        });
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);

    }

    render() {

        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);
        const errorHandler = error ? <ErrorHandler /> : null;
        const spinner = loading ? <Spinner/> : null;
        const centered = loading || error ? 'justify-content-center' : '';
        const content = hasData ? <PlanetView planet = {planet}/> : null;
        return (
            <React.Fragment>
                <div className={`random-planet jumbotron rounded ${centered}`}>
                    {errorHandler}
                    {spinner}
                    {content}
                </div>
            </React.Fragment>

        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}