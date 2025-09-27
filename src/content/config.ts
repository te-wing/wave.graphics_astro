// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from 'astro:content';

// 2. コレクションを定義
const policyCollection = defineCollection({
  type: 'content', // v2.5.0以降
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.date(),
  }),
});

const frameworkCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
//    このキーは、"src/content"のコレクションのディレクトリ名と一致する必要があります。
export const collections = {
  'policy': policyCollection,
  'framework': frameworkCollection,
};