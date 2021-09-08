docker build --no-cache -f SQL\Dockerfile.PostgreSql -t javabacktest/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t javabacktest/app ../..
