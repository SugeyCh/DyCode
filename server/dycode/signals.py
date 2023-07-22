from django.db.models.signals import pre_delete
from django.dispatch          import receiver
from .models                  import User, UserRespaldo

@receiver(pre_delete, sender = User)
def respaldo(sender, instance, **kwargs):
  UserRespaldo.objects.create(
    name  = instance.name,
    email = instance.email,
    role  = instance.role
  )