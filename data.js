/*
字段名,类型,描述,示例值
id:物品的唯一标识符。通常使用英文代码。例：'tc_chest'

name:物品的中文名称。例：'万物百宝'

category:物品所属的分类。 决定该物品卡片显示在哪个主区域。例：'architecture' (建筑)
category 允许的值 (必须为以下之一):
值,对应中文分类
'plants',植物
'architecture',建筑
'tools',工具
'weapons',武器
'cuisine',料理

recipe:物品的制作配方或掉落来源描述。如果配方中包含其他物品的名称，请使用 [[物品名称]] 格式包裹，程序会自动为其创建跳转链接。例：[[八角玄冰草]] × 3冰冻物品 × 1。

tech:制作该物品所需的科技站或科技等级。例：'暗影操控器（四本）'

features:物品的功能或详细特点列表(如果描述中包含其他物品的名称，使用 [[物品名称]] 格式包裹，程序会自动为其创建跳转链接)。

attributes:仅用于料理。 描述食物提供的详细属性增益（生命值、饥饿值、理智值）。,'+60血 / +150饱食 / +50San'


buff:仅用于料理。 在名称旁以红色标签显示的特殊效果名称。,'自动救援'

collaborative_item:【联动物品专用】 如果设置为 true，则在物品名称旁显示蓝色的 “联动物品” 标签。 true
 */
