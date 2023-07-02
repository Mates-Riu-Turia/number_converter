import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import useScript from "./hooks/useScript";
import useNumeralSystems from "./hooks/useNumeralSystems";

function Nav({ t, changeLanguage }) {
    const [state, setState] = useState(" " + t("chooseLang"));

    function changeLanguageCa() {
        changeLanguage("ca");
        setState(" CA");
    }

    function changeLanguageEs() {
        changeLanguage("es");
        setState(" ES");
    }

    function changeLanguageEn() {
        changeLanguage("en");
        setState(" EN")
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-1" />
                    {t("title")}
                </a>
                <div className="dropdown me-4">
                    <button className="btn btn-secondary dropdown-toggle rounded-pill" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-globe-americas"></i><span id="langSelector">{state}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageCa}>Valencià/Català</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageEs}>Castellano</button></li>
                        <li><button className="dropdown-item" type="button" onClick={changeLanguageEn}>English</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function NumberForm({ t, setAppState }) {
    return (
        <form id="numberForm" className="d-flex align-items-center position-absolute top-50 start-50 translate-middle w-75 h-50 bg-body-tertiary rounded-5 p-2">

            <button type="button" className="position-absolute top-0 end-0 m-3 btn btn-secondary" data-bs-toggle="modal" data-bs-target="#numeralSystemsModal">
                <i className="bi bi-gear" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title={t("numberForm.settings")}></i>
            </button>

            <h2 className="text-center mt-3">{t("numberForm.intro")}</h2>
            <input type="number" className="form-control"></input>
            <button type="submit" className="btn btn-success fixed-bottom mb-5" id="startButton">{t("numberForm.start")}</button>
        </form>
    );
}

function NumeralSystemsModal({ t, numeralSystems, setNumeralSystems }) {
    return (
        <div className="modal fade" id="numeralSystemsModal" tabIndex="-1" aria-labelledby="numeralSystemsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="numeralSystemsModalLabel">{t("numeralSystemsModal.title")}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h2>{t("numeralSystemsModal.ancient")}</h2>
                        <hr />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="maya" checked={numeralSystems.maya} onChange={() => setNumeralSystems({...numeralSystems, maya: !numeralSystems.maya})}/>
                            <label className="form-check-label" htmlFor="maya">{t("numeralSystemsModal.maya")}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="babylonian" checked={numeralSystems.babylonian} onChange={() => setNumeralSystems({...numeralSystems, babylonian: !numeralSystems.babylonian})}/>
                            <label className="form-check-label" htmlFor="babylonian">{t("numeralSystemsModal.babylonian")}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="greek" checked={numeralSystems.greek} onChange={() => setNumeralSystems({...numeralSystems, greek: !numeralSystems.greek})}/>
                            <label className="form-check-label" htmlFor="greek">{t("numeralSystemsModal.greek")}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="roman" checked={numeralSystems.roman} onChange={() => setNumeralSystems({...numeralSystems, roman: !numeralSystems.roman})}/>
                            <label className="form-check-label" htmlFor="roman">{t("numeralSystemsModal.roman")}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="inca" checked={numeralSystems.inca} onChange={() => setNumeralSystems({...numeralSystems, inca: !numeralSystems.inca})}/>
                            <label className="form-check-label" htmlFor="inca">{t("numeralSystemsModal.inca")}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="chinese" checked={numeralSystems.chinese} onChange={() => setNumeralSystems({...numeralSystems, chinese: !numeralSystems.chinese})}/>
                            <label className="form-check-label" htmlFor="chinese">{t("numeralSystemsModal.chinese")}</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="egyptian" checked={numeralSystems.egyptian} onChange={() => setNumeralSystems({...numeralSystems, egyptian: !numeralSystems.egyptian})}/>
                            <label className="form-check-label" htmlFor="egyptian">{t("numeralSystemsModal.egyptian")}</label>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{t("close")}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Footer({ t }) {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top fixed-bottom bg-body-tertiary">
            <p className="col-md-4 mb-1 ms-2 text-body-secondary">{t("orgName")}</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none me-3">
                <img src="favicon.ico" alt="Logo" width="30" height="24" className="align-text-top" />
            </a>
        </footer>
    );
}

export default function App() {
    const { t, i18n } = useTranslation();

     const [numeralSystems, setNumeralSystems] = useNumeralSystems();

    useScript("js/bootstrap_helper.js");

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    return (
        <>
            <Nav t={t} changeLanguage={changeLanguage} />
            <NumberForm t={t} />
            <NumeralSystemsModal t={t} numeralSystems={numeralSystems} setNumeralSystems={setNumeralSystems} />
            <Footer t={t} />
        </>
    );
}