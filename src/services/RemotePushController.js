import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token);
      }, // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification); // process the notification here
        // PushNotification.localNotification({
        //   autoCancel: true,
        //   bigText: notification.title,
        //   subText: notification.body,
        //   title: notification.title,
        //   message: notification.body,
        //   vibrate: true,
        //   vibration: 300,
        //   playSound: true,
        //   soundName: 'default',
        //   actions: '["Reply", "Mark as read"]',
        // });
      },
      // Android only: GCM or FCM Sender ID
      senderID: '565495989859',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};

export default RemotePushController;
