from rest_framework import permissions


class IsAccountOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        """

        :param request:
        :param view:
        :param obj: This will be an Account object here in case of being used by authentication module
        :rtype : bool
        """
        if request.user:
            return obj == request.user
        return False