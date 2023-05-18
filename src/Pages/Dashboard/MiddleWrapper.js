import Carousel from "react-multi-carousel";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import img_traceability from '../../Assests/Images/dashboard/traceability.jpg';
import img_tradeability from '../../Assests/Images/dashboard/tradeability.jpg';
import img_reputation_system from '../../Assests/Images/dashboard/reputation_system.jpg';

const MiddleWrapper = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const features = [
    {
      image: img_traceability,
      title: "Truy xuất nguồn gốc",
      description: "Cơ chế truy xuất nguồn gốc sản phẩm, chuỗi phân phối. Điều này giúp đảm bảo rằng sản phẩm được an toàn và bảo mật."
    },
    {
      image: img_tradeability,
      title: "Khả năng giao dịch",
      description: "Cơ chế giao dịch sản phẩm theo một chiều với các bên liên quan khác. Điều này giúp đảm bảo rằng sản phẩm là bản gốc, duy nhất và đã được xác thực."
    },
    {
      image: img_reputation_system,
      title: "Đánh giá sản phẩm",
      description: `Cơ chế cho phép người dùng đánh giá sản phẩm và không thể thay đổi đánh giá bởi các bên liên quan để tạo niềm tin cho những người tiêu dùng.`
    }
  ]
  return (
    <div className="middle-wrapper">
      <h5 className="mw-heading" >
        Luôn <b>"Vì Người Tiêu Dùng"</b> mọi thông tin sản phẩm từ đầu đến cuối đều được hỗ trợ bởi blockchain
      </h5>
      <Carousel responsive={responsive}>
        {features.map((feature, index) => (
          <Card className="border-0" key={index} >
            <CardImg
              src = {feature.image}
              height = "300px"
            />
            <CardBody>
              <CardTitle tag="h5" className="text-center text-uppercase mw-heading">
                {feature.title}
              </CardTitle>
              <span className="mw-sub-heading">
                {feature.description}
              </span>
            </CardBody>
          </Card>
        ))}
      </Carousel>
      <hr/>
    </div>
  )
}
export default MiddleWrapper;