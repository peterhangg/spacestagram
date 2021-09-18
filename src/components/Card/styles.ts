import styled from 'styled-components';

export const CardStyles = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 4px 0px #cfd8dc;
`;

export const CardImageStyles = styled.img`
  width: 100%;
  height: 100%;
  max-height: 600px;
  min-height: 400px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProfileIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border: coral 1px solid;
  border-radius: 50%;
  margin-right: 6px;
`;

export const ProfileIcon = styled.img`
  height: 90%;
  width: 90%;
`;

export const HeaderUser = styled.h4`
  display: inline-block;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ContentContainer = styled.div`
  padding: 10px;
  text-align: left;
`;

export const ButtonContainer = styled(HeaderContainer)`
  padding: 5px;
`;

export const Button = styled.button`
  background-color: #ffffff;
  outline: none;
  border:none;
`;

export const PostTitle = styled.p`
  font-weight: bolder;
  margin: 0;
`;
