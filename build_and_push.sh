#!/bin/bash

# Run the Svelte build command
npm run build

# Navigate to the build directory
cd build || exit

# Initialize a git repo if not already done
if [ ! -d ".git" ]; then
  git init
  git remote add origin git@github.com:ArKade523/Portfolio.git
fi

# Add, commit, and push the changes
git add .
git commit -m "Automated build commit"
git push origin main  # Replace with your branch name if it's not 'main'

# Navigate back to the root project directory
cd ..
