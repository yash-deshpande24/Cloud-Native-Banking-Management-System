resource "aws_instance" "banking_ec2" {

  ami = var.ami_id

  instance_type = "t2.micro"

  subnet_id = var.subnet_id

  key_name = var.key_name

  associate_public_ip_address = true

  tags = {

    Name = "banking-ec2"

  }

}