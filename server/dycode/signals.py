from django.db.models.signals import pre_delete, post_save, post_delete
from django.dispatch          import receiver
from .models                  import User, UserRespaldo
from django.dispatch          import receiver

@receiver(pre_delete, sender = User)
def respaldo(sender, instance, **kwargs):
  UserRespaldo.objects.create(
    name  = instance.name,
    email = instance.email,
    role  = instance.role
  )


@receiver([post_save, post_delete])
def create_user_audit(sender, instance, **kwargs):
    from .models import UserAudit

    # Define un diccionario para mapear acciones según el tipo de señal
    action_mapping = {
        post_save: 'C' if kwargs.get('created') else 'U',
        post_delete: 'D'
    }

    # Si la instancia es un modelo UserAudit, no registramos la auditoría para evitar bucles infinitos
    if sender == UserAudit:
        return

    # Si la señal no es de post_save ni post_delete, no realizamos la auditoría
    action = action_mapping.get(sender)
    if not action:
        return

    # Obtenemos el usuario actual (si está disponible)
    user = None
    if hasattr(instance, 'user'):
        user = instance.user

    # Registramos la auditoría
    UserAudit.objects.create(user=user, action=action)