import {fastify} from "fastify";
import { getAllPromptsRoute } from "./routes/gett-all-prompts";


const app= fastify()

app.register(getAllPromptsRoute)

app.listen({
    port: 3333,
}).then(()=>{
    console.log('running on port 3333')
})