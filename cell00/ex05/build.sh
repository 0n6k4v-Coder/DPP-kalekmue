#!/bin/bash

if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	for dir in "$@"
	do
		mkdir -p "ex${dir}"
	done
fi
