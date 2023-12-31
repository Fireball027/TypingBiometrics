{% extends "base.html" %} {% block title %}Typing Patterns{% endblock %} {%
    block content %}
    <form id="typing-patterns-form">
      <h3 align="center">Typing 2 Factor Authentication</h3>
      <p align="center">Please type your username and password again.</p>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          class="form-control disable-autocomplete"
          id="email"
          name="email"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control disable-autocomplete"
          id="password"
          name="password"
          placeholder="Enter password"
        />
      </div>
      <br />
      <button type="button" id="typing-patterns-button" class="btn btn-primary">
        Submit
      </button>
    </form>
    {% endblock %}
