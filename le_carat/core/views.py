from django.shortcuts import render, redirect
from django.core.mail import BadHeaderError, send_mail
from django.http import HttpResponse
from django.conf import settings

from .forms import NewseletterForm
# Create your views here.

def success_page(request):
    return render(request, "success_form.html")

def index(request):

    if request.method == "POST":

        form = NewseletterForm(request.POST)
        subject = "Bienvenue à l’Hôtel Le Carat ✨"
        message = """Bonjour,

        Merci de vous être inscrit(e) à la newsletter de l’Hôtel Le Carat.
        Vous faites désormais partie de notre cercle privilégié et nous sommes ravis de vous compter parmi nous !

        En vous abonnant, vous serez les premiers à :
        - Découvrir nos actualités et l’avancée de l’ouverture de l’hôtel,
        - Profiter d’offres exclusives et de surprises réservées à nos abonnés,
        - Explorer nos conseils et inspirations pour un séjour inoubliable.

        Notre mission : vous offrir bien plus qu’un hôtel, une expérience raffinée où confort et élégance se rencontrent.

        Nous avons hâte de vous accueillir au Carat et de partager cette aventure avec vous.

        À très bientôt,  
        L’équipe de l’Hôtel Le Carat
        """

        from_email =settings.DEFAULT_FROM_EMAIL
        to_email = request.POST.get("email")

        if form.is_valid():
            form.save()
            try:
                send_mail(
                    subject,
                    message,
                    from_email,
                    [to_email],  # <= IMPORTANT
                    fail_silently=False,
                )
            except BadHeaderError:
                return HttpResponse("Invalid header found.")
            return redirect("/success")
        else:
            return HttpResponse("Error")

    else:
        form = NewseletterForm()

    return  render(request, "index.html", {"form": form})