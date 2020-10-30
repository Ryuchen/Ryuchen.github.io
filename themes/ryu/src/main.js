import './scss/styles.scss';

window.addEventListener('DOMContentLoaded', async (event) => {
    await import(/* webpackChunkName: "bootstrap" */ 'bootstrap');
    const { default: App } = await import(/* webpackChunkName: "app" */ './js/App');

    App.loadFontAwesome();
    App.bootstrapify();
    App.lazyload();
    App.navbarFade();
    App.lightbox();
    App.syntaxHighlight();
    App.renderPlayer();
    window.renderProject = App.renderProject;
});