import "./assets/App.css";
import module from "./assets/App.module.css";
import "./assets/App.scss";
import styled from "styled-components";
const StyledDiv = styled.div`
  background-color: darkcyan;
  color: white;
  text-align: center;
  &:hover {
    background-color: cornflowerblue;
  }
  h1 {
    font-size: 24px;
    padding: 20px;
  }
`;

const App = () => {
  return (
    <>
      {/* 인라인 스타일 */}
      <div
        style={{
          color: "blue",
          backgroundColor: "black",
          textAlign: "center",
        }}
      >
        <h1>Inline Style</h1>
      </div>

      {/* CSS 파일 */}
      <div className="css-class-test">
        <h1 id="css-id-test">CSS File Style</h1>
      </div>

      {/* CSS 모듈화 */}
      <div className={module.moduleStyle}>
        <h1 id={module.moduleTest}>CSS Module Style</h1>
      </div>

      {/* SCSS */}
      <div className="scss-style">
        <h1>
          SCSS <span>Style</span>
        </h1>
      </div>

      {/* Styled Components */}
      <StyledDiv>
        <h1>Styled Components</h1>
      </StyledDiv>
    </>
  );
};

export default App;
