FROM python:3.6.5-slim AS prod

RUN apt-get update && apt-get install -y \
    gcc

WORKDIR /srv
COPY ./requirements.txt /srv/requirements.txt
COPY ./dev-requirements.txt /srv/dev-requirements.txt
RUN pip install -r requirements.txt --no-cache-dir  && \
    pip install -r dev-requirements.txt  --no-cache-dir

COPY ./ /srv
RUN python setup.py develop
ENV FLASK_APP mlboard_api
ENV FLASK_CONFIG_FILE_PATH /srv/mlboard.cfg
CMD flask run --host=0.0.0.0
