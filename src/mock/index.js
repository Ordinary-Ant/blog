import mockJS from 'mockjs'

const article_list = mockJS.mock({
    "data|20": [{
        ator: "@cname",
        "id|+1": 1,
        time: "@datetime",
        img: "@image('400x200', '#50B347', '#fff', EasyMock)",
        title: "@title",
        num: "@integer(10,700)",
        snapshot: "@cparagraph",
        category: "@title"
    }]
})

const creations_list = mockJS.mock({
    "data|20": [{
        "id|+1": 1,
        url: "@url",
        title: "@title",
        "imgs|3": [
            "@image('200x200', '#50B347', '#fff', EasyMock)"
        ],
        snapshot: "@cparagraph"
    }]
})

const comment_list = mockJS.mock({
    "data|20": [{
        "id|+1": 1,
        "tag|2": [
            "@cname"
        ],
        ator: "@cname",
        time: "@datetime",
        snapshot: "@cparagraph",
        num: "@integer(10,700)",
    }]
})

const hot_article = mockJS.mock({
    "data|3": [{
        ator: "@cname",
        "id|+1": 1,
        time: "@datetime",
        img: "@image('400x200', '#50B347', '#fff', EasyMock)",
        title: "@title",
        num: "@integer(10,700)",
        snapshot: "@cparagraph",
        category: "@title"
    }]
})

const hot_creations = mockJS.mock({
    "data|3": [{
        "id|+1": 1,
        url: "@url",
        title: "@title",
        "imgs|3": [
            "@image('200x200', '#50B347', '#fff', EasyMock)"
        ],
        snapshot: "@cparagraph"
    }]
})

const hot_comment = mockJS.mock({
    "data|3": [{
        "id|+1": 1,
        "tag|2": [
            "@cname"
        ],
        ator: "@cname",
        time: "@datetime",
        snapshot: "@cparagraph",
        num: "@integer(10,700)",
    }]
})

const hot_history = mockJS.mock({
    "data|3": [{
        "id|+1": 1,
        "tag|2": [
            "@cname"
        ],
        ator: "@cname",
        time: "@datetime",
        snapshot: "@cparagraph",
        num: "@integer(10,700)",
    }]
})

module.exports = [
    {
        method: 'post',
        url: '/api/article',
        response: ({ body }) => {
            return {
                code: 200,
                status: 'OK',
                list: article_list
            }
        }
    }
]