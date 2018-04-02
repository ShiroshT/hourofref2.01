from django.http import JsonResponse
from django.db.models import Q
from rest_framework import generics
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response




from candidateapp.models import CandidateScoreHist

from .serializers import CandidateScoreHistModelSerializer




class CandidatesScoreHistAPIView(generics.ListAPIView):
    serializer_class = CandidateScoreHistModelSerializer

    def get_serializer_context(self, *args, **kwargs):
        context = super(CandidatesScoreHistAPIView, self).get_serializer_context(*args, **kwargs)
        context['request'] = self.request
        return context

    def get_queryset(self, *args, **kwargs):
        qs = CandidateScoreHist.objects.all()

        return qs



def get_data_candhist(request, *args, **kwargs):
     data = CandidateScoreHist.objects.values()

     return JsonResponse(data)


