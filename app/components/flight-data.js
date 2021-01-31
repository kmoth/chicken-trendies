import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FlightDataComponent extends Component {
    @tracked mode = 'A';

    @action setMode(mode) {
        this.mode = mode;
    }

    get data() {
        let flights = this.args.data;
        switch (this.mode) {
            case 'A':
            case 'B':
            return {
                labels: flights.map(flight => flight.name),
                datasets: [
                    {
                        label: 'Flight Details Word Count',
                        backgroundColor: '#FF5500',
                        data: flights.map(flight => flight.details != null ? flight.details.match(/\S+/g).length : 0)
                    }
                ]
            }

            case 'C':
            return {
                labels: flights.map(flight => flight.name),
                datasets: [
                    {
                        label: 'Flight Details Word Count',
                        backgroundColor: flights.map(flight => `#${Math.floor(Math.random()*16777215).toString(16)}`),
                        data: flights.map(flight => flight.details != null ? flight.details.match(/\S+/g).length : 0)
                    }
                ]
            }
        }
    }

    get options() {
        switch (this.mode) {
            case 'A':
            case 'B':
            return {
                legend: {
                    display: true
                }
            }

            case 'C':
            return {
                legend: {
                    display: false
                }
            }
        }
    }
}