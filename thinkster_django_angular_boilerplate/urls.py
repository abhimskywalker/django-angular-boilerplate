from django.conf.urls import patterns, url, include
from django.views.generic.base import TemplateView

from rest_framework import routers

from authentication.views import AccountViewSet, LoginView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
    '',
    url(r'^api/v1/', include(router.urls)),
    url(r"api/v1/auth/login/$", LoginView.as_view(), name="login"),
    url('^.*$', TemplateView.as_view(template_name='index.html'), name='index'),
)
