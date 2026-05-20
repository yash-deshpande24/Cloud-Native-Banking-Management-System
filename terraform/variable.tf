output "vpc_id" {

  value = module.vpc.vpc_id

}

output "ec2_public_ip" {

  value = module.ec2.ec2_public_ip

}

output "rds_endpoint" {

  value = module.rds.rds_endpoint

}

output "s3_bucket_id" {

  value = module.s3.bucket_id

}

output "alb_dns_name" {

  value = module.alb.alb_dns_name

}

output "autoscaling_group_name" {

  value = module.autoscaling.autoscaling_group_name

}
