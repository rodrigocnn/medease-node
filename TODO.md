# Setup

[ ] Prima

[ ] CRUD de users
[ ] CRUD patients

class Patient(models.Model):
name = models.CharField(max_length=50, unique=True)
email = models.CharField(max_length=80, unique=True, null=True)
date_of_birth = models.DateField()
phone = models.CharField(max_length=50)
rg = models.CharField(max_length=50, unique=True)
cpf = models.CharField(max_length=50, unique=True)
address = models.CharField(max_length=50)
district = models.CharField(max_length=80)
city = models.CharField(max_length=80)
state = models.CharField(max_length=80)
created_at = models.DateTimeField(auto_now_add=True)
updated_at = models.DateTimeField(auto_now=True)
