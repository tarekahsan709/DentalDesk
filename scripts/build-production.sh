# app.js and index.html
node_modules/.bin/webpack -p --env.production --mode production &&
echo "WebPack completed successfully" &&
# build css
./node_modules/.bin/node-sass ./src/styles/index.scss ./dist/style.css &&
# minify css
./node_modules/.bin/uglifycss ./dist/style.css --output ./dist/style.css &&
echo "Sass built and completed successfully"