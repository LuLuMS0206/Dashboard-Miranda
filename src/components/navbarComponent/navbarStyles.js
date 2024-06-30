import styled from "styled-components";

export const NavbarStyles = styled.nav`
     
`;

export const ImgLogoStyles = styled.img`
  width: 20%;
  margin-right: 1rem;
`;

export const MenuLeftStyles = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 16rem;
  height: 100%;
  top: 0px;
  left: 0px;
  box-shadow: black -5px 5px 10px;
  z-index: 2;
  user-select: none;
  transition: transform 0.2s ease-in-out 0s;
  transform: none;
  padding: 1rem;
`;

export const TravelStyles = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const HotelStyles = styled.p`
  font-size: 0.75rem;
  color: #5d5449;
`;

export const LogoContentStyles = styled.div`
  display: flex;
  align-items: center;
`;

export const UlStyles = styled.ul`
  list-style: none;
  margin-top: 3rem;
  color: #799283;
`;

export const LiStyles = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #E23428;
    }

    &.active {
      color: #E23428;
    }
  }
`;

export const PLiStyles = styled.p`
  margin-left: 1rem;
`;

export const FooterStyles = styled.form`
  text-align: center;
  margin-top: 0.8rem;
`;

export const UserStyles = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 30px;
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
`;

export const DivLeftStyles = styled.div`

  transition: flex 0.2s ease-in-out;
`;

export const MainContentStyles = styled.div`

  transition: margin-left 0.2s ease-in-out;
  margin-top: 8rem;
  padding-left: ${(props) => (props.isOpen ? "18rem" : "2rem")};

`;

export const IconStyles = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const PStyles = styled.p`
  font-weight: 600;
  margin-left: 2rem;
`;

export const NavbarTopStyles = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  right: 0px;
  height: 90px;
  padding: 2rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 3px 10px;
  z-index: 1;
  transition: padding-left 0.2s ease-in-out;
  padding-left: ${(props) => (props.isOpen ? "18rem" : "2rem")};
`;

export const DashboarStyles = styled.div`
  display: flex;
`;

export const PhotoStyles = styled.img`
  width: 40%;
`;

export const NameStyles = styled.p`
  font-size: 0.9375rem;
  font-weight: bold;
`;

export const EmailStyles = styled.p`
  color: rgb(136, 136, 136);
  font-size: 0.75rem;
`;


export const TravelFooterStyles = styled.p`
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0rem;
  color: rgb(59, 59, 59);
  margin-bottom: 0.2rem;
`;

export const CopyFooterStyles = styled.p`
  color: rgb(121, 146, 131);
  font-size: 0.75rem;
  margin-bottom: 2rem;
`;

export const MadebyFooterStyles = styled.p`
  color: rgb(121, 146, 131);
  font-size: 0.8125rem;
`;