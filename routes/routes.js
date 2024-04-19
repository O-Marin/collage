import express from 'express';
import path from 'path';


const router = express.Router();
const __dirname = import.meta.dirname

router.use(express.static(path.join(__dirname, 'assets')))

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../views/formulario.html'));
})

router.get('/collage', (req,res)=>{
    res.sendFile(path.join(__dirname,'../views/collage.html'))
})

router.post('/imagen', (req,res)=>{
    try{
        const {target_file} = req.files;
        const {posicion} = req.body;

        target_file.mv(path.join(__dirname, `../assets/img/imagen-${posicion}.jpg`), (error)=>{
            res.send(`${target_file} fue eliminada con exito`)
        })
    }catch(err){console.log(err)}
})


export default router