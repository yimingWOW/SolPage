export type Article = {
    address: string;
    authorAddress: string;
    createdAt: string;
    title: string;
    summary: string;
    content: string;
    paidCount: number;
};

export type ArticlePreview = Omit<Article, 'content'>; 