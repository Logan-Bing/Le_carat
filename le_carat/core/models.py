from django.db import models

class Subscribers(models.Model):
    email = models.EmailField();
    subscribed_on = models.DateTimeField("date subscibed")

    def __str__(self):
        return self.email