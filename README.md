# Publisher/Subscriber Application (Kafka)

Publisher/subscriber application using Apache kafka and Zookeeper in Node.js.

## Features

Publish messages

Consume messages from topics it subscribes to

## Getting Started

Clone the repository: git clone https://github.com/luisfff/kafka

Install dependencies: npm install

Start Kafka and Zookeeper containers: docker-compose -p kafka up

Run the consumer (subscribing to a topic): node consumer.js

Run the publisher: node publisher.js
