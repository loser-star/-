import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 80px;
  border-bottom: 1px solid #aaa;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  h1 {
    margin: 0;
    font-size: 20px;
  }
  .left {
    display: flex;
    a {
      /* 取消 */
      text-decoration: none;
      padding: 0 5px;
    }
  }
`;
