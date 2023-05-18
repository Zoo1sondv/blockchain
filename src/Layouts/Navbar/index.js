import { useContext, useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

import logo from '../../Assests/Images/logo_mini.png';
import { AuthContext } from "../../Services/Contexts/AuthContext";

const Header = () => {
  const {authState, connectWallet, logout}  = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isAuthenticated = authState.isAuthenticated;
  const role = authState.stakeholder.role;
  const style = {
    authButton: {
      fontWeight: 'bolder',
      color: '#fff',
    },
    authText: {
      color: '#fff',
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  const roleNavLinks = () => {
    switch(role) {
      case 'admin':
        return (
          <>
          <NavItem>
            <NavLink to="/admin/verify/farmer" className="nav-link">Xác minh nông dân</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/admin/verify/manufacturer" className="nav-link">Xác minh nhà sản xuất</NavLink>
          </NavItem>
          </>
        )
      case 'farmer':
        return (
          <>
          <NavItem>
            <NavLink to={`/farmers/${authState.stakeholder.id}`} className="nav-link">Hồ sơ</NavLink>
          </NavItem>
          </>
        )
      case 'manufacturer':
        return (
          <>
          <NavItem>
            <NavLink to={`/manufacturers/${authState.stakeholder.id}`} className="nav-link">Hồ sơ</NavLink>
          </NavItem>
          </>
        )
      case 'new': 
        return (
          <>
          <NavItem>
            <NavLink to="register" className="nav-link">Đăng ký</NavLink>
          </NavItem>
          </>
        )
      default:
        return (
          <>
          <NavItem>
            <NavLink to="profile" className="nav-link">Hồ sơ</NavLink>
          </NavItem>
          </>
        )
    }
  }

  return (
    <Navbar 
      color="warning"
      className="d-flex align-items-center justify-content-center"
      expand='md' 
      dark
    >
      <NavbarBrand>
        <img src={logo} />
        <span className="fw-bold ms-2">
          Truy xuất nguồn gốc thực phẩm
        </span>
      </NavbarBrand>
      <NavbarToggler onClick={toggleNav} >
        {isNavOpen?
          <i className="fa fa-times"></i>
        :
          <i className="fa fa-bars"></i>
        }
      </NavbarToggler>
      <Collapse navbar isOpen={isNavOpen}>
        <Nav className="mx-auto" navbar >
          { isAuthenticated?
            <>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Trang chủ
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/products">
                Sản phẩm
              </NavLink>
            </NavItem>
            { roleNavLinks() }
            </>
          :
            ""
          }
        </Nav>
        <Nav className="ms-auto" navbar>
          { isAuthenticated?
            <>
            <NavbarText style={style.authText}>
              <div className="d-flex flex-column justify-content-center align-items-center me-3">

              <div>
                Khóa công khai
              </div>
              <div>
                {authState.formattedAddress} &nbsp;
              </div>
              </div>

            </NavbarText>
            <NavItem>
              <NavbarText type="button" onClick={logout} style={style.authButton}>
                <i className="fa fa-sign-out fa-lg"/>Đăng Xuất
              </NavbarText>
            </NavItem>
            </>
          :
            <>
            <NavItem>
              <NavbarText type="button" onClick={connectWallet} style={style.authButton}>
              <i className="fa fa-sign-in fa-lg"/> Đăng Nhập
              </NavbarText>
            </NavItem>
            </>
          }
        </Nav>
      </Collapse>
    </Navbar>
  )
}
export default Header;