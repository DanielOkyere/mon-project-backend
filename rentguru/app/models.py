from django.db import models


# Create your models here.
class HomeOwner(models.Model):
    """ Defines the fields from the HomeOwners"""
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=25)
    password = models.CharField(max_length=25)


class Region(models.Model):
    """Defines the fields for a region"""
    name = models.CharField(max_length=30)
    region_id = models.CharField(max_length=16)


class Customer(models.Model):
    """ Defines the fields for a Customer"""
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=25)
    password = models.CharField(max_length=25)
