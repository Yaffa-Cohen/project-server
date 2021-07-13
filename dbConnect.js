const mongoose= require('mongoose');


class db{

    constructor(){}

    connect(){
        const connectioParams={
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        }
        
        let url='mongodb://localhost:27017/Project';

        mongoose.connect(url,connectioParams).then(()=>
        {
            console.log('CONNECTED!!!');
        }
        ).catch((err)=>{
            console.log("error connecting!", err);

        })
    }
}

module.exports=new db();

