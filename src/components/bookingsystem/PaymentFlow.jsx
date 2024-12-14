import { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Caesar_Dressing } from "next/font/google";

const ceasarDressing = Caesar_Dressing({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const PaymentForm = ({ formAction, router }) => {
  const [timeLeft, setTimeLeft] = useState(60 * 5 * 1000); // math is mathing
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  useEffect(() => {
    if (timeLeft <= 0) {
      alert("Tiden er udløbet. du bliver stillet tilbage til billetsiden.");
      formAction(null);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, router]);

  const mins = Math.floor(timeLeft / 1000 / 60);
  const secs = Math.floor((timeLeft / 1000) % 60);

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <>
      <div className=" border border-gray-600 p-4 sm:p-8 rounded-lg bg-gradient-to-tl from-customBlack_2 to-customBlack m-4">
      <p className="bg-gradient-to-bl from-customPink text-white to-customOrange w-full text-center text-xl sm:text-2xl font-bold">
        {mins} : {String(secs).padStart(2, "0")}
      </p>
        <h2
          className={`${ceasarDressing.className} text-2xl sm:text-3xl my-4 text-left`}
        >
          BETALINGSKORT
        </h2>

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center p-4 sm:p-8 gap-4">
          <div className="flex-shrink-0">
            <Cards
              number={state.number}
              expiry={state.expiry}
              cvc={state.cvc}
              name={state.name}
              focused={state.focus}
            />
          </div>
          <form
            action="kortOplysninger"
            className="flex flex-col items-center sm:items-start gap-4 w-full sm:w-auto"
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="kortnummer" className="font-bold text-md">
                Kortnummer
              </label>
              <input
                className="p-2 rounded-md w-full text-black border-2 focus:ring focus:ring-customRed"
                name="number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
                placeholder="1234 1234 1234 1234"
                type="number"
              />
              <label htmlFor="kortHolder" className="font-bold text-md">
                Kortholder
              </label>
              <input
                className="p-2 rounded-md w-full text-black border-2 focus:ring focus:ring-customRed"
                name="name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
                placeholder="Kortholder Navn"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2 w-full sm:flex-row sm:gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="udløbsdato" className="font-bold text-md">
                  Udløbsdato
                </label>
                <input
                  className="p-2 rounded-md w-full text-black border-2 focus:ring focus:ring-customRed"
                  name="expiry"
                  value={state.expiry}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                  placeholder="MM/ÅÅ"
                  type="text"
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="Kontrolcifre" className="font-bold text-md">
                  CVC
                </label>
                <input
                  className="p-2 rounded-md w-full text-black border-2 focus:ring focus:ring-customRed"
                  name="cvc"
                  value={state.cvc}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                  placeholder="CVC"
                  type="number"
                />
              </div>
            </div>
            <button
              formAction={formAction}
              className="font-bold px-8 py-2 my-8 text-xl bg-gradient-to-bl from-customPink text-white to-customOrange w-full sm:w-auto"
            >
              Afslut & Betal
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
