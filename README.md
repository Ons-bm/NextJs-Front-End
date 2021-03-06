# TEP NextJS 

![version](https://img.shields.io/badge/version-1.1.0-blue.svg)

### Project Description


TEP is Free and Open Source. It features multiple HTML and NextJS elements and it comes with dynamic components for NextJS.

This project aims to satisfy an academic Project proposed in the higher institute of applied science and technologies of sousse [ISSATSo](http://www.issatso.rnu.tn/fo/index.php).

This project is build with both presentation pages, and Profiles.


### About NextJs Components

TEP NextJS is built with over frontend 120 components, giving you the freedom of choosing and combining. All components can take variations in colors, that you can easily modify using Tailwind CSS classes (NOTE: each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to compile again tailwind.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.


### CSS Components

TEP NextJS comes with 120 Fully Coded CSS elements, such as [Alerts](), [Buttons](), [Inputs]() and many more.

## ๐งพ Contents

* [Project tree](#project-tree)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Getting Started](#getting-started)
    * [Installing](#installing)
    * [Running the project](#running-the-project)
* [Authors](#authors) 


## ๐ณ Project tree

```
TEP-nextjs
.
โโโ CHANGELOG.md
โโโ LICENSE.md
โโโ README.md
โโโ public
โย ย  โโโ img
โย ย  โย ย  โโโ brand
โย ย  โย ย  โย ย  โโโ favicon.ico
โย ย  โย ย  โโโ github.svg
โย ย  โย ย  โโโ LinkedIn.svg
โย ย  โย ย  โโโ google.svg
โย ย  โโโ styles
โย ย      โโโ index.css
โย ย      โโโ tailwind.css
โโโ components
โย ย  โโโ Cards
โย ย  โย ย  โโโ CardProfile.js
โย ย  โย ย  โโโ CardSettings.js
โย ย  โโโ Dropdowns
โย ย  โย ย  โโโ UserDropdown.js
โย ย  โโโ Footers
โย ย  โย ย  โโโ Footer.js
โย ย  โย ย  โโโ FooterAdmin.js
โย ย  โย ย  โโโ FooterSmall.js
โย ย  โโโ Headers
โย ย  โย ย  โโโ HeaderStats.js
โย ย  โโโ Maps
โย ย  โย ย  โโโ MapExample.js
โย ย  โโโ Navbars
โย ย  โย ย  โโโ AdminNavbar.js
โย ย  โย ย  โโโ AuthNavbar.js
โย ย  โย ย  โโโ IndexNavbar.js
โย ย  โโโ PageChange
โย ย  โย ย  โโโ PageChange.js
โย ย  โโโ SEOs
โย ย  โย ย  โโโ SEO.js
โย ย  โโโ Sidebar
โย ย      โโโ Sidebar.js
โโโ layouts
โย ย  โโโ Admin.js
โย ย  โโโ Auth.js
โโโ package.json
โโโ package-lock.json
โโโ pages
โย ย  โโโ 404.js
โย ย  โโโ _app.js
โย ย  โโโ _document.js
โย ย  โโโ _error.js
โย ย  โโโ admin
โย ย  โย ย  โโโ landing.js
โย ย  โย ย  โโโ profile.js
โย ย  โย ย  โโโ settings.js
โย ย  โโโ auth
โย ย  โย ย  โโโ login.js
โย ย  โย ย  โโโ register.js
โย ย  โโโindex.js
โโโ tailwind.config.js
```

## ๐ Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## ๐ค Reporting Issues

We use GitHub Issues as the official bug tracker for the TEP NextJS. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of NextJS.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.



# ๐ Getting Started
## ๐ฅ Installing
Node version must be 16 or higher.
```sh
> npm install
```
or
```sh
> yarn install
```

## ๐  Running the project
Execute this command to run the project:

```sh
> npm run dev
```
## ๐ผ Authors
* [**BOUZIR Mohamed Ali**](https://www.linkedin.com/in/bouzir-mohamed-ali/) - *Developer*
* [**BEN MABROUK Ons**](https://www.linkedin.com/in/ons-ben-mabrouk-499904197/) - *Developer*
