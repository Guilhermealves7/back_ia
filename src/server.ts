import {fastify} from "fastify";

const app= fastify()

app.get('/', ()=>{
    return  'helloo'
})

app.listen({
    port: 3333,
}).then(()=>{
    console.log('running on port 3333')
})