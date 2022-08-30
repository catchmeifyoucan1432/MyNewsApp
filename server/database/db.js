import mongoose from "mongoose";



const  Connection=async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-xuhtogh-shard-00-00.qutiqcb.mongodb.net:27017,ac-xuhtogh-shard-00-01.qutiqcb.mongodb.net:27017,ac-xuhtogh-shard-00-02.qutiqcb.mongodb.net:27017/?ssl=true&replicaSet=atlas-11wukv-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log('database conected successfuly');

    }catch(error){
        console.log('Error while connecting with database',error);
    }
}
export default Connection;