FROM node:latest

ENV WORKDIR='/email-contacts'
ENV APITOKEN='APITOKEN'

WORKDIR $WORKDIR

ADD ./ $WORKDIR
RUN yarn
RUN yarn build
CMD yarn pro