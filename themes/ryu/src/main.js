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

const dTitle = document.title;

window.onblur = function () {
    document.title = "你确定看完了？这就走了？";
};

window.onfocus = function () {
    document.title = "对嘛~ 回来继续看~";
    setTimeout(() => document.title = dTitle, 3000);
};