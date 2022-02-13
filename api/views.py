import stripe
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from django.views import View
from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from .serializers import ArtSerializer
from .models import Art


class ArtView(generics.ListAPIView):
    queryset = Art.objects.all()
    serializer_class = ArtSerializer

class ArtUploader(generics.CreateAPIView):
    queryset = Art.objects.all()
    serializer_class = ArtSerializer

def stripe_config(request):
    if request.method == 'GET':
        stripe_config = {'publicKey': settings.STRIPE_PUBLIC_KEY}
        return JsonResponse(stripe_config, safe=False)

def create_checkout_session(request):
    if request.method == 'GET':
        domain_url = 'http://127.0.0.1:8000/'
        stripe.api_key = settings.STRIPE_SECRET_KEY
        try:
            checkout_session = stripe.checkout.Session.create(
                success_url = domain_url + 'success',
                cancel_url = domain_url + 'cancelled',
                payment_method_types=['card'],
                billing_address_collection = 'required',
                mode = 'payment',
                line_items=[
                    {
                        'name': 'SoulArt',
                        'quantity': 1,
                        'currency': 'gbp',
                        'amount': '10000',
                    }
                ]
            )
            return JsonResponse({'sessionId': checkout_session['id']})
        except Exception as e:
            return JsonResponse({'error': str(e)})

def stripe_webhook(request):
    stripe.api_key = settings.STRIPE_SECRET_KEY
    endpoint_secret = settings.STRIPE_ENDPOINT_SECRET
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        return HttpResponse(status=400)
    
    if event['type'] == 'checkout.session.completed':
        print("Payment was successful.")

    return HttpResponse(status=200)

    