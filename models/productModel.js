const mongoose=require('mongoose');

const productSchemna=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Please enter a product name"]
        },
        category:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        fabric:{
            type:String,
            required:true
        },
        print:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        availibility:{
            type:String,
            required:true
        },
        rtw:{
            type:Boolean,
            required:true
        }
    }
)
const Product=mongoose.model('Product',productSchemna);
module.exports=Product;