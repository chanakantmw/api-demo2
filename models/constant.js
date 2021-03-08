const mongoose=require('mongoose')
const mongo=require('mongodb')
const dbUrl='mongodb+srv://mongodb:mongodb@cluster0.jwjnh.mongodb.net/mydatabase?retryWrites=true&w=majority'
const collection='test01'

mongoose.connect(dbUrl,{
    useNewUrlParser:true
})
const db=mongoose.connection
const Schema=mongoose.Schema

const nuboxSchema = new Schema({
    id:{type:Schema.ObjectId},
    statusDevice: { type: String },
    timeStamp: { type: String },
    imagePath: { type: String },
})
const myColl = module.exports=mongoose.model(collection,nuboxSchema)

//----------------------------------------:: INSERT FUNCTION ::
module.exports.insertData=function(newMyColl,callback){
    newMyColl.save(callback)
}

//----------------------------------------:: GET FUNCTION ::
module.exports.getData=function(data){
    myColl.find(data).sort({_id:-1,})
}

//----------------------------------------:: DELETE FUNCTION ::
module.exports.clearData=function(data){
    myColl.deleteMany(data);
}
