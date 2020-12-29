import React, {cloneElement} from "react";
const componente = (propos) => {
    return (
        <div>
            {
                propos.children.map((child, idx) => {
                    return cloneElement(child, {...propos, key: idx})
                })
            }
        </div>
    );
};
export default componente;