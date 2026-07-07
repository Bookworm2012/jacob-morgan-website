async function findLatestPost() {
  // Load the IT Fundamentals page
  const res = await fetch("../pages/it_fundamentals.html");
  const html = await res.text();

  // Parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const main = doc.querySelector("main");
  const posts = main.querySelectorAll("p");

  let latest = null;

  posts.forEach(post => {
    const raw = post.innerHTML.trim();

    // First line before <br> is the date
    const dateLine = raw.split(/<br\s*\/?>/i)[0].trim();
    const date = new Date(dateLine); // MM/DD/YYYY works

    if (!latest || date > latest.date) {
      latest = { date, element: post };
    }
  });

  // Give the latest post an ID if it doesn't have one
  if (latest && !latest.element.id) {
    latest.element.id = "latest-post";
  }

  // Update the link in school_journal.html
  const link = document.getElementById("latest-post-link");
  if (link && latest) {
    link.href = "../pages/it_fundamentals.html#" + latest.element.id;
    link.textContent = "Read Latest IT Fundamentals Post";
  }
}

findLatestPost();