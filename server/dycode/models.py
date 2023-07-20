from django.db import models

# Create your models here.
class Estudiante(models.Model):
  name     = models.CharField(max_length=100)
  email    = models.EmailField(max_length=50, unique=True)
  password = models.CharField(max_length=100)
  
  def __str__(self):
    return self.name + ' - ' + self.email

class Nivel_Acceso(models.Model):
  profesor   = models.CharField(max_length=25)
  estudiante = models.CharField(max_length=25)

class Usuario(models.Model):
  name     = models.CharField(max_length=100)
  email    = models.EmailField(max_length=50, unique=True)
  password = models.CharField(max_length=50)
  acceso   = models.ForeignKey(Nivel_Acceso, on_delete=models.CASCADE)

class Proyecto(models.Model):
  name    = models.CharField(max_length=70)
  archivo = models.CharField(max_length=100)
 
class Workspace(models.Model):
  participantes = models.ForeignKey(Usuario, on_delete=models.CASCADE)
  proyecto      = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
  
class Estudiante_Eliminado(models.Model):
  data = models.ForeignKey(Usuario, on_delete=models.CASCADE) 