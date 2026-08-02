const active = document.body.dataset.page;
document.querySelectorAll('[data-page-link]').forEach((link) => {
  if (link.dataset.pageLink === active) link.setAttribute('aria-current', 'page');
});

