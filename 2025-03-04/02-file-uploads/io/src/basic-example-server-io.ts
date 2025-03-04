// import { Server } from "socket.io";
// import config from 'config'
// import { v4 } from "uuid";


// const port = config.get<number>('io.port')

// const io = new Server({
//     cors: {
//         origin: '*'
//     }
// })

// let clients: string[] = []

// io.on('connection', socket => {

//     console.log('got a new connection')
//     const id = v4()
//     clients.push(id)
//     socket.emit('welcome', {
//         id
//     })

//     io.emit('new member', {
//         id
//     })

//     socket.on('disconnect', () => {
//         console.log('client disconnected...')
//         clients = clients.filter(client => client !== id)
//         io.emit('member left', {
//             id
//         })
//     })

// })

// io.listen(config.get<number>('io.port'))
// console.log(`Socket.io listening on port ${port}`)