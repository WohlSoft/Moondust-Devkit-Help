let docuteSourceRoot = './';

new Docute({
    target: '#docute',
    title: 'Moondust Editor - Documentation',
    sourcePath: docuteSourceRoot,
    highlight: ['typescript', 'bash'],
    editLinkBase: 'https://github.com/WohlSoft/PGE-Editor-Help/edit/master/',
    editLinkText: 'Edit this page on GitHub',
    componentMixins: [
        {
            data() {
                return {
                    builtinLanguages: {
                        "javascript": "clike",
                        "actionscript": "javascript",
                        "arduino": "cpp",
                        "aspnet": [
                            "markup",
                            "csharp"
                        ],
                        "bison": "c",
                        "c": "clike",
                        "csharp": "clike",
                        "cpp": "c",
                        "coffeescript": "javascript",
                        "crystal": "ruby",
                        "css-extras": "css",
                        "d": "clike",
                        "dart": "clike",
                        "django": "markup",
                        "erb": [
                            "ruby",
                            "markup-templating"
                        ],
                        "fsharp": "clike",
                        "flow": "javascript",
                        "glsl": "clike",
                        "go": "clike",
                        "groovy": "clike",
                        "haml": "ruby",
                        "handlebars": "markup-templating",
                        "haxe": "clike",
                        "java": "clike",
                        "jolie": "clike",
                        "kotlin": "clike",
                        "less": "css",
                        "markdown": "markup",
                        "markup-templating": "markup",
                        "n4js": "javascript",
                        "nginx": "clike",
                        "objectivec": "c",
                        "opencl": "cpp",
                        "parser": "markup",
                        "php": [
                            "clike",
                            "markup-templating"
                        ],
                        "php-extras": "php",
                        "plsql": "sql",
                        "processing": "clike",
                        "protobuf": "clike",
                        "pug": "javascript",
                        "qore": "clike",
                        "jsx": [
                            "markup",
                            "javascript"
                        ],
                        "tsx": [
                            "jsx",
                            "typescript"
                        ],
                        "reason": "clike",
                        "ruby": "clike",
                        "sass": "css",
                        "scss": "css",
                        "scala": "java",
                        "smarty": "markup-templating",
                        "soy": "markup-templating",
                        "swift": "clike",
                        "tap": "yaml",
                        "textile": "markup",
                        "tt2": [
                            "clike",
                            "markup-templating"
                        ],
                        "twig": "markup",
                        "typescript": "javascript",
                        "vbnet": "basic",
                        "velocity": "markup",
                        "wiki": "markup",
                        "xeora": "markup",
                        "xquery": "markup",
                        "builtin": [
                            "markup",
                            "xml",
                            "html",
                            "mathml",
                            "svg",
                            "css",
                            "clike",
                            "javascript",
                            "js"
                        ]
                    }
                }
            }
        }
    ],
    nav: [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'FAQ',
            link: 'https://wohlsoft.ru/pgewiki/Frequently_Asked_Questions'
        },
        {
            title: 'GitHub repository',
            link: 'https://github.com/WohlSoft/PGE-Project'
        },
        {
            title: 'Moondust',
            link: 'https://wohlsoft.ru/PGE'
        }
    ],
    sidebar: [
        {
            title: 'Main',
            links: [
                {
                    title: 'Intro',
                    link: '/'
                }
            ]
        },
        {
            title: 'Getting started',
            links: [
                {
                    title: 'Quick Start',
                    link: '/Intro/QuickStart',
                },
                {
                    title: 'About',
                    link: '/Intro/About'
                }
            ]
        },
        {
            title: "Quick start",
            links: [
                {
                    title: 'What\'s a Moondust Editor?',
                    link: '/Intro/QuickStart/WhatsAnEditor'
                },
                {
                    title: 'Moondust or SMBX?',
                    link: '/Intro/QuickStart/PgeOrSMBX'
                },
                {
                    title: 'How to make levels',
                    link: '/Intro/QuickStart/HowToMakeLevels'
                },
                {
                    title: 'How to make world maps',
                    link: '/Intro/QuickStart/HowToMakeWorlds'
                }
            ]
        },
        {
            title: "Editing",
            links: [
                {
                    title: 'Placing elements',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Removing items',
                    link: '/Editing/RemoveItems'
                },
                {
                    title: 'Context menu',
                    link: '/Editing/ContextMenu'
                },
                {
                    title: 'Item Properties',
                    link: '/Editing/ItemProperties'
                },
                {
                    title: 'Search',
                    link: '/Editing/Search'
                }
            ]
        },
        {
            title: 'Editor GUI',
            links: [
                {
                    title: 'Toolboxes, Toolbars, panels',
                    link: '/EditorUI/Tools'
                },
                {
                    title: 'Switch application language',
                    link: '/EditorUI/Language'
                },
                {
                    title: 'History (Undo/Redo)',
                    link: '/EditorUI/HistoryManager'
                },
                {
                    title: 'Clipboard',
                    link: '/EditorUI/Clipboard'
                },
                {
                    title: 'Sub-Window view',
                    link: '/EditorUI/SubWindow'
                },
                {
                    title: 'Menu bar',
                    link: '/EditorUI/Menubar'
                },
                {
                    title: 'Hot keys',
                    link: '/EditorUI/HotKeys'
                }
            ]
        },
        {
            title: 'Level editing',
            links: [
                {
                    title: 'About',
                    link: '/EditLevel/About'
                },
                {
                    title: 'Set level title',
                    link: '/EditLevel/SetTitle'
                },
                {
                    title: 'Sections',
                    link: '/EditLevel/Sections'
                },
                {
                    title: 'Item browser',
                    link: '/EditLevel/ItemBrowser'
                },
                {
                    title: 'Level Items',
                    link: '/EditLevel/Items'
                },
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                },
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                }
            ]
        },
        {
            title: 'World map editing',
            links: [
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                }
            ]
        },
        {
            title: 'Custom NPC configuration editing',
            links: [
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                }
            ]
        },
        {
            title: 'Customizing',
            links: [
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                }
            ]
        },
        {
            title: 'Configurations',
            links: [
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                }
            ]
        },
        {
            title: 'Tools',
            links: [
                {
                    title: '<WIP>',
                    link: '/WIP/WIP'
                }
            ]
        },
        {
            title: 'Our friends',
            links: [
                {
                    title: 'Hedgewars',
                    link: 'http://hedgewars.org/'
                },
                {
                    title: 'Talkhaus',
                    link: 'http://talkhaus.raocow.com/'
                }
            ]
        }
    ],
    overrides: {
        '/': {
            language: 'English'
        }
    }
});

Vue.component('ReverseText', {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    template: `
    <div class="reverse-text">
      {{ reversedText }}
      <v-style>
      .reverse-text {
        border: 1px solid var(--border-color);
        padding: 20px;
        font-weight: bold;
        border-radius: 4px;
      }
      </v-style>
    </div>
  `,
    computed: {
        reversedText() {
            return this.text
                .split('')
                .reverse()
                .join('')
        }
    }
});
