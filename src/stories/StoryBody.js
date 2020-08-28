import React, {useEffect, useState} from 'react';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";
import StoryBodyRenderer from "./StoryBodyRenderer";

export default function StoryBody(props) {

    const [storyData, setStoryData] = useState([]);
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1);

    async function fetchItems() {
        if (storyData.length >= 60) {
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
                    setStoryData(storyData => storyData.concat(stories.articles));
                }
            })
            .catch((error) => {
                setHasMore(false);
            })
    }

    useEffect(() => {
        fetchItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.url])

    return (
        <div className="mt-2">
            {storyData.length === 0 && hasMore === false ? "Unable to load stories..." :
                <InfiniteScroll
                    dataLength={storyData.length}
                    next={fetchItems}
                    hasMore={hasMore}
                >
                    <StoryBodyRenderer storyData={storyData}/>
                </InfiniteScroll>}
        </div>
    );
}