build:
	docker build --no-cache -t test .
run:
	docker run -it -p 3000:3000 -v my:/app --rm test
dev:
	docker run -it -p 3000:3000 -v "C:/playground/docker-and-kubernetes/app:/app" -v /app/node_modules --rm test
dev-u:
	docker run -it -p 3000:3000 -v /app/node_modules -v ~/app:/app app
dev-u1:
	docker run -it -p 3000:3000 -v /app/node_modules -v /mnt/c/playground/docker-and-kubernetes/app:/app app
sh:
	docker run -it test sh
stop:
	docker stop 3997c38ba88d
check:
	docker run -it -v "C:/playground/docker-and-kubernetes/app:/app" test ls
check2:
	docker run -it -v "C:/playground/docker-and-kubernetes/app:/app" test pwd
dcb:
	docker-compose build --no-cache
dc:
	docker-compose up --build