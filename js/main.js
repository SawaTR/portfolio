(() => {
  "use strict";
  const data = window.portfolioData || portfolioData;
  const list = document.querySelector("#project-list");
  const projectDialog = document.querySelector("#project-dialog");
  const lightbox = document.querySelector("#lightbox");
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));

  function visualMarkup(project, index, detail = false) {
    const images = project.images || [];
    const count = images.length || project.placeholderCount || 1;
    return Array.from({ length: count }, (_, imageIndex) => {
      const path = images[imageIndex];
      const label = `${project.title} — ${imageIndex + 1}`;
      if (path) return `<button class="visual image-button" type="button" data-lightbox-project="${index}" data-lightbox-image="${imageIndex}" aria-label="${escapeHtml(label)}を拡大"><img src="${escapeHtml(path)}" alt="${escapeHtml(label)}" loading="lazy"></button>`;
      return `<div class="visual placeholder" role="img" aria-label="${escapeHtml(project.placeholderLabel)}の画像プレースホルダー"><span>${escapeHtml(project.placeholderLabel)}</span><small>IMAGE ${String(imageIndex + 1).padStart(2, "0")}</small></div>`;
    }).join("");
  }

  function renderProjects(filter = "all") {
    const projects = data.projects.map((project, index) => ({ project, index })).filter(({ project }) => filter === "all" || project.category === filter);
    list.innerHTML = projects.map(({ project, index }, visibleIndex) => `
      <article class="project project--${escapeHtml(project.category)} ${project.layout ? `project--${escapeHtml(project.layout)}` : ""} ${visibleIndex % 2 ? "project--reverse" : ""}" data-category="${escapeHtml(project.category)}">
        <div class="project-visuals">${visualMarkup(project, index)}</div>
        <div class="project-copy">
          <p class="project-index">${String(index + 1).padStart(2, "0")} / ${escapeHtml(project.categoryLabel)}</p>
          <h3>${escapeHtml(project.title)}</h3><p class="overview">${escapeHtml(project.overview)}</p>
          <dl class="meta"><div><dt>Role</dt><dd>${project.role.map(escapeHtml).join(" / ")}</dd></div><div><dt>Tools</dt><dd>${project.tools.map(escapeHtml).join(" / ")}</dd></div><div><dt>Year</dt><dd>${escapeHtml(project.year)}</dd></div></dl>
          <button class="view-project" type="button" data-project="${index}">View Project <span aria-hidden="true">↗</span></button>
        </div>
      </article>`).join("");
    bindDynamicControls();
  }

  function bindDynamicControls() {
    document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => openProject(Number(button.dataset.project))));
    document.querySelectorAll("[data-lightbox-project]").forEach(button => button.addEventListener("click", () => openLightbox(Number(button.dataset.lightboxProject), Number(button.dataset.lightboxImage))));
  }

  function openProject(index) {
    const p = data.projects[index];
    document.querySelector("#dialog-content").innerHTML = `<p class="project-index">${escapeHtml(p.categoryLabel)} / ${escapeHtml(p.year)}</p><h2 id="dialog-title">${escapeHtml(p.title)}</h2><p class="dialog-overview">${escapeHtml(p.overview)}</p><div class="dialog-visuals project--${escapeHtml(p.category)} ${p.layout ? `project--${escapeHtml(p.layout)}` : ""}">${visualMarkup(p, index, true)}</div><dl class="detail-list"><div><dt>OBJECTIVE</dt><dd>${escapeHtml(p.purpose)}</dd></div><div><dt>TARGET</dt><dd>${escapeHtml(p.target)}</dd></div><div><dt>CONCEPT</dt><dd>${escapeHtml(p.concept)}</dd></div><div><dt>ROLE</dt><dd>${p.role.map(escapeHtml).join(" / ")}</dd></div><div><dt>TOOLS</dt><dd>${p.tools.map(escapeHtml).join(" / ")}</dd></div></dl>${p.url ? `<a class="external-link" href="${escapeHtml(p.url)}" target="_blank" rel="noopener">Visit project ↗</a>` : ""}`;
    bindDynamicControls(); projectDialog.showModal();
  }
  function openLightbox(projectIndex, imageIndex) {
    const p = data.projects[projectIndex], path = p.images[imageIndex];
    if (!path) return;
    document.querySelector("#lightbox-content").innerHTML = `<img src="${escapeHtml(path)}" alt="${escapeHtml(p.title)} — ${imageIndex + 1}"><p>${escapeHtml(p.title)} / ${imageIndex + 1}</p>`;
    lightbox.showModal();
  }
  function closeOnBackdrop(dialog, event) { if (event.target === dialog) dialog.close(); }
  document.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
  document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
  projectDialog.addEventListener("click", e => closeOnBackdrop(projectDialog, e));
  lightbox.addEventListener("click", e => closeOnBackdrop(lightbox, e));

  document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => { item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("is-active"); button.setAttribute("aria-pressed", "true"); renderProjects(button.dataset.filter);
  }));
  document.querySelector("#skills-list").innerHTML = Object.entries(data.skills).map(([group, items]) => `<section><h3>${escapeHtml(group)}</h3><ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>`).join("");
  document.querySelector("#tools-list").textContent = data.tools.join(" / ");
  const email = data.contact.email; const emailLink = document.querySelector("#contact-email"); emailLink.textContent = email; emailLink.href = `mailto:${email}`;
  document.querySelector("#current-year").textContent = new Date().getFullYear();
  const menu = document.querySelector(".menu-button"), nav = document.querySelector(".global-nav");
  menu.addEventListener("click", () => { const open = menu.getAttribute("aria-expanded") === "true"; menu.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("is-open", !open); });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }));
  renderProjects();
})();
