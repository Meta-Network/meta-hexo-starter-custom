FROM meta-cms-worker:latest
WORKDIR /opt/MetaNetwork/Template

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NODE_ENV=production
CMD ["--enable-source-maps","/opt/MetaNetwork/Worker/dist/main.js"]
