# lint typescript
bash scripts/lint.sh &

# build app.js file and copy index.html using the development Webpack config
node_modules/.bin/webpack --config webpack.config.dev.js --mode development -w &

# build scss
./node_modules/.bin/node-sass ./src/styles/index.scss ./dist/style.css &

# watch scss
./node_modules/.bin/node-sass ./src/styles/index.scss ./dist/style.css -w
