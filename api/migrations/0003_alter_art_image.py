# Generated by Django 3.2.5 on 2021-11-26 10:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_art_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='art',
            name='image',
            field=models.ImageField(default='', upload_to='frontend/static/images/'),
        ),
    ]
