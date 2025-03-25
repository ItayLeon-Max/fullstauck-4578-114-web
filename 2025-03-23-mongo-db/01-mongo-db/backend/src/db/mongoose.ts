import mongoose from 'mongoose';
import config from 'config';

const {host, port, database} = config.get<{host: string, port:number, database:string}>('mongoose')

export async function connect(){
    try {
        await mongoose.connect(`mongodb://${host}:${port}/${database}`)
        console.log(`Connected to mongodb://${host}:${port}/${database}`)
    }catch(e){
        console.error(e)
    }
}

export default mongoose