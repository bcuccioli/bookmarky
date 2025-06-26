#!/usr/bin/python3

import csv
import json
import sys

reader = csv.DictReader(sys.stdin)

result = []

print("const links = [")

for row in reader:
    title = row["title"]
    url = row["url"]
    tags = row["tags"].split('|') if row["tags"] else []
    print("%s," % json.dumps([title, url, tags]))

print("]")