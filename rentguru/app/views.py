from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.template import loader
from .models import Region


# Create your views here.
def index(request):
    return HttpResponse("Hello there, welcome to rent-guru")


def region(request):
    """ Defines the request handler for viewing the regions"""
    try:
        region_list = Region.objects.order_by('name')
        template = loader.get_template('Region/index.html')
        context = {
            'region_list': region_list
        }
    except Region.DoesNotExist:
        raise Http404('Region does not exist yet')
    return HttpResponse(template.render(context, request))
