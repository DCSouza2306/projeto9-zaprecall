import BoasVindas from "./BoasVindas";
import GlobalStyle from "./GlobalStyle";
import ZapMain from "./ZapMain";
import { useState } from "react";

export default function App() {
    const [habilitaRecall, setHabilitaRecall] = useState(false);
    return (
        <>
            <BoasVindas setHabilitaRecall={setHabilitaRecall} />
            <ZapMain habilitaRecall={habilitaRecall} />
            <GlobalStyle />
        </>

    )
}





