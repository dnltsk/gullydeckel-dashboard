FROM ubuntu:22.04

RUN apt-get update && apt-get install -y \
    sudo \
    apache2 \
    gdal-bin \
    libapache2-mod-fcgid \
    cgi-mapserver \
    mapserver-bin   \
    && apt-get clean

RUN a2enmod cgi \
    && a2enmod headers \
    && echo "Header add Access-Control-Allow-Origin *;" > /etc/apache2/.htaccess

COPY map /map
COPY app /var/www/html/

EXPOSE 80

CMD apachectl -D FOREGROUND