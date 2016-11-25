#!/bin/bash


while true; do
  echo -n "Enter commit comments and press [ENTER]: "
  read comment
  echo -n "Comments: $comment"
  echo
  read -p "Do you want to upload changes to Master [y or n] ? : " yn
  case $yn in
      [Yy]* ) git add -A; git commit -m "$comment"; git push origin master; break;;
      [Nn]* ) exit;;
      * ) echo "Please answer yes or no.";;
  esac
done
