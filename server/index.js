const express = require('express')
const db = require('./test_mongoose')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(req,res)=>{
    db.list().then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})
app.post('/', (req,res)=>{
    newData = req.body
    db.save(newData).then(data=>{
        res.send(data)
    }).catch(err=>{
        res.send(err)
    })
})
app.delete('/',(req,res)=>{
    let id = req.query['id']
    db.delete(id).then(d=>{
        res.send('deleted')
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
            res.send(d)
        }).catch(er=>{
            res.send(err)
        })
    }
})

app.listen(8888,()=>{
    console.log('I am listening at port 8888')
})