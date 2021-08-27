let docuteSourceRoot = './';

new Docute({
    target: '#docute',
    title: 'Moondust Devkit - Editor Documentation',
    sourcePath: docuteSourceRoot,
    darkThemeToggler: true,
    fetchOptions: {
        mode: 'no-cors',
    },
    detectSystemDarkTheme: true,
    highlight: ['typescript', 'bash'],
    editLinkBase: 'https://github.com/WohlSoft/Moondust-Devkit-Help/edit/master/',
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
            link: 'https://github.com/WohlSoft/Moondust-Project'
        },
        {
            title: 'Moondust',
            link: 'https://wohlsoft.ru/PGE'
        }
    ],
    sidebar: [
        {
            title: 'Main',
            children: [
                {
                    title: 'Intro',
                    link: '/'
                }
            ]
        },
        {
            title: 'Getting started',
            children: [
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
            children: [
                {
                    title: 'What is Moondust Editor?',
                    link: '/Intro/QuickStart/WhatIsEditor'
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
            collapsable: true,
            title: "Editing",
            children: [
                {
                    title: 'Items placing',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Items removing',
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
            collapsable: true,
            title: 'Editor GUI',
            children: [
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
                    title: 'Document view',
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
            collapsable: true,
            title: 'Level editing',
            children: [
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
                    title: 'Layers',
                    link: '/EditLevel/Layers'
                },
                {
                    title: 'Events',
                    link: '/EditLevel/Events'
                },
                {
                    title: 'Items placing',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Items removing',
                    link: '/Editing/RemoveItems'
                },
                {
                    title: 'Context menu',
                    link: '/EditLevel/ContextMenu'
                },
                {
                    title: 'Properties box',
                    link: '/EditLevel/PropertiesBox'
                },
                {
                    title: 'Item search',
                    link: '/Editing/Search'
                },
                {
                    title: 'Testing',
                    link: '/EditLevel/Testing.md'
                }
            ]
        },
        {
            title: 'World map editing',
            children: [
                {
                    title: 'About',
                    link: '/EditWorld/About'
                },
                {
                    title: 'World Settings',
                    link: '/EditWorld/WorldSettings'
                },
                {
                    title: 'Item Toolbox',
                    link: '/EditWorld/ItemToolbox'
                },
                {
                    title: 'Items',
                    link: '/EditWorld/Items'
                },
                {
                    title: 'Context Menu',
                    link: '/EditWorld/ContextMenu'
                },
                {
                    title: 'Placing tools',
                    link: '/Editing/Placing'
                },
                {
                    title: 'Remove items',
                    link: '/Editing/RemoveItems'
                },
            ]
        },
        {
            title: 'Custom NPC configuration editing',
            children: [
                {
                    title: 'What is NPC.txt?',
                    link: '/EditNPCConfiguration/About'
                },
                {
                    title: 'NPC.txt Editor features',
                    link: '/EditNPCConfiguration/EditorFeature'
                }
            ]
        },
        {
            title: 'Customizing',
            children: [
                {
                    title: 'How to use custom graphics',
                    link: '/Customizing/CustomGraphics'
                },
                {
                    title: 'Music and SFX formats',
                    link: '/Customizing/CustomAudio'
                },
                {
                    title: 'Bit masks (for Vanilla SMBX)',
                    link: '/Customizing/BitMasks'
                },
                {
                    title: 'Editor Themes',
                    link: '/Customizing/EditorThemes'
                }
            ]
        },
        {
            title: 'Configurations',
            children: [
                {
                    title: 'Configuration manager',
                    link: '/Configuration/ConfigManager'
                }
            ]
        },
        {
            title: 'Tools',
            children: [
                {
                    title: 'Application settings',
                    link: '/Tools/ApplicationSettings'
                },
                {
                    title: 'Development console',
                    link: '/Tools/DevConsole'
                },
                {
                    title: 'Debugger',
                    link: '/Tools/Debugger'
                },
                {
                    title: 'Tileset item box',
                    link: '/Tools/TilesetBox'
                },
                {
                    title: 'Custom data helper tools',
                    link: '/Tools/CustomData'
                }
            ]
        },
        {
            title: 'Console tools',
            children: [
                {
                    title: 'GIFs2PNG',
                    link: '/Tools/Console/GIFs2PNG'
                },
                {
                    title: 'PNG2GIFs',
                    link: '/Tools/Console/PNG2GIFs'
                },
                {
                    title: 'PaletteFilter',
                    link: '/Tools/Console/PaletteFilter'
                },
                {
                    title: 'LazyFixTool',
                    link: '/Tools/Console/LazyFixTool'
                }
            ]
        },
        {
            title: 'FAQ',
            link: 'https://wohlsoft.ru/pgewiki/Frequently_Asked_Questions'
        },
        {
            title: 'License',
            link: '/GPLv3'
        },
        {
            title: 'Our friends',
            children: [
                {
                    title: 'Hedgewars',
                    link: 'http://hedgewars.org/'
                },
                {
                    title: 'Talkhaus',
                    link: 'http://talkhaus.raocow.com/'
                },
                {
                    title: 'SMBX Equipo Estelar',
                    link: 'https://www.smbxequipoestelar.com/'
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
