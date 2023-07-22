from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework   import viewsets, status, generics
from .serializer      import UserSerializer, LoginSerializer
from .models          import User, UserRespaldo
import bcrypt

# Create your views here.
class ViewEstudiante(viewsets.ModelViewSet):
  serializer_class = UserSerializer
  queryset         = User.objects.all()

  
@api_view(['POST'])
def create_register(request):
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Registro creado exitosamente'}, status=status.HTTP_201_CREATED)
    else:
        if 'eml_reg' in serializer.errors and 'unique' in serializer.errors['eml_reg'][0].lower():
            return Response({'error': 'El correo electrónico ya está en uso'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login(request):
  serializer = LoginSerializer(data = request.data)
  if serializer.is_valid():
    email    = serializer.validated_data['email']
    password = serializer.validated_data['password']
    
    try:
      user = User.objects.get(email = email)
    except:
      return Response({'error': 'Usuario no registrado'}, status = status.HTTP_404_NOT_FOUND)

    if not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
      return Response({'error': 'Contraseña invalida'}, status = status.HTTP_400_BAD_REQUEST)
    
    data_serializer = UserSerializer(user)
    user_data       = data_serializer.data
    
    response = {
      'msg': 'Inicio de sesión exitoso',
      'data': user_data
    }
    return Response(response, status = status.HTTP_200_OK)
  else:
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def respaldo(request):
  request.data.pop('password')
  response = { 
    'msg': 'Usuario añadido al respaldo exitosamente', 
    'data': request.data 
  }
  return Response(response, status = status.HTTP_200_OK)