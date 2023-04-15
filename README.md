# Rails 7 App with Stimulus Client-side Search

This repository contains a simple Rails 7 application that demonstrates client-side search functionality using the Stimulus JavaScript framework. The application allows users to create and view posts, and then filter them on the client-side using a search input.

## Features

- Create and view posts
- Client-side search functionality using Stimulus
- Live filtering of posts without reloading the page

## Prerequisites

- Ruby 3.0.0 or higher
- Rails 7.0.0 or higher
- Node.js 14.0.0 or higher
- Yarn 1.x or higher

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/rails7-stimulus-search.git
cd rails7-stimulus-search
```
2. Install dependencies:
```bash
bundle install
yarn install
```
3. Create the database and run migrations:
```bash
rails db:create db:migrate db:seed
```
4. Start the Rails server:
```bash
rails s
```
5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

1. Click the "New post" link to create a new post.
2. Enter a title and content for the post, then click "Create Post".
3. Use the "Search..." input field to filter the list of posts based on their title or content.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
