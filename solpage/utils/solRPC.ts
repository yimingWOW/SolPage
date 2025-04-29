const mockArticles = [
  {
    address: '0xart1',
    authorAddress: '0xA1B2C3D4E5F6G7H8I9J0',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    title: 'Solana链上知识付费的未来',
    summary: '本文探讨了Solana链上知识付费的创新模式与未来发展趋势。',
    content: 'Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……Solana链上知识付费的未来将更加开放与高效，作者与读者之间的互动也会更加紧密……',
    paidCount: 23,
  },
  {
    address: '0xart2',
    authorAddress: '0xB2C3D4E5F6G7H8I9J0A1',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    title: 'Web3内容变现的最佳实践',
    summary: '如何在Web3世界中高效变现内容？本文为你详细解读。',
    content: 'Web3内容变现的方式多种多样，关键在于……',
    paidCount: 15,
  },
  {
    address: '0xart3',
    authorAddress: '0xC3D4E5F6G7H8I9J0A1B2',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    title: '区块链与知识经济的结合',
    summary: '区块链技术如何赋能知识经济？本文带你深入了解。',
    content: '区块链为知识经济带来了透明、可追溯和激励机制……',
    paidCount: 8,
  },
];

export const readRank = async (): Promise<string[]> => {
  // 返回热门文章地址
  return mockArticles.map(a => a.address);
};

export const readRecent = async (): Promise<string[]> => {
  // 返回最近新增文章地址
  return mockArticles.map(a => a.address);
};

export const readPaid = async (userAddress: string): Promise<string[]> => {
  // 返回已付费文章地址（mock为前两篇）
  return [mockArticles[0].address, mockArticles[1].address];
};

export const getArticle = async (articleAddress: string): Promise<{
  authorAddress: string;
  createdAt: string;
  title: string;
  summary: string;
  content: string;
  paidCount: number;
}> => {
  // 根据地址返回文章详情
  const found = mockArticles.find(a => a.address === articleAddress);
  if (found) {
    const { authorAddress, createdAt, title, summary, content, paidCount } = found;
    return { authorAddress, createdAt, title, summary, content, paidCount };
  }
  // 返回空数据
  return {
    authorAddress: '',
    createdAt: '',
    title: '',
    summary: '',
    content: '',
    paidCount: 0,
  };
};

export const payForRead = async (articleAddress: string): Promise<boolean> => {
  // mock 支付成功
  return true;
}; 