import express from 'express';
import router from './routes/routes.js'
import expressFileUpload from 'express-fileupload';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressFileUpload({
    limits: {fileSize: 5000000}, // medido en bytes
    abortOnLimit: true,
    responseOnLimit: 'limite sobrepasado',
})
);
app.use('/', router);


app.listen(PORT, ()=> console.log(`Servidor conectado a puerto: ${PORT}`));