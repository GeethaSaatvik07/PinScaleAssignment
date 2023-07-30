import {
  ProfileInfoLabelAndBar,
  ProfileLabel,
  ProfileBar,
  ProfileBarData,
} from "./styledComponents";

const ProfileInfoLabels = (props) => {
  const { label, info } = props;
  //   let information = null;
  //   if (info === undefined) {
  //     information = "NA";
  //   } else {
  //     information = info;
  //   }
  return (
    <ProfileInfoLabelAndBar>
      <ProfileLabel>{label}</ProfileLabel>
      <ProfileBar>
        <ProfileBarData>{info}</ProfileBarData>
      </ProfileBar>
    </ProfileInfoLabelAndBar>
  );
};

export default ProfileInfoLabels;
