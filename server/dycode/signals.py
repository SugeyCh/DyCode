from django.db.models.signals import pre_delete, post_save, post_delete
from django.dispatch          import receiver
from .models                  import User, UserRespaldo
from django.dispatch          import receiver

# DISPARADOR DE DELETE (se después de que un usuario ha sido elimanado)
def delete_handler(sender, instance, **kwargs):
    # Verificar si el registro existe en User antes de insertar en UserRespaldo
    if User.objects.filter(id=instance.id).exists():
        user_data = {
            'name': instance.name,
            'email': instance.email,
            'role': instance.role,
        }
        UserRespaldo.objects.create(**user_data)

@receiver(post_delete, sender=User)
def delete_trigger(sender, instance, **kwargs):
    delete_handler(sender, instance, **kwargs)


# DISPARADOR CREATE AND UPDATE (se activa después de que un usuario crea o edita)
@receiver([post_save])
def create_user_audit(sender, instance, **kwargs):
    from .models import UserAudit

    # Define un diccionario para mapear acciones según el tipo de señal
    action_mapping = {
        post_save: 'C' if kwargs.get('created') else 'U'
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