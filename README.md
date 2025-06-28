# 🎬 Netflix-GPT

A smart, responsive Netflix clone powered by React, Firebase, Redux, TMDB API, YouTube embedding, and Gemini AI — built with performance, modularity, and scalability in mind.

🌐 **Live Demo:** [netflix-gpt](https://netflix-gpt-flame-seven.vercel.app/)

---

## 🚀 Features

- 🔐 **User Authentication** with Firebase (Email/Password)
- 🌐 **Secure Routing** – `/browse` accessible only to authenticated users
- 🌍 **Multilingual Support** – Currently supports **English**, **Hindi**, and **Russian**
- 📺 **Movie Trailers Embedded** via YouTube
- 🤖 **AI Suggestions** using **Gemini AI**
- 🎞️ **Movie Data from TMDB** – Browse now playing, popular, top-rated, and upcoming movies
- 🧠 **Smart Form Validation** – Regex-based validation for email, name, and password
- 📦 **Global State Management** using Redux Toolkit
- ⚙️ **Modular Architecture** – DRY principle, reusable components, utilities, and custom hooks
- 📱 **Fully Responsive** – Optimized UI across all screen sizes
- 🧩 **Micro Frontend-inspired YouTube Embedding**
- ⚡ **Fast Bundling with Vite**

---

## 🧰 Tech Stack

| Tech         | Usage                          |
|--------------|--------------------------------|
| **React.js** | Frontend UI                    |
| **Tailwind CSS** | Styling and responsiveness  |
| **Firebase Auth** | User login/signup with secure routing |
| **Redux Toolkit** | Global state management    |
| **TMDB API** | Movie data fetching            |
| **YouTube iFrame API** | Embedding trailers     |
| **Gemini AI** | Personalized movie suggestions |
| **Vite**     | Fast bundler and dev server    |

---

## 🛠️ Custom Hooks

- `useMovies` – Fetches **now playing** movies
- `usePopularMovies` – Fetches **popular** movies
- `useTopRatedMovies` – Fetches **top-rated** movies
- `useUpcomingMovies` – Fetches **upcoming** movies
- `useMovieTrailer` – Fetches trailer for first now playing movies

Each hook separates data-fetching logic from UI, adhering to clean code principles and ensuring reusability.

---

## 📁 Folder Structure (Modular)

src/
├── assets/ # Images and icons
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── utils/ # Helper functions (form validation, redux slices and store setup, etc.)
├── App.jsx #Root component
└── index.css #CSS file

---

## 🔐 Secure Routes

Implemented private routing for `/browse` using React Router DOM. Non-authenticated users are redirected to the login page.

---

## 🧪 Form Validation

Client-side validation using **Regex** for:

- ✅ Valid email format
- ✅ Secure password structure
- ✅ Non-empty name input

---

## 🌍 Internationalization

Built-in support for:

- 🇺🇸 English
- 🇮🇳 Hindi
- 🇷🇺 Russian

Planned: Spanish, French, and more via i18n implementation.

---

## 🧠 AI-Powered Suggestions

Gemini AI suggests movie recommendations based on:

- User input based search

---

## 🧪 Micro Frontend Approach

YouTube trailer embedding follows a **micro frontend-style architecture**, separating it as an independent, embeddable unit.

---

## 🧳 Future Enhancements

- [ ] Add more languages to multilingual support
- [ ] Improve AI recommendation context with user preferences
- [ ] Add watchlist feature with persistent storage

---

## 🌐 Deployment

Hosted on **Vercel**  
🔗 [https://netflix-gpt-flame-seven.vercel.app/](https://netflix-gpt-flame-seven.vercel.app/)

---

## 🧑‍💻 Author

**Atul** – Frontend Developer passionate about building performant, scalable apps with a strong focus on user experience.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Contributions

Feel free to open issues or pull requests. All constructive feedback and suggestions are welcome!
