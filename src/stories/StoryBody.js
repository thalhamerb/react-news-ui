import React, {useEffect, useState} from 'react';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import CardList from "../common/card/CardList";
import StoryCard from "./StoryCard";

export default function StoryBody(props) {

    const [cardArray, setCardArray] = useState([]);
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1);

    async function fetchItems() {
        if (cardArray.length >= 60) {
            setHasMore(false);
            return;
        }

        setPage(oldPage => oldPage + 1);

        const headers = {
            'X-Api-Key': 'f7fdee5e51c8452dba29bd5305dd8b94'
        }
        axios.get(`${props.url}&page=${page}`, {headers: headers})
            .then(res => {
                const stories = res.data;
                if (stories.length === 0) {
                    setHasMore(false);
                } else {
                    setCardArray(cardArray => cardArray.concat(mapStoriesToCards(stories.articles)));
                }
            })
            .catch((error) => {
                setHasMore(false);
            })
    }

    function mapStoriesToCards(stories) {
        return stories.map(story => <StoryCard key={story.url} story={story}/>);
    }

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.url])

    return (
        <div className="mt-2">
            {cardArray.length === 0 && hasMore === false ?
                "Unable to load stories..."
                :
                <InfiniteScroll dataLength={cardArray.length} next={fetchItems} hasMore={hasMore}>
                    <CardList cardArray={cardArray}/>
                </InfiniteScroll>}
        </div>
    );
}