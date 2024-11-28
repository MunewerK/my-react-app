import { useState } from 'react';
let realMulti = 1;

export function getMulti() {
    return realMulti;
}

export default function Upgrades() {
    const upgrades = [{ id: 1, name: "+1 count multi", type: "addition", multi: 1}, { id: 2, name: "+5 count multi", type: "addition", multi: 5}, { id: 3, name: "+25 count multi", type: "addition", multi: 25}, { id: 4, name: "+100 count multi", type: "addition", multi: 100}, { id: 5, name: "+250 count multi", type: "addition", multi: 250}, { id: 6, name: "+1000 count multi", type: "addition", multi: 1000}, { id: 7, name: "+2500 count multi", type: "addition", multi: 2500}];
    const [multi, setMulti] = useState(1);

    function multiTracker(countType, countMulti) {
        if (countType == "addition") {
            setMulti(multi + countMulti);
            realMulti = (multi + countMulti);
        }
    }

    return(
        <>
        <div className="upgrades">
            <div className="upg-labels">
                <label>Upgrades</label>
                <label>Count Multi: {multi}</label>
            </div>
            <div className="upgrade-btns">
                {upgrades.map(e => 
                    <button onClick={() => multiTracker(e.type, e.multi)} className="upg-btn" key={e.id}>{e.name}</button>
                )}
            </div>
        </div>
        </>
    );
}

