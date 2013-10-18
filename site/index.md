# VirtueJs

VirtueJs is a loosely coupled web application framework on top of [RingoJs](http://ringojs.org). It pulls together the best of breed Ringo packages to provide templating, a view engine and an ORM.

## What's cool about it?

If you are a Java developer and want to give a dynamic language a shot, VirtueJs makes a lot of sense because we have good [Java integration](http://ringojs.org/documentation/java_integration).

If you are a seasoned JavaScript developer, you'll enjoy the modern JavaScript as well as Ringo's extensive [standard library](http://ringojs.org/api/master/index.html) and [tools](http://ringojs.org/documentation).

## Show me the code

View code:

      app.configure('error', 'notfound', 'route');
		app.get('/helloworld', function() {
		   return response.json(fooObject)
		});

A template:

    {% extends 'base.html' %}
    {% block title %}Example Site{% endblock %}
    {% block content %}
      <ul>
      {% for user in users %}
        <li><a href="{{ user.url }}">{{ user.username }}</a></li>
      {% endfor %}
      </ul>
    {% endblock %}

Database models:

	var User = db.defineEntity('User', {
	   properties: {
	      firstname: 'string',
	      likesCats: 'boolean',
	      location: {
	         type: 'object',
	         entity: 'Location'
	      }
	   }
	});

Talking to Java:

	var hashMap = new java.util.HashMap();
	hashMap.put('foo', 'testing');

We consider Java Integration one of our killer features. If you're into Java, this should get you excited: [Java Integration in Ringo](http://ringojs.org/documentation/java_integration)