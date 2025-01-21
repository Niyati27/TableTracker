# TableTracker
This repository contains a table reservation system implemented across three cloud platforms: AWS, Google Cloud Platform (GCP), and Microsoft Azure. The system allows users to book, view, and manage their reservations via a web interface, with a backend connected to a cloud-hosted database.

# Features
**Client**: Hosted as a static website on cloud platforms.  
**Server**: Powered by virtual machines with Node.js-based server-side operations.  
**Database**: MongoDB and DocumentDB are used to manage user and reservation data.  
**Authentication**: User sign-up, login, and session management.  
**CRUD Operations**: Create, read, update, and delete reservations.  

# Deployment Details
### 1. AWS
**Client**: Hosted on S3.  
**Server**: Deployed on EC2 with the connection to DocumentDB.  
**Database**: DocumentDB used for managing user and reservation data.  
**Security**: Security groups are configured to limit inbound access to the database.
### 2. Google Cloud Platform (GCP)
**Client**: Hosted in GCP Cloud Storage.  
**Server**: Runs on an instance in the US-East region.  
**Databas**e: MongoDB Atlas for database operations, accessed securely via an IP whitelist.
### 3. Microsoft Azure
**Client**: Deployed in Azure Blob Storage with static website hosting enabled.  
**Server**: Hosted on a Linux-based Virtual Machine, managed by PM2 for continuous availability.  
**Database**: Cosmos DB for MongoDB, used for backend data operations.

How to Run
Clone the repository:
```bash
git clone https://github.com/Niyati27/TableTracker.git
cd TableTracker
```
Configure the cloud services:

Follow instructions in each subdirectory (aws, gcp, azure) for setting up respective cloud resources.
Install dependencies and start the backend:
```bash
cd server
npm install
npm start
```
Access the frontend:

Navigate to the public URLs provided by the S3 bucket (AWS), GCP bucket, or Azure Blob Storage.

Directory Structure
```bash
tabletracker/
├── aws/
│   ├── client/          # Static frontend files for AWS S3
│   ├── server/           # Backend setup for AWS EC2
│   ├── database/          # MongoDB commands for DocumentDB
├── gcp/
│   ├── client/          # Static frontend files for GCP Storage
│   ├── server/           # Backend setup for GCP instances
│   ├── database/          # MongoDB Atlas setup and commands
├── azure/
│   ├── client/          # Static frontend files for Azure Blob
│   ├── server/           # Backend setup for Azure VM
│   ├── database/          # Cosmos DB for MongoDB setup
```

