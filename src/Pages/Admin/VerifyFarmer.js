import { useContext, useEffect, useState } from "react";
import { ContractContext } from "../../Services/Contexts/ContractContext";
import '../../Assests/Styles/verify.page.css';
import FarmerCard from "../../Components/Cards/FarmerCard";

const VerifyFarmer = () => {
  const {contractState} = useContext(ContractContext);
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    (async() => {
      if(contractState.farmerContract){
        setAddresses(await contractState.farmerContract.methods.getAddresses().call());
      }
    })();
  }, [contractState.farmerContract])
  return (
    <div className="verify">
      <div className="fs-1 fw-bold text-center">Xác minh nông dân</div>
      <div className="row">
        {addresses.map(address => (
          <FarmerCard id = {address} />
        ))}
      </div>
    </div>
  )
}
export default VerifyFarmer;