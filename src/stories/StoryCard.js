import React from 'react';
import {useRecoilState} from "recoil";
import {favoriteStoriesState} from "../store";
import Card from "../common/card/Card";
import FaIconButton from "../common/FaIconButton";

export default function StoryCard({story}) {

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

    const faIcon = "fa " + (isFavorite ? "fa-heart" : "fa-heart-o");

    const title = story.title == null ? "" : story.title.substr(0, story.title.lastIndexOf("-") - 1);

    let formattedDate = null;
    if (story.publishedAt != null) {
        formattedDate = story.publishedAt.substr(0, story.publishedAt.indexOf("T"));
    }

    let articleInfo = story.source.name;
    if (formattedDate != null) {
        articleInfo += ' · ' + formattedDate;
    }

    return (
        <Card imageUrl={story.urlToImage}>
            <h5>{title}</h5>
            <div className="text-muted">{articleInfo}</div>
            <p className="mt-1">{story.description}</p>
            <div>
                <a href={story.url} target="_blank" rel="noopener noreferrer">Continue reading</a>
                <div className="pull-right">
                    <FaIconButton faIcon={faIcon} callbackFunction={() => addRemoveStoryFromFavorites()}/>
                </div>
            </div>
        </Card>
    );
}