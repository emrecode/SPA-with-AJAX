var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projeler-api');
mongoose.set('debug', true);

mongoose.Promise = Promise;



var ProjelerTabloSchema = new mongoose.Schema({
    projeadi:{type:String
    },

    isim:{
        type:String
       
    },

    uniadi:{
        type:String
        
    },

    yil:{
        type:String
        
    },
    
});

module.exports = mongoose.model('ProjelerTablo', ProjelerTabloSchema);