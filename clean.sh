#!/bin/bash
protected=("Applications" "Desktop" "Documents" "Downloads" "Library" "Movies" "Music" "Pictures" "Public" "fonts")

if [ ! -d ~/Desktop/.backup ];
then
	mkdir ~/Desktop/.backup
	mkdir ~/Desktop/.backup/Downloads \
	~/Desktop/.backup/Documents \
	~/Desktop/.backup/Home \
	~/Desktop/.backup/Desktop
fi

mv ~/Downloads/* ~/Desktop/.backup/Downloads
mv ~/Desktop/* ~/Desktop/.backup/Desktop
mv ~/Documents/* ~/Desktop/.backup/Documents

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
		mv "$file" ~/Desktop/.backup/home
	fi
done

zip -r backup.zip ~/Desktop/.backup
rm -rf ~/Desktop/.backup
