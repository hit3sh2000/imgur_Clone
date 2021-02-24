const router = require('express').Router();
const bodyparser = require('body-parser'); 
const Image = require('../models/image');

router.use(bodyparser.json());            // configuring the middleware
router.use(bodyparser.urlencoded({extended:true}));  

// creating the routes

// default  route
router.all('/',async(req,res)=>{
    try{
        await Image.find()
    return res.json({                             // used async await
        status:true,                              
        message : 'route is working...'
    });
}
catch(err){
    res.json('Error' + err);
}
});

router.post('/upload', async(req,res)=>{
    try{
        await Image.create({
            image:req.body.img
        }, (error,result)=>{
            if(!error){
                res.json({
                    status:true,
                    message:'image is uploaded',
                    result:result
                });
            }
            else{   // if any error occurs
                return res.json({
                    status:false,
                    message:'image upload failed...',
                    error:error     // display the error
                });   
            } 
        })
    }
    catch(err){
        return res.json('error'+err);
    }
})

module.exports = router;