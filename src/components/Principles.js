import React from "react";
import "./Principles.css";

export default function Principles() {
    return (
        <>
            <div className="principles-part">
                <div className="writte red-col">
                    <div className="quote">
                        <p className="quote-text">
                            Všechny uvedené recepty zvládne zrealizovat
                            i&nbsp;tvoje máma, která nikdy nic nepekla. Stačí ji
                            podpořit a&nbsp;dodat odvahu na zkoušení nových
                            věcí.
                        </p>
                    </div>
                </div>
                <div className="principles">
                    <div className="ingrediences">
                        <img
                            src="svg/fruit.svg "
                            alt="kakaove boby"
                            className="round-image"
                        />
                        <p>
                            Mezi nejpoužívanější suroviny patří čokoláda, mouka,
                            cukr, mléčné výrobky a&nbsp;ovoce. Potřebné
                            ingredience se liší v&nbsp;závislosti na druhu
                            dezertu.
                        </p>
                        <p>
                            Používané suroviny jsou dostupné v&nbsp;běžném
                            obchodě. Jediná problémová položka je čerstvé ovoce
                            v&nbsp;zimním období, které lze nahradit marmeládou,
                            oříšky nebo čokoládou.
                        </p>
                    </div>
                    <div className="tech">
                        <img
                            src="svg/kMix.svg"
                            alt="Kenwood Kmix"
                            className="round-image"
                        />
                        <p>
                            Není potřeba žádné speciální náčiní, stačí mísa
                            a&nbsp;šikovné ruce. Práci si lze příjemně usnadnit
                            kuchyňským robotem. Místo robota můžete použít
                            i&nbsp;ruční mixér nebo ruce.
                        </p>
                        <p>
                            Nejčastěji používaná forma má průměr 16&nbsp;cm.
                            Velikost je vhodná na ochudnaní větších kousků pro
                            4&nbsp;osoby. Osobně se mi osvědčily ráfky ve
                            spojení s&nbsp;pečícím papírem, protože je není
                            potřeba vysypat a&nbsp;upečený korpus lze snadno
                            vyklopit. V&nbsp;případě, že formu nevlastníte
                            použijte třeba hrnec.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src="svg/vse.svg "
                        alt="Deers and cake"
                        className="deer-image"
                    />
                </div>
            </div>
        </>
    );
}
