import os

# rename readme
os.rename("README.zh_CN.md", "README.md")
os.rename("SUMMARY.zh_CN.md", "SUMMARY.md")

search_path = '.' 
root, dirs, files = next(os.walk(search_path), ([],[],[]))

dirs = [directory for directory in dirs if not directory.startswith(".")]
countFiles = 0
                
for directory in dirs:
    rootdir = directory
    # os.rename("contact", "lian-xi-fang-shi") if "contact" in directory else directory
    # os.rename("first-steps-with-nethermind", "shi-yong-nethermind-de-yi-kai-shi") if "first-steps-with-nethermind" in directory else directory
    # os.rename("enterprise", "shi-ye") if "enterprise" in directory else directory
    # os.rename("nethermind-utilities", "nethermind-shi-yong-cheng-xu") if "nethermind-utilities" in directory else directory
    # os.rename("ethereum-client", "yi-tai-fang-ke-hu-duan") if "ethereum-client" in directory else directory
    # os.rename("guides-and-helpers", "zhi-nan-he-zhu-shou") if "guides-and-helpers" in directory else directory
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            fileRaw = os.path.join(subdir, file)
            fileName = os.path.basename(fileRaw)
            fileNameOrigin = os.path.splitext(fileName)[0].replace(".zh_CN", "")
            os.rename(fileRaw, f"{subdir}/{fileNameOrigin}.md")
            countFiles += 1
            
print(f"Number of replaced files: {countFiles}")
