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

## 🧾 Contents

* [Project tree](#project-tree)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Getting Started](#getting-started)
    * [Installing](#installing)
    * [Running the project](#running-the-project)
* [Authors](#authors) 


## 🌳 Project tree

```
TEP-nextjs
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── public
│   ├── img
│   │   ├── brand
│   │   │   └── favicon.ico
│   │   ├── github.svg
│   │   ├── LinkedIn.svg
│   │   └── google.svg
│   └── styles
│       ├── index.css
│       └── tailwind.css
├── components
│   ├── Cards
│   │   ├── CardProfile.js
│   │   └── CardSettings.js
│   ├── Dropdowns
│   │   └── UserDropdown.js
│   ├── Footers
│   │   ├── Footer.js
│   │   ├── FooterAdmin.js
│   │   └── FooterSmall.js
│   ├── Headers
│   │   └── HeaderStats.js
│   ├── Maps
│   │   └── MapExample.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   ├── AuthNavbar.js
│   │   └── IndexNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   ├── SEOs
│   │   └── SEO.js
│   └── Sidebar
│       └── Sidebar.js
├── layouts
│   ├── Admin.js
│   └── Auth.js
├── package.json
├── package-lock.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── landing.js
│   │   ├── profile.js
│   │   └── settings.js
│   ├── auth
│   │   ├── login.js
│   │   └── register.js
│   └──index.js
└── tailwind.config.js
```

## 📋 Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## 🤔 Reporting Issues

We use GitHub Issues as the official bug tracker for the TEP NextJS. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of NextJS.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.



# 🏁 Getting Started
## 📥 Installing
Node version must be 16 or higher.
```sh
> npm install
```
or
```sh
> yarn install
```

## 🌠 Running the project
Execute this command to run the project:

```sh
> npm run dev
```
## 💼 Authors
* [**BOUZIR Mohamed Ali**](https://www.linkedin.com/in/bouzir-mohamed-ali/) - *Developer*
* [**BEN MABROUK Ons**](https://www.linkedin.com/in/ons-ben-mabrouk-499904197/) - *Developer*
