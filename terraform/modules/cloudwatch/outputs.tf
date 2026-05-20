output "cloudwatch_log_group" {

    value = aws_cloudwatch_log_group.banking_logs.name

}
