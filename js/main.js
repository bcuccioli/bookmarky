const container = document.getElementById("bookmarks");

links.forEach((item) => {
  const wrapper = document.createElement("div");
  wrapper.className = "bookmark";

  const link = document.createElement("a");
  link.textContent = item[0];
  link.href = item[1];

  wrapper.appendChild(link);

  const tags = item[2];
  tags.forEach((tag) => {
    const tagDiv = document.createElement("div");
    tagDiv.className = "tag";
    tagDiv.textContent = tag;
    wrapper.appendChild(tagDiv);
  });

  container.appendChild(wrapper);
});
