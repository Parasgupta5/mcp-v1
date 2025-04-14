import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { UserPlus, User } from 'lucide-react-native';

export default function Partners() {
  const partners = [
    { id: 1, name: 'John Doe', status: 'Active', orders: 156, rating: 4.8 },
    { id: 2, name: 'Jane Smith', status: 'Active', orders: 142, rating: 4.9 },
    { id: 3, name: 'Mike Johnson', status: 'Inactive', orders: 98, rating: 4.5 },
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <UserPlus size={24} color="#ffffff" />
        <Text style={styles.addButtonText}>Add New Partner</Text>
      </TouchableOpacity>

      <View style={styles.partnersList}>
        {partners.map(partner => (
          <TouchableOpacity key={partner.id} style={styles.partnerCard}>
            <View style={styles.partnerHeader}>
              <View style={styles.partnerIcon}>
                <User size={24} color="#0066ff" />
              </View>
              <View style={styles.partnerInfo}>
                <Text style={styles.partnerName}>{partner.name}</Text>
                <View style={[
                  styles.statusBadge,
                  { backgroundColor: partner.status === 'Active' ? '#e6f2ff' : '#f8f9fa' }
                ]}>
                  <Text style={[
                    styles.statusText,
                    { color: partner.status === 'Active' ? '#0066ff' : '#666666' }
                  ]}>{partner.status}</Text>
                </View>
              </View>
            </View>
            <View style={styles.partnerStats}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{partner.orders}</Text>
                <Text style={styles.statLabel}>Orders</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{partner.rating}</Text>
                <Text style={styles.statLabel}>Rating</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0066ff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  partnersList: {
    padding: 16,
    gap: 16,
  },
  partnerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  partnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  partnerIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#e6f2ff',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  partnerInfo: {
    flex: 1,
  },
  partnerName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  partnerStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingTop: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
});