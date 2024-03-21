# PWA Text Editor

<br/>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">
        <img alt="PWA - A progressive web app (PWA) is an app that's built using web platform technologies, but that provides a user experience like that of a platform-specific app" src="https://img.shields.io/static/v1.svg?label=PWA&message=single page web application&color=lightgreen" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API">
        <img alt="IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs" src="https://img.shields.io/static/v1.svg?label=IndexedDB&message=API&color=blue" /></a>
    <a href="https://www.render.com/">
        <img alt="Render (for deployment) - A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud" src="https://img.shields.io/static/v1.svg?label=Render&message=deployment&color=orange" /></a>
    <a href="https://webpack.js.org/">
        <img alt="webpack - to bundle assets, scripts, images and styles" src="https://img.shields.io/static/v1.svg?label=webpack&message=bundler&color=green" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=black" /></a>
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=UNB&message=Bootcamp&color=red" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=brightgreen" /></a>
</p>
<br/>

## Description

PWA Text Editor is a project that harnesses the power of Progressive Web Applications (PWA) to offer a seamless, offline-capable text editing experience. This application encapsulates advanced data persistence techniques and offline functionality. Dive into building a browser-based text editor that not only meets PWA criteria but also ensures your notes and code snippets are accessible anytime, anywhere.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Development Guidelines](#development-guidelines)
- [Starter Code](#starter-code)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Demo

You can simply visit the link [PWA Text Editor][pwa-text-editor]

## Features

- **Single-Page Application:** Crafted as a SPA, the text editor ensures a smooth, uninterrupted user experience.
- **PWA Compliance:** Adheres to PWA standards, offering functionalities like offline availability and app-like experience.
- **Data Persistence:** Utilizes IndexedDB with the `idb` package for robust data storage and retrieval.
- **Offline Functionality:** With service workers, you can edit, save, and access your notes or code snippets without an internet connection.
- **Deployment:** Fully deployable via Render, ensuring a wide reach and easy access.

## Technology Stack

- **IndexedDB & idb Package:** For data persistence and storage.
- **Webpack:** For bundling JavaScript files and plugin management.
- **Service Workers & Workbox:** For offline functionality and resource caching.
- **Render:** For deploying the full-stack application.

## Getting Started

Before diving into development, ensure you've cloned the starter code repository to your local machine. Do not fork the starter code; instead, clone it directly to maintain a separate version control history.

### Prerequisites

- Node.js installed on your local machine.
- Basic understanding of JavaScript, HTML, and CSS.

### Installation

1. **Clone the Repository:** Start by cloning this repository to your local machine to get access to all necessary files.

```bash
git clone https://github.com/naturuplift/PWATextEditor.git
```

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install dependencies.

```bash
cd pwa-text-editor
npm install
```

3. **Start the Application:** Once the dependencies are installed, you can start the application using the following command:

```bash
npm run start
```

This will launch both the backend and frontend portions of the application, making it accessible via your browser.

## Usage

- **Editing:** Simply type in the text editor to begin creating your notes or code snippets.
- **Saving:** Your work is automatically saved to IndexedDB, ensuring you won't lose your progress, even if you go offline.
- **Accessing Offline:** Thanks to the PWA functionality, you can continue to use the text editor without an internet connection.

## Deployment

This application is deployed on Render, showcasing its full-stack capabilities. For details on deploying your own version, refer to the Render Deployment Guide and ensure your project is configured for PWA standards.

## Development Guidelines

- **File Structure:** Upon opening the application in your editor, you should observe a client-server folder structure.
- **Webpack Usage:** Ensure your JavaScript files are bundled using webpack, facilitating a streamlined development process.
- **Service Worker Registration:** Utilize Workbox to register your service worker, enabling offline capabilities and resource caching.
- **Data Handling:** Implement methods for storing and retrieving data with IndexedDB to ensure content persistence.

## Starter Code

To start with this project we used the following [Starter Code][starter-code]

## Contributing

I'm always open to contributions and collaboration. If you're interested in contributing to this project, please fork the repository and submit a pull request, or you can simply open an issue with the tag "enhancement".

## Questions

For any questions about this project, please contact me via:

- Email: arnaldosepulveda@gmail.com
- GitHub: @[naturuplift](https://github.com/naturuplift)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/arnaldo-sepulveda-7b321022/)

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for more details.


[pwa-text-editor]: <https://My-PWA-Text-Editor-App.onrender.com/>
[starter-code]: <https://github.com/coding-boot-camp/cautious-meme>
[MIT]: <https://github.com/naturuplift/PWATextEditor/blob/main/LICENSE>
