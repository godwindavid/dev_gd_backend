export const socketService = (socket) => {
    socket.on('sendMessage', async (req) => {
        try {
            return socket.emit(req.id, req.mesage);
        } catch (error) {
            console.log('error in socket service', error.message);
            socket.emit('sendMessage', {
                statusCode: 500,
                message: error.message
            });
        }
    });
}