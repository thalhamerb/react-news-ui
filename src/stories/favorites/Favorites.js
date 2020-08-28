import React from 'react';
import StoryBodyRenderer from "../StoryBodyRenderer";
import {useRecoilState} from "recoil";
import {favoriteStoriesState} from "../../store";

function Favorites() {
    const [favoriteStories, setFavoriteStories] = useRecoilState(favoriteStoriesState);

    return (
        <>
        <h5 className="text-center">Favorites</h5>
        <StoryBodyRenderer storyData={Array.from(favoriteStories.values())}/>
        </>
    );
}

export default Favorites;