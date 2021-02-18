var observer = new MutationObserver((mutations) => {
  mutations.forEach((mutationRecord) => {
    console.log("style changed!");
    const elements = document.querySelectorAll('div[role="presentation"]');
    elements.forEach((element) =>
      element.childElementCount > 1 ? element.remove() : null
    );
    observer.disconnect();
    document.getElementsByTagName("BODY")[0].style.overflow = "visible";
  });
});

var target = document.getElementsByTagName("BODY")[0];
observer.observe(target, { attributes: true, attributeFilter: ["style"] });
