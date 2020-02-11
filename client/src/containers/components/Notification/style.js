const styles = {
    NotificationItem: {
        DefaultStyle: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '4px',
            fontSize: '14px',
        },

        success: {
            borderTop: 0,
            backgroundColor: '#45b649',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0,
        },

        error: {
            borderTop: 0,
            backgroundColor: '#f85032',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0,
        },

        warning: {
            borderTop: 0,
            backgroundColor: '#ffd700',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0,
        },
        info: {
            borderTop: 0,
            background: 'linear-gradient(to right, #6a82fb, #fc5c7d)',
            WebkitBoxShadow: 0,
            MozBoxShadow: 0,
            boxShadow: 0,
        },
    },

    Title: {
        DefaultStyle: {
            margin: 0,
            padding: 0,
            paddingRight: 5,
            color: '#fff',
            display: 'inline-flex',
            fontSize: 20,
            fontWeight: 'bold',
            // left: '15px',
            // position: 'absolute',
            // top: '50%',
        },
    },

    MessageWrapper: {
        DefaultStyle: {
            display: 'block',
            color: '#fff',
            width: '100%',
        },
    },

    Dismiss: {
        DefaultStyle: {
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'inherit',
            fontSize: 20,
            color: '#f2f2f2',
            position: 'relative',
            margin: 0,
            padding: 0,
            background: 'none',
            borderRadius: 0,
            opacity: 1,
            width: 20,
            height: 20,
            textAlign: 'initial',
            float: 'none',
            top: 'unset',
            right: 'unset',
            lineHeight: 'inherit',
        },
    },


};

export default styles;