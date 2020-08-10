import React, {useEffect, useState} from 'react';
import StoryRow from "./StoryRow";
import InfiniteScroll from "react-infinite-scroll-component";

export default function StoryBody({url}) {

    const [storyData, setStoryData] = useState([]);
    const [hasMore, setHasMore] = useState(true)
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchItems();
        //below comment to disable alert in console for fetchItems
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchItems = async () => {
        if (storyData.length >= 60) {
            setHasMore(false);
            return;
        }

        setPage(oldPage => oldPage + 1);
        const settings = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'f7fdee5e51c8452dba29bd5305dd8b94'
            }
        };
        // console.log("fetching items from url: " + url + "&page=" + page);
        const fetchResponse = await fetch(url + "&page=" + page, settings);
        const data = await fetchResponse.json();

        if (data.length === 0) {
            setHasMore(false);
        } else {
            setStoryData(storyData => storyData.concat(data.articles));
        }
    }

    const chunkData = (storyData) => {
        let i, j, storyGroups = [], chunk = 2;
        for (i = 0, j = storyData.length; i < j; i += chunk) {
            storyGroups.push(storyData.slice(i, i + chunk));
        }
        return storyGroups;
    }

    return (
        <div className="mt-2">
            <InfiniteScroll
                dataLength={storyData.length}
                next={fetchItems}
                hasMore={hasMore}
            >
                {chunkData(storyData).map((items, idx) => <StoryRow key={idx} items={items}/>)}
            </InfiniteScroll>
        </div>
    );
}