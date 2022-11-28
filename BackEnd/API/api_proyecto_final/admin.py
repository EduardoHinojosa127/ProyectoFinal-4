from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Usuario)
admin.site.register(Almacen)
admin.site.register(Detalle_almacen)
admin.site.register(EPP)
admin.site.register(DetalleTemperatura)