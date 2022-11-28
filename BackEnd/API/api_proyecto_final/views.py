from rest_framework.views import APIView
from rest_framework.response import Response

from .models import *
from .serializer import *

class IndexView(APIView):
    
    def get(self,request):
        context = {'mensaje':'servidor activo'}
        return Response(context)
    
class UsuarioView(APIView):
    
    def get(self,request):
        dataUsuarios = Usuario.objects.all()
        serUsuarios = UsuarioSerializer(dataUsuarios,many=True)
        return Response(serUsuarios.data)
    
    def post(self,request):
        serUsuarios = UsuarioSerializer(data=request.data)
        serUsuarios.is_valid(raise_exception=True)
        serUsuarios.save()
        
        return Response(serUsuarios.data)
    
class UsuarioDetailView(APIView):
    
    def get(self,request,nombre, clave):
        dataUsuarios = Usuario.objects.get(nombre=nombre)
        if dataUsuarios.clave==clave:
            serUsuarios = UsuarioSerializer(dataUsuarios)
            return Response(serUsuarios.data)
        else: 
            return([])
    
    def put(self,request,nombre, clave):
        dataUsuarios = Usuario.objects.get(nombre=nombre)
        if dataUsuarios.clave==clave:
            serUsuarios = UsuarioSerializer(dataUsuarios,data=request.data)
            serUsuarios.is_valid(raise_exception=True)
            serUsuarios.save()
            return Response(serUsuarios.data)
        else:
            return Response([])

    def delete(self,request,nombre, clave):
        dataUsuarios = Usuario.objects.get(nombre=nombre)
        if dataUsuarios.clave==clave:
            serUsuarios = UsuarioSerializer(dataUsuarios)
            dataUsuarios.delete()
            return Response(serUsuarios.data)
        else:
            return Response([])

class AlmacenView(APIView):
    
    def get(self,request):
        dataAlmacen = Almacen.objects.all()
        serAlmacen = AlmacenSerializer(dataAlmacen,many=True)
        return Response(serAlmacen.data)
    
    def post(self,request):
        serAlmacen = AlmacenSerializer(data=request.data)
        serAlmacen.is_valid(raise_exception=True)
        serAlmacen.save()
        
        return Response(serAlmacen.data)
    
class AlmacenDetailView(APIView):
    
    def get(self,request,almacen_id):
        dataAlmacen = Almacen.objects.get(pk=almacen_id)
        serAlmacen = AlmacenSerializer(dataAlmacen)
        return Response(serAlmacen.data)
    
    def put(self,request,almacen_id):
        dataAlmacen = Almacen.objects.get(pk=almacen_id)
        serAlmacen = AlmacenSerializer(dataAlmacen,data=request.data)
        serAlmacen.is_valid(raise_exception=True)
        serAlmacen.save()
        return Response(serAlmacen.data)
    
    def delete(self,request,almacen_id):
        dataAlmacen = Almacen.objects.get(pk=almacen_id)
        serAlmacen = AlmacenSerializer(dataAlmacen)
        dataAlmacen.delete()
        return Response(serAlmacen.data)

class CargosView(APIView):
    
    def get(self,request):
        dataCargos = Cargos.objects.all()
        serCargos = CargosSerializer(dataCargos,many=True)
        return Response(serCargos.data)
    
    def post(self,request):
        serCargos = CargosSerializer(data=request.data)
        serCargos.is_valid(raise_exception=True)
        serCargos.save()
        
        return Response(serCargos.data)
    
class CargosDetailView(APIView):
    
    def get(self,request,cargo_id):
        dataCargos = Cargos.objects.get(pk=cargo_id)
        serCargos = CargosSerializer(dataCargos)
        return Response(serCargos.data)
    
    def put(self,request,cargo_id):
        dataCargos = Cargos.objects.get(pk=cargo_id)
        serCargos = CargosSerializer(dataCargos,data=request.data)
        serCargos.is_valid(raise_exception=True)
        serCargos.save()
        return Response(serCargos.data)
    
    def delete(self,request,cargo_id):
        dataCargos = Cargos.objects.get(pk=cargo_id)
        serCargos = CargosSerializer(dataCargos)
        dataCargos.delete()
        return Response(serCargos.data)

