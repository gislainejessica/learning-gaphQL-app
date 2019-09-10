Para rodar concorrentemente dois localhostes com um comando
na raiz script
`"server": "nodemon server.js"`
`"client": "npm start --prefix pasta_client"`
`"tudoJunto" : "concurrently \"npm run server \" \" npm run client\" "`
no terminal nós rodamos
`npm run tudoJunto`