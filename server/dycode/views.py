from rest_framework.decorators       import api_view
from rest_framework.views            import APIView
from rest_framework.response         import Response
from django.contrib.auth.hashers     import check_password
from rest_framework                  import  status, generics
from .serializer                     import UserSerializer, Users, LoginSerializer, UserAuditSerializer, UserEditSerializer
from .models                         import User, UserAudit, UserRespaldo

# Create your views here. 

# Función y validaciones de registro de usuario
@api_view(['POST'])
def create_register(request):
  if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Registro creado exitosamente', 
                'data': {
                'name': request.data['name'],
                'email': request.data['email']
                }
              }, 
              status=status.HTTP_201_CREATED
            )
        else:
          if 'email' in serializer.errors and 'unique' in serializer.errors['email'][0].lower():
            return Response({'error': 'El correo electrónico ya está en uso'}, status=status.HTTP_400_BAD_REQUEST)
          else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
      

# Función y validaciones de login
@api_view(['POST'])
def login(request):
  serializer = LoginSerializer(data = request.data)
  if serializer.is_valid():
    email    = serializer.validated_data['email']
    password = serializer.validated_data['password']
    
        
    try:
      user  = User.objects.get(email=email)
    except:
      return Response({'error': 'Usuario no registrado'}, status = status.HTTP_404_NOT_FOUND)
            
    if not check_password(password, user.password):
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


# Trae todos los usuarios que han sido eliminados
@api_view(['GET'])
def respaldo(request):
  request.data.pop('password')
  response = { 
    'msg': 'Usuario eliminado exitosamente', 
    'data': request.data 
  }
  return Response(response, status = status.HTTP_200_OK)


# AUDITORIAS
# para listar todas las auditorías de usuario y permitir la creación de nuevas auditorías utilizando el método POST.
class UserAuditListCreateView(generics.ListCreateAPIView):
    queryset = UserAudit.objects.all()
    serializer_class = UserAuditSerializer


# Trae todos los usuarios registrados
class UserListView(generics.ListAPIView):
  queryset = User.objects.all()
  serializer_class = Users
  
# Trae a un usuario por el email
class GetUserByEmail(APIView):
  def get(self, request, *args, **kwargs):
    email = kwargs.get('email', None)

    if not email:
      return Response({'message': 'Debes proporcionar un correo electrónico válido.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
      user = User.objects.get(email=email)
    except User.DoesNotExist:
      return Response({'message': 'No se encontró ningún usuario con este correo electrónico.'}, status=status.HTTP_404_NOT_FOUND)

    serializer = Users(user)
    return Response(serializer.data, status=status.HTTP_200_OK)


# Editar los usuarios
class UserUpdateView(generics.UpdateAPIView):
  queryset = User.objects.all()
  serializer_class = UserEditSerializer


# Función y validacion de eliminación de usuario
@api_view(['DELETE'])
def delete_user(request, user_id):
  try:
    user = User.objects.get(pk=user_id)
  except User.DoesNotExist:
    return Response({"error": "El usuario no existe."}, status=status.HTTP_404_NOT_FOUND)

  # Guarda la información del usuario en UserRespaldo antes de eliminarlo
  user_data = {
    'name': user.name,
    'email': user.email,
    'role': user.role,
  }
  UserRespaldo.objects.create(**user_data)

  # Elimina el usuario
  user.delete()
  return Response({"message": "Usuario eliminado exitosamente.", "data": user_data}, status=status.HTTP_204_NO_CONTENT)
