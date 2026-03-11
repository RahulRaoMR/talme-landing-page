import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storagePath = path.join(__dirname, "news-storage.json");
const port = process.env.NEWS_API_PORT || 3001;

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  response.end(JSON.stringify(payload));
}

async function readNews() {
  const raw = await readFile(storagePath, "utf8");
  return JSON.parse(raw);
}

async function writeNews(items) {
  await writeFile(storagePath, JSON.stringify(items, null, 2));
}

function formatDisplayDate(isoDate) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function createNewsId() {
  return `news-${Date.now()}`;
}

function sortByDateDescending(items) {
  return [...items].sort((left, right) => {
    return new Date(right.isoDate).getTime() - new Date(left.isoDate).getTime();
  });
}

const server = createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 400, { error: "Missing request URL." });
    return;
  }

  const { method } = request;
  const url = new URL(request.url, `http://localhost:${port}`);

  if (method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    response.end();
    return;
  }

  if (url.pathname !== "/api/news") {
    sendJson(response, 404, { error: "Route not found." });
    return;
  }

  try {
    if (method === "GET") {
      const items = await readNews();
      sendJson(response, 200, sortByDateDescending(items));
      return;
    }

    if (method === "POST") {
      let body = "";
      for await (const chunk of request) {
        body += chunk;
      }

      const payload = JSON.parse(body || "{}");
      const title = payload.title?.trim();
      const summary = payload.summary?.trim();
      const isoDate = payload.isoDate?.trim();

      if (!title || !summary || !isoDate) {
        sendJson(response, 400, { error: "Title, summary, and date are required." });
        return;
      }

      const items = await readNews();
      const newItem = {
        id: createNewsId(),
        title,
        summary,
        isoDate,
        date: formatDisplayDate(isoDate),
      };

      const updatedItems = sortByDateDescending([newItem, ...items]);
      await writeNews(updatedItems);
      sendJson(response, 201, newItem);
      return;
    }

    sendJson(response, 405, { error: "Method not allowed." });
  } catch (error) {
    sendJson(response, 500, {
      error: "Failed to process news request.",
      details: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

server.listen(port, () => {
  console.log(`News API running on http://localhost:${port}`);
});
