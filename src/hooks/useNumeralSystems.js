import { useState } from "react";

function loadUserPreferences() {
    const defaultRes = {
        maya: true,
        babylonian: true,
        greek: true,
        roman: true,
        inca: true,
        chinese: true,
        egyptian: true
    };

    const storedSystems = localStorage.getItem("numeralSystems");

    return storedSystems ? JSON.parse(storedSystems) : defaultRes;
}


const useNumeralSystems = () => {
    const [numeralSystems, setNumeralSystems] = useState(loadUserPreferences());

    const setStoredNumeralSystems = (sys) => {
        setNumeralSystems(sys);
        localStorage.setItem("numeralSystems", JSON.stringify(sys));
    }

    return [numeralSystems, setStoredNumeralSystems];
};

export default useNumeralSystems;