Instead of having a fancy website, I decided to simplify and power the website
with markdown files using static site generator [Hugo](https://gohugo.io/).

# Installation
Follow the steps below to install Hugo on your local machine.

## Prerequisites
- Git
- Go
- Chocolatey (for Windows users) This should be installed if you have Node.js 
installed.
- PowerShell (Not Windows PowerShell)

## Steps

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