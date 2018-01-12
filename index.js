function startHTTPServer(port) {
    console.log('startHTTPServer ' + port);
    addFrameRoute();
}

function createSocketListeners() {
    console.log('createSocketListeners');
}

function addFrameRoute() {
    console.log('addFrameRoute');
}

module.exports = {
    startHTTPServer: startHTTPServer,
    createSocketListeners: createSocketListeners
};