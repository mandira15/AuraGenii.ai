# ✨ AuraGenie.ai

### AI-Powered Tailor Discovery & Custom Clothing Platform

AuraGenie is a full-stack web application that connects customers with skilled local tailors. Users can upload clothing designs or describe their ideas using AI assistance, discover verified tailors, place custom stitching orders, and track their order progress—all from a single platform.

> **Current Version (V1):** AI-assisted tailor marketplace for custom clothing.

---

## 🚀 Features

- 👤 User & Tailor Authentication
- 🧵 Tailor Registration & Profile Management
- 🎨 AI-Assisted Clothing Design (Beta)
- 📸 Upload Custom Clothing Designs
- 🔍 Browse Verified Tailors
- 📝 Place Custom Stitching Orders
- 📦 Order Status Tracking
- 📧 Email Notifications
- 📱 Fully Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS3
- React Router DOM

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Authentication
- JWT Authentication
- bcrypt.js

### AI Integration
- Google Gemini API *(Beta)*

### Email Service
- Nodemailer

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 📂 Project Structure

```text
AuraGenie/
│
├── client/              # React Frontend
├── server/              # Express Backend
├── README.md
└── package.json
```

---

## ⚙️ How It Works

1. Register as a Customer or Tailor.
2. Browse verified tailors.
3. Upload a clothing design or generate one using AI.
4. Select a tailor and place a stitching request.
5. Tailor reviews and accepts the order.
6. Receive email updates and track your order status.

---

## 🌟 Future Roadmap

- 💬 Real-time Chat
- 🏠 Home Measurement Service
- 🚚 Fabric Pickup & Delivery
- 💳 Secure Online Payments
- ⭐ Ratings & Reviews
- 📍 Nearby Tailor Recommendations
- 📅 Appointment Booking
- 🤖 Advanced AI Design Generation

---

## 📸 Screenshots

> Screenshots will be added after deployment.

- Home Page
- Tailor Listing
- Authentication
- AI Design Generation
- Order Placement
- Dashboard

---

## 🚀 Installation

### Clone the Repository

```bash
git clone https://github.com/<your-username>/AuraGenie.git
cd AuraGenie
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

### Environment Variables

Create a `.env` file inside the **server** directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to fork the repository and submit a pull request.

---

## 👩‍💻 Developer

**Mandira Singh**

B.Tech Computer Science & Engineering  
VIT Bhopal University

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you like this project, consider giving it a **⭐ Star** on GitHub!

It helps others discover the project and motivates future development.