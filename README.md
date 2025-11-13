## History
The site has gone through several iterations over the years.
1. It started as a HTML + CSS + JS [site](https://github.com/devangcx/devangcx.github.io/tree/413d7816c9b2de3179e2c43735b3516babb25fcc)
2. Briefly became a Hugo [site](https://github.com/devangcx/devangcx.github.io/tree/9a3146f97cc63f8617f82d0101d8e97eadaa76be)
3. A React + CSS [app](https://github.com/devangcx/devangcx.github.io/tree/e3fcb6a96e9152b722ab7483b40fdc534f8dd334)
4. And now back to being a Hugo site.

It was a bit of a humbling experience to come back to something I had already
rejected.

It is totally possible to build a static content site using React. But when you
do that, you need to figure out serving full HTML files for your articles / routes.
These HTML files are necessary for thr search engine bots to you catalogue your
articles.

While it is possible to do this using React + Next.js (or using many other
alternatives). It seemed like wrong tool for the job.

Hugo supports generating HTML files for the articles along with out of the box
SEO metadata injection to the articles. The more you use it the more you 
realize that the framework is truly built to handle the use case of having
deeply hierarchical static content (documentation) sites.

This was one of those moments when I faced the dilemma of whether I force my will and
keep pushing through the React ecosystem that I have come to enjoy, or do I do
adopt something completely new, a templating DSL.

I am feeling happy with Hugo so far. No only because it seems like the right tool
for the job, but also because of the humility this experience brought to me.

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
hugo server
```
To stop the server, press `Ctrl + C`.



