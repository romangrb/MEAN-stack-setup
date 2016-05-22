MEAN Gallery
======================

###  Installation
- Perform a clone of this repo. 
- Make sure MongoDB is installed (`brew install mongodb`)
- Create a MongoDB database named `enmskeleton` (`use enmskeleton`)
- Install packages and start the express.js web service (`npm install && npm start`)
- Install bower dependencies (`bower install`) 
- move it's components to public/lib 
  mv bower_components public/lib
  rm bower_components
  
- import db 

  run mongo service:
    - mongod
  import database
    - mongoimport --db enmskeleton --file gallery.json 

- how to export db for example for backup
  
  run mongo service:
    - mongod
      list of databases
    - show dbs 
      quit to bash
    - press ctrl+C
    - export to fs
      
      mongoexport --db databaseName --collection collectionNaame --out fileName.json
      ex. mongoexport --db enmskeleton --collection blobs --out gallery.json
  