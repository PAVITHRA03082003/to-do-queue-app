const amqp = require('amqplib');

async function sendMessage(msg) {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  const queue = 'task_queue';

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });
  console.log(" [x] Sent '%s'", msg);

  setTimeout(() => connection.close(), 500);
}

module.exports = { sendMessage };