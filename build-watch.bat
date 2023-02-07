@echo off

rem app.js and index.html
node_modules\.bin\webpack -p --env.production --mode production -w
echo "WebPack completed successfully"

rem build css
node_modules\.bin\node-sass src\styles\index.scss \dist\application\style.css

rem minify css
.\node_modules\.bin\uglifycss .\dist\application\style.css --output .\dist\application\style.css
echo "Sass built and completed successfully"

pause