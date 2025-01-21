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

Follow instructions in subdirectory for setting up project.
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
├── client/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── README.md
│   ├── app.yaml
│   ├── package-lock.json
│   └── package.json
├── server/
│   ├── src/
│   ├── .gitignore
│   ├── README.md
│   ├── package-lock.json
│   └── package.json
```
Reservation Page With Details
<img width="1080" alt="Screenshot 2025-01-20 at 7 48 55 PM" src="https://github.com/user-attachments/assets/b0d3a0cf-259a-4900-9e44-258a67b73756" />

Sign Up/ Log In/ Booking/ Update Page
<img width="1054" alt="Screenshot 2025-01-20 at 7 48 34 PM" src="https://github.com/user-attachments/assets/4f740443-f4f8-43b9-9938-ec6edb986396" />

Navigation Bar
<img width="1032" alt="Screenshot 2025-01-20 at 7 48 42 PM" src="https://github.com/user-attachments/assets/0711f239-6caf-4e70-a95d-e7b93e046aa7" />

