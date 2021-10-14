const express = require('express')
const db = require('./test_mongoose')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.get('/',(req,res)=>{
//     loadedData = db.list()
//     res.send(loadedData)
// })
app.get('/',(req,res)=>{
    console.log('hi someone accessed me')
    db.list().then(d=>{
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
app.post('/', (req,res)=>{
    newData = req.body
    db.save(newData).then(d=>{
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
app.delete('/',(req,res)=>{
    let id = req.query['id']
    console.log(id)
    db.delete(id).then(d=>{
        console.log(d)
        res.send({data:d})
    }).catch(err=>{
        res.send(err)
    })
})
app.put('/',(req,res)=>{
    let id = req.query['id']
    let data = req.body
    if (id== undefined) {
        res.send('bad id')
    } else {
        db.update(id,data).then(d=>{
            res.send({data:d})
        }).catch(er=>{
            res.send(err)
        })
    }
})

app.listen(8888,()=>{
    console.log('I am listening at port 8888')
})