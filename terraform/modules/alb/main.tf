resource "aws_security_group" "alb_sg" {

    name = "banking-alb-sg-new"

    description = "ALB Security Group"

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

resource "aws_lb" "banking_alb" {

    name = "banking-alb"

    internal = false

    load_balancer_type = "application"

security_groups = [

    aws_security_group.alb_sg.id

    ]

subnets = var.subnets

}
