resource "aws_db_instance" "banking_rds" {
    allocated_storage = 20
    engine = "mysql"
    engine_version = "8.0"
    
    instance_class = var.instance_class
    username = var.db_username
    password = var.db_password
    skip_final_snapshot = true

    publicly_accessible = true

    tags = {

    Name = "banking-rds"

    }

}
