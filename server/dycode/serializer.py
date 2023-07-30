from django.contrib.auth.hashers import check_password 
from rest_framework              import serializers
from .models                     import User, UserAudit

# Trae todos los usuarios
class Users(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'name', 'email', 'password','date_reg']


# Validación de password registro de usuarios
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['name', 'email', 'password', 'role', 'date_reg']
    extra_kwargs = {
      'password': {'write_only': True},  # La contraseña solo será escrita (no incluida en la respuesta)
    }


# Validación de email y password registro de usuario
class LoginSerializer(serializers.Serializer):
  email    = serializers.CharField()
  password = serializers.CharField()
  
  def validate(self, data):
    email    = data.get('email')
    password = data.get('password')
    
    try:
      user = User.objects.get(email = email)
    except User.DoesNotExist:
      print(email)
      raise serializers.ValidationError('El correo no está registrado')
    
    if not check_password(password, user.password):
      raise serializers.ValidationError('Contraseña incorrecta')
    
    return data

# Trae datos para editar información de usuario
class UserEditSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'name', 'email', 'password', 'date_reg']
    extra_kwargs = {
      'password': {'write_only': True}  # Para asegurarnos de que el campo 'password' solo se use para escribir, no para leer.
    }


# Traer todas las auditorias  
class UserAuditSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserAudit
    fields = '__all__'
    