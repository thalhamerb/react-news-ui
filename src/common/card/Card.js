import React, {Suspense} from 'react';

function Card(props) {

    return (
        <div className="col-md-6 row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
                {props.children}
            </div>
            <Suspense fallback={<div>loading...</div>}>
                {props.imageUrl ?
                    <div className="col-auto d-none d-lg-block">
                        <img src={props.imageUrl} alt="card" width="200" height="250" style={{objectFit: "cover"}}/>
                    </div>
                    :
                    null
                }
            </Suspense>
        </div>
    );
}

export default Card;