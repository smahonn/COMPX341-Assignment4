echo $(python3 StaticCheck.py)
if [ $(python3 StaticCheck.py) = 0 ] 
then
	echo 'comments missing!'
	exit 2
fi
	echo 'all comments included!'
	npm install
	npm run build
	cd src/__tests__
	npm run test
	cd ../../../
	git add .
	git commit -m $1
	git push origin master
	git status