from django.contrib import admin
from django.urls import include, path

import mainUI.views as views

urlpatterns = [
    path("", views.home),
    path("editor", views.main),
    path("testing", views.testing),
]
