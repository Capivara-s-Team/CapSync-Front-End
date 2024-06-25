<<<<<<< HEAD:src/components/cardforms/CardForms.styles.ts
import styled from "styled-components";

export const Container = styled.div`
  height: 600px;

  background: linear-gradient(180deg, #f86b01 0%, #f8c787 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  justify-content: space-evenly;

  padding: 56px 70px 48px;
  border-radius: 30px;

  .title {
    display: flex;
    flex-direction: column;
    gap: 14px;

    align-items: center;

    h1 {
      font-size: 36px;
      color: #000;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      color: white;

      width: 210px;
      margin: auto;

      text-align: center;

      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      padding-bottom: 8px;
    }
  }

  .theme-dark {
    background: linear-gradient(180deg, #f86b01 0%, #000000 100%);
  }
`;
=======
import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(180deg, #f86b01 0%, #f8c787 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  justify-content: space-evenly;
  gap: 28px;

  padding: 56px 70px 48px;
  min-width: 520px;
  border-radius: 30px;

  h1 {
    font-size: 36px;
    color: #000;
  }

  .theme-dark {
    background: linear-gradient(180deg, #f86b01 0%, #000000 100%);
  }
`;
>>>>>>> af6e35724e7aa3cc02020904bad6aaf42ff235ef:src/components/cardforms/CardForms.styles.tsx
