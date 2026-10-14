#!/bin/bash

if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
	exit 1
fi

count=0

for arg in "$@"; do
	echo "$arg"

	((count++))
	if [ "$count" -eq 3 ]; then
		break
	fi
done
