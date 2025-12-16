/**
 * 地形数据
 id: 地形id
 name: 地形名称
 image: 地形图片
 features: 地形描述，为特定词条添加[[]]可以自动创建跳转链接
 */

const terrainData = [
    {
        id: 'test_island',
        name: '测试地形',
        image: 'images/terrain_island.png',
        features: [
            '特色：岛上遍布[[八角玄冰丛]]',
            '进入方式：通过特殊传送门或击杀特定怪掉落钥匙',
            '生物：岛上居住着[[测试boss]]'
        ]
    },
];