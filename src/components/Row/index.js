import React from "react";


function Row({ children }) {
    return (
        
        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-margin-small uk-grid-small uk-padding-remove" uk-grid>
            <div>
                <div className="uk-margin">{children}</div>
            </div>
        </div>
    );
}
// <div className="uk-grid-small uk-child-width-expand@s uk-text-center">{children}</div>
export default Row;