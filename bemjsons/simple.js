module.exports = {
    block: 'html',
    tag: 'html',
    attrs: {
        id: 'someid',
        data: 'onclick-replace',
        class: 'joke'
    },
    cls: 'black',
    js: {
        what: 'thefcu',
        one: true
    },
    mix: [
        { block: 'one', js: { one: true }, cls: 'reddish' },
        { block: 'two', js: { one: true }, cls: 'bluish' },
        { block: 'three', js: { one: true }, cls: 'greenish' },
        { block: 'four', js: { one: true } },
        { block: 'five', js: { one: true } }
    ],
    content: 'content'
};
