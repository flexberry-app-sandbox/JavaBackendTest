docker build --no-cache -f SQL\Dockerfile.PostgreSql -t javabacktest-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t javabacktest-java/app ../../..

