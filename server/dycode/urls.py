from django.urls    import path, include
from rest_framework import routers
from .views         import create_register, login, respaldo, UserAuditListCreateView, UserAuditDetailView

router = routers.DefaultRouter()

urlpatterns = [
  path('', include(router.urls)),
  path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
  path('dycode/register/', create_register, name="register"),
  path('dycode/login/', login, name="login"),
  path('dycode/user/respaldo/', respaldo, name="respaldo"),
  path('dycode/audit/', UserAuditListCreateView.as_view(), name='list'),
  path('dycode/audit/<int:pk>/', UserAuditDetailView, name='detail'),
]