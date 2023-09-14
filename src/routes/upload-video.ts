import { FastifyInstance } from "fastify";
import {prisma} from '../lib/prisma';
import { fastifyMultipart } from "@fastify/multipart";
import path from "node:path";
import fs
import {randomUUID} from 'node:crypto'

export async function uploadVideoRoute(app:FastifyInstance) {
    app.register(fastifyMultipart, {
        limits: {
            fileSize:1_048_576*25,
        }


    })
    
    
    app.post('/videos', async(request,reply )=>{
        const data = await request.file()
        if(data!){
            return reply.status(400).send({error: 'Missing file input'})

            
        }
        const extension = path.extname(data.filename)
        if(extension!='.mp3'){
           return reply.status(400).send({error:'Invalid input type, plase upload a MP3' }) 

        }
       
        const fileBasename=  path.basename(data.filename, extension)

        const fileUploadName = `${fileBasename}-${randomUUID()}${extension}`

        const uploadDestination=  path.resolve(__dirname, '../../tmp', fileUploadName)
     })
}