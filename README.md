## Attendance Backend

## Development Setup

### Local Setup


- Create Virtual Environment `virtualenv venv`

- Activate Virtual Environment 
    - Windows - `venv/Scripts/activate.ps1`
    - Linux - `source venv/bin/activate`

- Install Dependencies `pip install -r requirements.txt`

- Add `.env` file

- Run Migratations `python manage.py migrate`

- Create Super User `python manage.py createsuperuser`
    - Enter Username and Password and Create Super User

- Start Server `python manage.py runserver`


## Env file
```




EMAIL_HOST=""
EMAIL_PORT=
EMAIL_HOST_USER=""
EMAIL_HOST_PASSWORD=""
EMAIL_RECV_LIST=['']



```
