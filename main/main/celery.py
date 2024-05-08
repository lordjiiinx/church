from celery import Celery
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE','main.settings')
app = Celery('main')
app.config_from_object('django.conf:settings', namespace = 'CELERY')
app.autodiscover_tasks()

if __name__ == '__main__':
    app.start()