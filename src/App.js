import {React, useState} from "react";
import { useTranslation } from "react-i18next";

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

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Set the Web Page Title
    document.title = t("title");

    return (
        <>
            <Nav t={t} changeLanguage={changeLanguage} />
            <Footer t={t} />
        </>
    );
}