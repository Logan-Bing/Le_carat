from django import forms 
from django.forms import ModelForm
from .models import Subscribers


class NewseletterForm(ModelForm):
    class Meta:
        model = Subscribers
        fields = ["email"]
        widgets = {
            "email": forms.EmailInput(attrs={
                "placeholder": "Email",
                "class": "form-control",
            })
        }