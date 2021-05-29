import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import CardList from "../../common/card/CardList";
import StoryCard from "./StoryCard";
import {getTopHeadlineStories, getStoriesByInputSearch} from "./story.service";

export default function StoryBody(props) {

    const [cardArray, setCardArray] = useState([]);
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1);

    async function fetchItems() {
        let stories;
        if (props.section) {
            stories = await getTopHeadlineStories(props.section, page);
        } else {
            stories = await getStoriesByInputSearch(props.input, page);
        }

        if (stories.length === 0) {
            setHasMore(false);
        } else {
            const storyCards = stories.map(story => <StoryCard key={story.url} story={story}/>)
            setCardArray(cardArray => cardArray.concat(storyCards));
            setPage(oldPage => oldPage + 1);
            if (cardArray.length >= 60) {
                setHasMore(false);
            }
        }
    }

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="mt-2">
            <InfiniteScroll dataLength={cardArray.length} next={fetchItems} hasMore={hasMore} loader={"loading..."}>
                <CardList cardArray={cardArray}/>
            </InfiniteScroll>
        </div>
    );
}