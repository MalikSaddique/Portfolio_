package postgres

import (
	"context"
	"errors"
	"fmt"

	"github.com/MalikSaddique/Portfolio_/backend/internal/domain"
	"github.com/jackc/pgx/v5"
)

func (r *UserRepository) GetByID(ctx context.Context, id int) (*domain.User, error) {
	const query = `SELECT id, name, email FROM users WHERE id = $1`

	var user domain.User
	err := r.db.QueryRow(ctx, query, id).Scan(&user.ID, &user.Name, &user.Email)
	if errors.Is(err, pgx.ErrNoRows) {
		return nil, fmt.Errorf("user %d: %w", id, domain.ErrNotFound)
	}
	if err != nil {
		return nil, fmt.Errorf("get user %d: %w", id, err)
	}

	return &user, nil
}
