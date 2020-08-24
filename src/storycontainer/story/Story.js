import React, {Suspense} from 'react';
import StoryInfo from "./StoryInfo";

const StoryImage = React.lazy(() => import('./StoryImage'));

export default function Story({item}) {

    return (
        <div className="col-md-6">
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <StoryInfo item={item} />
                <Suspense fallback={<div>loading...</div>}>
                    <StoryImage imageUrl={item.urlToImage}/>
                </Suspense>
            </div>
        </div>
    );
}