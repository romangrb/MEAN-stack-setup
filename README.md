LINUX

1. Check your OS bits

You can also use the “file” command with a special argument (“/sbin/init”) 
to find out whether your system is 32-bit or 64-bit. 

Type the following command and press Enter.

  file /sbin/init
  
2. Installing NVM (Node Package Manager)

  nvm install 0.10.13
  
3. Show list of nodejs versions

  nvm ls-remote
  
4. Installing

  nvm install v.6.***
  
5. Check nodejs version and location

  node -v
  which node js
  
6. Install all packages for back-end

  npm i
  
7. Install packages for front-end

  bower i
  
8. Configure database

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
