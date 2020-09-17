const express = require('express')
const router = express.Router()
const knex = require('../helper/knex')
router.post('/add',async(req,res)=>{
    const data= {
        id:req.body.id,
        name:req.body.name,
        mo_no:req.body.mo_no
    }
    try{
        const result= await knex('student').insert(data)
        console.log(result)
        res.status(200).json({
            meta:{ 
                status:1,
                message:`success`
            }
        })
    }
    catch(error){
        console.log(error)
        res.status(401).json({
            meta:{ 
                status:0,
                message:`${error}`
            }
        })
    }
 

  
})

const multi =(req,res)=>{
console.log("this is multi")
}


router.get('/multi',multi)
module.exports=router