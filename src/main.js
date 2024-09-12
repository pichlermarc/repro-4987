import update from './update.js';
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-http";

const exporter = new OTLPTraceExporter();

// even though Rollup is bundling all your files together, errors and
// logs will still point to your original source modules
console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

update();