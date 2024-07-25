<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Realtime Chat Applcation</h3>
  <p>A real-time chat application developed using Strapi CMS as the backend and Next.js for the frontend, featuring authentication to manage user sessions and secure communication. </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][app]]()

Here's why:

- **Real-Time Messaging:** Utilizes WebSocket technology with Socket.io for real-time communication between users.
  User
- **Authentication:** Secure login and registration with JWT (JSON Web Token) authentication.
- **Chat Rooms:** Users can create and join chat rooms to communicate in groups or privately.
- **Message Persistence:** Messages are stored and retrieved from Strapi CMS, ensuring data persistence across sessions.
- **User Management:** Admin interface for managing users, chat rooms, and messages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- **Nextjs**
- **TailwindCSS**
- **Strapi CMS**
- **Socket.io**
- **Javascript**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Nodejs v20
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. setup frontend

- go to client directory
  ```
    cd client-nextjs
  ```
- copy and paste this `.env`

```
NEXT_PUBLIC_STRAPI_URL="http://localhost:1337"
```

- install and run

```
npm install
npm run dev
```

2. setup backend

- open new terminal and go to backend directory
  ```
  cd server-strapi
  ```
- copy and paste this custom `.env`

  ```
  HOST=0.0.0.0
  PORT=1337
  APP_KEYS=4BrWFnWW7taAOeZ3rL/nDg==,pujXXvUKkdZrOTMH/7QFGg==,hBTEdNNzDvxTFRgec5KitQ==,XTVgaJS8jTHOviuYGr7BkQ==
  API_TOKEN_SALT=mEZA7ir0HZUApYmXEax03g==
  ADMIN_JWT_SECRET=eQOp20CJpagEz9Ubpo0wMw==
  TRANSFER_TOKEN_SALT=ZEcYOqi5cRnuvKm2ZAAB7Q==
  # Database
  DATABASE_CLIENT=sqlite
  DATABASE_FILENAME=.tmp/data.db
  JWT_SECRET=iAhAYlXyRtkz2VhvEzADqw==
  ```

- start the server/backned
  `  npm run develop`

- open default nextjs url `http://localhost:3000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
  - [ ] Chinese
  - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[app]: /github-image/app.png
