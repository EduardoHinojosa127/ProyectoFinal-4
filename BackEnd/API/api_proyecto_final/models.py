from django.db import models

# Create your models here.

class Usuario(models.Model):
    nombre= models.CharField(max_length=200)
    apellidos = models.CharField(max_length=200)
    email = models.CharField(max_length=200, default="")
    clave = models.CharField(max_length=200, default="")
    estado = models.CharField(max_length=1,default="")
    sexo = models.CharField(max_length=1,default="")
    direccion = models.CharField(max_length=200,default="")
    telefono= models.CharField(max_length=10,default="")
    def __str__(self):
        return self.nombre

class Almacen(models.Model):
    nombre_almacen = models.CharField(max_length=200)
    estado_almacen = models.CharField(max_length=1)
    imagen = models.CharField(max_length=200, default="")
    informacion = models.CharField(max_length=500)
    temperatura = models.DecimalField(max_digits=5, decimal_places=2)
    def __str__(self):
        return self.nombre_almacen

class Detalle_almacen(models.Model):
    fecha = models.DateTimeField('date published')
    almacen_id = models.ForeignKey(Almacen, on_delete=models.CASCADE)
    temperatura = models.DecimalField(max_digits=5, decimal_places=2)
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    def __str__(self):
        return str(self.almacen_id)

class EPP(models.Model):
    nombre_epp = models.CharField(max_length=200)
    imagen = models.CharField(max_length=200)
    informacion_epp = models.CharField(max_length=200)
    almacen_id = models.ForeignKey(Almacen, on_delete=models.CASCADE)
    def __str__(self):
        return self.nombre_epp

class DetalleTemperatura(models.Model):
    almacen_id = models.ForeignKey(Almacen, on_delete=models.CASCADE)
    temp_ini = models.DecimalField(max_digits=5, decimal_places=2)
    temp_fin = models.DecimalField(max_digits=5, decimal_places=2)
    def __str__(self):
        return str(self.almacen_id)