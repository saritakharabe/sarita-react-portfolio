import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import saritaResume from "../../assets/resume/saritaResume.pdf";

export default function Resume() {
  return (
    <section className="section bg-secondary">
      <div className="container">
      <a
        href={saritaResume}
        download="saritaResume.pdf"
        className="downloadButton"
      >
        <button type="button" className="btn btn-outline-dark btn-secondary">
          <FontAwesomeIcon icon={faCloudArrowDown} /> Download resume
        </button>
      </a>
      <embed src={saritaResume} type="application/pdf" width="100%" height="1100px" />
      </div>
    </section>
  );
}
