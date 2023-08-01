import { Component } from "react";
import { withRouter } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import Popup from "reactjs-popup";
import Cookies from "js-cookie";

import {
  AccountProfileCard,
  ProfileNameAndEmail,
  ProfileNameAndLogout,
  ProfileName,
  ProfileEmail,
  ProfileAvatar,
  //   ProfileLogoutIcon,
  PopupBackground,
} from "./styledComponents";

import LogoutPopup from "../LogoutPopup";

class SideNavbarAccountProfile extends Component {
  state = { name: "", email: "" };

  componentDidMount() {
    this.getAccountNameAndEmail();
  }

  getAccountNameAndEmail = async () => {
    const userId = Cookies.get("user_id");
    const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/profile";
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // console.log(data.users[0]);
    if (response.ok) {
      const name = data.users[0].name;
      const email = data.users[0].email;
      //   console.log(name, email);
      this.setState({ name: name, email: email });
    } else {
      console.log(data);
    }
  };

  render() {
    const { name, email } = this.state;
    return (
      <AccountProfileCard>
        <ProfileAvatar
          src="https://www.figma.com/file/U75zTaCvoQJUPT9FOaA3Dj/image/44a76820ebfeb685ad35aeed987e25b0b1da6864"
          alt="profile-avatar"
        />
        <ProfileNameAndEmail>
          <ProfileNameAndLogout>
            <ProfileName>{name}</ProfileName>
            {/* <ProfileLogoutIcon> */}
            <Popup modal trigger={<MdLogout />}>
              {(close) => (
                <PopupBackground>
                  <LogoutPopup close={close} />
                </PopupBackground>
              )}
            </Popup>
            {/* </ProfileLogoutIcon> */}
          </ProfileNameAndLogout>
          <ProfileEmail>{email}</ProfileEmail>
        </ProfileNameAndEmail>
      </AccountProfileCard>
    );
  }
}

export default withRouter(SideNavbarAccountProfile);

// {/* <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//               >
//                 <path
//                   d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5
//               2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217
//               3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001
//               2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998
//               17.5 5.09987 17.5 6.5 17.5H7.5"
//                   stroke="#718EBF"
//                   stroke-width="1.5"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg> */}
