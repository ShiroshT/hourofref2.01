from django.conf.urls import url
from django.conf.urls import include
from django.contrib import admin
from django.views.generic.base import RedirectView
from django.conf import settings
from django.conf.urls.static import static

from .views import (
    StatsDispGainersAPIView,
    StatsDispLosersAPIView
)

urlpatterns = [
    url(r'^scoreup/$', StatsDispGainersAPIView.as_view(), name='highscores-gainers'),
    url(r'^scoredown/$', StatsDispLosersAPIView.as_view(), name='highscores-loosers'),
]
