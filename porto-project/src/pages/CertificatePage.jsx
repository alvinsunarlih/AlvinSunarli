import React from "react";
import BoxSocial from "../components/commons/atoms/BoxSocial";
import HeroBanner from "../components/commons/molecules/HeroBanner";
const CertificatePage = () => {
  return (
    <section>
      <HeroBanner />
      <div className="mt-20">
        <h1 className="text-2xl font-bold mb-6 text-center"><u>My Certificates</u></h1>

        {/* Sertifikat 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src="/images/Certificate Achivment.jpg"
            alt="Certificate 1"
            className="w-full md:w-1/2 rounded shadow"
          />
          <p className="text-lg font-medium text-center md:text-left">
            Certificate of Achievement for Winning the National Competition in Informatics Engineering.
          </p>
        </div>

        {/* Sertifikat 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          <img
            src="/images/Certificate Teknik Informatika.jpg"
            alt="Certificate 2"
            className="w-full md:w-1/2 rounded shadow"
          />
          <p className="text-lg font-medium text-center md:text-left">
            Certificate of Winning The National Level Online Informatics Engineering Competition.
          </p>
        </div>
        <BoxSocial />
      </div>
    </section>
  );
};

export default CertificatePage;