# Views and routing

### URL routing

  * [routing reference](stick/middleware/route/)
  * [tutorial page](http://ringojs.org/tutorial/stickapp.md)

### Middleware
 
The following middleware is activated by VirtueJs for the whole application. These give you access to the query and post parameters, URL routing and some other features:

 * [URL routing](stick/middleware/route/)
 * [query params](stick/middleware/params/)
 * [error page](stick/middleware/error/) only active if `debug=true`
 * [cookies](stick/middleware/cookies/)
 
Other available middleware:

 * [file upload](stick/middleware/upload/)
 * [session support](stick/middleware/session/) 
 * [http basic authentication](stick/middleware/basicauth/)
 * [static resource serving](stick/middleware/static/) 
 * [not found page](stick/middleware/notfound/)
 * [etag](stick/middleware/etag/)
 * [performance profiler](stick/middleware/profiler/)
 * [gzip compression](stick/middleware/gzip)

And there is a help page on how to [write your own middleware](http://ringojs.org/documentation/jsgi_and_stick).