import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";

export default class extends Controller {
  worldPopulationGrowth = {
    "2020": 7794798739,
    "2019": 7713468100,
    "2018": 7631091040,
    "2017": 7547858925,
    "2016": 7464022049
  }

  connect() {
    const labels = Object.keys(this.worldPopulationGrowth);
    const data = Object.values(this.worldPopulationGrowth);

    new Chart(
      this.element,
      {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Population Growth',
              data: data,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        }
      }
    );
  }
}