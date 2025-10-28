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

### Project Setup

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

### Add a Theme
You can select from the themes available at [Hugo Themes](https://themes.gohugo.io/).
For this project, I have used the [Paper theme](https://themes.gohugo.io/themes/hugo-paper/).

In your `./hugo.toml` file, add the following lines to use the Paper theme.
```toml
[module]
  [[module.imports]]
    path = "github.com/nanxiaobei/hugo-paper"
```
Add the Paper theme as Hugo module.
```powershell
hugo mod get github.com/nanxiaobei/hugo-paper
```
### Style Overrides
The Paper theme comes with a style. In this section, we override some of the
styles to our liking.

#### Headings
We want to turn the headings into anchor link so that users can easily copy the
link to a specific section.

Add the following code to `layouts/_default/_markup/render-heading.html` to
create anchor links for headings.
```html
<h{{ .Level }} id="{{ .Anchor | safeURL }}">
  <a class="heading-anchor" href="#{{ .Anchor | safeURL }}">{{ .Text | safeHTML }}</a>
</h{{ .Level }}>
```
To style the anchor links, add the following CSS to `assets/css/custom.css`.
```css
.heading-anchor {
    text-decoration: none;
    margin-right: 0.3em;
    transition: opacity 0.2s;
}

h1:hover .heading-anchor,
h2:hover .heading-anchor,
h3:hover .heading-anchor,
h4:hover .heading-anchor {
    opacity: 1;
}
```
To override the default header and footer, follow the steps below.
1. Create a file at `layouts/partials/head.html` if it doesn't exist.
and copy the `head.html` from the Paper theme located at
`https://github.com/nanxiaobei/hugo-paper/blob/main/layouts/partials/head.html`
to your newly created `head.html`. Make necessary changes.
3. Create a file at `layouts/partials/footer.html` if it doesn't exist.
Copy the `footer.html` from the Paper theme located at
`https://github.com/nanxiaobei/hugo-paper/blob/main/layouts/partials/footer.html`.
Make necessary changes.
3. At the end of the file, before the closing `</head>` tag, add the following 
lines.
```html
{{ $style := resources.Get "css/custom.css" | minify | fingerprint }}
<link rel="stylesheet" href="{{ $style.Permalink }}" integrity="{{ $style.Data.Integrity }}">
```