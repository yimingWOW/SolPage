import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { ArticleList } from '../../components/ArticleList';
import { readRank, getArticle } from '../../utils/solRPC';
import { Article } from '../../types/article';

export default function HotScreen() {
    const [articles, setArticles] = React.useState<Article[]>([]);

    React.useEffect(() => {
        const loadArticles = async () => {
            const rankAddresses = await readRank();
            const articlePromises = rankAddresses.map(async (address) => {
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
            <ArticleList
                articles={articles}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
}); 