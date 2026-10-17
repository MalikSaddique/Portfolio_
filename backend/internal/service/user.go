package service

import (
	"context"
	"fmt"

	"github.com/MalikSaddique/Portfolio_/backend/internal/domain"
)

func (s *UserService) GetUserByID(ctx context.Context, id int) (*domain.User, error) {
	if id <= 0 {
		return nil, fmt.Errorf("user id must be positive: %w", domain.ErrInvalidInput)
	}
	return s.repo.GetByID(ctx, id)
}
