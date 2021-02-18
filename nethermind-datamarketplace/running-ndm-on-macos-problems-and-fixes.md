# Running NDM on MacOS problems and fixes

With the first-time run of NDM on the MacOs machine, you can stumble on some problems due to Apple's security and privacy settings.   
  
These are the most common problems and fixes for them: 

* **Operation not permitted error** 
  1. Pull down the  Apple menu and choose **System Preferences**
  2. Chose **Security & Privacy** control panel
  3. Now select the **Privacy** tab, then from the left-side menu select **Full Disk Access**
  4. Click the lock icon in the lower-left corner of the preference panel and authenticate with an admin-level login
  5. Now click the \[+\] plus button to add an application with full disk access
  6. Navigate to the **/Applications/Utilities/** folder and choose **Terminal** to grant Terminal with Full Disk Access privileges 
     * \(Terminal = your local terminal emulator like iTerm\)
  7. Relaunch Terminal, the _Operation not permitted_ error messages will be gone

![Be sure to let your terminal emulator access to full disk when encountering Operation not permitted permited&apos; error](../.gitbook/assets/image%20%2818%29.png)

* **Cannot open an app from an unidentified developer error**

![](../.gitbook/assets/image%20%28144%29.png)

* [x] Go to **System Preferences** and then **Security and Privacy** tab and click on the **Open Anyway** option. Enter your Mac’s password if asked.

![](../.gitbook/assets/image%20%28141%29.png)

* [x] **Y**ou will be asked if you are sure that you want to open the app - click '**Open**'.

![](../.gitbook/assets/image%20%28143%29.png)

* [x] After that, you might expect more similar problems with **Nethermind.Runner** and **Nethermind.DataMarketplace** - to deal with that just repeat the process with opening applications from identified developers. ****

