package handler

import "github.com/MalikSaddique/Portfolio_/backend/internal/service"

type UserHandler struct {
	userService *service.UserService
}

func NewUserHandler(us *service.UserService) *UserHandler {
	return &UserHandler{
		userService: us,
	}
}
