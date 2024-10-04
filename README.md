---

# Instagram Clone

This project is a simplified **Instagram clone** built using **Next.js** and **Tailwind CSS**. It includes core features like user authentication, posting, liking, commenting, and more. Our goal is to recreate some of the essential functionality of Instagram and build a platform for users to interact with posts and profiles.

## 🚀 Features

- **User Authentication**: Login/Signup functionality.
- **CRUD Operations**:
  - Create posts (with images or text)
  - Like posts
  - Comment on posts
  - Edit/Delete posts
- **Profiles**: View your profile, follow users, see followers/following.
- **Explore Page**: Discover new posts and users.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.

## 🛠️ Technologies

- **Next.js**: A React framework for server-side rendering and static web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Icons**: Iconography for the sidebar and various UI elements.

## 📁 Project Structure

Here’s an overview of the folder structure:

```
src/
│
├── assets/               # Static assets like fonts and images
│   ├── fonts/
│   └── images/
│
├── common/               # Common components like buttons and inputs
│   ├── btn.jsx
│   └── input.jsx
│
├── components/           # UI components used throughout the app
│   ├── Create.jsx        # Component for creating new posts
│   ├── More.jsx          # Load more button
│   ├── PostCard.jsx      # Component to display posts
│   ├── Search.jsx        # Search bar component
│   ├── Stories.jsx       # Component to display stories
│   └── Suggestions.jsx   # Component for user suggestions
│
├── layout/               # Layout components
│   ├── Footer.jsx
│   ├── MainFeed.jsx      # Main feed where user sees posts
│   ├── Navbar.jsx        # Navigation bar
│   └── Sidebars.jsx      # Sidebar navigation
│
├── lib/
│   └── firebase.js       # Firebase configuration
│
├── pages/                # Next.js pages (routes)
│   ├── api/              # API routes (server-side logic)
│   ├── _app.js           # Custom App component (used to initialize pages)
│   ├── _document.js      # Custom Document component
│   ├── explore.jsx       # Explore page
│   ├── forgotpassword.jsx
│   ├── index.jsx         # Home page (main feed)
│   ├── login.jsx         # Login page
│   ├── messages.jsx      # Messages page
│   ├── profile.jsx       # User profile page
│   ├── reels.jsx         # Reels page
│   └── signup.jsx        # Signup page
│
├── styles/
│   ├── globals.css       # Global CSS
└── README.md             # Project documentation
```

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/talhashah-dev/instagram-clone.git
cd instagram-clone
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```

### 3. Run the Project Locally

Start the development server:

```bash
npm run dev
```

Now, visit [http://localhost:3000](http://localhost:3000) to view your app in the browser.

## 🖼️ Screenshots

- **Home Page** (Coming Soon)
- **Profile Page** (Logged-in user's profile)
- **Explore Page** (Explore new posts and users)

## 🏗️ Contributing

We are making this project **open-source** to allow contributors worldwide to help build and improve it.

### Steps to Contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

