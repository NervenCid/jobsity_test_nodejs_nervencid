# Node.js Challenge

This the contest for technical test for jobsity

## Pre-requisites and installation

For install is required to have Docker and docker-compose installed.

## Features

The code presented have these features:

- Uses JWT webtoken for both services in order to secure the requests and don't allow unauthorized requests.
- Uses Docker and docker-compose in order to orchestrate the services.
- Uses OpenAPI/Swagger for documentation
- The API validates if an usar already exists
- The responses are in JSON format
- Shows the history of stock querys for a user

## Run the services:

In order to run the test in the same folder that contains the file `docker-compose.yml` and run the command:

`docker-compose up`

For see the docs:

`http://localhost:3001/api-docs/`

## Create new User/Sign Up

In order to create a new user use this URL:

`localhost:3001/signup`

And pass the data in JSON format with these fields(this is an example):

`
{
    "username": "YourUser",
	"email": "example@example.com",
	"password": "yourPassword"
}
`

The response will provide you with a user token that can be used to make requests in order to get the stocks

## Login

For existing user use this URL:

`localhost:3001/signin`

And pass the data in JSON format with these fields(this is an example):

`
{
	"email": "example@example.com",
	"password": "yourPassword"
}
`

The response will provide you with a user token and a session token, both can be used to make requests in order to get the stocks.

## Get Stocks

With the user token or the session token use the following URL:

`localhost:3001/sotck?q=ACI.US`

Where `ACI.US` is the symbol for the desired stock, other symbols can be found in `https://stooq.com/t/?i=518`

## History

Get the history of the requests for an user, With the user token or the session token use the following URL:

`localhost:3001/history`

