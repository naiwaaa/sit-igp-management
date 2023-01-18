#!/bin/bash

npx turbo prune --scope @sit-igp/web --docker --out-dir ./out/web

cp ./apps/web/fly.toml ./out/web/fly.toml

flyctl deploy --dockerfile ../../docker/Dockerfile.web.prod ./out/web

rm -rf ./out/web
