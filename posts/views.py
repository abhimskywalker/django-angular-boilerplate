from rest_framework import permissions, viewsets
from rest_framework.response import Response

from posts.models import Post
from posts.permissions import IsAuthorOfPost
from posts.serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.order_by('-created_at')
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny, )
        return (permissions.IsAuthenticated, IsAuthorOfPost)

    def pre_save(self, obj):
        obj.author = self.request.user

        return super(PostViewSet, self).pre_save(obj)