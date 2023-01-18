#!/bin/bash

npx turbo prune --scope @sit-igp/api --docker --out-dir ./out/api

cp ./apps/api/fly.toml ./out/api/fly.toml

flyctl deploy --dockerfile ../../docker/Dockerfile.api.prod ./out/api

rm -rf ./out/api
