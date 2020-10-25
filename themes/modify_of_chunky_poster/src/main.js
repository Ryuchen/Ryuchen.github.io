import './scss/styles.scss';
import Plyr from 'plyr';

import(/* webpackChunkName: "bootstrap" */ 'bootstrap');

window.addEventListener('DOMContentLoaded', async (event) => {
    const { default: App } = await import(/* webpackChunkName: "app" */ './js/App');

    App.loadFontAwesome();
    App.bootstrapify();
    App.lazyload();
    App.navbarFade();
    App.lightbox();
    App.renderProject();
    App.syntaxHighlight();
});

// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('#music-player', {});

player.source = {
    type: 'audio',
    title: '我喜欢的音乐',
    sources: [
        {
            src: 'https://cdn.jsdelivr.net/gh/Ryuchen/ryuchen.github.io@master/music/夏天的风.mp3',
            type: 'audio/mp3',
        },
        {
            src: 'https://cdn.jsdelivr.net/gh/Ryuchen/ryuchen.github.io@master/music/Love-is-gone.mp3',
            type: 'audio/mp3',
        }
    ],
};

player.volume = 0.35;

player.controls = ['play', 'progress', 'current-time', 'mute', 'volume'];

// Expose player so it can be used from the console
window.player = player;
