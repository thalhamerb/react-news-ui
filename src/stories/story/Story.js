import React, {Suspense} from 'react';
import StoryInfo from "./StoryInfo";
import {useRecoilState} from "recoil";
import {favoriteStoriesState} from "../../store";

const StoryImage = React.lazy(() => import('./StoryImage'));

export default function Story({story}) {

    const [favoriteStories, setFavoriteStories] = useRecoilState(favoriteStoriesState);
    let isFavorite = favoriteStories.get(story.url)

    //todo pull out into utility class
    const addRemoveStoryFromFavorites = () => {
        //todo make so only 10 stories can be favorited
        if (isFavorite) {
            favoriteStories.delete(story.url); //todo is this ok to do without copying map instead of changing directly
            setFavoriteStories(favoriteStories);
        } else {
            setFavoriteStories(favoriteStories.set(story.url, story));
        }
        isFavorite = !isFavorite;
    }

    return (
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <StoryInfo story={story} favorite={isFavorite} addRemoveStoryFromFavorites={() => addRemoveStoryFromFavorites()}/>
                <Suspense fallback={<div>loading...</div>}>
                    <StoryImage imageUrl={story.urlToImage}/>
                </Suspense>
            </div>
        </div>
    );
}