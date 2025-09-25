from django.db import models

class Subscribers(models.Model):
    email = models.EmailField();
    subscribed_on = models.DateTimeField("date subscibed", auto_now_add=True, null=True)

    def __str__(self):
        return self.email