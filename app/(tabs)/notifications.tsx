import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Bell, UserCheck, CircleAlert as AlertCircle, CircleCheck as CheckCircle2 } from 'lucide-react-native';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'partner',
      title: 'New Partner Joined',
      message: 'John Doe has joined as a pickup partner',
      time: '2 minutes ago',
    },
    {
      id: 2,
      type: 'order',
      title: 'Order Completed',
      message: 'Order #1234 has been completed by Mike Johnson',
      time: '15 minutes ago',
    },
    {
      id: 3,
      type: 'wallet',
      title: 'Low Balance Alert',
      message: 'Your wallet balance is below ₹1,000',
      time: '1 hour ago',
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'partner':
        return <UserCheck size={24} color="#0066ff" />;
      case 'order':
        return <CheckCircle2 size={24} color="#00b894" />;
      case 'wallet':
        return <AlertCircle size={24} color="#ff7675" />;
      default:
        return <Bell size={24} color="#666666" />;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>

      <View style={styles.notificationsList}>
        {notifications.map(notification => (
          <View key={notification.id} style={styles.notificationItem}>
            <View style={styles.notificationIcon}>
              {getNotificationIcon(notification.type)}
            </View>
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>{notification.title}</Text>
              <Text style={styles.notificationMessage}>{notification.message}</Text>
              <Text style={styles.notificationTime}>{notification.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  notificationsList: {
    padding: 16,
    gap: 12,
  },
  notificationItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  notificationIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#f8f9fa',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999999',
  },
});