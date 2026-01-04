🔍 TechSprint: Lost & Found Tracker
A real-time web application designed to reconnect people with their lost belongings. This project was built as part of the TechSprint Hackathon to demonstrate seamless integration between a web frontend and Google Cloud services.

🚀 Live Demo
Hosting URL: https://techsprint-lostfound-f2e17.web.app

🛠️ Tech Stack & Features
Frontend: HTML5, CSS3, and Vanilla JavaScript.

Database: Google Cloud Firestore (NoSQL) for real-time data synchronization across all users.

Hosting: Firebase Hosting for fast, secure global delivery.

Real-time Updates: Uses Firestore onSnapshot listeners to display new reports instantly without page refreshes.

Cloud Persistence: Unlike local storage, data is stored securely in the Google Cloud, making it accessible from any device.

📖 How it Works
Report: Users can submit a "Lost" or "Found" report via the web form.

Sync: The data is sent to the items collection in Firestore.

Broadcast: All active users receive the update instantly through a real-time stream.

Manage: Items can be removed from the cloud once the owner is found.

## 🔮 Future Scope
- **User Authentication:** Implementing Secure login via Firebase Auth to allow users to manage their own listings.
- **AI Integration:** Using Google Cloud Vision API for automatic item categorization through image analysis.
- **Map View:** Integrating Google Maps API to provide a visual representation of where items were last seen.
- **Push Notifications:** Alerting users in real-time when an item matching their search criteria is found.
