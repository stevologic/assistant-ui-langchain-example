output "lambda_arn" {
  description = "ARN of the deployed Lambda"
  value       = aws_lambda_function.app.arn
}