class EPPView(APIView):
    
    def get(self,request):
        dataEPP = EPP.objects.all()
        serEPP = EPPSerializer(dataEPP,many=True)
        return Response(serEPP.data)
    
    def post(self,request):
        serEPP = EPPSerializer(data=request.data)
        serEPP.is_valid(raise_exception=True)
        serEPP.save()
        
        return Response(serEPP.data)
    
class EPPDetailView(APIView):
    
    def get(self,request,epp_id):
        dataEPP = EPP.objects.get(pk=epp_id)
        serEPP = EPPSerializer(dataEPP)
        return Response(serEPP.data)
    
    def put(self,request,epp_id):
        dataEPP = EPP.objects.get(pk=epp_id)
        serEPP = EPPSerializer(dataEPP,data=request.data)
        serEPP.is_valid(raise_exception=True)
        serEPP.save()
        return Response(serEPP.data)
    
    def delete(self,request,epp_id):
        dataEPP = EPP.objects.get(pk=epp_id)
        serEPP = EPPSerializer(dataEPP)
        dataEPP.delete()
        return Response(serEPP.data)

class Detalle_almacenView(APIView):
    
    def get(self,request):
        dataDetalle = Detalle_almacen.objects.all()
        serDetalle = Detalle_almacenSerializer(dataDetalle,many=True)
        return Response(serDetalle.data)
    
    def post(self,request):
        serDetalle = Detalle_almacenSerializer(data=request.data)
        serDetalle.is_valid(raise_exception=True)
        serDetalle.save()
        
        return Response(serDetalle.data)
    
class Detalle_almacenDetailView(APIView):
    
    def get(self,request,detalle_id):
        dataDetalle = Detalle_almacen.objects.get(pk=detalle_id)
        serDetalle = Detalle_almacenSerializer(dataDetalle)
        return Response(serDetalle.data)
    
    def put(self,request,detalle_id):
        dataDetalle = Detalle_almacen.objects.get(pk=detalle_id)
        serDetalle = Detalle_almacenSerializer(dataDetalle,data=request.data)
        serDetalle.is_valid(raise_exception=True)
        serDetalle.save()
        return Response(serDetalle.data)
    
    def delete(self,request,detalle_id):
        dataDetalle = Detalle_almacen.objects.get(pk=detalle_id)
        serDetalle = Detalle_almacenSerializer(dataDetalle)
        dataDetalle.delete()
        return Response(serDetalle.data)

class DetalleTemperaturaView(APIView):
    
    def get(self,request):
        dataDetalle = DetalleTemperatura.objects.all()
        serDetalle = DetalleTemperaturaSerializer(dataDetalle,many=True)
        return Response(serDetalle.data)
    
    def post(self,request):
        serDetalle = DetalleTemperaturaSerializer(data=request.data)
        serDetalle.is_valid(raise_exception=True)
        serDetalle.save()
        
        return Response(serDetalle.data)
    
class DetalleTemperaturaDetailView(APIView):
    
    def get(self,request,detalle_id):
        dataDetalle = DetalleTemperatura.objects.get(pk=detalle_id)
        serDetalle = DetalleTemperaturaSerializer(dataDetalle)
        return Response(serDetalle.data)
    
    def put(self,request,detalle_id):
        dataDetalle = DetalleTemperatura.objects.get(pk=detalle_id)
        serDetalle = DetalleTemperaturaSerializer(dataDetalle,data=request.data)
        serDetalle.is_valid(raise_exception=True)
        serDetalle.save()
        return Response(serDetalle.data)
    
    def delete(self,request,detalle_id):
        dataDetalle = DetalleTemperatura.objects.get(pk=detalle_id)
        serDetalle = DetalleTemperaturaSerializer(dataDetalle)
        dataDetalle.delete()
        return Response(serDetalle.data)