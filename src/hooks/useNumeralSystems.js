import { useState } from "react";

function loadUserPreferences() {
    let result = {
        maya: true,
        babylonian: true,
        greek: true,
        roman: true,
        inca: true,
        chinese: true,
        egyptian: true
    };

    const cookieArr = document.cookie.split(";");
    
    for (const cookieIndex in cookieArr) {
        const cookie = cookieArr[cookieIndex].split("=");

        if (cookie[0].trim() == "numeralSystems") {
            result = JSON.parse(decodeURIComponent(cookie[1]));
        }
    }

    return result;
}


const useNumeralSystems = () => {
    const [numeralSystems, setNumeralSystems] = useState(loadUserPreferences());

    const setNumeralSystemsCookie = (sys) => {
        setNumeralSystems(sys);
        document.cookie = "numeralSystems=" + JSON.stringify(sys) + "; SameSite=Lax";
    }

    return [numeralSystems, setNumeralSystemsCookie];
};

export default useNumeralSystems;