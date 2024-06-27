import React, { useState } from "react";
import Confetti from "react-confetti";
import toast from "react-hot-toast";
import { useUserDataContext } from "../Context/UserContext";
import { Reclaim } from "@reclaimprotocol/js-sdk";
import QRCode from "react-qr-code";
const ReclaimVerification = () => {
  const { confetti, setConfetti } = useUserDataContext();
  const [url, setUrl] = useState("");
  const getVerificationReq = async () => {
    const APP_ID = process.env.REACT_APP_APP_ID;
    const reclaimClient = new Reclaim.ProofRequest(APP_ID);
    const providerIds = [
      "97f4e2db-e301-4cda-886b-6c14cc26314e", // Price Mis Match
    ];

    await reclaimClient.buildProofRequest(providerIds[0]);

    const APP_SECRET = process.env.REACT_APP_APP_SECRET;
    reclaimClient.setSignature(
      await reclaimClient.generateSignature(APP_SECRET)
    );
    const { requestUrl, statusUrl } =
      await reclaimClient.createVerificationRequest();
    await reclaimClient.startSession({
      onSuccessCallback: (proof) => {
        console.log("Verification success", proof);
        // Your business logic here
        console.log(proof, "Proof");
      },
      onFailureCallback: (error) => {
        console.error("Verification failed", error);
        // Your business logic here to handle the error
      },
    });
    setUrl(requestUrl);
  };

  const verifiedIssueFromReclaim = async () => {
    let id = toast.loading("Creating Verification Request...");
    try {
      await getVerificationReq();
      toast.success("Verification Request Created Successfully", { id });
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 5000);
    } catch (error) {
      toast.error("Error in Creating Verification Request", { id });
    }
  };

  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <>
      {confetti && <Confetti width={width} height={height} />}
      <div className="flex items-center justify-center flex-col p-12 h-[100vh] bg-[#141622]">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Verify Issue from Reclaim
        </h2>
        <p className="mb-0 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          <span className="text-yellow-400">Why Reclaim </span>? Reclaim allows
          your users <br /> to bring their data from any website to yours
        </p>
        <div>
          {url && (
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
              <a href="#">
                <div class="w-full flex justify-center items-center p-8">
                  <QRCode value={url} />
                </div>
              </a>
            </div>
          )}
        </div>
        <div className="mt-4 flex w-1/3 justify-between mb-10">
          <button className="bg-[#6A64F1] text-white px-4 py-2 rounded-md mt-4">
            <a href="https://dev.reclaimprotocol.org/devtoolv2" target="_blank">
              Make your Provider
            </a>
          </button>
          <button
            onClick={verifiedIssueFromReclaim}
            className="bg-red-400 text-white px-4 py-2 rounded-md mt-4"
          >
            Let's Verfiy Issue first from
          </button>
        </div>
      </div>
    </>
  );
};

export default ReclaimVerification;
