#!/bin/sh

# Check if the first argument (commit message) is provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  exit 1
fi

# Run the commands
dot_clean .
git add .
git commit -m "$1"
git push -u origin main
