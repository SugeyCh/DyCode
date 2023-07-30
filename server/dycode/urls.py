from django.urls    import path, include
from rest_framework import routers
from      .         import views

router = routers.DefaultRouter()

urlpatterns = [
  path('', include(router.urls)),
  path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
  path('dycode/register/', views.create_register, name="register"), #registrar usuario (POST)
  path('dycode/login/', views.login, name="login"), #iniciar sesión (POST)
  path('dycode/user/respaldo/', views.respaldo, name="respaldo"), #tabla de respaldo de los usuarios eliminados (GET)
  path('dycode/audit/', views.UserAuditListCreateView.as_view(), name='list'), #auditoria de usuario, se puede crear y ver (POST)
  path('dycode/view/users/', views.UserListView.as_view(), name='users' ), #lista de todos los usuarios registrados (GET)
  path('dycode/users/<int:pk>/', views.UserUpdateView.as_view(), name='user-update'), #edita un usuario por el id (PATH)
  path('dycode/delete/user/<int:user_id>/', views.delete_user, name='delete'), #elimina usuarios por el id (DELETE)
  
]