import React, {useEffect, useRef} from 'react';
import NotificationSystem from 'react-notification-system';
import {connect} from "react-redux";
import {MdVerifiedUser} from 'react-icons/md'

import style from './style';

const NotificationContainer = ({icon, message, level}) => {

    const icons = {
        verifiedUser: <MdVerifiedUser/>
    };

    const notificationSystem = useRef();

    useEffect(() => {
        const notification = notificationSystem.current;
        notification.addNotification({title: icons[icon], message, level});
    }, [icon, message, level, icons]);

    return (<NotificationSystem ref={notificationSystem} style={style}/>);
};

const mapStateToProps = state => ({
    message: state.notificationReducer.message,
    level: state.notificationReducer.level,
    icon: state.notificationReducer.icon
});

export default connect(mapStateToProps, null)(NotificationContainer);


