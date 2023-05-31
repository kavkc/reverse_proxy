# reverse_proxy
//create the docker images of responders
cd responder
docker build -t node-responder .

//run the images as responder1 and responder2
docker run -d -p 8080:8080 --name responder-1 node-responder
docker run -d -p 8081:8080 --name responder-2 node-responder

//create the nginx reverse proxy docker image
cd nginx
docker build -t nginx-reverse-proxy .

//run the nginx proxy server linking to the responders
docker run -d -p 80:80 --name nginx-proxy --link responder-1 --link responder-2 nginx-reverse-proxy

//test the user1
cd user1
node client.js

//You should be able to see the below message on the console
//"Received from server 1: Hello from 127.0.0.1!"


//test the user2
cd user2
node client.js

//You should be able to see the below message on the console
//"Received from server 2: Hello from 127.0.0.1!"
