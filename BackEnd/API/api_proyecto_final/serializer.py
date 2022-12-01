from rest_framework import serializers

from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id', 'nombre', 'apellidos', 'email','clave','estado','sexo','direccion','telefono')

class AlmacenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Almacen
        fields = ('id', 'nombre_almacen','estado_almacen','informacion','temperatura','imagen')

class EPPSerializer(serializers.ModelSerializer):
    class Meta:
        model = EPP
        fields = ('id', 'nombre_epp','imagen','informacion_epp')

class Detalle_almacenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Detalle_almacen
        fields = ('id','fecha','almacen_id','temperatura','usuario_id')

class DetalleTemperaturaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetalleTemperatura
        fields = ('id','almacen_id','temp_ini','temp_fin')