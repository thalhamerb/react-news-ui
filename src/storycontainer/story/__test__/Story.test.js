import React from 'react';
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Story from "../Story"

let baseTestItem = null

beforeEach(() => {
    baseTestItem = {
        title: "Title - NY Times",
        source: {
            name: "NY Times"
        },
        publishedAt: '2020-08-14T09:03:03Z',
        description: "The description",
        url: "http://ny-url.nytimes.com",
        urlToImage: "https://myimage.com"
    }
})

test('loads and displays story', async () => {
    const {getByText, queryByAltText} = render(<Story item={baseTestItem} />)

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText(`NY Times · 2020-08-14`)).toBeInTheDocument();
    expect(getByText('The description')).toBeInTheDocument();
    expect(getByText('Continue reading')).toHaveAttribute('href', 'http://ny-url.nytimes.com')

    expect(getByText("loading...")).toBeInTheDocument();
    const imageElement = await waitForElement(() => queryByAltText("article image"))
    expect(imageElement).toBeInTheDocument()
})

test('no published date', () => {
    const noDateItem = JSON.parse(JSON.stringify(baseTestItem));
    noDateItem.publishedAt = null;

    const {getByText} = render(<Story item={noDateItem} />)

    expect(getByText(`NY Times`)).toBeInTheDocument();
})

test('no story image', () => {
    const noImageUrlItem = JSON.parse(JSON.stringify(baseTestItem));
    noImageUrlItem.urlToImage = null;

    const {queryByRole} = render(<Story item={noImageUrlItem} />)

    expect(queryByRole("img")).toBeNull()
})
