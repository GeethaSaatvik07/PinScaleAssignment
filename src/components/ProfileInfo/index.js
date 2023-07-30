import { Component } from "react";

import { ProfileInfoContainer } from "./styledComponents";

import ProfileInfoLabels from "../ProfileInfoLabels";

class ProfileInfo extends Component {
  state = { profileDetails: {} };

  componentDidMount() {
    this.getProfileDetails();
  }

  getProfileDetails = async () => {
    const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/profile";
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": 5,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    // console.log(data.users[0]);
    if (response.ok) {
      const dataObject = data.users[0];
      const newProfile = {
        id: dataObject.id,
        name: dataObject.name,
        email: dataObject.email,
        country: dataObject.country,
        dateOfBirth: dataObject.date_of_birth,
        city: dataObject.city,
        permanentAddress: dataObject.permanent_address,
        postalCode: dataObject.postal_code,
        presentAddress: dataObject.present_address,
      };
      //   console.log(newProfile);
      this.setState({ profileDetails: newProfile });
    } else {
      console.log(data);
    }
  };

  render() {
    const { profileDetails } = this.state;
    const {
      name,
      email,
      country,
      city,
      dateOfBirth,
      permanentAddress,
      postalCode,
      presentAddress,
    } = profileDetails;
    console.log(profileDetails);
    return (
      <ProfileInfoContainer>
        <ProfileInfoLabels label={"Your Name"} info={name} />
        <ProfileInfoLabels label={"User Name"} info={name} />
        <ProfileInfoLabels label={"Email"} info={email} />
        <ProfileInfoLabels label={"Password"} info={"**********"} />
        <ProfileInfoLabels label={"Date of Birth"} info={dateOfBirth} />
        <ProfileInfoLabels label={"Present Address"} info={presentAddress} />
        <ProfileInfoLabels
          label={"Permanent Address"}
          info={permanentAddress}
        />
        <ProfileInfoLabels label={"City"} info={city} />
        <ProfileInfoLabels label={"Postal Code"} info={postalCode} />
        <ProfileInfoLabels label={"Country"} info={country} />
      </ProfileInfoContainer>
    );
  }
}

export default ProfileInfo;
