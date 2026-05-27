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

screenshort

<img width="825" height="666" alt="image" src="https://github.com/user-attachments/assets/8276ca85-3f5b-4b56-81fd-c586183362f9" />

1.Navbar.js
<img width="884" height="257" alt="image" src="https://github.com/user-attachments/assets/e4d242a6-cbcb-4ba5-94ae-9d6210ecc4a4" />

2.login.js
<img width="836" height="455" alt="image" src="https://github.com/user-attachments/assets/b9b8e494-aeec-4398-bc0e-b7d5abb38326" />

3.Register.js
<img width="844" height="448" alt="image" src="https://github.com/user-attachments/assets/23dccf3e-45fa-4ea9-94a8-aa173d5f729d" />

4. Dashboard.js
<img width="852" height="530" alt="image" src="https://github.com/user-attachments/assets/d1c8ae14-7d6b-4c4d-bde3-24e27c8d1460" />

5. Transactions.js
<img width="804" height="494" alt="image" src="https://github.com/user-attachments/assets/f68f3c10-ac14-4dc1-8a32-2c5ef37f2ac6" />

<img width="226" height="599" alt="image" src="https://github.com/user-attachments/assets/91e4bb53-a311-4255-a996-1bce17185017" />

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
 
