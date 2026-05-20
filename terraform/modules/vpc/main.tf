resource "aws_vpc" "banking_vpc" {
    cidr_block = var.vpc_cidr

    tags = {
    Name = "banking-vpc"
    }

}

resource "aws_subnet" "public_subnet_1" {

    vpc_id = aws_vpc.banking_vpc.id

    cidr_block = "10.0.10.0/24"

    availability_zone = "us-east-1a"

    map_public_ip_on_launch = true

}

resource "aws_subnet" "public_subnet_2" {

    vpc_id = aws_vpc.banking_vpc.id

    cidr_block = "10.0.2.0/24"

    availability_zone = "us-east-1b"

    map_public_ip_on_launch = true

}

resource "aws_internet_gateway" "igw" {

    vpc_id = aws_vpc.banking_vpc.id

}

resource "aws_route_table" "public_rt" {

    vpc_id = aws_vpc.banking_vpc.id

route {

    cidr_block = "0.0.0.0/0"

    gateway_id = aws_internet_gateway.igw.id

    }

}

resource "aws_route_table_association" "public_assoc_1" {

    subnet_id = aws_subnet.public_subnet_1.id

    route_table_id = aws_route_table.public_rt.id

}

resource "aws_route_table_association" "public_assoc_2" {

    subnet_id = aws_subnet.public_subnet_2.id

    route_table_id = aws_route_table.public_rt.id

}
