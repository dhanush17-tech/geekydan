<h1 style="font-size: 30px; color: #0284c7; font-weight: bold;"><a href="https://geekydan.dev">
geekydan.dev
</a></h1>

<p align="center">
  <img src="https://pbs.twimg.com/media/GCAYfIQW0AAczqR?format=jpg&name=4096x4096" alt="geekydan.dev" style=" border-radius: 15px;">
</p>


## Features

- **Responsive Design:** Fully responsive design that works on all devices.
- **Dynamic Content:** Easily update content via Markdown files.
- **Blog Integration:** Simple blogging platform built with Markdown.
- **Project Showcase:** Showcase your projects with detailed descriptions and images.
- **Contact Form:** Functional contact form powered by EmailJS or similar service.
- **SEO Optimized:** SEO-friendly to help your site rank better in search results.

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo of the site: [geekydan.dev](https://geekydan.dev)

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later)
- [Yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/dhanush17-tech/geekydan.git
cd geekydan
```
### Install Dependencies
```
yarn install
```
Usage
Running the Development Server
To start the development server, run:

```
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

## Folder Structure
Here is a brief overview of the project's folder structure:

```
.
├── public
│   ├── assets
│       ├── hackathons
│       ├── icons
│       ├── projects
│       ├── resume
├── src
│   ├── components
│       └── elements
│   ├── pages
│       ├── api
│       └── blogs
│   ├── styles
│   ├── utils

```
## Customization
To customize the content, update the Markdown files located in the src/content directory:

- **Blog Posts**: Add or edit posts in the src/content/blog directory.
- **Projects**: Add or edit projects in the src/content/projects directory.
- You can also update the site configuration in the src/utils/config.js file.

## Deployment
The easiest way to deploy this portfolio is to use [Vercel](https://vercel.com)

1. Push your code to GitHub.
2. Create a new project on [Vercel](https://vercel.com) and import your repository.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

### Fork the Project
1. Create your Feature Branch (```git checkout -b feature/AmazingFeature```)
2. Commit your Changes (```git commit -m 'Add some AmazingFeature' ```)
3. Push to the Branch (```git push origin feature/AmazingFeature ```)
4. Open a Pull Request

## License
Distributed under the MIT License.