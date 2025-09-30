// 1. `astro:content`からユーティリティをインポート
import { z, defineCollection } from 'astro:content';

// 2. コレクションを定義
const waveCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    num: z.number(),
    pairName: z.string().optional(),
    pairPath: z.string().optional(),
  }),
});

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
    num: z.number(),
    siteUrl: z.string(),
    githubUrl: z.string(),
    icon: z.string(),
    themeColor: z.string().default('#3f48ff88'),
    themeDark: z.boolean().default(false)
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
//    このキーは、"src/content"のコレクションのディレクトリ名と一致する必要があります。
export const collections = {
  'policy': policyCollection,
  'framework': frameworkCollection,
  'wave': waveCollection,
};