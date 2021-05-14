import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import HelpIcon from "@material-ui/icons/Help";
import SettingsIcon from "@material-ui/icons/Settings";
import "../Footer.css";
function Footer() {
  return (
    <Container style={{ lineHeight: 2.5 }}>
      <Row>
        <img
          draggable="false"
          className="img_footer"
          src="https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg"
          alt=""
        />
      </Row>
      <Row className="border-top h-100">
        <Col xs={2}>
          <Row>
            <ul>
              <li> About </li>
              <li> Community Guidelines </li>
              <li> Privacys & Terms </li>
              <li> Sales Solutions </li>
              <li> Safety Center </li>
            </ul>
            <span>LinkedIn Corporation © 2021</span>
          </Row>
        </Col>
        <Col xs={2}>
          <ul>
            <li> Accessibility </li>
            <li> Careers </li>
            <li> Ad choices </li>
            <li> Mobile </li>
          </ul>
        </Col>
        <Col xs={2}>
          <ul>
            <li> Talent Solutions </li>
            <li> Marketing Solutions </li>
            <li> Advertising </li>
            <li> Small Business </li>
          </ul>
        </Col>
        <Col xs={3}>
          <div>
            <div className="icon_position">
              <HelpIcon style={{ backgroundColor: "#F3F2EF" }} />
              <h6> Questions?</h6>
            </div>
            <small
              style={{ position: "absolute", marginLeft: 25, marginTop: -11 }}
            >
              Visit our Help Center.
            </small>
          </div>
          <div>
            <div className="icon_position">
              <SettingsIcon style={{ backgroundColor: "#F3F2EF" }} />
              <h6>Manage your account and privacy</h6>
              <small
                style={{ position: "absolute", marginLeft: 25, marginTop: 35 }}
              >
                Go to your Settings.
              </small>
            </div>
          </div>
        </Col>
        <Col xs={3}>
          <span class="custom-dropdown big">
            <h6>Select Language</h6>
            <select className="select_lang">
              <option value="ar_AE" lang="ar-ae">
                العربية (Arabic)
              </option>
              <option value="cs_CZ" lang="cs-cz">
                Čeština (Czech)
              </option>
              <option value="da_DK" lang="da-dk">
                Dansk (Danish)
              </option>
              <option value="de_DE" lang="de-de">
                Deutsch (German)
              </option>
              <option value="en_US" lang="en-us">
                English (English)
              </option>
              <option value="es_ES" lang="es-es">
                Español (Spanish)
              </option>
              <option value="fr_FR" lang="fr-fr">
                Français (French)
              </option>
              <option value="in_ID" lang="in-id">
                Bahasa Indonesia (Bahasa Indonesia)
              </option>
              <option value="it_IT" lang="it-it">
                Italiano (Italian)
              </option>
              <option value="ja_JP" lang="ja-jp">
                日本語 (Japanese)
              </option>
              <option value="ko_KR" lang="ko-kr">
                한국어 (Korean)
              </option>
              <option value="ms_MY" lang="ms-my">
                Bahasa Malaysia (Malay)
              </option>
              <option value="nl_NL" lang="nl-nl">
                Nederlands (Dutch)
              </option>
              <option value="no_NO" lang="no-no">
                Norsk (Norwegian)
              </option>
              <option value="pl_PL" lang="pl-pl">
                Polski (Polish)
              </option>
              <option value="pt_BR" lang="pt-br">
                Português (Portuguese)
              </option>
              <option value="ro_RO" lang="ro-ro">
                Română (Romanian)
              </option>
              <option value="ru_RU" lang="ru-ru">
                Русский (Russian)
              </option>
              <option value="sv_SE" lang="sv-se">
                Svenska (Swedish)
              </option>
              <option value="th_TH" lang="th-th">
                ภาษาไทย (Thai)
              </option>
              <option value="tl_PH" lang="tl-ph">
                Tagalog (Tagalog)
              </option>
              <option value="tr_TR" lang="tr-tr">
                Türkçe (Turkish)
              </option>
              <option value="zh_CN" lang="zh-cn">
                简体中文 (Chinese (Simplified))
              </option>
              <option value="zh_TW" lang="zh-tw">
                正體中文 (Chinese (Traditional))
              </option>
            </select>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
