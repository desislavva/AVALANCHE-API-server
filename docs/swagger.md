# Best practices
## Describe resource functionality with HTTP methods

All resources have a set of methods that can be operated against them to work with the data being exposed by the API. REStful APIs comprise majorly of HTTP methods which have well defined and unique actions against any resource. Here’s a list of commonly used HTTP methods that define the CRUD operations for any resource or collection in a  RESTful API.

- GET 	Used to retrieve a representation of a resource.
- POST 	Used to create new new resources and sub-resources
- PUT 	Used to update existing resources
- PATCH 	Used to update existing resources
- DELETE 	Used to delete existing resources

## Give feedback to help developers succeed

Providing good feedback to developers on how well they are using your product goes a long way in improving adoption and retention.   Every client request and server side response is a message and, in an ideal RESTful ecosystem, these messages must be self descriptive. Good feedback involves positive validation on correct implementation, and an informative error on incorrect implementation that can help users debug and correct the way they use the product. 

1. The client application behaved erroneously (client error - 4xx response code)
2. The API behaved erroneously (server error - 5xx response code)
3. The client and API worked (success - 2xx response code)   

### Handle complexity elegantly 

The data you’re trying to expose can be characterized by a lot of properties which could be beneficial for the end consumer working with your API. These properties describe the base resource and isolate specific assets of information that can be manipulated with the appropriate method.