# Twitter Clone Backend

This is the backend implementation of a Twitter Clone application, designed to provide core features such as user authentication, handle posts, and user intractions. The backend is built with Node.js, Express.js, and MongoDB, following a modular and scalable architecture.

## Features

- **User Authentication:** Secure JWT-based login and registration.
- **Tweet Management:** Create, like, and comment on tweets.
- **Feed Generation:** Personalized user feeds.
- **Follow System:** Follow and unfollow other users.

## Tech Stack

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing** Bcrypt
- **Future Enhancements:** WebSocket for real-time updates

## Quick Start

### Prerequisites

- Node.js installed
- MongoDB instance running

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chanukaa2002/twitter_clone.git
   cd twitter-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/twitter_clone
   JWT_SECRET=your_secret_key
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

5. **Access the API:**
   Visit [http://localhost:5000](http://localhost:5000).

## Documentation

<!-- ### System Design Document

For a detailed overview of the system's architecture, database design, and more, refer to the **System Design Document (SDD)**.

### API Endpoints

A full list of endpoints and usage examples is available in the **API Documentation**. -->

<!-- ## Deployment

This backend is designed to be deployed on **AWS** with **MongoDB Atlas**. CI/CD pipelines are implemented using **GitHub Actions** for automated deployments. -->

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the **MIT License**. See the `LICENSE` file for details.

## Additional Notes

- The SDD and API documentation are hosted externally for better readability and formatting. Ensure the links in the README point to their correct locations.
