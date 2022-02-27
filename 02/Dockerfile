# Specify a base image

FROM node:alpine

WORKDIR /usr/app

# Step 2: Download and install dependency

COPY ./package.json ./
RUN yarn install
COPY ./ ./

# Step 3: Tell the image what to do when it starts as container

CMD ["yarn", "start"]