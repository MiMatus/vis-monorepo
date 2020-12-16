FROM composer as builder
WORKDIR /app
# Install dependencies
COPY composer.json composer.json
COPY composer.lock composer.lock
RUN composer install --no-autoloader --no-progress --no-dev

# Copy codebase
COPY . ./

# Create Autoloading
RUN composer dump-autoload --optimize --no-interaction --no-cache
#RUN rm -f /app/app/config/config.local.neon

FROM php:8.0-cli as app
RUN docker-php-ext-install pdo pdo_mysql
COPY --from=builder /app /app
RUN chmod -R 0777 /app/temp && chmod -R 0777 /app/log
CMD php /app/src/app.php
