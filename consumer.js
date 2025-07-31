const amqp = require('amqplib');

async function startConsumer() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  const queue = 'task_queue';

  await channel.assertQueue(queue, { durable: true });
  console.log(" [*] Waiting for messages in %s", queue);

  channel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log(" [x] Received %s", msg.content.toString());
      channel.ack(msg);
    }
  });
}

startConsumer().catch(console.error);