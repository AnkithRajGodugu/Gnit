import React, { useState } from 'react';
import './gni.css'; // Assuming this is your CSS file
import './gni.js'; // Assuming you have a way to use this script
import './script.js'; // Assuming you have a way to use this script
import gni from './assets/gni.jpg';

const BetEPortalLogin = () => {
    const [eventTarget, setEventTarget] = useState('');
    const [eventArgument, setEventArgument] = useState('');
    const [viewState] = useState('/wEPDwUKLTMwMTg5NjI5NA9kFgICAw9kFgICBQ8PFgIeB1Zpc2libGVoZGRk3NzjTXNr6MWK6keYDwFvkQOHCN3pgnclhsIWtVZa72A=');
    const [viewStateGenerator] = useState('C2EE9ABB');
    const [eventValidation] = useState('/wEdAAQ+ZAijWwobpdkaS453+BYUELYayygIrYKbL/Dx4x5DdMr/oJFE+eOmI+wQrfEPHbtpOCqQ5ELEfO+O75msrGKk1c67welzekFDbrMW7P/UUB2uFsnNz/liWJ2aCzqsxRg=');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', { eventTarget, eventArgument });
        __doPostBack(eventTarget, eventArgument);
    };

    const __doPostBack = (target, argument) => {
        setEventTarget(target);
        setEventArgument(argument);
    };

    return (
        <div className="Body" style={{ padding: 0, margin: 0 }}>
            <form method="post" action="./Login.aspx" id="form1" onSubmit={handleSubmit}>
                <div className="aspNetHidden">
                    <input type="hidden" name="__EVENTTARGET" value={eventTarget} />
                    <input type="hidden" name="__EVENTARGUMENT" value={eventArgument} />
                    <input type="hidden" name="__VIEWSTATE" value={viewState} />
                </div>
                <div className="aspNetHidden">
                    <input type="hidden" name="__VIEWSTATEGENERATOR" value={viewStateGenerator} />
                    <input type="hidden" name="__EVENTVALIDATION" value={eventValidation} />
                </div>

                <div style={{ textAlign: 'center', width: '100%', height: '100%' }}>
                    <table className="TopHeader">
                        <tbody>
                            <tr>
                                <td colSpan="2"></td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr style={{ height: '120px' }}>
                                <td colSpan="3" style={{ boxShadow: '0px 10px 5px -4px rgba(0,0,0,0.36)', paddingBottom: '10px' }}>
                                    <table style={{ marginLeft: '150px' }}>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img id="Image2" src={gni} style={{ height: '160px', width: '1000px' }} alt="Logo" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr style={{ height: '462px' }}>
                                <td style={{ verticalAlign: 'top', width: '269px' }}></td>
                                <td style={{ width: '1080px' }}>
                                    <div id="cssmenu">
                                        <ul>
                                            <li className="has-sub active">
                                                <a id="lnkLogins" href="#!" onClick={() => __doPostBack('lnkLogins', '')}>Logins</a>
                                                <ul style={{ display: 'block' }}>
                                                    <li className="even"></li>
                                                    <li className="odd">
                                                        <a id="lnkStaff" href="#!" onClick={() => __doPostBack('lnkStaff', '')}>Staff Login</a>
                                                    </li>
                                                    <li className="even">
                                                        <a id="lnkStudent" href="#!" onClick={() => __doPostBack('lnkStudent', '')}>Student Login</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td style={{ textAlign: 'center' }}>
                                                    <table style={{ marginLeft: '210px', marginTop: '-90px' }}>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span id="lblMainWarning" className="MessageLabelRed" style={{ fontSize: 'Medium' }}></span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="Footer">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <span id="lblfutr" style={{ color: 'White', fontFamily: 'Arial' }}>
                                        Copyrights © 2015. &nbsp; All Rights Reserved BeeS Software Solutions Pvt.Ltd &nbsp;
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
};

export default BetEPortalLogin;