# Deployment

Jetty is itself a powerful webserver, so you can use the same setup you would use in development.

## Apache

If you feel more comfortable with Apache, we suggest the following setup:


   1. Your Ringo app should run on a port not accessible from outside
   1. Proxy the requests to your application using mod_proxy

A simple apache configuration, which would forward requests below `example.com/ringo-app/` to a Ringo application running on port `:8080` would look like this:

    <VirtualHost *:80>
    	ServerName example.com
    	## Use incoming Host HTTP request header for proxy request
    	ProxyPreserverHost On
    	ProxyPass /ringo-app/     http://localhost:8080/
    </VirutalHost>

## Hosted Services

Ringo's [deployment help page](http://ringojs.org/documentation/deployment) has the details an how to get your application on Google App Engine, OpenShift or Heroku.