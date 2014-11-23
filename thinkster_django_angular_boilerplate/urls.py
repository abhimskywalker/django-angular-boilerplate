from django.conf.urls import patterns, url, include
from django.views.generic.base import TemplateView

from rest_framework import routers

from authentication.views import AccountViewSet

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns(
    '',
    url(r'^api/v1/', include(router.urls)),
    url('^.*$', TemplateView.as_view(template_name='index.html'), name='index'),
)
