import { MongoClient } from "mongodb";

// const URI = process.env.MONGODB_URI

// if(!URI) throw new Error('Please add your Mongo DB URI to .nv.local')

// let client = new MongoClient(URI, options)
// let clientPromise

// if(process.env.NODE_ENV !== 'production'){
//     if(!global._mongoClientPromise){
//         global._mongoClientPromise = client.connect()
//     }

//     clientPromise = global._mongoClientPromise
// }else {
//     clientPromise = client.connect()
// }

const uri = process.env.MONGODB_URI
if(!uri) throw new Error('Please add your Mongo DB URI to .nv.local')
// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   }
  
  let client
  let clientPromise
  
  if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
  }
  
  if (process.env.NODE_ENV === 'development') {

    if (!global._mongoClientPromise) {
      client = new MongoClient(uri)
      global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
  } else {
    client = new MongoClient(uri)
    clientPromise = client.connect()
  }

export default clientPromise