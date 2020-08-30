import React, { useContext } from "react";
import { Context } from "../contex.js";

function Tile({ id, color, state }) {
    const { dispatch } = useContext(Context);
    function handleState() {
        switch (state) {
            case "open":
            case "opening":
            case "opened":
                return "board__item board__item_active";
            case "remove":
            case "removed":
                return "board__item board__item_remove";
        }
        return "board__item";
    }

    function handleStyle() {
        if (state === "opening" || state === "opened" || state === "close")
            return color;
        return "";
    }

    return (
        <li
            style={{ background: handleStyle() }}
            className={handleState()}
            onClick={() =>
                dispatch({
                    type: "open",
                    payload: id
                })
            }
        ></li>
    );
}

export default Tile;
