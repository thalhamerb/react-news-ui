import React, {Suspense} from 'react';
import StoryInfo from "./StoryInfo";

const StoryImage = React.lazy(() => import('./StoryImage'));

function Story(props) {


    return (
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <StoryInfo item={props.item} />
                <Suspense fallback={<div>loading...</div>}>
                    <StoryImage image={props.item.urlToImage}/>
                </Suspense>

            </div>
        </div>
    );
}

export default Story;