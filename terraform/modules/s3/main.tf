resource "aws_s3_bucket" "banking_bucket" {

    bucket = var.bucket_name

    tags = {

    Name = "banking-s3"

    }

}
