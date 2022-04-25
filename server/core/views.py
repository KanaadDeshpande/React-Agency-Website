from django.shortcuts import render
from .models import ContactForm
from .serializers import ContactFormSerializer
from rest_framework import generics
# Create your views here.


class ContactFormListCreate(generics.ListCreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer