
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
