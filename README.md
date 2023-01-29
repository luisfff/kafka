# Publisher/Subscriber Application (Kafka)

Publisher/subscriber application using Apache kafka and Zookeeper in Node.js.

## Features
Publish messages <br>
Consume messages from topics it subscribes to

## Getting Started
Clone the repository: git clone https://github.com/luisfff/kafka <br>
Install dependencies: npm install <br>
Start Kafka and Zookeeper containers: docker-compose -p kafka up <br>
Run the consumer (subscribing to a topic): node consumer.js <br>
Run the publisher: node publisher.js

