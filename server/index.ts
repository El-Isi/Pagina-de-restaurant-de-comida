import Server from './classes/server';
import bodyParser from 'body-parser';
import pool from './database/database';
import postRoutes from './routes/post'
import cors from 'cors';

const server = new Server();

const database = pool;

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

//cors
server.app.use(cors({origin:true, credentials: true}));

// Rutas de mi app
//server.app.use('/posts', UsuarioRutes );
server.app.use('/post', postRoutes );

// Levantar express
server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`);
});