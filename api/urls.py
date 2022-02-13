from django.urls import path
from . import views

urlpatterns = [
    path('gallery/digital', views.ArtView.as_view()),
    path('upload', views.ArtUploader().as_view()),
    path('config/', views.stripe_config),
    path('create-checkout-session/', views.create_checkout_session),
    path('webhook/', views.stripe_webhook)
]