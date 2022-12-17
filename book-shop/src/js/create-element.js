function newTag(tag, options) {
  return Object.assign(document.createElement(tag), options);
}

export { newTag };
