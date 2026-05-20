resource "aws_security_group" "ec2_sg" {

    name = "banking-ec2-sg-new"

    description = "Security Group for EC2"

    vpc_id = var.vpc_id

ingress {

    from_port = 22

    to_port = 22

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

    }

ingress {

    from_port = 3000

    to_port = 3000

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

    }

ingress {

    from_port = 5000

    to_port = 5000

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

    }

egress {

    from_port = 0

    to_port = 0

    protocol = "-1"

    cidr_blocks = ["0.0.0.0/0"]

    }

}

resource "aws_security_group" "alb_sg" {

    name = "banking-alb-sg-new"

    description = "Security Group for ALB"

    vpc_id = var.vpc_id

ingress {

    from_port = 80

    to_port = 80

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

    }

egress {

    from_port = 0

    to_port = 0

    protocol = "-1"

    cidr_blocks = ["0.0.0.0/0"]

}

}

