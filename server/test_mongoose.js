const mongoose = require('mongoose')

const sFlower = mongoose.Schema({
    name: String,
    colour: String
})

const mFlower = mongoose.model('Flower',sFlower)

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/testdb')
    console.log('yay connected')
}

connect().then(()=>{
    console.log('CONNECTED!!')
}).catch(err=>{
    console.error(err)
})

module.exports = {
    list: ()=>{
        return new Promise((success,fail)=>{
            mFlower.find({}).then(data=>{
                success(data)
            }).catch(err=>{
                fail(err)
            })
        })
    },
    listx: ()=>{
        let data = [{data:'nodata'}]
        mFlower.find({}).then(d=>{
            data = d
        }).catch(err=>{
            return err
        })
        return data
    },
    load: (key)=>{},
    save: (data)=>{
        return new Promise((resolve,reject)=>{
            let newFlower = new mFlower(data)
            newFlower.save().then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
    },
    delete: (key)=>{
        return new Promise((resolve,reject)=>{
            mFlower.deleteOne({_id:key}).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })

        })
        
    },
    update: (key,newdata)=>{
        return new Promise((resolve,reject)=>{
            mFlower.updateOne({_id:key},newdata).then(data=>{
                resolve(data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}