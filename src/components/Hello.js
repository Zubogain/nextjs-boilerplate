import { setHello } from "@/actions/hello";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Hello = ({title = ""}) => {
    const helloState = useSelector(({hello}) => hello);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h3>{title}</h3>
            <p>{helloState.text}</p>
            <input
            defaultValue={helloState.text}
            onChange={(event) => {
                dispatch(setHello(event.currentTarget.value))

            }}
            />
        </React.Fragment>
    )
}

export default Hello;