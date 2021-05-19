import os

# remove readme
os.remove("README.md")
os.remove("SUMMARY.md")

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
            if not ("es_419" in fileName):
                os.remove(fileRaw)
                print("Removed: " + fileRaw)
                countFiles += 1
                
print(f"Number of removed files: {countFiles}")