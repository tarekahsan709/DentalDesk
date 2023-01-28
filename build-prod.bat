@echo off

node_modules\.bin\webpack -p --env.production --mode production
echo "WebPack completed successfully"

node_modules\.bin\node-sass src\styles\index.scss \dist\application\style.css
echo "SCSS built successfully"

.\node_modules\.bin\uglifycss .\dist\application\style.css --output .\dist\application\style.css
echo "CSS uglify completed successfully"

rm dist\application\_session