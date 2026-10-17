package service

import (
	"context"

	"github.com/MalikSaddique/Portfolio_/backend/internal/domain"
)

type UserRepository interface {
	GetByID(ctx context.Context, id int) (*domain.User, error)
}

type UserService struct {
	repo UserRepository
}

func NewUserService(repo UserRepository) *UserService {
	return &UserService{repo: repo}
}
