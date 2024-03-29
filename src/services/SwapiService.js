export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Couldnt fetch url ${url} `+
                `, received ${res.status}` )
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}` );
        return this._transformPerson(person);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}` );
        return this._transformPlanet(planet);
    }

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformShip);
    }

    async getStarShip(id) {
        const ship = await this.getResource(`/starships/${id}` );
        return this._transformShip(ship);
    }

    _extractId(item){
        const idRegex = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegex)[1];
        return id;
    }
    _transformPlanet = (planet) =>{

        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformPerson = (person) => {

        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
    _transformShip = (ship) =>{

        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.costInCredits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
            cargoCapacity: ship.cargoCapacity
        }
    }


}