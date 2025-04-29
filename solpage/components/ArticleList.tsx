import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ArticlePreview } from './ArticlePreview';
import styles from '../style/ArticleListStyle';
import { Article } from '../types/article';

interface ArticleListProps {
    title?: string;
    articles: Article[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ title, articles }) => {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList
                style={styles.list}
                data={articles}
                renderItem={({ item }) => (
                    <ArticlePreview
                        article={item}
                    />
                )}
                keyExtractor={(item) => item.address}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}; 