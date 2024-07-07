
#### Requirements
- Node.js
- MongoDB

#### Setup
1. Clone the repository:
    ```
    git clone https://github.com/your-username/contact-form.git
    cd contact-form
    ```

2. Navigate to the backend directory and install dependencies:
    ```
    cd backend
    npm install
    ```

3. Create a file named `.env` in the backend directory with the following content:
    ```
    MONGO_URI=mongodb://localhost:27017/contactFormDB
    PORT=5000
    ```

#### Running the Backend
1. Start your MongoDB server (if not already running):
    ```
    mongod
    ```

2. Start the backend server:
    ```
    npm start
    ```

### Frontend Setup

#### Requirements
- Node.js

#### Setup
1. Navigate to the frontend directory and install dependencies:
    ```
    cd contact-form-frontend
    npm install
    ```

2. Install Tailwind CSS:
    ```
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

3. Configure Tailwind CSS:
    - Update `tailwind.config.js` to include the paths to your template files:
        ```js
        // tailwind.config.js
        module.exports = {
          purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
          darkMode: false, // or 'media' or 'class'
          theme: {
            extend: {},
          },
          variants: {
            extend: {},
          },
          plugins: [],
        };
        ```

    - Add the Tailwind directives to your CSS file:
        ```css
        /* ./src/index.css */
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

#### Running the Frontend
1. Start the frontend application:
    ```
    npm start
    ```

## Connecting Frontend and Backend

1. Ensure your backend server is running (`http://localhost:5000` by default).
2. Submit the contact form from your React application (`http://localhost:5000` by default).

## Checking MongoDB Data

You can check the data submitted to MongoDB using different methods:

### Using MongoDB Shell
1. Open your terminal and start the MongoDB shell:
    ```
    mongo
    ```

2. Switch to your database:
    ```
    use contactFormDB
    ```

3. Query your collection to see the data:
    ```
    db.contacts.find().pretty()
    ```

### Using MongoDB Compass
1. Download and install MongoDB Compass from [here](https://www.mongodb.com/try/download/compass).
2. Connect to your MongoDB server using the default connection string:
    ```sh
    mongodb://localhost:27017
    ```
3. Select your `contactFormDB` database and view the `contacts` collection.

## Troubleshooting

- **Connection Issues**: Ensure the MongoDB server is running.
- **Database/Collection Not Found**: Ensure data was submitted correctly from your application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
