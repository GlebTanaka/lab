"""
Instance Methods Example

- Instance methods take `self` as the first parameter.
- They can read/write instance-specific state stored on `self`.
- They can also access class attributes through `self.__class__` if needed, but their primary
  focus is per-object behavior.

Run this file directly to see the output:
    python instance_methods.py
"""

class BankAccount:
    interest_rate = 0.02  # class-level default (shared)

    def __init__(self, owner: str, balance: float = 0.0):
        self.owner = owner          # instance-specific state
        self.balance = float(balance)

    # Instance method: operates on a particular instance's state
    def deposit(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Deposit must be positive")
        self.balance += amount

    # Instance method: operates on a particular instance's state
    def withdraw(self, amount: float) -> None:
        if amount <= 0:
            raise ValueError("Withdrawal must be positive")
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount

    # Instance method using both instance and class data
    def apply_interest(self) -> None:
        self.balance += self.balance * self.__class__.interest_rate

    def summary(self) -> str:
        return f"BankAccount(owner={self.owner!r}, balance={self.balance:.2f})"


if __name__ == "__main__":
    alice = BankAccount("Alice", 100)
    print("Initial:", alice.summary())
    alice.deposit(50)
    print("After deposit:", alice.summary())
    alice.apply_interest()
    print("After interest:", alice.summary())
    # Another instance has independent state
    bob = BankAccount("Bob")
    print("Bob initial:", bob.summary())
