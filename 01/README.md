## Build the image

`docker build .`

---> 32be1227ef1b
Successfully built 32be1227ef1b

`docker run 32be1227ef1b`

## Tagging an image

`docker build -t rudchyk/redis:latest .` - with tags

---> 32be1227ef1b
Successfully built 32be1227ef1b
Successfully tagged rudchyk/redis:lates

`docker run rudchyk/redis`

## Manual image generation

1. `docker run -it alpine sh`

- `apk add --update redis`

2. `docker ps`
   ---> CONTAINER ID
   ---> <CONTAINER ID>
3. `docker commit -c "CMD 'redis-server'" <CONTAINER ID>`
   ---> sha256:<CONTAINER ID>
4. `docker run <CONTAINER ID>`
