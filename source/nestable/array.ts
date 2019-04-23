export const array: any = {
    begin: '(?<!\\w)(\\[)\\s*',
    beginCaptures: {
        1: {
            name: 'punctuation.definition.array.toml',
        },
    },
    end: '\\s*(\\])(?!\\w)',
    endCaptures: {
        1: {
            name: 'punctuation.definition.array.toml',
        },
    },
    patterns: [
        {
            include: '#comment',
        },
        {
            include: '#data',
        },
    ],
}