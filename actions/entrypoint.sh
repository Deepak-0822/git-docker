#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Running ESLint..."
npx eslint .
