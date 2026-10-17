package main

import (
	"context"
	"log"

	"github.com/MalikSaddique/Portfolio_/backend/internal/config"
	"github.com/MalikSaddique/Portfolio_/backend/internal/repository/postgres"
	"github.com/MalikSaddique/Portfolio_/backend/internal/service"
	"github.com/MalikSaddique/Portfolio_/backend/internal/transport/httpserver"
	"github.com/MalikSaddique/Portfolio_/backend/internal/transport/httpserver/handler"
	"github.com/labstack/echo/v4"
)

func main() {
	cfg := config.LoadConfig()

	db, err := postgres.Connect(context.Background(), cfg.Database.DSN())
	if err != nil {
		log.Fatalf("Unable to connect to database: %v", err)
	}

	userRepository := postgres.NewUserRepository(db)
	userService := service.NewUserService(userRepository)
	userHandler := handler.NewUserHandler(userService)

	e := echo.New()
	httpserver.SetupRoutes(e, userHandler)

	e.Logger.Fatal(e.Start(":" + cfg.Server.Port))
}
