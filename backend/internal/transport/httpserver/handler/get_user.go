package handler

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/MalikSaddique/Portfolio_/backend/internal/domain"
	"github.com/MalikSaddique/Portfolio_/backend/internal/transport/httpserver/dto"
	"github.com/labstack/echo/v4"
)

func (h *UserHandler) GetUser(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		return c.JSON(http.StatusBadRequest, map[string]string{"error": "ID must be an integer"})
	}

	user, err := h.userService.GetUserByID(c.Request().Context(), id)
	switch {
	case errors.Is(err, domain.ErrInvalidInput):
		return c.JSON(http.StatusBadRequest, map[string]string{"error": err.Error()})
	case errors.Is(err, domain.ErrNotFound):
		return c.JSON(http.StatusNotFound, map[string]string{"error": "user not found"})
	case err != nil:
		c.Logger().Error(err)
		return c.JSON(http.StatusInternalServerError, map[string]string{"error": "internal server error"})
	}

	return c.JSON(http.StatusOK, dto.NewUserResponse(user))
}
