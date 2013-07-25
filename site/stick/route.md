This installs `get`, `post`, `put`, and `del` methods in the application
object for routing requests with the corresponding HTTP methods. These
methods take a path spec as first argument and a function as second argument.

### Paths and Placeholders

The path spec can consist of static parts and placeholders.
Named placeholders are prefixed by `:` (colon) and match all
characters except for `/` (slash) and `.` (dot). A named
placeholder can be marked as optional by appending `?` (question mark).
Unnamed placeholders are denoted by the asterisk character `*` and match
all characters including slashes and dots.

In the following example, ":id" is a named placeholder:

    "/post/:id"

All placeholders are passed to the action function as positional arguments
following the request object in the order in which they appear in the path spec.
Unmatched optional placeholders will be `undefined`.

    app.get("/post/:id", function(req, id) {...});

### Reverse Routing

The route middleware supports generating URLs from route names and parameters
required by the route.

Routes names are derived from the route's path spec by stripping
out all placeholders and removing a leading slash. For example, a path
spec `/post/:id.html` results in route name "post.html". If a path spec
does not contain any static part, its route name is "index".

Passing a valid route name and the parameters required by the route to the `route.reverse`
method will return the URI path for the corresponding action. For example,
with a route spec `/post/:id.html`, calling `app.route.reverse({action: "post.html", id: 5})`
will return the string "/post/5.html".

    app.get("/", function() {...})
    app.post("/", function(req) {...})
    app.get("/:id.:format?", function(req, id, format) {...})
    app.del("/:id", function(req, id) {...})
    app.put("/:id", function(req, id) {...})