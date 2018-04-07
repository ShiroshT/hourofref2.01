from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import StatDispModelSerializer

from candidateapp.models import CandidatesWiki, CandidateUserRelx, CandidateScoreHist


class StatsDispAPIView(generics.ListAPIView):
    serializer_class = StatDispModelSerializer


    def get_serializer_context(self, *args, **kwargs):
        context = super(StatsDispAPIView, self).get_serializer_context(*args, **kwargs)
        context['request'] = self.request
        return context

    def get_queryset(self, *args, **kwargs):

        # max_datetime = CandidatesWiki.objects.all().order_by('id')
        qs = CandidatesWiki.objects.order_by('-score_up')[:6]

        return qs
