from celery import shared_task

from .joinedemail import send_mail_function


@shared_task(name='send_email_task2')
def send_email_task2(mail,department,joined_date,name):
    return send_mail_function(mail,department,joined_date,name)