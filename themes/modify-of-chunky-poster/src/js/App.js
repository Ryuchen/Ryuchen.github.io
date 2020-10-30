'use esversion: 6';

import $ from 'jquery';
import Plyr from 'plyr';
import MarkdownIt from 'markdown-it';
import prismjs from "@iktakahiro/markdown-it-prismjs";
import renderMathInElement from "katex/dist/contrib/auto-render.min.js";

import { library, dom } from '@fortawesome/fontawesome-svg-core';

import {
    faBookOpen,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faClock,
    faEnvelope,
    faRss,
    faTag,
    faPaperclip
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebook,
    faFacebookF,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faLinkedinIn,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faRedditAlien,
    faStackOverflow,
    faTwitter,
    faWeibo,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faBookOpen,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faClock,
    faEnvelope,
    faFacebook,
    faFacebookF,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faLinkedinIn,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faRedditAlien,
    faRss,
    faStackOverflow,
    faTag,
    faTwitter,
    faWeibo,
    faPaperclip
);

export default {
    loadFontAwesome: () => {
        dom.watch();
    },
    bootstrapify: () => {
        $('.content blockquote').addClass('blockquote');
        $('.content table').addClass('table');
        $('.content table').wrap('<div class="table-responsive" />');
        $('.content table thead').addClass('thead-dark');
        $('.content pre').wrap('<figure class="highlight" />');
        $('.content figure > img').addClass('img-fluid');
    },
    lazyload: async () => {
        const { default: LazyLoad } = await import(/* webpackChunkName: "lazyload" */ 'vanilla-lazyload');
        new LazyLoad({
            thresholds: "40px 10%",
            load_delay: 100,
        });
    },
    navbarFade: () => {
        let $position = $(window).scrollTop();

        $(window).scroll(() => {
            const $scroll = $(window).scrollTop();
            const $navbarHeight = $('#navbar-main-menu.fixed-top').outerHeight();

            $scroll > $position ? $('#navbar-main-menu.fixed-top').css('top', -$navbarHeight) :
                $('#navbar-main-menu.fixed-top').css('top', 0);

            if ($scroll <= 0) {
              $('#navbar-main-menu.fixed-top').css('top', 0);
            }

            $position = $scroll;
        });
    },
    lightbox: async () => {
        const { default: ekkoLightbox } = await import(/* webpackChunkName: "ekkoLightbox" */ 'ekko-lightbox');
        $('[data-toggle="lightbox"]').click(function(e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });
    },
    syntaxHighlight: () => {
        if (!window.Prism) {
          return;
        }
        Prism.highlightAll();
        $('pre:has(> code[class*=language-])').removeAttr('style');
        const element = $('pre:has(> code:not([class*=language-]))');
        element.addClass('language-none');
        $('> code', element).addClass('language-none');
    },
    renderProject: (element, data) => {
        const md = MarkdownIt({html: true}).use(prismjs);
        const content = decodeURIComponent(escape(data));
        $(element).html(md.render(content));
    },
    renderPlayer: () => {
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
    }
};
