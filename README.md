# to-do-queue-app
To-Do Queue App is a lightweight Node.js application that demonstrates a producer-consumer architecture using RabbitMQ for task queuing and MySQL for persistent storage. Fully Dockerized, it allows asynchronous to-do note processing with simple deployment via Docker Compose.

**To-Do Queue App**

A lightweight, Dockerized To-Do Note App that uses RabbitMQ for task queuing and MySQL for persistent storage. Built with Node.js, this app demonstrates a simple producer-consumer architecture.

 **Features**
 
 Message queue powered by RabbitMQ
 Create and manage to-do notes
 Message producer/consumer using amqplib
 Docker + Docker Compose for easy deployment
 MySQL for storing tasks (optional)
 Clean folder structure with producer.js, consumer.js, and docker-compose.yml
 
 **Project Structure**
 
NOTE-APP-1/ │ ├── producer.js # Sends messages to RabbitMQ

├── consumer.js # Consumes messages from RabbitMQ

├── docker-compose.yml # Multi-service config: app, MySQL, RabbitMQ

├── Dockerfile # App container definition

├── docker-setup.sh # Optional setup script

└── ... # Any additional app logic or UI

 **Technologies Used**
 
Node.js (v18+)
RabbitMQ (via amqplib)
MySQL 8 (as DB)
Docker & Docker Compose

**How to Run**
 
1) Clone the repository
git clone https://github.com/example-user/todo-queue-app.git
cd todo-queue-app
git checkout messaging-integration


2) Run using Docker Compose
docker-compose up --build

3) Access Services
App (if exposed): http://localhost:3000

RabbitMQ UI: http://localhost:15672 (Default: guest / guest)

MySQL: Port 3306 (inside Docker)

**How It Works**

producer.js sends a to-do message to the RabbitMQ task_queue.

consumer.js listens on that queue and processes tasks.

Tasks can be stored or logged (extendable with MySQL).

 Environment Variables (via docker-compose.yml)

DB_HOST=mysql DB_USER=root DB_PASSWORD=rootpass DB_NAME=appdb RABBITMQ_URL=amqp://rabbitmq
