resource "aws_launch_template" "banking_template" {

    name_prefix = "banking-template"

    image_id = var.ami_id

    instance_type = "t3.micro"

}

resource "aws_autoscaling_group" "banking_asg" {

    desired_capacity = 2

    max_size = 3

    min_size = 1

    vpc_zone_identifier = var.subnet_ids

launch_template {

    id = aws_launch_template.banking_template.id

    version = "$Latest"

    }

}

