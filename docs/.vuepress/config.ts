// @ts-ignore
import { defineUserConfig } from 'vuepress'
// @ts-ignore
import { defaultTheme } from 'vuepress'
// @ts-ignore
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Justice的博客',
    description: '我在感觉良好的状态下进行改变，效果最佳。',
    head:[ [
        'link', { rel: 'icon', href: '/images/favicon.ico' }
    ]],
    plugins: [
        docsearchPlugin({
            appId:'JP2DLPFM6S',
            apiKey:'8ff7660a6e94d8542475bf886be9bc39',
            indexName:'justice996io',
        }),
        commentPlugin({
            // 插件选项
            provider: "Giscus",
        }),
    ],
    theme:defaultTheme({
        repo: 'https://github.com/Justice996',
        editLink:false,
        navbar:[
            {
                text: '友情链接',
                link: '/friends.md',
            },
        ],
        notFound: [
            '这里什么都没有',
            '我们怎么到这来了？',
            '这是一个 404 页面',
            '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        sidebar: [
            // 侧边栏
            {
                text: '技术',
                collapsible:true,
                children: [
                    // SidebarItem
                    {
                        text: '数据结构和算法',
                        link: '/skill/DataStructureAndalgorithm/README.md',
                        children: [
                            {
                                text: '开始',
                                link: '/skill/DataStructureAndalgorithm/start.md',
                                children: [],
                            },
                            {
                                text: '队列',
                                link: '/skill/DataStructureAndalgorithm/queue.md',
                            },
                            {
                                text: '双端队列',
                                link: '/skill/DataStructureAndalgorithm/deque.md',
                            },
                            {
                                text: '循环队列',
                                link: '/skill/DataStructureAndalgorithm/loopQueue.md',
                            },
                            {
                                text: '链表',
                                link: '/skill/linkedList/linkedList.md',
                            },
                            {
                                text: '双向链表',
                                link: '/skill/linkedList/DoublyLinkedList.md',
                            },
                            {
                                text: '循环链表',
                                link: '/skill/linkedList/CircularLinkedList.md',
                            },
                            {
                                text: '有序链表',
                                link: '/skill/linkedList/SortedLinkedList.md',
                            },
                            {
                                text: '集合',
                                link: '/skill/set/set.md',
                            },
                            {
                                text: '字典',
                                link: '/skill/dictionaryAndHashTable/dictionary.md',
                            },
                            {
                                text: '散列表',
                                link: '/skill/dictionaryAndHashTable/hashTable.md',
                            },
                            {
                                text:'递归',
                                link: '/skill/recursive/recursive.md',
                            },
                            {
                                text:'树',
                                link: '/skill/tree/tree.md',
                            },
                            {
                                text:'二叉堆',
                                link: '/skill/binaryHeap/binaryHeap.md',
                            },
                            {
                                text:'图',
                                link: '/skill/Graph/graph.md',
                            }
                        ],
                    },
                    {
                        text: '前端',
                        link: '/skill/js/js.md',
                        children: [
                            {
                                text:'前端面试题',
                                link:'/skill/js/interview.md'
                            },
                            {
                                text: '如何清除前端缓存',
                                link: '/skill/js/clean.md',
                                children: [],
                            },
                            {
                                text: '$forceUpdate详解',
                                link: '/skill/js/forceUpdate.md',
                                children: [],
                            },
                            {
                                text: 'js中的forEach可以改变原数组吗？',
                                link: '/skill/js/aboutForEach.md',
                                children: [],
                            },
                            {
                                text: 'Vue变量中以$或者_开头的变量无法访问',
                                link: '/skill/js/vueabout$.md',
                                children: [],
                            },
                        ],
                    },
                    {
                        text: '企业微信开发',
                        link: '/skill/wecom',
                        children: [
                            {
                                text: '如何配置本地开发环境?',
                                link: '/skill/wecom/configuration.md',

                            },
                        ],
                    },
                    {
                        text: '微信公众号开发',
                        children: [
                            {
                                text: '扫二维码关注公众号并获取用户-逻辑?',
                                link: '/skill/wechat/basic.md',
                            },
                        ],
                    },
                    {
                        text: 'php',
                        link: '/skill/php/',
                        children: [
                            {
                                text: '关联表 一对多',
                                link: '/skill/php/search.md',
                                children: [],
                            },
                            {
                                text: 'tp',
                                link: '/skill/php/tp.md',
                                children: [],
                            },
                            {
                                text: 'php基础',
                                link: '/skill/php/basic.md',
                                children: [],
                            },
                        ],
                    },
                    {
                        text: '运维',
                        children: [
                            {
                                text: '宝塔面板',
                                link: '/skill/DevOps/btUse.md',
                            },
                        ],
                    },
                    {
                        text: 'git',
                        children: [
                            {
                                text: 'git基本使用',
                                link: '/skill/git/gitBasic.md',
                                children: [],
                            },
                            {
                                text: 'git配置代理',
                                link: '/skill/git/gitUsePorxy.md',
                                children: [],
                            }
                        ],
                    },
                ],
            },
            {
                text: '生活',
                collapsible:true,
                children: [
                    // SidebarItem
                    {
                        text: '整活',
                        link: '/life/',
                        children: [],
                    },
                    {
                        text: '整了台ipad',
                        link: '/life/ipad.md',
                        children: [],
                    },
                    {
                        text: '杂谈',
                        link: '/life/thinks.md',
                        children: [],
                    },
                    {
                        text: '寻找',
                        link: '/life/seek.md',
                    },
                    {
                        text: '25岁生日',
                        link: '/life/birthday25.md',
                    },
                    {
                        text: '投喂流浪猫',
                        link: '/life/strayCat.md',
                    },
                    {
                        text: '第二次投喂流浪猫',
                        link: '/life/strayCat2.md',
                    },
                    {
                        text: '第三次投喂流浪猫',
                        link: '/life/strayCat3.md',
                    },
                    {
                        text: '第四次投喂流浪猫',
                        link: '/life/strayCat4.md',
                    },
                    {
                        text: '流浪猫变家猫',
                        link: '/life/strayCatIshomeCat.md',
                    },
                    {
                        text: '小橘拉屎在猫砂盆外面',
                        link: '/life/catpoop.md',
                    },
                    // {
                    //     text: '崩溃',
                    //     link: '/life/breakdown.md',
                    // },

                    // 字符串 - 页面文件路径
                    // '/foo/bar.md',
                ],
            },
            {
                text:'学英语',
                collapsible:true,
                children: [
                    {
                        text:'如何记单词',
                        link: '/english/howToRememberTheWords.md',
                    },
                    {
                        text:'单词表1',
                        link: '/english/list1.md',
                    }
                    ]
            },
            {
                text:'阅读',
                collapsible:true,
                children: [
                    {
                        text: '<<硅谷钢铁侠：埃隆·马斯克的冒险人生>>',
                        link: '/read/ElonReeveMuskBiography.md',
                    },
                    {
                        text: '<<世界尽头的咖啡馆>>',
                        link: '/read/TheCafeattheEndoftheWorld.md',
                    },
                    {
                        text: '<<生活的艺术家>>',
                        link: '/read/artistsOfLife.md',
                    },
                    {
                        text: '<<计算机是怎样跑起来的>>',
                        link: '/read/howComputersWork.md',
                    },
                    {
                        text: '<<傅雷家书>>节选',
                        link: '/read/FuLeisletter.md',
                    }
                ]
            },
            {
                text: '娱乐',
                collapsible:true,
                children: [
                    // SidebarItem
                    {
                        text: '饥荒',
                        link: '/game/dontStrave.md',
                    },
                    {
                        text: '怀旧游戏机',
                        link: 'http://yx.1dly.cn/',
                    },
                ],
            },
            {text:'树莓派', collapsible:true,children:[
                    {
                        text: '树莓派控制二极管灯泡',
                        link: '/raspberry/diode.md',
                    },
                ]}
        ],
    }),

})
