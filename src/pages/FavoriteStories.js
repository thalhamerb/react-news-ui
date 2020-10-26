import React from 'react';
import {useRecoilState} from "recoil";
import {favoriteStoriesState} from "../store";
import StoryCard from "../components/stories/StoryCard";
import CardList from "../common/card/CardList";

export default function FavoriteStories() {
    const [favoriteStories, setFavoriteStories] = useRecoilState(favoriteStoriesState);

    function mapStoriesToCards(stories) {
        return stories.map(story => <StoryCard key={story.url} story={story}/>);
    }

    return (
        <>
            <h5 className="text-center">Favorites</h5>
            <CardList cardArray={mapStoriesToCards(Array.from(favoriteStories.values()))}/>
        </>
    );
}
