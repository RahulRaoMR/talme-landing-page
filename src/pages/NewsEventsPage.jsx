import { useEffect, useState } from "react";
import "./NewsEventsPage.css";

function NewsEventsPage() {
  const today = new Date().toISOString().slice(0, 10);
  const [newsItems, setNewsItems] = useState([]);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    isoDate: today,
  });

  useEffect(() => {
    const loadNews = async () => {
      setStatus("loading");
      setErrorMessage("");

      try {
        const response = await fetch("/api/news");
        if (!response.ok) {
          throw new Error("Unable to load shared news.");
        }

        const items = await response.json();
        setNewsItems(items);
        setStatus("ready");
      } catch (error) {
        setStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Unable to connect to the news service."
        );
      }
    };

    loadNews();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitNews = async (event) => {
    event.preventDefault();

    const payload = {
      title: formData.title.trim(),
      summary: formData.summary.trim(),
      isoDate: formData.isoDate,
    };

    if (!payload.title || !payload.summary || !payload.isoDate) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to save shared news.");
      }

      const savedItem = await response.json();
      setNewsItems((prev) => [savedItem, ...prev]);
      setFormData({
        title: "",
        summary: "",
        isoDate: today,
      });
      setStatus("ready");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to connect to the news service."
      );
    }
  };

  return (
    <section className="news-events-page">
      <div className="news-events-container">
        <header className="news-events-header">
          <div className="news-events-header-copy">
            <span className="news-events-kicker">Latest Updates</span>
            <h1>Daily Company News</h1>
          </div>
          <p className="news-events-header-note">
            Publish your most recent company updates on the homepage and
            refresh this list each day.
          </p>
        </header>

        <section className="news-events-form-wrap" aria-label="Add daily news">
          <form className="news-events-form" onSubmit={submitNews}>
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
              className="news-events-input news-events-date-input"
              required
            />
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              placeholder="Type today's news or event update here"
              className="news-events-textarea"
              rows="4"
              required
            />
            <button type="submit" className="news-events-button">
              {status === "submitting" ? "Saving..." : "Add News"}
            </button>
          </form>
          {errorMessage ? (
            <p className="news-events-message news-events-message-error">
              {errorMessage}
            </p>
          ) : null}
        </section>

        <section className="news-events-grid" aria-label="Daily company news">
          {status === "loading" ? (
            <p className="news-events-message">Loading news...</p>
          ) : null}

          {newsItems.map((item) => (
            <article className="news-events-card" key={item.id}>
              <time className="news-events-date" dateTime={item.isoDate}>
                {item.date}
              </time>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default NewsEventsPage;
