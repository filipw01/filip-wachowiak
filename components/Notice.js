import React from "react";

export default function Notice({ className }) {
  return (
    <div className={`flex md:flex-row flex-col items-start mb-10 ${className}`}>
      <img
        src="/images/exclamation.svg"
        alt=""
        className="w-12 mx-auto mb-4 md:w-10 md:mr-2 md:ml-0"
      />
      <p>
        Please note, that from <b>September 2020 to May 2021</b> I will be
        available around 20 hours a week because I will be trying to reconcile
        school with work. Therefore most of my work will happen during evenings
        (UTC+1/+2) in that period. I will try to be as flexible as it is needed
        to attend different meetings and there will be no problem communicating
        with me during school day via text message or email.
      </p>
    </div>
  );
}
