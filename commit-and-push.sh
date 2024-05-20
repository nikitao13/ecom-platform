#!/bin/sh

if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  exit 1
fi

dot_clean .
git add .
git commit -m "$1"
git push -u origin main
