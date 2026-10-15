from functools import lru_cache

from pydantic import PostgresDsn
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "PokéMarket Predictor API"
    app_version: str = "0.1.0"
    database_url: PostgresDsn = PostgresDsn(
        "postgresql+psycopg://postgres:postgres@localhost:5432/pokemarket"
    )
    cors_origins: list[str] = ["http://localhost:5173"]

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()
