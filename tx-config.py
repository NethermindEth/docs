import os

project_slug = "nethermind-docs"

with open(".tx/config", "a") as file:
    file.write(f"[main]\n")
    file.write(f"host = https://www.transifex.com\n")
    file.write("\n")
    
search_path = '.' 
root, dirs, files = next(os.walk(search_path), ([],[],[]))

dirs = [directory for directory in dirs if not directory.startswith(".")]
countFiles = 0

with open(".tx/config", "a") as file:
                file.write(f"[{project_slug}.README-md]\n")
                file.write(f"file_filter = README.<lang>.md\n")
                file.write(f"source_file = README.md\n")
                file.write("source_lang = en\n")
                file.write("type = GITHUBMARKDOWN\n")
                file.write("\n")
                
with open(".tx/config", "a") as file:
                file.write(f"[{project_slug}.SUMMARY-md]\n")
                file.write(f"file_filter = SUMMARY.<lang>.md\n")
                file.write(f"source_file = SUMMARY.md\n")
                file.write("source_lang = en\n")
                file.write("type = GITHUBMARKDOWN\n")
                file.write("\n")

for directory in dirs:
    rootdir = directory
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if subdir.startswith("nethermind-"):
                filePath = os.path.join(subdir, file).replace("/","-").replace(".", "-")
                fileRaw = os.path.join(subdir, file)
                fileName = os.path.basename(fileRaw)
                fileNameNoExtension = os.path.splitext(fileName)[0]
                countFiles += 1
                with open(".tx/config", "a") as file:
                    file.write(f"[{project_slug}.{filePath}]\n")
                    file.write(f"file_filter = {subdir}/{fileNameNoExtension}.<lang>.md\n")
                    file.write(f"source_file = {fileRaw}\n")
                    file.write("source_lang = en\n")
                    file.write("type = GITHUBMARKDOWN\n")
                    file.write("\n")
            if not subdir.startswith("nethermind"):
                filePath = os.path.join(subdir, file).replace("/","-").replace(".", "-")
                fileRaw = os.path.join(subdir, file)
                fileName = os.path.basename(fileRaw)
                fileNameNoExtension = os.path.splitext(fileName)[0]
                countFiles += 1
                with open(".tx/config", "a") as file:
                    file.write(f"[{project_slug}.{filePath}]\n")
                    file.write(f"file_filter = {subdir}/{fileNameNoExtension}.<lang>.md\n")
                    file.write(f"source_file = {fileRaw}\n")
                    file.write("source_lang = en\n")
                    file.write("type = GITHUBMARKDOWN\n")
                    file.write("\n")
                    
print(f"Number of resources: {countFiles}")