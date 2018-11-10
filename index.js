const server = require('http').createServer();
const io = require('socket.io')(server);
const {createDriver} = require('./driver/createDriver');

const PORT = 3000;
const CHAT_URL = `https://www.tradingview.com/chat/#bitcoin`

io.on('connection', client => {
  console.log("client has connected:")
  console.log(client)

  client.on('message', data => {
       console.log(data);
    });



  client.on('disconnect', () => {
       console.log(`Client ${client} disconnected`);
    });
});

server.listen(PORT);


const attach = async () => {
    console.log("spawning and webdriver")
    let webdriver = await createDriver();

    await webdriver.get(CHAT_URL);
    await webdriver.sleep(5000);
    
    console.log("create the oscket client connection...")
    await webdriver.executeScript(`
        var wsScript = document.createElement('script');
        wsScript.src = 'https://cdn.jsdelivr.net/npm/socket.io-client@2.1.1/dist/socket.io.slim.js';
        document.head.appendChild(wsScript);

        wsScript.onload = function() {
            console.log("socketio cdn loaded")
            window.chatSocket = io('ws://localhost:${PORT}/');
            window.chatSocket.on('open', function(){
                //socket.on('message', function(data){});
                window.chatSocket.on('close', function(){
                    console.log("Socket connection closed by host.")
                });
            });
        }

    `);

    console.log("create the mutation observer")
    await webdriver.executeScript(`
        var mutationObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                console.log(mutation.addedNodes[0].innerText);
                window.chatSocket.send(mutation.addedNodes[0].innerText)
             });
            });
        mutationObserver.observe(document.getElementsByClassName('ch-data')[0], {
            attributes: false,
            characterData: false,
            childList: true,
            subtree: false,
            attributeOldValue: false,
            characterDataOldValue: false
            });
    `)
}



attach();

