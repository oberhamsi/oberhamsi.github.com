Old-school server-side JavaScript.


Example view code:

		app.get('/helloworld', function() {
		   return templates.renderResponse('users.html', {
		      user: User.all()
		   });
		});

Example template:


    {% extends 'base.html' %}
    {% block title %}Example Site{% endblock %}
    {% block content %}
      <ul>
      {% for user in users %}
        <li><a href="{{ user.url }}">{{ user.username }}</a></li>
      {% endfor %}
      </ul>
    {% endblock %}

Example ORM definition:

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

	var user = new User({firstname: 'django', likesCats: false, location: locationObject});
	user.save();


Bla VirtueJs is awesome and bla bla.