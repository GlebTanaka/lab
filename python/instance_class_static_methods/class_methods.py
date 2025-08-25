"""
Class Methods Example

- Class methods take `cls` as the first parameter.
- They can manipulate or read class-level state shared across instances.
- They are often used as alternative constructors (factory methods).

Run this file directly to see the output:
    python class_methods.py
"""
from __future__ import annotations
from datetime import datetime, UTC


class User:
    # class-level registry and counters (shared across all instances)
    _registry: dict[int, "User"] = {}
    _next_id: int = 1

    def __init__(self, username: str, created_at: datetime | None = None):
        self.id = self.__class__._next_id
        self.username = username
        self.created_at = created_at or datetime.now(UTC)
        # register this instance and advance counter
        self.__class__._registry[self.id] = self
        self.__class__._next_id += 1

    # Class method as an alternative constructor
    @classmethod
    def from_email(cls, email: str) -> "User":
        username = email.split("@")[0]
        return cls(username=username)

    # Class method that operates on class-level state
    @classmethod
    def by_id(cls, user_id: int) -> "User | None":
        return cls._registry.get(user_id)

    # Class method for stats about the class as a whole
    @classmethod
    def total_users(cls) -> int:
        return len(cls._registry)

    def __repr__(self) -> str:
        ts = self.created_at.strftime("%Y-%m-%d %H:%M:%S")
        return f"User(id={self.id}, username={self.username!r}, created_at={ts})"


if __name__ == "__main__":
    u1 = User("alice")
    u2 = User.from_email("bob@example.com")  # created via class method

    print("Created:", u1)
    print("Created:", u2)
    print("Total users:", User.total_users())
    print("Lookup by id 1:", User.by_id(1))

