# example of http request with no aws sdk usage

## Is this a good idea?

Probably not, yes importing the SDK impacts cold start a bit, but the SDK does a good job of interacting with services in an optimal way.

Sampling the response times of both non SDK and SDK showed that the SDK won nearly everytime (by a very small margin of a ms here and there :))
