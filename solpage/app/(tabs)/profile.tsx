import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ArticleList } from '../../components/ArticleList';
import { ArticlePreview } from '../../components/ArticlePreview';
import { readPaid, getArticle } from '../../utils/solRPC';
import { Article } from '../../types/article';
import styles from '../../style/ProfileStyle';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
    const [userAddress, setUserAddress] = React.useState<string>('0xA1B2C3D4E5F6G7H8I9J0');
    const [paidArticles, setPaidArticles] = React.useState<Article[]>([]);
    const [activeTab, setActiveTab] = React.useState('articles'); // 'articles' | 'collected' | 'liked'

    React.useEffect(() => {
        const loadArticles = async () => {
            const paidAddresses = await readPaid(userAddress);
            const articlePromises = paidAddresses.map(async (address) => {
                const article = await getArticle(address);
                return {
                    address,
                    ...article,
                };
            });
            const loadedArticles = await Promise.all(articlePromises);
            setPaidArticles(loadedArticles);
        };
        loadArticles();
    }, [userAddress]);

    const formatAddress = (address: string) => {
        return address.slice(0, 6) + '...' + address.slice(-4);
    };

    const renderTab = (tabId: string, label: string) => (
        <TouchableOpacity
            onPress={() => setActiveTab(tabId)}
            style={[styles.tab, activeTab === tabId ? styles.tabActive : styles.tabInactive]}
        >
            <Text style={[
                styles.tabText,
                activeTab === tabId ? styles.tabTextActive : styles.tabTextInactive
            ]}>
                {label}
            </Text>
        </TouchableOpacity>
    );

    const renderHeader = () => (
        <>
            <View style={styles.header}>
                <View style={styles.userInfoContainer}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>{userAddress[2]?.toUpperCase()}</Text>
                    </View>
                    <View style={styles.userInfo}>
                        <Text style={styles.userAddress}>{formatAddress(userAddress)}</Text>
                    </View>
                    <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="wallet-outline" size={16} color="#333" />
                        <Text style={styles.buttonText}>wallet</Text>
                    </TouchableOpacity>
                </View>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{paidArticles.length}</Text>
                        <Text style={styles.statLabel}>paid</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>0</Text>
                        <Text style={styles.statLabel}>income</Text>
                    </View>
                </View>

            </View>

            <View style={styles.tabContainer}>
            {renderTab('articles', 'Paid articles')}
            {renderTab('articles', 'My articles')}
            </View>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            {activeTab === 'articles' && (
                <FlatList
                    data={paidArticles}
                    renderItem={({ item }) => (
                        <ArticlePreview article={item} />
                    )}
                    keyExtractor={(item) => item.address}
                    ListHeaderComponent={renderHeader}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
} 