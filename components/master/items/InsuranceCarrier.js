import Axios from "axios";
import { useEffect, useState } from "react";
import AddInsuranceCarrier from "./AddInsuranceCarrier";
import InsuranceCarrierList from "./InsuranceCarrierList";

const InsuranceCarrier = () => {
    const [info, setInfo] = useState(false);
    const [insuranceList, setInsuranceList] = useState([]);

    useEffect(() => {
        getClinics();
    }, []);

    const getClinics = async () => {
        const url = "/api/insurrance";
        const response = await Axios.get(url);
        setInsuranceList(response.data.message);
    };

    const changeAddUser = () => {
        setInfo(!info);
    };

    return (
        <section className="container">
            <h3>LISTA DE ENTIDADES</h3>
            <InsuranceCarrierList
                insuranceList={insuranceList}
                setInsuranceList={setInsuranceList}
            />
            <button onClick={changeAddUser}>Agregar Entidad</button>
            {info ? (
                <AddInsuranceCarrier
                    changeAddUser={changeAddUser}
                    setInsuranceList={setInsuranceList}
                    insuranceList={insuranceList}
                />
            ) : null}

            <style jsx>{`
                section {
                    align-self: center;
                    display: grid;
                    justify-items: center;
                }

                button {
                    background-color: var(--mainColor);
                    color: white;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    outline: none;
                    cursor: pointer;
                }

                h3 {
                    color: var(--mainColor);
                }
            `}</style>
        </section>
    );
};

export default InsuranceCarrier;
