import argparse
import csv
import json
import os

def parse_facet_matches(value):
    if not value.strip():
        return []
    return [v.strip() for v in value.split(';') if v.strip()]

def convert_csv_to_json(csv_path, json_path):
    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        data = []
        for row in reader:
            if 'facet_matches' in row:
                row['facet_matches'] = parse_facet_matches(row['facet_matches'])
            data.append(row)

    os.makedirs(os.path.dirname(json_path), exist_ok=True)
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert CSV to JSON")
    parser.add_argument("--csv", required=True, help="Path to input CSV")
    parser.add_argument("--out", required=True, help="Path to output JSON")
    args = parser.parse_args()

    convert_csv_to_json(args.csv, args.out)