import { Server } from "socket.io";
import config from 'config'
import { v4 } from "uuid";


const port = config.get<number>('io.port')

const io = new Server({
    cors: {
        origin: '*'
    }
})

io.on('connection', socket => {

    console.log('got a new connection')

    socket.onAny((eventName, payload) => {
        console.log(`got event ${eventName} with payload`, payload)
        io.emit(eventName, payload)
    })

    socket.on('disconnect', () => {
        console.log('client disconnected...')
    })

})

io.listen(port)
console.log(`Socket.io listening on port ${port}`)