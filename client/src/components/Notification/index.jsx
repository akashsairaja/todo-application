import React from "react";
import NotificationSystem from "react-notification-system";
import { connect } from "react-redux";
import { MdVerifiedUser } from "react-icons/md";

import style from "./style";

const mapStateToProps = (state) => ({
  message: state.notificationReducer.message,
  level: state.notificationReducer.level,
  icon: state.notificationReducer.icon,
  id: state.notificationReducer.id,
});

const NotificationContainer = ({ icon, message, level, id }) => {
  const notificationSystem = React.useRef();

  // 🕺 add More icons if you needed
  const icons = {
    verifiedUser: <MdVerifiedUser />,
  };

  React.useEffect(() => {
    const notification = notificationSystem.current;
    notification.addNotification({
      title: icons[icon],
      message,
      level,
      key: id,
    });
  },[]);

  return <NotificationSystem ref={notificationSystem} style={style} />;
};

export default connect(mapStateToProps, null)(NotificationContainer);
