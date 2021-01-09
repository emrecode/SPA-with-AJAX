var express     = require('express'),
    router      = express.Router(),
    Proje         = require("../models/projemodel");

    
router.get('/', (req, res)=>{
    Proje.find()
    .then((ProjelerTablo)=>{
        res.json(ProjelerTablo);
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
});


router.post('/', (req, res)=>{
    Proje.create(req.body)
    .then((yeniProje)=>{
        res.status(201).json(yeniProje);
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
});


router.put('/:ProjeId', (req, res)=>{
    Proje.findOneAndUpdate({_id:req.params.ProjeId}, req.body, {new: true})
    .then((guncelproje)=>{
        res.json(guncelproje);
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
});


router.delete('/:projeId', (req, res)=>{
    Proje.remove({_id:req.params.projeId})
    .then(()=>{
        res.json({mesaj:'Silindi'})
    })
    .catch((err)=>{
        console.log(err);
        res.send(err);
    })
});

module.exports = router;