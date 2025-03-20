# MRM Personal page

![image](https://i.imgur.com/3xi64gd.png)

## Content

- [MRM Personal page](#mrm-personal-page)
  - [Content](#content)
  - [Introduction](#introduction)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Usage](#usage)
    - [Basic Usage](#basic-usage)
    - [Advanced Configuration](#advanced-configuration)
  - [Contributing](#contributing)
    - [How to Contribute](#how-to-contribute)
  - [Testing](#testing)

## Introduction

- A site intended for personal use as a replacement for linktree or even as a blog. Simple and practical.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Programming Languages:** node.js runtime.
- **Tools:** web server.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/mr-mike-mr/mrm-personal-page.git
   cd mrm-personal-page
   ```

2. Change **adapter** in **svelte.config.js**

3. Package installation and build:

   ```bash
   npm -i
   npm run build
   ```

4. Add web server and firewall configuration

5. Download process manager

    ```bash
    npm install -g pm2
    ```

## Usage

### Basic Usage

To start the application *(node adapter only)*:

```bash
cd mrm-personal-page
pm2 start build/index.js --name "mrm-personal-page"
```

Visit [domain](http://localhost:3000/) in your browser.

### Advanced Configuration

1. Config option 1: Description.

## Contributing

We welcome contributions! Please read our [Code of Conduct](https://www.contributor-covenant.org/) before contributing.

### How to Contribute

1. Fork the repository.
2. Create a new branch ***(git checkout -b feature-branch)***.
3. Make your changes.
4. Commit your changes ***(git commit -m 'Add some feature')***.
5. Push to the branch ***(git push origin feature-branch)***.
6. Open a pull request.

Please make sure to update tests as appropriate.

## Testing

To run tests:

```bash
npm run dev
```

Make sure all tests pass before submitting a pull request.
