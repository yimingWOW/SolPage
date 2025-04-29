import { useLocalSearchParams } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { getArticle } from '../../utils/solRPC';
import { ArticleDetail } from '../../components/ArticleDetail';
import { Article } from '../../types/article';

export const options = {
  headerShown: false,
};

export default function ArticleDetailScreen() {
  const { address } = useLocalSearchParams();
  const [article, setArticle] = React.useState<Article | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (typeof address === 'string') {
      getArticle(address).then((data) => {
        setArticle({ address, ...data });
        setLoading(false);
      });
    }
  }, [address]);

  if (loading || !article) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <ArticleDetail article={article} />;
}