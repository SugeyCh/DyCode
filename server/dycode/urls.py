from django.urls    import path, include
from rest_framework import routers
from .views         import ViewEstudiante, login, respaldo

router = routers.DefaultRouter()
router.register(r'estudiante', ViewEstudiante, 'estudiante')

urlpatterns = [
  path('', include(router.urls)),
  path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
  path('dycode/login/', login, name="login"),
  path('dycode/user/respaldo/', respaldo, name="respaldo")
]