import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../style/ArticleDetailStyle';

interface ArticleDetailProps {
    article: {
        authorAddress: string;
        title: string;
        content: string;
        paidCount: number;
    };
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{article.title}</Text>
            <View style={styles.meta}>
                <Text style={styles.author}>作者: {article.authorAddress}</Text>
                <Text style={styles.paidCount}>已付费人数: {article.paidCount}</Text>
            </View>
            <Text style={styles.content}>{article.content}</Text>
        </ScrollView>
    );
};

export const options = {
    headerShown: false,
}; 