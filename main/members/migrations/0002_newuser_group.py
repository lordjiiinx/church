# Generated by Django 5.0.4 on 2024-05-06 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='newuser',
            name='group',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
    ]
