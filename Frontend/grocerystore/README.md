⚙️ Installation & Setup
Follow these steps to run the application locally on your machine:

Prerequisites
Node.js installed (v18+ recommended)

MongoDB running locally or a MongoDB Atlas URI string

1. Clone the Repository
Bash
git clone [https://github.com/Muhammadsiddiqui07/Geocery-Store.git](https://github.com/Muhammadsiddiqui07/Geocery-Store.git)
cd Geocery-Store

2. Setup Backend
Bash
cd server
npm install
Create a .env file in the server directory and configure the variables:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
Start the backend server:

Bash
npm run dev
3. Setup Frontend
Bash
cd ../client
npm install
Create a .env file in the client directory:

Code snippet
VITE_API_BASE_URL=http://localhost:5000/api
Start the frontend application:

Bash
npm run dev
The application should now be accessible at http://localhost:5173!

📡 API Endpoints Summary
Method	Endpoint	Description	Access
POST	/api/auth/register	Register a new user account	Public
POST	/api/auth/login	Authenticate user & get token	Public
GET	/api/products	Get all grocery items with filters	Public
POST	/api/products	Create a new product	Admin
POST	/api/orders	Create a new customer order	User
GET	/api/orders/my-orders	Fetch orders for logged-in user	User
🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you want to add new features or report bugs.

📄 License
This project is licensed under the MIT License.
"""
