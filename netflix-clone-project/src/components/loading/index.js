import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading';

export default function Loading({ src, ...restProps}) {
    return (
        <Spinner {...restProps}>
            <LockBody />
            <Picture src={require(`/home/nirmala/code/nirmalaluwang74/netflix-clone-project/src/images/users/${src}.png`).default} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}