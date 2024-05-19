# upload web application, still old config with application as the folder
cd dist/application &&
git add . &&
git commit -m "deploy" &&
git push origin master --force

# upload demo application
cd ../
cp -R ./application/ ./demo/
echo demo.apexo.app > ./demo/CNAME
surge demo
rm -rf demo