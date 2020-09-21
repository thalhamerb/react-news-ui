import React from 'react';

export default function CardList({cardArray}) {

    const chunkData = (cardArray) => {
        let i, j, cardRows = [], chunk = 2;
        for (i = 0, j = cardArray.length; i < j; i += chunk) {
            cardRows.push(cardArray.slice(i, i + chunk));
        }
        return cardRows;
    }

    return (
        chunkData(cardArray).map((cardRows) =>
            <div className="row mb-2">
                {cardRows}
            </div>
        )
    );
}
