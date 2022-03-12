# Specify a base image

FROM node:alpine

WORKDIR /app

# Step 2: Download and install dependency

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

# Step 3: Tell the image what to do when it starts as container

CMD ["yarn", "start"]