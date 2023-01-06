import { useCurrentUser } from "../store/store";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const transactionCondition = {
  waiting: "waiting",
  finished: "finished",
  expired: "expired",
};

async function updateCreditRecord(
  walletAddress = "",
  docID = "",
  status = transactionCondition.finished
) {
  return;
}

function PaymentStatus({ paymentID = "" }) {
  const userData = useCurrentUser();
  const addCredit = useCurrentUser((state) => state.addCredit);

  const [status, setStatus] = useState("waiting");
  const interval = useRef();
  const currentStatus = useRef("waiting");

  // check the status from fireDB instead of call to status there

  const data = JSON.stringify({
    // prettier-ignore
    "payment_id": paymentID,
  });

  const config = {
    method: "post",
    url: "/api/v1/status",
    headers: {
      auth: process.env.NEXT_PUBLIC_REQUEST,
      "Content-Type": "application/json",
    },
    data: data,
  };

  useEffect(() => {
    if (status === "finished") return;

    interval.current = setInterval(() => {
      axios(config).then((res) => {
        currentStatus.current = res.data.payment_status;
        if (currentStatus.current === transactionCondition.finished) {
          updateCreditRecord(
            userData.walletAddress,
            res.data.order_id,
            transactionCondition.finished
          ).then(() => {
            addCredit(thisPackage.credit);
            toastGreen(
              `Successfully Added ${thisPackage.credit} credits`,
              "TransactionComplete_NOWPayment"
            );
          });
        }

        if (currentStatus.current !== status) {
          setStatus(currentStatus.current);
          return clearInterval(interval.current);
        }
      });
    }, 30000);

    return () => clearInterval(interval.current);
  }, [status]);

  return (
    <span className="font-semibold text-green-500">
      {currentStatus.current}
    </span>
  );
}
