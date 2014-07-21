module.exports = {
    block: 'html',
    tag: 'html',
    js: {
        translations: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec.'
    },
    content: [{
        block: 'head',
        tag: 'head',
        content: { block: 'title', tag: 'title', content: 'Hello bem!' }
    }, {
        block: 'body',
        tag: 'body',
        cls: 'clear-fix',
        content: [{
            block: 'ul',
            tag: 'ul',
            content: [{
                elem: 'li',
                tag: 'li',
                js: {
                    wow: 'params!'
                },
                content: 'Write some tests'
            }, {
                elem: 'li',
                tag: 'li',
                content: 'Write benchmark'
            }, {
                elem: 'li',
                tag: 'li',
                content: 'Implement functionality'
            }, {
                elem: 'li',
                tag: 'li',
                mix: [{
                    block: 'li-red',
                    cls: 'reddish',
                    js: {
                        some: 'parameter'
                    }
                }],
                content: 'Test it'
            }, {
                elem: 'li',
                tag: 'li',
                mix: [{
                    block: 'li-blue',
                    cls: 'bluish',
                    js: {
                        other: 'parameter'
                    }
                }],
                content: 'Optimize it'
            }]
        }]
    }, {
        block: 'footer',
        bem: true,
        content: {
            block: 'paragraph',
            tag: 'p',
            mix: [
                { block: 'one', js: { one: true } },
                { block: 'two', js: { one: true } },
                { block: 'three', js: { one: true } },
                { block: 'four', js: { one: true } },
                { block: 'five', js: { one: true } },
            ],
            content: 'Profit'
        }
    }]
};
