from django.contrib.auth.hashers import make_password
from django.db                   import models
from django.utils                import timezone

# Create your models here.
class Role(models.Model):
  role   = models.CharField(max_length=20, unique=True)
  module = models.ForeignKey('Module', on_delete=models.CASCADE, related_name='roles', null=True)

  def __str__(self):
    return self.role


class User(models.Model):
    name     = models.CharField(max_length=50)
    email    = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=250)
    role     = models.ForeignKey(Role, on_delete=models.CASCADE, default=1)
    date_reg = models.DateTimeField(default=timezone.now)
    
    def save(self, *args, **kwargs):
      self.password = make_password(self.password)  # Hashear la contraseña antes de guardarla
      super().save(*args, **kwargs)

    def __str__(self):
      return f"{self.id} - {self.role} - {self.name}"


class Module(models.Model):
  create_user    = models.BooleanField(default=False)
  edit_user      = models.BooleanField(default=False)
  delete_user    = models.BooleanField(default=False)
  create_project = models.BooleanField(default=False)
  assess_project = models.BooleanField(default=False)
  
  def __str__(self):
    return f'Module: {self.id}'


class UserAudit(models.Model):
  ACTION_CHOICES = (
    ('C', 'create'),
    ('U', 'update'),
    ('D', 'delete'),
    ('R', 'restore')
  )
  
  user   = models.ForeignKey(User, on_delete=models.CASCADE, related_name="audits", null=True)
  action = models.CharField(max_length=1, choices=ACTION_CHOICES)
  date   = models.DateTimeField(default=timezone.now)
  
  def __str__(self):
    return f'Auditoria del usuario: {self.user.name} - Acción: {self.get_action_display()}'
  

class Proyecto(models.Model):
  name  = models.CharField(max_length=70)
  user  = models.ForeignKey(User, on_delete=models.CASCADE, related_name="proyecto", null=True)
  field = models.CharField(max_length=250)
 
 
class Workspace(models.Model):
  participantes = models.ForeignKey(User, on_delete=models.CASCADE)
  proyecto      = models.ForeignKey(Proyecto, on_delete=models.CASCADE)
  
  
class UserRespaldo(models.Model):
  name  = models.CharField(max_length=100)
  email = models.EmailField()
  role  = models.CharField(max_length=50)
  date  = models.DateTimeField(default=timezone.now)