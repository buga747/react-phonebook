import { RotatingTriangles } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => (
  <Wrapper>
    <RotatingTriangles
      visible={true}
      height="100"
      width="100 "
      ariaLabel="rotating-triangels-loading"
      wrapperStyle={{}}
      wrapperClass="rotating-triangels-wrapper"
    />
  </Wrapper>
);
