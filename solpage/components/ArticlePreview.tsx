import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../style/ArticlePreviewStyle';
import { ArticlePreview as ArticlePreviewType } from '../types/article';

interface ArticlePreviewProps {
    article: ArticlePreviewType;
}

function formatAddress(address: string) {
    if (address.length < 10) return address;
    return address.slice(0, 4) + '...' + address.slice(-4);
}

function formatTime(time: string) {
    // 简单格式化，实际可用dayjs等库
    const date = new Date(time);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString().slice(0, 5);
}

export const ArticlePreview: React.FC<ArticlePreviewProps> = ({ article }) => {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/article/${article.address}`);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.container} activeOpacity={0.85}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{article.authorAddress[0]?.toUpperCase()}</Text>
                </View>
                <Text style={styles.address}>{formatAddress(article.authorAddress)}</Text>
                <Text style={styles.time}>{formatTime(article.createdAt)}</Text>
            </View>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.summary} numberOfLines={2}>{article.summary}</Text>
            <Text style={styles.paidCount}>已付费人数：{article.paidCount}</Text>
        </TouchableOpacity>
    );
}; 