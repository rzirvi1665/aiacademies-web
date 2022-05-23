FROM node:lts AS dependencies
WORKDIR /aiacademies-web
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts AS builder
WORKDIR /aiacademies-web
COPY . .
COPY --from=dependencies /aiacademies-web/node_modules ./node_modules
RUN yarn build

FROM node:lts AS runner
WORKDIR /aiacademies-web
ENV NODE_ENV production
COPY --from=builder /aiacademies-web/public ./public
COPY --from=builder /aiacademies-web/.next ./.next
COPY --from=builder /aiacademies-web/node_modules ./node_modules
COPY --from=builder /aiacademies-web/package.json ./package.json
COPY --from=builder /aiacademies-web/.env ./.env

EXPOSE 8080
ENV PORT 8080
CMD ["yarn", "start"]
