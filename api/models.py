from django.db import models



class Art(models.Model):
    title = models.CharField(max_length=180, default="")
    price = models.DecimalField(max_digits=5, decimal_places=2)
    image = models.ImageField(null=True, blank=True, default="")

    def __str__(self):
        return self.title
    

class Product(models.Model): 
    name = models.CharField(max_length=180)
    price = models.IntegerField(default=0) #stored in cents

    def __str__(self):
        return self.name

class User(models.Model):
    name = models.CharField(max_length=180)
    email = models.CharField(max_length=250)
    first_line = models.CharField(max_length=300)
    second_line = models.CharField(max_length=300)
    city = models.CharField(max_length=180)
    postcode = models.CharField(max_length=10)

    def __str__(self):
        return self.name