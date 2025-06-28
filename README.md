# 🎨 Imagify - AI Image Generator

**Imagify** is an AI-powered image generation web app built with the **MERN stack**. It allows users to generate high-quality images using text prompts, powered by the **Clipdrop API**. Imagify features secure authentication, a responsive UI, and smooth client-server interaction.

🔗 **Live Link:** 
- 🌐 Frontend: https://imagify-client-seven.vercel.app
- 🛠️ Backend: https://imagify-2ttj.onrender.com
- 📶 Uptime Monitoring: https://stats.uptimerobot.com/CpkJ396ILR
  
## 💡 Features
- 🧠 Text-to-image generation using ClipDrop API
- 🔐 Secure authentication (JWT + bcrypt)
- 👤 Signup/Login & protected user routes
- 🎨 Responsive and modern UI using React + Tailwind CSS
- 💾 Image history and user data stored in MongoDB
- 🛌 Backend auto-kept awake using UptimeRobot monitoring
- 🚀 Hosted using Vercel (frontend) & Render (backend)

---
## 🛠️ Tech Stack
  
| Layer       | Tools/Technologies                       |
|-------------|------------------------------------------|
| Frontend    | ReactJS, Tailwind CSS                    |
| Backend     | Node.js, Express.js                      |
| Database    | MongoDB (Mongoose)                       |
| API         | ClipDrop AI Image API                    |
| Auth        | JWT, bcrypt                              |
| Hosting     | Vercel (Client) + Render (Server)        |
| Monitoring  | UptimeRobot (to prevent backend sleep)   |

---
## 📂 Project Structure
![image](https://github.com/user-attachments/assets/bf99cf1c-e78f-408e-a02a-6130f0d1892c)


**##🔐 Environment Variables**
Create a `.env` file in the `server/` directory with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key
````
--
**🚀 Getting Started**

**1️⃣ Clone the repository**
git clone https://github.com/Nidhikalouni/Imagify.git
cd Imagify

**2️⃣ Install dependencies**
# Install frontend packages
cd client
npm install

# Install backend packages
cd ../server
npm install

**3️⃣ Set up environment variables**
Add .env as described above inside the server folder.

**4️⃣ Run the app locally**
# Start backend
cd server
npm run dev

# Open new terminal, start frontend
cd client
npm start

**☕ Keeping the Backend Awake (UptimeRobot)**
Render, where the backend is hosted, goes into sleep mode if there's no traffic for a while. To prevent users from experiencing a delay or cold start, I’ve implemented two solutions:

**🧪 ping.js (Development Purpose)**
A Node.js script that sends requests to the backend while working locally. It helps prevent sleep during active development.

**☁️ UptimeRobot (Production Monitoring)**
To ensure a fast and seamless user experience, I used UptimeRobot, a cloud-based monitoring tool that automatically sends a request to the backend every 5 minutes. This keeps the backend awake 24/7, ensuring users never face delays while generating images.

✅ This small enhancement greatly improves performance, especially on free hosting platforms like Render.

**📸 Demo Preview**
![image](https://github.com/user-attachments/assets/7c4b3d78-bf02-41e5-ac59-5ad1096423c5)

**🙋‍♀️ About the Author**
 Nidhi Kalouni
👩‍💻 Full Stack Developer
📍 Uttarakhand, India
📧 nidhikalouni@gmail.com

Made with ❤️ by Nidhi Kalouni
