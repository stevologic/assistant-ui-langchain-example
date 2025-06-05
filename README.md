# assistant-ui-langchain-example
This is an example of using assistant-ui with LangChain.js libraries.


This is the [assistant-ui](https://github.com/Yonom/assistant-ui) starter project.

## Getting Started

First, add your OpenAI API key to `.env.local` file:

```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploying to AWS Lambda

A simple Terraform configuration is provided in the `terraform/` directory. Before running Terraform, zip the build output of this project and provide the path using the `lambda_package` variable. Example:

```bash
npm run build
zip -r function.zip .next
terraform init
terraform apply -var="lambda_package=$(pwd)/function.zip"
```

This will create a Lambda function using the Node.js runtime.
