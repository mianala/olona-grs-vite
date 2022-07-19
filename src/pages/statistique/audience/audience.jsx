import AudienceHeader from "./aud-head"
import Actuelle from "./aud-actuelle"
import Potentiel from "./aud-potentiel"
import { useState } from "react";
const Audience = () => {
    const [view, setView] = useState("actuelle")
    const changeView = (new_view) => () => {
        setView(new_view)
    }
    return (
        <>
            <AudienceHeader view={view} changeView={changeView}/>
            {view === "actuelle" ? <Actuelle/> : <Potentiel/>}
        </>
    );
}
export default Audience