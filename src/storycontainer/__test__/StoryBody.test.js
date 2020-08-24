import React from 'react';
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, waitForElement} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import StoryBody from "../StoryBody"

const returnData = {
    "status": "ok",
    "totalResults": 3,
    "articles": [{
        title: "Title1 - NY Times",
        source: {
            name: "NY Times"
        },
        publishedAt: '2020-08-14T09:03:03Z',
        description: "The 1st description",
        url: "http://ny-url.nytimes.com",
        urlToImage: "https://myimage.com"
    },
        {
            title: "Title2 - WashingtonPost",
            source: {
                name: "WashingtonPost"
            },
            publishedAt: '2020-08-14T09:03:03Z',
            description: "The 2nd description",
            url: "http://ny-url.washingtonpost.com",
            urlToImage: "https://myimage2.com"
        },
        {
            title: "Title3 - NY Times",
            source: {
                name: "NY Times"
            },
            publishedAt: '2020-08-15T09:03:03Z',
            description: "The 3rd description",
            url: "http://ny-url.nytimes.com",
            urlToImage: "https://myimage3.com"
        }
    ]
}
const url = '/getStories?country=us&page=general&page=1';
const server = setupServer(
    rest.get(url, (req, res, ctx) => {
        if (req.headers.get('X-Api-Key') == null) {
            return res(ctx.status(401));
        }
        return res(ctx.json(returnData))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('get stories', async () => {
    const {getByText} = render(<StoryBody key="general" url="/getStories?country=us&page=general"/>)

    const firstTitleElement = await waitForElement(() => getByText("Title1"))

    expect(firstTitleElement).toBeInTheDocument();
    expect(getByText("Title2")).toBeInTheDocument();
    expect(getByText("Title3")).toBeInTheDocument();
})

test('handles server error', async () => {
    server.use(
        rest.get(url, (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )

    const {getByText, queryByText} = render(<StoryBody key="general" url="/getStories?country=us&page=general"/>)

    await waitForElement(() => getByText("Unable to load stories..."))

    expect(getByText("Unable to load stories...")).toBeInTheDocument();
    expect(queryByText("Title1")).not.toBeInTheDocument();

})