import express from 'express';
import cleanAir from './models/cleanAir.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    if (req.query) {
        const cleanAir = await cleanAir.find(req.query);
        res.json(cleanAir);
    } else {
        const cleanAir = await cleanAir.find({});
        res.json(cleanAir);
    }
})
.post(async (req, res) => {
    const cleanAir = await cleanAir.create(req.body);
    res.json(cleanAir);
});

app.get('/:id', async (req, res) => {
    const cleanAir = await cleanAir.findById(req.params.id);
    res.json(cleanAir);
});

app.put('/:id', async (req, res) => {
    await cleanAir.findByIdAndUpdate({_id: req.params.id}, req.body, {
    new: true,
}).then((cleanAir) => {
    res.json(cleanAir);
    });
});

app.listen(3000, () => {
    console.log('Boston whats the air like? server is running on port 3000');
});
    

//     cleanAir.find({ city: req.query.city }, (err, data) => {
    //         if (err) {
    //             res.status(500).send(err);
    //         } else {
    //             res.send(data);
    //         }
