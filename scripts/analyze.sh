node_modules/.bin/webpack --profile --json > stats.json
node_modules/.bin/webpack-bundle-analyzer stats.json /dist/application