-include .env
export

DB_URL ?= postgres://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_NAME)?sslmode=$(DB_SSLMODE)

.PHONY: run build test vet fmt tidy migrate-up migrate-down migrate-new

run:
	go run ./cmd/api

build:
	CGO_ENABLED=0 go build -trimpath -o bin/api ./cmd/api

test:
	go test -race ./...

vet:
	go vet ./...

fmt:
	gofmt -w .

tidy:
	go mod tidy

# Requires the golang-migrate CLI: https://github.com/golang-migrate/migrate
migrate-up:
	migrate -path migrations -database "$(DB_URL)" up

migrate-down:
	migrate -path migrations -database "$(DB_URL)" down 1

# Usage: make migrate-new name=create_projects_table
migrate-new:
	migrate create -ext sql -dir migrations -seq $(name)
