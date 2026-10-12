#!/bin/bash

printf "Regular files: "
find . -maxdepth 1 -type f | wc -l

printf "Directories: "
find . -maxdepth 1 -type d | tail -n +2 | wc -l
