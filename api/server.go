package main

import (
	"api/graph"
	"api/graph/generated"
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
    "github.com/rs/cors"

    userRepo "api/user/repository"
)

const defaultPort = "8080"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

    // repository
    ur := userRepo.NewMockUserRepository()

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: graph.NewResolver(ur)}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))

    c := cors.New(cors.Options{
        AllowedOrigins:   []string{"http://localhost:3000", "http://localhost:8080"},
        AllowCredentials: true,
    })

	http.Handle("/query", c.Handler(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
