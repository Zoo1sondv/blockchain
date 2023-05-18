import { useContext, useState, useEffect } from "react";

import { AuthContext } from "../../Services/Contexts/AuthContext";
import { ContractContext } from "../../Services/Contexts/ContractContext";
import Toast from '../Toast';
import '../../Assests/Styles/card.css';
import farmer_default from '../../Assests/Images/farmer_default.jpg';
import { fetchFarmer } from "../../Services/Utils/stakeholder";

const FarmerCard = ({id, farmerObject}) => {
  const {authState} = useContext(AuthContext);
  const {contractState} = useContext(ContractContext);
  const role = authState.stakeholder.role;
  const [farmer, setFarmer] = useState({
    id: "00000",
    name: "",
    location: "",
    rawProducts: [],
  });

  useEffect(() => {
    if(farmerObject){
      setFarmer(farmerObject);
    }
    else if(contractState.farmerContract){
      (async() => {
        setFarmer(await fetchFarmer(authState.address, contractState.farmerContract, id));
      })();
    }
  }, [farmerObject])

  const verify = async () => {
    try{
      await contractState.farmerContract.methods.verify(id).send({from: authState.address});
      setFarmer(farmer => {
        return {
          ...farmer,
          isVerified: true
        }
      })
      Toast("success", "Nông dân đã xác minh thành công");
    } catch(e){
      Toast("error", e.message);
    }
  }

  return (
    <div className="col-12 col-lg-6 my-1">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-12 col-md-4">
          <img 
            src={farmer_default}
            width="100%"
          />
        </div>
        <div className="col-12 col-md-8">
          <span className="card-key">Khóa công khai: {farmer.formattedAddress}</span>
          <br/>
          <span className="card-key">Tên nông dân: </span>
          <span className="card-value">{farmer.name}</span>
          <br/>
          <span className="card-key">Địa chỉ: </span>
          <span className="card-value">{farmer.location}</span>
          <br/>
          <span className="card-key">Sản phẩm thô: </span>
          {farmer.rawProducts.map(rawProduct => (
            <span className="card-value">{rawProduct+", "}</span>
          ))}
          <br/>
          <span className="">
            <span className="card-key"> Xác minh: </span>
            {farmer.isVerified?
              <span className="">
                <span className="badge bg-success">Đã xác minh</span>
              </span>
            :
              <span className="">
                <span className="badge bg-warning">Chưa xác minh</span>
                {role === "admin"?
                  <span>
                    {` ==> `}
                    <span 
                      className="badge bg-dark mx-1 cursor-pointer text-hover-primary" 
                      type="button"
                      onClick={verify}
                    >
                      <i class="fa fa-certificate"/>
                      Xác minh
                    </span>
                  </span>
                : "" }
              </span>
            }
          </span>
        </div>
      </div>
      <hr/>
    </div>
  )
}
export default FarmerCard;