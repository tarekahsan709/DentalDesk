node_modules/.bin/webpack -p --env.production --mode production --profile --json > stats.json
node_modules/.bin/webpack-bundle-analyzer stats.json dist/application/