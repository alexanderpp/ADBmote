#!/bin/sh
if which adb >/dev/null;
    then echo '> adb checked.'; exit;
    else
      if [ "$(whoami)" != "root" ]; then
          echo "This script requires root access.";
          sudo sh "$0";
          exit;
      else
          while true; do
              read -p "ADB (Android Debug Bridge) will be installed for you. Please confirm [y/n]" yn
              case $yn in
                  [Yy]* ) sudo apt-get install adb; break;;
                  [Nn]* ) exit;;
                  * ) echo "Please answer with Y/y or N/n.";;
              esac
          done
    fi;
fi
