import Popup from "reactjs-popup";

import {
  HeaderStyle,
  HeaderHeading,
  AddTransactionButton,
  AddTransactionContext,
  PopupBackground,
  //   PopupCloseButton,
} from "./styledComponents";

import AddTransactionPopup from "../AddTransactionPopup";

const Header = (props) => {
  const { heading } = props;
  return (
    <HeaderStyle>
      <HeaderHeading>{heading}</HeaderHeading>
      <Popup
        modal
        trigger={
          <AddTransactionButton type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.99984 4.16663V15.8333M4.1665 9.99996H15.8332"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <AddTransactionContext>Add Transaction</AddTransactionContext>
          </AddTransactionButton>
        }
      >
        {(close) => (
          <PopupBackground>
            <AddTransactionPopup close={close} />
          </PopupBackground>
        )}
      </Popup>
    </HeaderStyle>
  );
};

export default Header;

//   {/* <AddTransactionButton>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="20"
//       height="20"
//       viewBox="0 0 20 20"
//       fill="none"
//     >
//       <path
//         d="M9.99984 4.16663V15.8333M4.1665 9.99996H15.8332"
//         stroke="white"
//         stroke-width="1.5"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       />
//     </svg>
//     <AddTransactionContext>Add Transaction</AddTransactionContext>
//   </AddTransactionButton> */}

// {
/* {/* <div>
              <p>React is a popular and widely used programming language</p>
            </div> */
// }
// {
/* <PopupCloseButton type="button" onClick={() => close()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#718EBF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </PopupCloseButton> */
// }
