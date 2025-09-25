from django.contrib import admin
from .models import Subscribers

class SubscribersAdmin(admin.ModelAdmin):
    list_display = ["email", "subscribed_on"]

admin.site.register(Subscribers, SubscribersAdmin)
