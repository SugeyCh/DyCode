from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework   import viewsets, status, generics
from .serializer      import EstudianteSerializer, LoginSerializer
from .models          import Estudiante
import bcrypt

# Create your views here.
class ViewEstudiante(viewsets.ModelViewSet):
  serializer_class = EstudianteSerializer
  queryset         = Estudiante.objects.all()

@api_view(['POST'])
def login(request):
  serializer = LoginSerializer(data = request.data)
  if serializer.is_valid():
    email    = serializer.validated_data['email']
    password = serializer.validated_data['password']
    
    try:
      user = Estudiante.objects.get(email = email)
    except:
      return Response({'error': 'Usuario no registrado'}, status = status.HTTP_404_NOT_FOUND)

    if not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
      return Response({'error': 'Contraseña invalida'}, status = status.HTTP_400_BAD_REQUEST)
    
    data_serializer = EstudianteSerializer(user)
    user_data       = data_serializer.data
    
    response = {
      'msg': 'Inicio de sesión exitoso',
      'data': user_data
    }
    return Response(response, status = status.HTTP_200_OK)
  else:
    return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
  