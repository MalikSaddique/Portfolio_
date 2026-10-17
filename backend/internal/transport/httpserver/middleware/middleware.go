package middleware

import (
	"github.com/labstack/echo/v4"
	echomiddleware "github.com/labstack/echo/v4/middleware"
)

func Middleware() []echo.MiddlewareFunc {
	return []echo.MiddlewareFunc{
		echomiddleware.Recover(),
		echomiddleware.Logger(),
		echomiddleware.CORS(),
	}
}