const itemData = [
    // ====================================================================
    // 核心建筑 (Architecture)
    // ====================================================================
    {
        id: 'tc_chest',
        name: '万物百宝',
        image:'img/tc_chest.png',
        category: 'architecture',
        recipe: '5活木 + 15木板 + 50金块',
        tech: '暗影操控器（四本）',
        features: [
            '超大存储空间：共160个存储位',
            '宝石功能：自动收集 (橙宝石) / 自动催熟 (蓝宝石) / 自动照料 (黄宝石) / 种田大师 (绿宝石) / 秒杀亮茄 (紫宝石)',
            '科技解锁功能：5个绝望石可解锁常用的高级科技'
        ],
        hasDetail: true
    },
    {
        id: 'tc_chest_portable',
        name: '星翼',
        image:'',
        category: 'architecture',
        recipe: '啜食者皮×4 + 废铁×2 + 玻璃碎片×5',
        tech: '炼金引擎（二本）',
        features: ['便携终端。远程控制全图百宝箱', '9格跨世界互通空间'],
        hasDetail: true
    },
    {
        id: 'bx_binxiang',
        name: '白熊冰箱',
        image:'',
        category: 'architecture',
        recipe: '金块×10 + 齿轮×5 + 石砖×5',
        tech: '炼金引擎（二本）',
        features: ['16格保鲜空间', '可升级无限堆叠', '可存特殊物品']
    },
    {
        id: 'zhei_foodsbox',
        name: '玉食盒',
        image:'',
        category: 'architecture',
        recipe: '盐晶 × 25 + 冰 × 25 + [[八角玄冰花]] × 10',
        tech: '击杀巨鹿掉落蓝图',
        features: ['12格便携食物容器 (3x4)', '默认 5% 反鲜速率 (可配置)']
    },
    {
        id: 'zhei_crystal_candle',
        name: '水晶蜡烛',
        image:'',
        category: 'architecture',
        recipe: '玻璃碎片 × 2 + 金块 × 3 + 石砖 × 1',
        tech: '炼金引擎（二本）',
        features: ['夜晚会自动点亮', '装饰性建筑']
    },
    
    // ====================================================================
    // 工具 (Tools)
    // ====================================================================
    {
        id: 'sealingwand_dream',
        name: '封印之杖',
        image:'',
        category: 'tools',
        recipe: '蓝月眼×2 + 鼹鼠×2 + 绿宝石×1',
        tech: '魔法科技（二本）',
        features: ['8种法术轮盘（收集/采集/灭火/种子复制等）', '移速+25%', '踏水穿墙']
    },
    {
        id: 'zhei_staff',
        name: '封印之杖2',
        image:'',
        category: 'tools',
        recipe: '紫宝石×1 + 金块×30 + 步行手杖×1',
        tech: '魔法科技（三本）',
        features: ['进阶法杖', '远程采集/种植', '范围照料(5x5)', '范围施肥(17x17)', '快速烹饪设置']
    },
    {
        id: 'zhei_wetgoop',
        name: '饭桶',
        image:'',
         category: 'tools',
        recipe: '食谱×1 + 木炭×5 + 莎草纸×1',
        tech: '炼金引擎（二本）',
        features: ['自动化烹饪。自动将容器内食材填入范围内的锅中']
    },
    {
        id: 'celestial_ark_amulet',
        name: '星槎护符',
        image:'',
        category: 'tools',
        recipe: '[[海琉璃]]×25 + 玻璃碎片×10 + 建造护符×2',
        tech: '远古科技（三本）',
        features: ['快速交互', '恒温', '制造减半', '可作为大厨锅具'],
        collaborative_item: true // 专属联动物品标记
    },
    {
        id: 'zhei_superpack',
        name: '百宝迁移装置',
        image:'',
        category: 'tools',
        recipe: '捆绑包装×1 + 金块×1 + 绳子×1',
        tech: '科学科技（二本）',
        features: ['超级打包', '右键打包[[万物百宝]]箱及其他建筑']
    },

    // ====================================================================
    // 武器 (Weapons)
    // ====================================================================
    {
        id: 'zhei_qianjisan',
        name: '千机伞',
        image:'',
        category: 'weapons',
        recipe: '蜘蛛丝×25 + [[猫屎咖啡]]×1 + 火腿球棒×1',
        tech: '暗影操控器（四本）',
        features: ['独特跳劈攻击', '随机伤害倍率(最高5倍)', '吸血效果']
    },
    {
        id: 'zhei_zishuijingdao',
        name: '紫水晶刀',
        image:'',
        category: 'weapons',
        recipe: '[[寒冰蛋糕]]×5 + 月亮玻璃×5 + 铥矿碎片×5',
        tech: '魔法科技（三本）',
        features: ['斩杀：直接处决血量<10%怪物', '耐久300，可用噩梦燃料修复']
    },
    {
        id: 'zhei_zishuijingjian',
        name: '紫水晶剑',
        image:'',
        category: 'weapons',
        recipe: '击杀坎普斯1%掉落',
        tech: '无',
        features: ['攻击带电', '月亮阵营伤害加成', '可用月熠/雷电修复']
    },
    {
        id: 'zhei_yushan',
        name: '羽扇',
        image:'',
        category: 'weapons',
        recipe: '一角鲸的角×1 + 蓝色羽毛×5',
        tech: '魔法科技（二本）',
        features: ['右键切换：旋风模式（攻击）/ 炸鱼模式（水中炸鱼+照料）']
    },

    // ====================================================================
    // 珍馐料理 (Cuisine)
    // ====================================================================
    {
        id: 'zhei_love_cake',
        name: '相思断肠糕',
        image:'',
        category: 'cuisine',
        recipe: '[[相思断肠花]] × 3 + (锅内其他填充物)',
        buff: '自动救援',
        attributes: '生命值：-10 / 饥饿值：+100 / 理智值：+100',
        features: ['食用后自动救援视野范围内（约45单位）最近死亡的队友']
    },
    {
        id: 'zhei_flaming_steak',
        name: '火焰牛排',
        image:'',
        category: 'cuisine',
        recipe: '大肉或熟大肉 × 1 + [[烈火杏娇疏花]] × 3',
        buff: '力量保持',
        attributes: '生命值：-5 / 饥饿值：+200 / 理智值：+100',
        features: ['沃尔夫冈专属：保持力量值不下降 (8分钟)']
    },
    {
        id: 'zhei_ice_palm',
        name: '八角玄冰棕',
        image:'',
        category: 'cuisine',
        recipe: '[[八角玄冰草]] × 3 + (锅内其他填充物)',
        buff: '幸运冰冻',
        attributes: '+60血 / +150饱食 / +50San',
        features: ['攻击30%概率冰冻敌人 (3分钟)']
    },
    {
        id: 'zhei_pudding',
        name: '凤凰布丁',
        image:'',
        category: 'cuisine',
        recipe: '[[鸡冠凤凰葵花]] × 3 + (锅内其他填充物)',
        buff: '睡眠免疫',
        attributes: '+50血 / +120饱食 / +30San',
        features: ['免疫睡眠 (4分钟)', '清除昏睡状态']
    },
    {
        id: 'zhei_kopiluwak',
        name: '猫屎咖啡',
        image:'',
        category: 'cuisine',
        recipe: '咖啡豆 × 2 + 怪物肉 × 1 + 蜂蜜 × 1',
        buff: '移速Buff',
        attributes: '+3血 / +10饱食 / +15San',
        features: ['移速提升80% (4分钟)', '用于合成[[千机伞]]']
    },
    {
        id: 'zhei_ice_cake',
        name: '寒冰蛋糕',
        image:'',
        category: 'cuisine',
        recipe: '冰 × 4 + (锅内其他填充物)',
        buff: '降温',
        attributes: '+60血 / +80饱食 / +40San',
        features: ['用于合成[[紫水晶刀]]']
    },
    {
        id: 'zhei_potato',
        name: '酸辣土豆丝',
        image:'',
        category: 'cuisine',
        recipe: '土豆 × 1 + 辣椒 × 1 + (锅内其他填充物)',
        buff: '大力士专属',
        attributes: '+20血 / +30饱食 / +80San',
        features: ['沃尔夫冈专属：额外60%食物收益 (永久)']
    },
    {
        id: 'zhei_choc',
        name: '巧克力',
        image:'',
        category: 'cuisine',
        recipe: '可可豆 × 3 + 蜂蜜 × 1',
        buff: '素食Buff',
        attributes: '+60血 / +75饱食 / +33San',
        features: ['允许薇格弗德食用素食 (4分钟)']
    },
    {
        id: 'zhei_crayfish',
        name: '麻辣小龙虾',
        image:'',
        category: 'cuisine',
        recipe: '小龙虾 × 2 + 辣椒 × 1 + (锅内其他填充物)',
        buff: '大乱斗Buff',
        attributes: '+25血 / +10饱食 / +40San',
        features: ['可攻击队友', '攻击带电麻痹 (4分钟)']
    },

    // ====================================================================
    // 植物 (Plants)
    // ====================================================================
    {
        id: 'ice_plant',
        name: '八角玄冰丛',
        image:'',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：月岛', '掉落：[[八角玄冰草]], 花瓣, 冰(50%), 芽穗(8%)', '产物用于合成[[玉食盒]]和[[八角玄冰棕]]']
    },
    {
        id: 'love_plant',
        name: '相思断肠红',
        image:'',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：蚁狮沙漠', '掉落：[[相思断肠花]], 蜂蜜(50%), 芽穗(8%)', '产物用于合成[[相思断肠糕]]']
    },
    {
        id: 'phoenix_plant',
        name: '鸡冠凤凰葵',
        image:'',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：猪王附近', '掉落：[[鸡冠凤凰葵花]], 黄油(100%), 芽穗(8%)', '产物用于合成[[凤凰布丁]]']
    },
    {
        id: 'fire_plant',
        name: '烈火杏娇疏',
        image:'',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：龙蝇沙漠', '掉落：[[烈火杏娇疏花]], 红宝石(5%), 芽穗(8%)', '产物用于合成[[火焰牛排]]']
    },
];