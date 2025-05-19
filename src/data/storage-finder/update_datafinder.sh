#!/bin/bash

set -e

CSV_PATH=$(ls src/data/storage-finder/csv/*.csv 2>/dev/null | head -n 1)
JSON_PATH="src/data/storage-finder/service-list.json"

if [ -z "$CSV_PATH" ]; then
  echo "No CSV file found in the current directory."
  exit 1
fi

if [ -f "$JSON_PATH" ]; then
  echo "Backing up existing service-list.json..."
  cp "$JSON_PATH" "src/data/storage-finder/service-list_backup_$(date +%s).json"
else
  echo "No existing service-list.json found. Skipping backup."
fi

echo "Converting CSV: $CSV_PATH"
python3 scripts/convert_csv_to_json.py --csv "$CSV_PATH" --out "$JSON_PATH"

echo "Rebuilding site..."
pixi run build

echo "Done. Preview with:"
echo "   pixi run serve"
echo "Visit http://localhost:3000/storage-finder/ in OOD Firefox"