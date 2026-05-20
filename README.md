````md
# Cloud Native Banking Management System

A Full Stack Cloud Native Banking Management System built using:

- React.js Frontend
- Node.js Backend
- MongoDB Database
- Docker
- Terraform
- AWS Cloud
- Jenkins CI/CD
- Kubernetes
- SonarQube
- CloudWatch Monitoring

---

# Project Architecture

Frontend → React.js  
Backend → Node.js + Express.js  
Database → MongoDB  
Infrastructure → AWS + Terraform  
Containerization → Docker  
CI/CD → Jenkins  
Monitoring → CloudWatch  
Code Quality → SonarQube

---

# Project Features

- User Registration
- User Login Authentication
- Banking Dashboard
- Transactions Management
- Account Details
- Cloud Native Architecture
- CI/CD Deployment
- Docker Containerization
- Terraform Infrastructure Automation
- AWS Monitoring

---

# Frontend Structure

```bash
Frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── Transactions.js
│   │
│   ├── pages/
│   │   ├── Home.js
│   │   └── Account.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── images/
│   │   ├── banking-bg.jpg
│   │   ├── login-bg.jpg
│   │   ├── register-bg.jpg
│   │   ├── dashboard-bg.jpg
│   │   ├── transactions-bg.jpg
│   │   ├── account-bg.jpg
│   │   └── logo.png
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── .env
````

---

# Backend Structure

```bash
Backend/
│
├── src/
│   ├── controllers/
│   │   └── auth.controller.js
│   │
│   ├── routes/
│   │   └── auth.routes.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── middleware/
│   │   └── auth.middleware.js
│   │
│   ├── lib/
│   │   └── db.js
│   │
│   ├── app.js
│   └── index.js
│
├── package.json
└── .env
```

---

# Technologies Used

## Frontend

* React.js
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

## DevOps

* Docker
* Terraform
* Jenkins
* Kubernetes
* AWS EC2
* AWS S3
* AWS VPC
* AWS IAM
* AWS CloudWatch
* SonarQube

---

# Installation Steps

## Clone Repository

```bash
git clone https://github.com/yash-deshpande24/Cloud-Native-Banking-Management-System.git
```

---

# Frontend Setup

```bash
cd Frontend

npm install

npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# Backend Setup

```bash
cd Backend

npm install

npm start
```

Backend runs on:

```bash
http://localhost:5000
```

---

# MongoDB Setup

Install MongoDB and run:

```bash
mongod
```

MongoDB runs on:

```bash
mongodb://127.0.0.1:27017
```

---

# Environment Variables

## Frontend .env

```env
REACT_APP_API_URL=http://localhost:5000
```

---

## Backend .env

```env
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/bankdb

JWT_SECRET=mysecretkey
```

---

# Docker Commands

## Build Docker Image

```bash
docker build -t banking-app .
```

## Run Docker Container

```bash
docker run -p 3000:3000 banking-app
```

---

# Terraform Commands

```bash
terraform init

terraform plan

terraform apply
```

---

# Jenkins CI/CD Pipeline

Pipeline Stages:

* Git Checkout
* Install Dependencies
* SonarQube Scan
* Docker Build
* Docker Push
* Terraform Apply
* Kubernetes Deployment

---

# AWS Services Used

* EC2
* S3
* IAM
* VPC
* CloudWatch

---

# Kubernetes Deployment

```bash
kubectl apply -f deployment.yaml
```

---

# Future Enhancements

* Payment Gateway Integration
* Email Notifications
* SMS OTP Authentication
* Banking Analytics Dashboard
* Multi User Roles
* AI Fraud Detection

---

# Author

Yash Deshpande

---

# GitHub Repository

https://github.com/yash-deshpande24/Cloud-Native-Banking-Management-System

```
```
 
