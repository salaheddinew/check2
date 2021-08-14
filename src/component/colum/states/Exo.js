// import React, { Component } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// export default class Exo extends Component {
//   state = {
//     Solde: 0,
//     Montant: 0,
//     Virement: 0,
//     Telephone: 0,
//   };
//   render() {
//     return (
//       <div>
//         <h2>Bienvenue dans l'espace Client de votre banque</h2>
//         <p>
//           votre solde est de : <span>{this.state.Solde}</span>
//         </p>
//         <div>
//           <p>Recharger votre compte</p>
//           <input
//             placeholder="Montant"
//             value={this.state.Montant}
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value)))
//                 this.setState({
//                   Montant: parseFloat(e.target.value),
//                 });
//             }}
//           />
//           <button
//             onClick={() => {
//               this.setState({
//                 Solde: this.state.Montant + this.state.Solde,
//                 Montant: "",
//               });
//               toast("Done");
//             }}
//           >
//             recharge
//           </button>
//         </div>
//         <div>
//           <p>Virement</p>
//           <input
//             value={this.state.Virement}
//             placeholder="Montant"
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value)))
//                 this.setState({
//                   Virement: parseFloat(e.target.value),
//                 });
//             }}
//           />
//           <button
//             onClick={() => {
//               this.setState({
//                 Solde: this.state.Solde - this.state.Virement,
//                 Virement: "",
//               });
//               toast("Done");
//             }}
//           >
//             recharge
//           </button>
//         </div>
//         <div>
//           <p>Recharge télephone</p>
//           <input
//             value={this.state.Telephone}
//             placeholder="Montant"
//             onChange={(e) => {
//               this.setState({
//                 Telephone: parseFloat(e.target.value),
//               });
//             }}
//           />
//           <button
//             onClick={() => {
//               this.setState({
//                 Solde: this.state.Solde - this.state.Telephone,
//                 Telephone: "",
//               });
//               toast("Done");
//             }}
//           >
//             recharge
//           </button>
//         </div>
//         <ToastContainer position="top-right" />
//       </div>
//     );
//   }
// }

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Exo = () => {
  const [solde, setsolde] = useState(0);
  const [Virement, setVirement] = useState(0);
  const [Telephone, setTelephone] = useState(0);
  return (
    <div>
      <h3>
        votre solde et de : <span>{solde}</span>
      </h3>
      <div>
        <h4>rechargement</h4>
        <input
          value={Virement}
          onChange={(e) => {
            if (!Number.isNaN(parseFloat(e.target.value))) {
              setVirement(parseFloat(e.target.value));
            }
          }}
        ></input>
        <button
          onClick={() => {
            setsolde(solde - Virement);
            setVirement("");
            toast("Done");
          }}
        >
          Montent
        </button>
      </div>
      <div>
        <h4>rechargement Credit</h4>
        <input
          value={Telephone}
          onChange={(e) => {
            if (!Number.isNaN(parseFloat(e.target.value))) {
              setTelephone(parseFloat(e.target.value));
            }
          }}
        ></input>
        <button
          onClick={() => {
            setsolde(solde - Telephone);
            setTelephone("");
            toast("Rechargement Effectue");
          }}
        >
          Recharge
        </button>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Exo;
