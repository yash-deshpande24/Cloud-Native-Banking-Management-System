module "vpc" {

  source = "./modules/vpc"

  vpc_cidr = "10.0.0.0/16"

  public_subnet_cidr = "10.0.1.0/24"

}

module "ec2" {

  source = "./modules/ec2"

  ami_id = var.ami_id

  instance_type = var.instance_type

  subnet_id = module.vpc.public_subnet_1_id

  key_name = var.key_name

}


module "rds" {

  source = "./modules/rds"

  instance_class = "db.t3.micro"

  db_username = var.db_username

  db_password = var.db_password

}

module "s3" {

  source = "./modules/s3"

  bucket_name = "banking-project-storage-bucket"

}

module "iam" {

  source = "./modules/iam"

  user_name = "banking-user-v2"

}

module "cloudwatch" {

  source = "./modules/cloudwatch"

  log_group_name = "banking-log-group-v2"

}

module "alb" {

  source = "./modules/alb"

  vpc_id = module.vpc.vpc_id

  subnets = [

    module.vpc.public_subnet_1_id,
    module.vpc.public_subnet_2_id

  ]

}



module "autoscaling" {

  source = "./modules/autoscaling"

  ami_id = var.ami_id

  instance_type = "t2.micro"

  subnet_ids = [

    module.vpc.public_subnet_1_id,
    module.vpc.public_subnet_2_id

  ]

}

// Create S3 Bucket

# aws s3 mb s3://banking-terraform-backend

// Create DynamoDB Table

# aws dynamodb create-table  --table-name terraform-lock  --attribute-definitions AttributeName=LockID,AttributeType=S  --key-schema AttributeName=LockID,KeyType=HASH  --billing-mode PAY_PER_REQUEST  --region us-east-1

// terrform init
// terraform fmt
// terraform validate
// terraform plan
// terraform apply
// terraform destroy --auto-approve
// terraform force-unlock d490ff55-cf8c-4716-2540-f0728388bbde
