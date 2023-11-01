import { Application } from "@hotwired/stimulus";
// TODO: Import Chartjs
import { Chart } from "chart.js";
import * as Chartjs from "chart.js";

// TODO: Import the Stimulus Controller here
import DoughnutChartController from "./controllers/doughnut_chart_controller.js";
import LineChartController from "./controllers/line_chart_controller.js";
import PolarAreaChartController from "./controllers/polar_area_chart_controller.js";

window.Stimulus = Application.start();

// TODO: Register all Chartjs controllers
const controllers = Object.values(Chartjs).filter(
  (chart) => chart.id !== undefined
);
Chart.register(...controllers);

// TODO: Register your Stimulus Controller below
Stimulus.register("doughnut-chart", DoughnutChartController);
Stimulus.register("line-chart", LineChartController);
Stimulus.register("polar-area-chart", PolarAreaChartController);