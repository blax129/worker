(function () {
  var shareUrlEl = document.querySelector('[data-share-url]');
  var copyBtn = document.querySelector('[data-copy-share]');
  var shareTipEl = document.querySelector('[data-share-tip]');
  var shareBox = document.querySelector('.share-link');

  function normalizeUrl(url) {
    if (!url || url.indexOf('__SITE_URL__') !== -1) {
      return null;
    }

    if (!/^https?:\/\//.test(url)) {
      return null;
    }

    if (url.endsWith('/index.html')) {
      return url.slice(0, -'/index.html'.length) + '/';
    }

    return url.endsWith('/') ? url : url + '/';
  }

  function getShareUrl() {
    var siteMeta = document.querySelector('meta[name="site-url"]');
    var fromMeta = siteMeta && normalizeUrl(siteMeta.getAttribute('content'));
    if (fromMeta) {
      return fromMeta;
    }

    var canonical = document.querySelector('link[rel="canonical"]');
    var fromCanonical = canonical && normalizeUrl(canonical.getAttribute('href'));
    if (fromCanonical) {
      return fromCanonical;
    }

    return normalizeUrl(window.location.href.split('#')[0].split('?')[0]);
  }

  if (shareUrlEl) {
    var shareUrl = getShareUrl();

    if (shareUrl) {
      shareUrlEl.textContent = shareUrl;
    } else {
      shareUrlEl.textContent = 'https://your-site.netlify.app/';
      if (shareBox) {
        shareBox.classList.add('share-link--preview');
      }
      if (copyBtn) {
        copyBtn.disabled = true;
        copyBtn.textContent = 'Deploy first';
      }
      if (shareTipEl) {
        shareTipEl.innerHTML = 'This is a local preview. After you deploy, open your <strong>live</strong> site and copy the real <strong>https://</strong> link from here for Facebook comments.';
      }
    }
  }

  if (copyBtn && shareUrlEl && !copyBtn.disabled) {
    copyBtn.addEventListener('click', function () {
      var text = shareUrlEl.textContent;
      function markCopied() {
        copyBtn.textContent = 'Copied!';
        setTimeout(function () {
          copyBtn.textContent = 'Copy';
        }, 2000);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(markCopied).catch(function () {
          copyBtn.textContent = 'Select link';
        });
      } else {
        var range = document.createRange();
        range.selectNodeContents(shareUrlEl);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        markCopied();
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('revealed');
    });
  }
})();
