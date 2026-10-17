package httpserver

import (
	"net/http"

	"github.com/MalikSaddique/Portfolio_/backend/internal/transport/httpserver/handler"
	"github.com/MalikSaddique/Portfolio_/backend/internal/transport/httpserver/middleware"
	"github.com/labstack/echo/v4"
)

func SetupRoutes(e *echo.Echo, userHandler *handler.UserHandler) {
	e.Use(middleware.Middleware()...)

	e.GET("/health", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"status": "healthy",
		})
	})

	v1 := e.Group("/api/v1")

	v1.GET("/welcome", func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"message": "Welcome to the API v1 path!",
		})
	})
	v1.GET("/users/:id", userHandler.GetUser)

	// Protected Routes Group
	// secureGroup := v1.Group("/admin")
	// secureGroup.Use(middleware.AdminAuth())
}
