import React, {useContext} from "react";
import { Context } from "../contex.js";

function PopUp(state) {
    const {dispatch} = useContext(Context);
    const classLists = (state.popUp === 'win') ? 'pop-up pop-up_active' : 'pop-up';
    return (
        <div className={classLists}>
            <div className="pop-up__wrapper">
                <h2 className="pop-up__title">victory!</h2>
                <button className="pop-up__btn" onClick={() =>
                {
                    dispatch({
                        type: 'restart',
                        payload: -1
                    });
                    state = 'play';
                }}>restart</button>
            </div>
        </div>
    );
}

export default PopUp;