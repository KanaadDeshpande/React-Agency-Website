from django.urls import path
from .views import ContactFormListCreate

urlpatterns = [
    path('api/contact/', ContactFormListCreate.as_view()),
]
