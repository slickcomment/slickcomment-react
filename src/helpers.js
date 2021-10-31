function insertScriptIfNotExist(src) {
  const scriptId = 'sc-comment-widget-script';

  if (typeof document === 'undefined') {
    return;
  }

  if (document.getElementById(scriptId)) {
    return;
  }

  const script = window.document.createElement('script');
  script.async = true;
  script.src = src;
  script.id = scriptId;
  document.body.appendChild(script);
  return script;
}

const helpers = {
  insertScriptIfNotExist,
};

export default helpers;
