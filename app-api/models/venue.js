var mongoose = require( "mongoose" );

var venue = new mongoose.Schema({ });

var hour = new mongoose.Schema({
    days:{type:String, required:true},
    open:String,
    close:String,
    isClosed:{type:Boolean,required:false},
});

var comment = new mongoose.Schema({
    author:{type:String , required:true},
    rating:{type:Number, required:true , min:0 , max: 5},
    text : {type:String , required:true},
    date: {type:Date , default:Date.now},

});

var venue = new mongoose.Schema({
    name : {type:String,required:true}, //required:true kaydederken asla bos gecilmesini istemiyorsak verilir
    address: String,
    rating: {type:Number , min:0 , max:5 , default:0},
    foodanddrink: [String],
    coordinates: {type:[Number] , index: '2dsphere'},
    hours : [hour],
    comments : [comment]
})

mongoose.model("venue",venue,"venues") // model adı,kullanılacak şema,koleksiyon adı