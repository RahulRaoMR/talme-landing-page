import { useMemo, useState } from "react";
import { newsData } from "../data/newsData";
import "./NewsEventsPage.css";

const STORAGE_KEY = "talme-local-news";
const MANAGER_SESSION_KEY = "talme-manager-access";
const MANAGER_PASSWORD = import.meta.env.VITE_MANAGER_PASSWORD || "manager123";

function formatDisplayDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function NewsEventsPage() {
  const today = new Date().toISOString().slice(0, 10);
  const [editingId, setEditingId] = useState(null);
  const [showManagerLogin, setShowManagerLogin] = useState(false);
  const [managerPassword, setManagerPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isManager, setIsManager] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.sessionStorage.getItem(MANAGER_SESSION_KEY) === "true";
  });
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    isoDate: today,
  });
  const [addedNews, setAddedNews] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const allNews = useMemo(
    () => [
      ...addedNews.map((item) => ({ ...item, isCustom: true })),
      ...newsData.map((item) => ({ ...item, isCustom: false })),
    ],
    [addedNews]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleManagerLogin = (event) => {
    event.preventDefault();

    if (managerPassword !== MANAGER_PASSWORD) {
      setLoginError("Incorrect manager password.");
      return;
    }

    setIsManager(true);
    setShowManagerLogin(false);
    setManagerPassword("");
    setLoginError("");
    window.sessionStorage.setItem(MANAGER_SESSION_KEY, "true");
  };

  const handleManagerLogout = () => {
    setIsManager(false);
    setEditingId(null);
    setManagerPassword("");
    setLoginError("");
    setFormData({
      title: "",
      summary: "",
      isoDate: today,
    });
    window.sessionStorage.removeItem(MANAGER_SESSION_KEY);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = formData.title.trim();
    const summary = formData.summary.trim();
    if (!title || !summary || !formData.isoDate) return;

    const updatedNews = editingId
      ? addedNews.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title,
                summary,
                isoDate: formData.isoDate,
                date: formatDisplayDate(formData.isoDate),
              }
            : item
        )
      : [
          {
            id: `news-${Date.now()}`,
            title,
            summary,
            isoDate: formData.isoDate,
            date: formatDisplayDate(formData.isoDate),
          },
          ...addedNews,
        ];

    setAddedNews(updatedNews);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNews));
    setFormData({
      title: "",
      summary: "",
      isoDate: today,
    });
    setEditingId(null);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      title: item.title,
      summary: item.summary,
      isoDate: item.isoDate,
    });
  };

  const handleDelete = (id) => {
    const updatedNews = addedNews.filter((item) => item.id !== id);
    setAddedNews(updatedNews);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNews));

    if (editingId === id) {
      setEditingId(null);
      setFormData({
        title: "",
        summary: "",
        isoDate: today,
      });
    }
  };

  const handleClearAll = () => {
    setAddedNews([]);
    window.localStorage.removeItem(STORAGE_KEY);
    setEditingId(null);
    setFormData({
      title: "",
      summary: "",
      isoDate: today,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      title: "",
      summary: "",
      isoDate: today,
    });
  };

  return (
    <section className="news-events-page">
      <div className="news-events-container">
        <header className="news-events-header">
          <div className="news-events-header-copy">
            <span className="news-events-kicker">Corporate Newsroom</span>
            <h1>News &amp; Events</h1>
            <p className="news-events-header-lead">
              A central space for company announcements, delivery milestones,
              leadership updates, and business highlights.
            </p>
          </div>
          <div className="news-events-header-panel">
            <span className="news-events-panel-label">Publishing Standard</span>
            <p className="news-events-header-note">
              Share concise, decision-ready updates in a format that feels
              consistent, credible, and executive-facing.
            </p>
          </div>
        </header>

        {isManager ? (
          <section className="news-events-form-wrap" aria-label="Add daily news">
            <div className="news-events-manager-bar">
              <div>
                <span className="news-events-manager-label">Manager Mode</span>
                <p className="news-events-manager-copy">
                  Publish, revise, and retire newsroom items from one place.
                </p>
              </div>
              <button
                type="button"
                className="news-events-button news-events-button-secondary"
                onClick={handleManagerLogout}
              >
                Log Out
              </button>
            </div>
            <form className="news-events-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="News title"
                className="news-events-input"
                required
              />
              <input
                type="date"
                name="isoDate"
                value={formData.isoDate}
                onChange={handleChange}
                className="news-events-input"
                required
              />
              <textarea
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Type today's news here"
                className="news-events-textarea"
                rows="4"
                required
              />
              <div className="news-events-actions">
                <button type="submit" className="news-events-button">
                  {editingId ? "Update News" : "Add News"}
                </button>
                {editingId ? (
                  <button
                    type="button"
                    className="news-events-button news-events-button-secondary"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                ) : null}
                {addedNews.length > 0 ? (
                  <button
                    type="button"
                    className="news-events-button news-events-button-danger"
                    onClick={handleClearAll}
                  >
                    Clear Added News
                  </button>
                ) : null}
              </div>
            </form>
          </section>
        ) : null}

        <section className="news-events-grid" aria-label="Daily company news">
          {allNews.map((item) => (
            <article className="news-events-card" key={item.id}>
              <div className="news-events-card-top">
                <time className="news-events-date" dateTime={item.isoDate}>
                  {item.date}
                </time>
                {item.isCustom ? (
                  <span className="news-events-badge">Published</span>
                ) : (
                  <span className="news-events-badge news-events-badge-muted">
                    Featured
                  </span>
                )}
              </div>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              {isManager && item.isCustom ? (
                <div className="news-events-card-actions">
                  <button type="button" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(item.id)}>
                    Delete
                  </button>
                </div>
              ) : null}
            </article>
          ))}
        </section>

        {!isManager ? (
          <div className="news-events-access-row">
            <button
              type="button"
              className="news-events-access-link"
              onClick={() => {
                setShowManagerLogin(true);
                setLoginError("");
              }}
              aria-label="Open manager access"
            >
              <span aria-hidden="true">&#128274;</span>
            </button>
          </div>
        ) : null}

        {showManagerLogin && !isManager ? (
          <div className="news-events-login-modal" role="dialog" aria-modal="true">
            <div
              className="news-events-login-backdrop"
              onClick={() => setShowManagerLogin(false)}
            />
            <section className="news-events-login-panel" aria-label="Manager login">
              <button
                type="button"
                className="news-events-login-close"
                onClick={() => setShowManagerLogin(false)}
                aria-label="Close manager login"
              >
                &times;
              </button>
              <form className="news-events-login" onSubmit={handleManagerLogin}>
                <div className="news-events-login-copy">
                  <span className="news-events-panel-label">Restricted Access</span>
                  <h2>Manager Login</h2>
                  <p>Only managers can add, edit, or remove news items.</p>
                </div>
                <input
                  type="password"
                  value={managerPassword}
                  onChange={(event) => setManagerPassword(event.target.value)}
                  placeholder="Enter manager password"
                  className="news-events-input"
                  required
                />
                <button type="submit" className="news-events-button">
                  Log In
                </button>
              </form>
              {loginError ? (
                <p className="news-events-login-error">{loginError}</p>
              ) : null}
            </section>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default NewsEventsPage;
