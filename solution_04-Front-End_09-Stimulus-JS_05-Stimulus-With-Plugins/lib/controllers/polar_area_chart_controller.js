import { Controller } from "@hotwired/stimulus";
import { Chart } from "chart.js";

export default class extends Controller {
  worldReligions = {
    "christianity": 2382000000,
    "islam": 1907000000,
    "atheist": 1193000000,
    "hinduism": 1161000000,
    "buddhism": 506000000,
    "judaism": 14700000
  }

  connect() {
    const labels = Object.keys(this.worldReligions);
    const data = Object.values(this.worldReligions);

    new Chart(
      this.element,
      {
        type: 'polarArea',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Religious Communities',
              data: data,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)',
                'rgb(3, 150, 200)'
              ]
            }
          ]
        }
      }
    );
  }
}