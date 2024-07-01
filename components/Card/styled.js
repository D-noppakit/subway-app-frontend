import styled from 'styled-components';

export const Container = styled.div`
  .span-checkout-enter {
    opacity: 0;
    margin-top: -${({ height }) => height}px;
  }
  .span-checkout-enter-active {
    opacity: 1;
    margin-top: 0;
    transition: opacity 300ms, margin-top 300ms;
  }
  .span-checkout-exit {
    opacity: 1;
  }
  .span-checkout-exit-active {
    opacity: 0;
    margin-top: -${({ height }) => height}px;
    transition: opacity 300ms, margin-top 300ms;
  }
`;