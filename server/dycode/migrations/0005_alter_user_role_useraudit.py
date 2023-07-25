# Generated by Django 4.2.3 on 2023-07-25 04:37

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('dycode', '0004_alter_role_module_alter_role_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='role',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, to='dycode.role'),
        ),
        migrations.CreateModel(
            name='UserAudit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(choices=[('C', 'create'), ('U', 'update'), ('D', 'delete'), ('R', 'restore')], max_length=1)),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='audits', to='dycode.user')),
            ],
        ),
    ]