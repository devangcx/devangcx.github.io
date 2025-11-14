## Local build
Follow the steps below to install Hugo on your local machine.

Prerequisites
- Git
- Go
- Chocolatey (for Windows users) This should be installed if you have Node.js 
installed.
- PowerShell (Not Windows PowerShell)

> [!IMPORTANT] 
> Follow all the steps in an elevated PowerShell instance.

Install Hugo
```powershell
choco install hugo-extended
```
Verify Hugo installation
```powershell
hugo version
```
Create the project directory
```powershell
hugo new site <project-directory>
```
Navigate to the project directory
```powershell
cd <project-directory>
```
If you don't have a Github repository yet, initialize one now. But if you have
one, skip this step. And copy all the files and folder from the project directory
to your Github repository folder.
```powershell
git init
```
Now, initialize the project as a hugo module.
```powershell
hugo mod init github.com/<your-github-username>/<your-repo-name>
```
Verify if the project is setup correctly.
```powershell
hugo server --openBrowser
```
To stop the server, press `Ctrl + C`.



