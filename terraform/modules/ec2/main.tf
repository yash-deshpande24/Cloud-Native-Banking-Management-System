resource "aws_instance" "banking_ec2" {

  ami           = var.ami_id

  instance_type = var.instance_type

  subnet_id     = var.subnet_id

  key_name      = var.key_name

  vpc_security_group_ids = var.security_group_ids

  tags = {

    Name = "banking-ec2"

  }

}
