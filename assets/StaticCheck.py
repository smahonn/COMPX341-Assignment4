from pathlib import Path
import sys
nameid = 'Stephen Mahon, 1505046'
for path in Path('src').rglob('*.ts'):
	file1 = open(path)
	readfile = file1.read()
	if nameid not in readfile:
		print('0')
		sys.exit(0)
print(1)
sys.exit(0)
