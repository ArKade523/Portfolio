#!/bin/bash

# Navigate to the build directory
cd build || exit

# Initialize a git repo if not already done
if [ ! -d ".git" ]; then
  git init
  git remote add origin git@github.com:ArKade523/Portfolio.git
fi

git checkout -b gh-pages

git fetch

# Add, commit, and push the changes
git add .
git commit -m "Automated build commit"
git push origin gh-pages --force

# Navigate back to the root project directory
cd ..
