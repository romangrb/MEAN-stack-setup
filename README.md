LINUX

1. Check your OS bits

  You can also use the “file” command with a special argument (“/sbin/init”) to find out whether your system is 32-bit or 64-bit.

  Type the following command and press Enter:

  file /sbin/init

2. Installing NVM (Node Package Manager)

  nvm install 0.10.13

3. Show list of nodejs versions

  nvm ls-remote

4. Installing

  nvm install v.6.***

5. Check nodejs version and location

  node -v which node js

7. Download projects
  
  git clone https://github.com/romangrb/MEAN-stack-setup.git

8. Install packeges to projects

  npm i

9. Run project:

  gulp
  
  also it shows you ipAddress & port to preview, you can change it in gulpfile in line gulp.task('connect'....

  


Configure database

import database

run mongo service (not close this service):
  - mongod
run mongo client (in another terminal):
  - mongo
import database  :
  - mongoimport --db mongodb  --file mongodb.json 
check collection :
  - mongo
  - use mongodb         (use collection [name])
  - db.mongodb.find()   (must show all imported collections)
export database (for example backup)

run mongo service (not close this service):
- mongod
run mongo client (in another terminal):
- mongo 
show list of databases
- show dbs 
quit to bash
- press ctrl+C
export to file system
- mongoexport --db databaseName --collection collectionNaame --out fileName.json
npm install -g browserify npm install babelify browserify -d -e app.js -o bundle.js -t [ babelify --modules common]`