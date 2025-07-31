---
##  Features

- ✅ **Login Authentication** with local validation
- 📊 **Dashboard Overview** with metrics and summaries
- 👥 **User Management**
  - View paginated list of 500 mock users
  - Filter by organization, status, gender, etc.
- 🔍 **User Detail Page**
  - Fetches details from mock API
  - Stores user info in **localStorage** or **IndexedDB**
- 📱 **Mobile Responsive Design**
- ⚙️ Clean and scalable component structure
---

## Technologies Used

- **React** (v18+)
- **React Router** for routing
- **SCSS** for styling
- **Axios / Fetch** for API calls
- **LocalStorage / IndexedDB** for persistence
- **Vite / Create React App** (based on setup)
- **Mock API** (JSON Server / faker)

---

## 📦 Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- Git

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Dawala1506/lendsqr-fe-test.git
   cd lendsqr-fe-test

   ```

2. Install Dependencies

bash
Copy
Edit
npm install
Run Mock API
You can use JSON Server:

bash
Copy
Edit
npm install -g json-server
json-server --watch db.json --port 5000
Ensure your src/utils/api.js points to the correct mock API base URL:

js
Copy
Edit
export const BASE_URL = 'http://localhost:5000';
Start Development Server

bash
Copy
Edit
npm start
Visit in browser

arduino
Copy
Edit
http://localhost:3000

3.  Mock Data
    The project uses a mock API with 500 user records generated using Faker.js. The data is stored in db.json or pulled dynamically from a script and served using JSON Server.

4.  Responsive Design
    The UI is fully responsive using modern Flexbox and Grid layouts to adapt to all screen sizes from mobile to desktop.
