#!/bin/bash
protected=("Applications" "Desktop" "Documents" "Downloads" "Library" "Movies" "Music" "Pictures" "Public" "fonts")

rm -rf ~/Downloads/*
rm -rf ~/Desktop/*
rm -rf ~/Documents/*

for file in ~/*; do
	f=$( echo $file | rev | cut -d/ -f-1 | rev)
	flag="false"

	for name in "${protected[@]}"; do
		if [ "$f" == "$name" ]
		then
			flag="true"
			continue
		fi
	done

	if [ "$flag" == "false" ];
	then
		rm -rf "$file" ~/Desktop/.backup/home
	fi
done
