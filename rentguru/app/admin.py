from django.contrib import admin

# Register your models here.
from .models import HomeOwner, Region, Customer

admin.site.register(HomeOwner)
admin.site.register(Region)
admin.site.register(Customer)
