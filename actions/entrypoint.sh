#!/bin/bash
set -e

echo "Installing dependencies..."
npm ci

echo "Running ESLint..."
npx eslint .