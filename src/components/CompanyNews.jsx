import "./CompanyNews.css";

const companyNews = [
  {
    date: "March 10, 2026",
    title: "Daily Company Update",
    description:
      "Replace this text with today's company announcement, achievement, or client update.",
  },
  {
    date: "March 9, 2026",
    title: "Operations and Delivery",
    description:
      "Add a short summary of progress across finance operations, compliance work, or delivery milestones.",
  },
  {
    date: "March 8, 2026",
    title: "Team and Business Highlights",
    description:
      "Use this space for internal events, partnerships, recognitions, or service expansion updates.",
  },
];

function CompanyNews() {
  return (
    <section className="company-news">
      <div className="company-news-header">
        <div>
          <span className="company-news-kicker">Latest Updates</span>
          <h2>Daily Company News</h2>
        </div>
        <p>
          Publish your most recent company updates on the homepage and refresh
          this list each day.
        </p>
      </div>

      <div className="company-news-list">
        {companyNews.map((item) => (
          <article className="company-news-item" key={`${item.date}-${item.title}`}>
            <span className="company-news-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CompanyNews;
