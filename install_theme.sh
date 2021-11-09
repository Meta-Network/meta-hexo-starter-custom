#!/bin/bash
git clone --depth 1 https://github.com/zthxxx/hexo-theme-Wikitten themes/Wikitten 

cp -rf themes/Wikitten/_source/* source/
cp -rf themes/Wikitten/_scaffolds/* scaffolds/