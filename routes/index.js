import {Router} from 'express';
import multer from 'multer';
import csv from 'csv';
import {generate} from '../sample/generate';

// create from imports
const router = Router();
const storage = multer.memoryStorage()
const upload = multer({storage:storage});

// in memory datasource
let dataset = [30, 200, 100, 400, 150, 250];    

// routes
router.get('/', (req,res) => {
   res.sendFile(__dirname + '/public/index.html');
});

router.post('/upload', upload.single('fupload'), (req,res) => {
    let input = req.file.buffer.toString();
    csv.parse(input, function(err, data) {
        if ( err ) {
            return res.status(500).send('Oops you broke me');
        }
        
        dataset = data[0];
        res.redirect('/');
    });    
});

router.get('/random', (req,res) => {
    const limit = Math.floor(Math.random()*300);
    const upper = Math.floor(Math.random()*500);
    dataset = generate(limit, upper).split(',');
    res.status(200).send(dataset); 
});

router.get('/data', (req, res) => {
   res.status(200).send(dataset); 
});

export default router;