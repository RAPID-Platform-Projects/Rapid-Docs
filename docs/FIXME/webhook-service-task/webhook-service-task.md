# Webhook Service Task

#### Purpose

Allows the hitting of an endpoint which contains some process run data in the body of the request. The request can either be a PUT or a POST call

#### Required Properties

- The response body from the endpoint hit
- Response Status code
- Status of the element

#### Completes

When an OK response is received from whatever endpoint was hit

1. Add that response body, headers and status code to the ledger for the service task
2. Set status of the element to Completed
3. Token moves on

#### Errors on

- Invalid URL to send a request to
- Expression fails to resolve
- Callback timeout occurs