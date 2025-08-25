"""
Static Methods Example

- Static methods don't take `self` or `cls` automatically.
- They are namespaced utility functions placed inside a class for organizational purposes.
- They neither read instance state nor class state (unless you pass it explicitly).

Run this file directly to see the output:
    python static_methods.py
"""
from __future__ import annotations
from datetime import datetime

class Temperature:
    def __init__(self, celsius: float):
        self.celsius = float(celsius)

    def __repr__(self) -> str:
        return f"Temperature({self.celsius:.2f} °C)"

    # Static utilities: conversions and validation helpers
    @staticmethod
    def c_to_f(c: float) -> float:
        return (c * 9/5) + 32

    @staticmethod
    def f_to_c(f: float) -> float:
        return (f - 32) * 5/9

    @staticmethod
    def is_reasonable_celsius(c: float) -> bool:
        # Rough check: -100°C to 100°C is within many earthly use-cases
        return -100.0 <= c <= 100.0


if __name__ == "__main__":
    print("32°F ->", Temperature.f_to_c(32), "°C")
    print("0°C ->", Temperature.c_to_f(0), "°F")
    print("Is 25°C reasonable?", Temperature.is_reasonable_celsius(25))

    # You can use static methods through an instance as well, but they don't use instance state
    t = Temperature(22)
    print("Instance call still works:", t.c_to_f(t.celsius), "°F at", datetime.utcnow())
