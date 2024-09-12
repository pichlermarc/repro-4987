# Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/4987

## How to use:

Run `npm install && npm run build` -> a warning will appear discouraging the use of `eval`, however, the final bundle will not include it as it gets tree-shaken out.