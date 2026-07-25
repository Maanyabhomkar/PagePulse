# 🌐 Page Pulse

Page Pulse is a full-stack web application that audits any public website by analysing its HTML and displaying useful information such as page title, meta description, response time, status code, H1 count, and word count.

It also allows users to download the audit report as a PDF.

---

## Features

- Audit any public website
- Display HTTP status code
- Measure response time
- Extract page title
- Extract meta description
- Count H1 tags
- Count total words
- Performance rating (Excellent, Good, Slow)
- Display audit timestamp
- Download audit report as PDF
- Error handling for invalid URLs and blocked websites
- Responsive user interface

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS
- jsPDF

### Backend
- Node.js
- Express.js
- Axios
- Cheerio

### Testing
- Jest

---

## Project Structure

```
PagePulse
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── utils
│   ├── tests
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
npm start
```

The backend runs on:

```
http://localhost:3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on:

```
http://localhost:5173
```

---

## API Endpoint

### POST /audit

Request:

```json
{
  "url": "https://github.com"
}
```

Sample Response:

```json
{
  "status": 200,
  "responseTime": "215 ms",
  "title": "...",
  "description": "...",
  "h1Count": 4,
  "wordCount": 2359
}
```

---

##  Running Tests

```bash
npm test
```

---

## Screenshots

Add screenshots here after deployment.

Example:

- Home Page
- Audit Result
- PDF Report

---

## Future Enhancements

- Dark mode
- Export reports in multiple formats
- Website audit history
- SEO score
- Accessibility analysis
- Performance charts

---

## Author

**Maanya Bhomkar**

Built as part of a Full Stack Developer Project.