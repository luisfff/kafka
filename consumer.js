const Kafka =  require("kafkajs").Kafka;

run();

async function run() {
    try 
    {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": ["localhost:9092"]
        })

        const consumer = kafka.consumer({"groupId":"test"});
        console.log("connecting");

        await consumer.connect();
        console.log("connected!");

        consumer.subscribe({
            "topic": "Users",
            "fromBeginning": true
        });

        await consumer.run({
            "eachMessage": async result => {
                console.log(`Recieved message ${result.message.value} on partition ${result.partition}`)
            }
        })

        console.log(`Created  with sucess" ${JSON.stringify(result)}`);
        
    }
    catch (ex) {
        
        console.error(ex);
    }
    finally{

    }

}