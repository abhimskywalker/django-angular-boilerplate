from rest_framework import permissions


class IsAuthorOfPost(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        """

        :param request:
        :param view:
        :param obj: Her ethe obj being the Post object
        :return:
        """
        if request.user:
            return obj.author == request.user
        return False