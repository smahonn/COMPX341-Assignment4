echo $(python3 StaticCheck.py)
if [ $(python3 StaticCheck.py) = 0 ] 
then
	echo 'comments missing!'
	exit 2
fi
	echo 'all comments included!'
	npm install
	npm run build