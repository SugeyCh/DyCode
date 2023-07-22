from rest_framework import serializers
from .models        import User, UserRespaldo
import bcrypt

class UserSerializer(serializers.ModelSerializer):
  password = serializers.CharField(write_only = True)
  
  class Meta:
    model  = User
    fields = '__all__'
    
  def create(self, validated_data):
    password = validated_data.pop('password')
    passhash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    validated_data['password'] = passhash.decode('utf-8')
    return super().create(validated_data)


class LoginSerializer(serializers.Serializer):
  email    = serializers.CharField()
  password = serializers.CharField()
  
  def validate(self, data):
    email    = data.get('email')
    password = data.get('password')
    
    try:
      user = User.objects.get(email = email)
    except User.DoesNotExist:
      raise serializers.ValidationError('No se encontró un usuario')
    
    if not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
      raise serializers.ValidationError('Contraseña incorrecta')
    
    return data
  
    