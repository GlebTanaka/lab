#!/usr/bin/env bash
# Simple Bash examples
set -euo pipefail

# Variables
NAME=${1:-World}
echo "Hello, ${NAME}!"

# Arrays and loops
colors=(red green blue)
for c in "${colors[@]}"; do
  echo "Color: $c"
done

# Functions
say_hi() {
  echo "Hi, $1"
}

say_hi "Bash"

# I/O redirection and pipes
printf "one\ntwo\nthree\n" | nl | sed 's/^/Line: /'
