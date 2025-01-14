import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const InsuranceCarrierList = ({ insuranceList, setInsuranceList }) => {
    const deleteInsuranse = (RUC) => {
        Swal.fire({
            title: "Seguro que quieres eliminar la aseguradora?",
            showCancelButton: true,
            confirmButtonText: `Eliminar`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                const url = `/api/insurrance?RUC=${RUC}`;
                const result = await axios.delete(url);
                console.log(result);
                setInsuranceList(
                    insuranceList.filter((ins) => ins.RUC !== RUC)
                );
                Swal.fire(
                    "Aseguradora eliminada",
                    result.data.message,
                    "success"
                );
            }
        });
    };

    return (
        <div className="container">
            <p>Nombre</p>
            <p>email</p>
            <p>opcion</p>

            <div className="linea"></div>
            <div className="content">
                {insuranceList.map((item) => (
                    <>
                        <span>{item.name}</span>
                        <span>{item.businessMail}</span>
                        <button
                            onClick={() => {
                                deleteInsuranse(item.RUC);
                            }}
                        >
                            Eliminar
                        </button>
                    </>
                ))}
            </div>

            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-gap: 0.5rem 1rem;
                    padding: 0.5rem;
                }

                .content {
                    grid-column: 1/4;
                    display: grid;
                    grid-gap: 0.5rem 1rem;
                    grid-template-columns: 1fr 1fr 1fr;
                    max-height: 250px;
                    overflow: auto;
                }

                .linea {
                    grid-column: 1/4;
                    background-color: var(--puntoRojo);
                    width: 100%;
                    height: 2px;
                    margin: 10px 0;
                }

                p {
                    text-align: center;
                    color: var(--mainColor);
                    font-weight: bold;
                }

                button {
                    border: none;
                    background-color: var(--mainColor);
                    color: white;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default InsuranceCarrierList;
