from django.urls import path
from .views import index

app_name = 'frontend'

urlpatterns = [
    path('', index),
    path('upload', index),
    path('portfolio/artwork', index),
    path('portfolio/client-work', index),
    path('services/custom-surfboards', index),
    path('services/custom-canvases', index),
    path('services/graphic-design', index),
    path('shop/product/big-tree', index),
    path('success', index),
    path('cancelled', index),
    path('faqs', index),
    path('contact', index),
]