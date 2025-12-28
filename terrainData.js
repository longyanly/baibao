/**
 * 地形数据
 id: 地形id
 name: 地形名称
 image: 地形图片
 features: 地形描述，为特定词条添加[[]]可以自动创建跳转链接
 */

const terrainData = [
    {
        id: 'moon_statue_terrain',
        name: '月亮雕像地形',
        image: 'img/moon_statue_terrain.png',
        features: [
            '地皮类型：蓝蘑菇林地皮',
            '生成位置：地下世界',
            '中心雕像：[[月食雕像珍品]]位于布局中心',
            '周围装饰：16个蓝蘑菇围绕雕像一圈',
            '其他装饰：高蘑菇树、洞穴花',
            '连接方式：连接到地下世界主区域',
            '光照效果：雕像有紫色微光'
        ],
        hasDetail: true
    },
    {
        id: 'sun_statue_terrain',
        name: '太阳雕像地形',
        image: 'img/sun_statue_terrain.png',
        features: [
            '地皮类型：卵石路地皮',
            '生成位置：主世界连接到主大陆',
            '中心雕像：[[太阳雕像珍品]]位于布局中心',
            '特殊彩蛋：步行手杖（左侧）、猪皮头盔（右侧）、木甲（下方）'
        ],
        hasDetail: true
    },
];
