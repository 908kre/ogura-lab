FROM python:3.6-slim

RUN apt-get update && apt-get install -y \
    wget
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

WORKDIR /srv
COPY ./requirements.txt /srv/requirements.txt
RUN pip install -r requirements.txt --no-cache-dir
COPY ./ /srv
CMD dockerize -wait tcp://db:5432 alembic upgrade head
