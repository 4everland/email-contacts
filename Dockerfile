FROM node:latest

ENV WORKDIR='/email-contacts'
ENV APITOKEN='APITOKEN'
ENV PORT='3000'
WORKDIR $WORKDIR

ADD ./ $WORKDIR
RUN yarn
RUN yarn build
CMD yarn pro