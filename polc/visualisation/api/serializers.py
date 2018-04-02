from rest_framework import serializers

from candidateapp.models import CandidateScoreHist


class CandidateScoreHistModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = CandidateScoreHist
        fields = [
            'candidate_id',
            'score',
            'timestamp',
            'updated',
        ]

