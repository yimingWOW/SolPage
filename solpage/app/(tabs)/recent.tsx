import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ArticleList } from '../../components/ArticleList';
import { readRecent, getArticle } from '../../utils/solRPC';
import { Article } from '../../types/article';

export default function RecentScreen() {
    const [articles, setArticles] = React.useState<Article[]>([]);

    React.useEffect(() => {
        const loadArticles = async () => {
            const recentAddresses = await readRecent();
            const articlePromises = recentAddresses.map(async (address) => {
                const article = await getArticle(address);
                return {
                    address,
                    ...article,
                };
            });
            const loadedArticles = await Promise.all(articlePromises);
            setArticles(loadedArticles);
        };
        loadArticles();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ArticleList articles={articles} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
}); 