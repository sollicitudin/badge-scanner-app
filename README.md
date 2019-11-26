# badge-scanner-app
App to scan badge and extract employee ID

# Getting started
- Ensure AWS credentials are set
- Install [Serverless Framework](https://serverless.com/)

## Web App
- `CD` to `app/`
- Run `npm i` to install packages
- Create `.env.development` file, then enter below
  ```
  REGION=<region - e.g. us-east-1>
  COGNITO_IDENTITYPOOL_ID=<id>
  COGNITO_USERPOOL_ID=<id>
  COGNITO_USERPOOL_CLIENT_ID=<id>,
  ```
- Run `npm start` (or `gatsby develop`)

## Backend
- `CD` to `stack/`
- Run `npm i` to install packages
- Run `sls offline`

# Deploy
- Ensure you already logged in to [Serverless](https://dashboard.serverless.com/)
- Ensure `.env.production` file is setup correctly (similar to `.env.development`, but different keys/ids)
- `CD` to root folder
- Run
  - `. deploy.sh` (for MAC)
  - `TBD` (for Windows) 
