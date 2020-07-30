import React, {useEffect, useState} from 'react';
import StoryRow from "./StoryRow";

function Stories({match}) {
    useEffect(() => {
        fetchItems();
        //below comment to disable alert in console for fetchItems
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [storyData, setStoryData] = useState({
        status: "",
        totalResults: 0,
        articles: []
    });

    const fetchItems = async () => {
        const settings = {
            method: 'GET',
            headers: {
                'X-Api-Key': 'f7fdee5e51c8452dba29bd5305dd8b94'
            }
        };
        const fetchResponse = await fetch (`http://newsapi.org/v2/top-headlines?country=us&category=${match.params.section}`,
            settings);
        const data = await fetchResponse.json();
        setStoryData(data);
    }

    const processedStories = chunkData(storyData.articles);
    let i = 0;
    return (
        <div>
            {processedStories.map(items => <StoryRow key={i++} items={items} />)}
        </div>
    );
}

function chunkData(storyData) {
    let i,j,storyGroups = [],chunk = 2;
    for (i=0,j=storyData.length; i<j; i+=chunk) {
        storyGroups.push(storyData.slice(i,i+chunk));
    }
    return storyGroups;
}

export default Stories;