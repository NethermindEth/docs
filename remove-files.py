import os

search_path = '.' 
root, dirs, files = next(os.walk(search_path), ([],[],[]))

dirs = [directory for directory in dirs if not directory.startswith(".")]
countFiles = 0

for directory in dirs:
    rootdir = directory
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            fileRaw = os.path.join(subdir, file)
            fileName = os.path.basename(fileRaw)
            print(fileName)
            if not ("zh_CN" in fileName):
                os.remove(fileRaw)
                print("removed" + fileRaw)
                countFiles += 1
                
print(f"Number of removed files: {countFiles}")