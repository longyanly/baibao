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
'materials',材料
'container',容器

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
        recipe: '[[月食遗物]] × 2 + [[太阳火种]] × 2 + 金块 × 50',
        tech: '太阳雕像科技（需要[[太阳雕像仿品]]作为科技站）',
        features: [
            '超大存储空间：10×15（150格）+ 10个特殊格子 = 160个格子',
            '宝石功能：自动收集(橙) / 自动催熟(蓝) / 自动照料(黄) / 种田大师(绿) / 秒杀亮茄(紫)',
            '科技解锁功能：放入不同物品解锁不同科技等级',
            '纯粹辉煌修理：自动修理容器内物品并突破状态上限',
            '反鲜功能：根据配置选择反鲜模式（模式1：反鲜 / 模式2：月圆反鲜）',
            '宝石掉落系统：夜晚触发，每N天掉落一次',
            '礼物功能：可作像二本一样靠近领取礼物',
            'UI位置调整：可拖动UI调整位置'
        ],
        hasDetail: true
    },
    {
        id: 'bx_binxiang',
        name: '白熊冰箱',
        image:'img/bx_binxiang.png',
        category: 'architecture',
        recipe: '金块 × 10 + 齿轮 × 5 + 石砖 × 5',
        tech: '炼金引擎（二本）',
        features: [
            '容器大小：4×4（16格）',
            '保鲜功能：冰块完全停止腐烂，其他物品0.1倍腐烂率',
            '回鲜功能：下雨/下雪时自动恢复食物新鲜度',
            '无限堆叠功能（支持两种模式）',
            '可存特殊物品（噩梦燃料、骨头、树枝等）'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_crystal_candle',
        name: '水晶蜡烛',
        image:'img/zhei_crystal_candle.png',
        category: 'architecture',
        recipe: '玻璃碎片 × 2 + 金块 × 3 + 石砖 × 1',
        tech: '炼金引擎（二本）',
        features: [
            '装饰性照明建筑',
            '自动开关：夜晚/黄昏自动点亮，白天自动熄灭',
            '光照属性：半径 3.5 ',
            '建筑属性：耐久度 5 次锤击，可破坏，不可燃烧',
        ],
        hasDetail: true
    },
    {
        id: 'zhei_dengg',
        name: '百宝灯',
        image:'img/zhei_dengg.png',
        category: 'architecture',
        recipe: '金丝雀羽毛 × 2 + 金块 × 3 + 石砖 × 1',
        tech: '暗影操控器（四本）',
        features: [
            '装饰性照明建筑，可自动开关',
            '自动昼夜开关：夜晚/黄昏自动开启，白天自动关闭',
            '光照系统：5.5格半径的照明，与原版蘑菇灯一致'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_displaytable',
        name: '展示柜',
        image:'img/zhei_displaytable.png',
        category: 'architecture',
        recipe: '木板 × 5 + 清洁扫把 × 1 + 活木 × 1',
        tech: '暗影操控器（四本）',
        features: [
            '容器系统：5×5（25个格子），前11个槽位会显示',
            '物品展示功能：前11个槽位的物品会在建筑上显示图标',
            '自动收集功能：关闭容器时自动收集半径12内的物品',
            '整理功能：容器界面有整理按钮',
            '升级功能：可用弹性空间扩展器升级为无限堆叠'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_table',
        name: '饭桌',
        image:'img/zhei_table.png',
        category: 'architecture',
        recipe: '木板 × 2 + 绳子 × 1 + 盐晶 × 1',
        tech: '炼金引擎（二本）',
        features: [
            '容器系统：1个格子，只能放入料理',
            '物品展示功能：第一个格子的物品会在桌子上显示',
            '保鲜功能：完全停止腐烂，放在餐桌上的料理不会腐烂'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_fastbe',
        name: '神秘腐烂箱',
        image:'img/zhei_fastbe.png',
        category: 'architecture',
        recipe: '腐烂食物 × 20 + 木板 × 5 + 绳子 × 3',
        tech: '炼金引擎（二本）',
        features: [
            '容器系统：3×3（9个格子）',
            '快速腐烂功能：容器内物品腐烂速度是正常的5倍（可配置）',
            '用途：快速获得腐烂食物，用于制作肥料等'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_cookpot1',
        name: '百宝炊具',
        image:'img/zhei_cookpot1.png',
        category: 'architecture',
        recipe: '电子元件 × 3 + 木炭 × 9 + 树枝 × 9',
        tech: '炼金引擎（二本）',
        features: [
            '大厨料理支持：可制作所有大厨专属料理，无需大厨角色',
            '百宝料理加速：烹饪百宝料理时速度提升30%',
            '快速烹饪支持：支持[[封印法杖2]]的快速烹饪功能',
            '容器系统：4个格子（垂直排列，1×4布局）',
            '兼容智能锅mod'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_moon_statue',
        name: '月食雕像仿品',
        image:'img/zhei_moon_statue.png',
        category: 'architecture',
        recipe: '[[月食遗物]] × 1 + 大理石 × 5 + 荧光果 × 8 + 月岩 × 3',
        tech: '需蓝图解锁（给月食雕像珍品一个月食遗物掉落）',
        features: [
            '兑换功能：[[八角玄冰棕]]兑换2个[[月食遗物]]（冷却2天）',
            '献祭功能：献祭料理获得[[混沌水晶]]（冷却8天）',
            '开采功能：使用稿子开采20次，掉落材料',
            '光照：紫色微光（半径2.0格）'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_moon_statue1',
        name: '月食雕像珍品',
        image:'img/zhei_moon_statue1.png',
        category: 'architecture',
        recipe: '世界生成建筑（不可制作）',
        tech: '无',
        features: [
            '生成位置：地下世界，周围有16个蓝蘑菇',
            '兑换功能：[[月食遗物]]兑换月食雕像仿品蓝图 / 莎草纸兑换随机Boss草图',
            '光照：紫色微光（半径2.0格）'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_sunsculpture',
        name: '太阳雕像仿品',
        image:'img/zhei_sunsculpture.png',
        category: 'architecture',
        recipe: '[[太阳火种]] × 1 + 大理石 × 5 + 荧光果 × 8 + 月岩 × 3',
        tech: '需蓝图解锁（给太阳雕像珍品一个太阳火种掉落）',
        features: [
            '科技站功能：作为科技站，最高等级4',
            '兑换功能：[[火焰牛排]]兑换1个[[太阳火种]]（冷却2天）',
            '开采功能：使用稿子开采20次，掉落材料',
            '光照：暖黄色微光（半径2.0格）'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_sunsculpture1',
        name: '太阳雕像珍品',
        image:'img/zhei_sunsculpture1.png',
        category: 'architecture',
        recipe: '世界生成建筑（不可制作）',
        tech: '无',
        features: [
            '生成位置：主世界的独立岛屿，周围有步行手杖、猪皮头盔和木甲',
            'Boss试炼功能：使用Boss草图召唤18种Boss进行挑战',
            '奖励系统：击杀所有奖励Boss后掉落[[星空宝石]]',
            '兑换功能：[[太阳火种]]兑换太阳雕像仿品蓝图',
            '光照：暖黄色微光（半径2.0格）'
        ],
        hasDetail: true
    },
    
    // ====================================================================
    // 容器篇 (Container)
    // ====================================================================
    {
        id: 'tc_chest_portable',
        name: '星翼',
        image:'img/tc_chest_portable.png',
        category: 'container',
        recipe: '啜食者皮 × 4 + 废料 × 2 + 玻璃碎片 × 5',
        tech: '炼金引擎（二本）',
        features: [
            '共享容器：所有星翼共享3×3容器空间（9格）',
            '远程控制：控制全图所有[[万物百宝]]的功能',
            '跨世界穿越：在不同世界之间交换物品',
            '控制按钮：开启/暂停/30s/一天',
            '非常好用都给我做！！！'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_foodsbox',
        name: '玉食盒',
        image:'img/zhei_foodsbox.png',
        category: 'container',
        recipe: '盐晶 × 25 + 冰 × 25 + [[八角玄冰草花]] × 10',
        tech: '击杀巨鹿掉落蓝图 / 击杀月后巨鹿掉落蓝图',
        features: [
            '反鲜功能：默认 5% 反鲜速率（可配置，范围 5%-200%）',
            '容器：3×4 格子（12 格），仅可放入食物',
            '升级：可用弹性空间扩展器升级为无限堆叠',
            '整理：内置整理功能，按物品类型和新鲜度排序',
            '便携：可放入物品栏'
        ]
    },
    {
        id: 'zhei_backpackd',
        name: '百宝背包',
        image:'img/zhei_backpackd.png',
        category: 'container',
        recipe: '蓝色月眼 × 1 + [[太阳火种]] × 2 + [[月食遗物]] × 3 + 70点血量',
        tech: '太阳雕像科技',
        features: [
            '容器：2×7 格子（14格，与坎普斯背包相同）',
            '保鲜功能：保鲜倍数与盐盒相同',
            '防水功能：防水值与雨衣相同',
            '防雷电功能：与雨衣相同',
            '不可燃烧：不可被烧毁',
            '升级功能：支持使用弹性空间扩展器升级为无限堆叠',
            '制作消耗：70点血量'
        ],
        hasDetail: true
    },
    
    // ====================================================================
    // 工具 (Tools)
    // ====================================================================
    {
        id: 'zhei_floral_cane',
        name: '百宝花杖',
        image:'img/zhei_floral_cane.png',
        category: 'tools',
        recipe: '花瓣 × 4 + 树枝 × 2 + 绳子 × 1',
        tech: '炼金引擎（二本）',
        features: [
            '建筑缩放系统：三种模式（恢复原状、放大、缩小）',
            '缩放范围：0.3倍 ~ 3.0倍，缩放步进：0.15倍',
            '状态持久化：缩放状态会保存到存档中',
            '模式切换界面：右键打开，选择模式或打开百宝淘宝/兑换皮肤界面',
            '施法系统：装备后左键点击目标建筑进行缩放操作'
        ],
        hasDetail: true
    },
    {
        id: 'sealingwand_dream',
        name: '封印之杖',
        image:'img/sealingwand_dream.png',
        category: 'tools',
        recipe: '蓝月眼 × 2 + 鼹鼠 × 2 + 绿宝石 × 1',
        tech: '天体科技',
        features: [
            '移动速度加成：25%，武器伤害：步行手杖伤害',
            '工具功能：砍伐/挖掘/捕虫网（效率3）',
            '特殊能力：水上行走、虚空行走、移除碰撞体积',
            '8个法术：收集/采集/灭火/开垦/挖起树根/种子复制粘贴',
            '快速施法、巨大作物处理'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_staff',
        name: '封印之杖2',
        image:'img/zhei_staff.png',
        category: 'tools',
        recipe: '紫宝石 × 1 + 金块 × 30 + 步行手杖 × 1',
        tech: '远古科技',
        features: [
            '移动速度加成：25%，武器伤害：2',
            '工具功能：砍伐/挖掘/锤击/捕虫网/钓鱼竿（效率3）',
            '6个法术：远程采集/远程集中种植/照料/施肥/浇水/快速烹饪',
            '装备时自动打开容器界面（1个格子）',
            '快速施法、双倍食物收集'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_wetgoop',
        name: '饭桶',
        image:'img/zhei_wetgoop.png',
        category: 'tools',
        recipe: '食谱 × 1 + 木炭 × 5 + 莎草纸 × 1',
        tech: '炼金引擎（二本）',
        features: [
            '自动做饭：施法后自动将食材放入范围内的锅并开始烹饪',
            '范围：固定 12',
            '容器：4 格，用于放置食材模板',
            '模式切换：4 种模式（模式 1：仅普通锅 / 模式 2：仅大厨锅 / 模式 3：仅月炆宝炊 / 模式 4：所有锅）',
            '消耗：每次施法消耗 10 点理智值'
        ],
        hasDetail: true
    },
    {
        id: 'celestial_ark_amulet',
        name: '星槎护符',
        image:'img/celestial_ark_amulet.png',
        category: 'tools',
        recipe: '海琉璃 × 25 + 玻璃碎片 × 10 + 建造护符 × 2',
        tech: '暗影操控仪（四本）',
        features: [
            '移动速度提升：1.5倍',
            '快速交互动作（做事动作非常快）',
            '恒温：将体温维持在 25°C',
            '建造材料减半',
            '烹饪相关标签：可使用大厨锅，解锁香料配方(兼容能力勋章模组)',
            '海琉璃属于建家党狂喜模组里面的物品'
        ],
        collaborative_item: true // 专属联动物品标记
    },
    {
        id: 'zhei_superpack',
        name: '百宝迁移装置',
        image:'img/zhei_superpack.png',
        category: 'tools',
        recipe: '捆绑包装 × 1 + 金块 × 1 + 绳子 × 1',
        tech: '远古科技',
        features: [
            '超级打包：右键点击目标物品/生物/建筑进行打包',
            '默认仅可打包[[万物百宝]]（tc_chest）',
            '配置开启后可打包所有物品(大部分也不绝对的所有因为打包所有会出奇怪的bug)'
        ]
    },
    {
        id: 'zhei_yushan',
        name: '羽扇',
        image:'img/zhei_yushan.png',
        category: 'tools',
        recipe: '一角鲸的角 × 1 + 蓝色羽毛 × 5 + 树枝 × 10',
        tech: '远古科技',
        features: [
            '双模式切换（右键切换）',
            '旋风模式（默认）：召唤旋风攻击目标',
            '炸鱼模式：在水中爆炸',
            '耐久：100 点，耐久为 0 时不消失但禁用功能',
            '修复：可用羽毛修复（金色羽毛：50% 耐久，其他羽毛：25% 耐久）'
        ]
    },
    {
        id: 'zhe_xkbaoshix',
        name: '解密后的星空',
        image:'img/zhe_xkbaoshix.png',
        category: 'tools',
        recipe: '在地下档案馆解密[[星空宝石]]后获得',
        tech: '无',
        features: [
            '锚点管理：所有玩家共享同一锚点，可记录多个传送锚点',
            '传送功能：跨世界传送，生成空间裂隙进行传送',
            '界面系统：右键打开锚点管理界面（添加/删除/修改锚点名称/传送）',
            '特殊效果：跳虫洞不摔跤'
        ],
        hasDetail: true
    },

    // ====================================================================
    // 武器 (Weapons)
    // ====================================================================
    {
        id: 'zhei_qianjisan',
        name: '千机伞',
        image:'img/zhei_qianjisan.png',
        category: 'weapons',
        recipe: '蜘蛛丝 × 25 + [[猫屎咖啡]] × 1 + 火腿棒 × 1',
        tech: '太阳雕像科技',
        features: [
            '基础伤害：75，攻击范围：3，移动速度加成：5%，无耐久',
            '随机伤害倍率：0.75倍(10%) / 1.0倍(70%) / 1.5倍(15%) / 5.0倍(5%)',
            '保底机制：连续29次未出5倍时，第30次必定5倍',
            '吸血效果：20%（按实际伤害计算）',
            '跳劈能力：跳劈距离15，跳劈过程中不会触发陷阱',
            '位面伤害：10点（对位面生物额外伤害）',
            '防雨功能：100%（完全防雨）'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_zishuijingdao',
        name: '紫水晶刀',
        image:'img/zhei_zishuijingdao.png',
        category: 'weapons',
        recipe: '[[寒冰蛋糕]] × 5 + 玻璃碎片 × 5 + 铥矿碎片 × 5',
        tech: '太阳雕像科技',
        features: [
            '基础伤害：59，位面伤害：12',
            '斩杀：当目标血量 ≤ 10% 时直接斩杀',
            '耐久：300（可用噩梦燃料充能，每个恢复50点）',
            '无限耐久强化：可用[[混沌水晶]]（zhei_chaoscrystal）永久移除耐久'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_zishuijingjian',
        name: '紫水晶剑',
        image:'img/zhei_zishuijingjian.png',
        category: 'weapons',
        recipe: '击杀坎普斯1%掉落',
        tech: '无',
        features: [
            '基础伤害：55，位面伤害：14（有耐久时）',
            '耐久：500次使用（耐久为0时无法造成伤害）',
            '电击攻击能力（有耐久时）',
            '对月亮阵营生物伤害加成',
            '多种充能方式：避雷针/月熠/电气石/带电晶石',
            '可用[[混沌水晶]]强化为无限耐久'
        ],
        hasDetail: true
    },

    // ====================================================================
    // 珍馐料理 (Cuisine)
    // ====================================================================
    {
        id: 'zhei_heartbreaklovecake',
        name: '相思断肠糕',
        image:'img/zhei_heartbreaklovecake.png',
        category: 'cuisine',
        recipe: '[[相思断肠花]] × 3 + 甜味剂 × 1',
        buff: '自动救援',
        attributes: '生命值：+100 / 饥饿值：+100 / 理智值：+100',
        features: ['食物类型：好东西', '保鲜时间：10天（PERISH_MED）', '烹饪时间：4分钟', '自动救援：食用后自动救援屏幕视野范围内（约45单位）最近死亡的队友']
    },
    {
        id: 'zhei_flaming_steak',
        name: '火焰牛排',
        image:'img/zhei_flaming_steak.png',
        category: 'cuisine',
        recipe: '大肉或熟大肉 × 1 + [[烈火杏娇疏花]] × 3',
        buff: '力量保持',
        attributes: '生命值：-5 / 饥饿值：+200 / 理智值：+100',
        features: ['食物类型：肉类', '保鲜时间：20天（PERISH_PRESERVED）', '烹饪时间：2分钟', '特殊效果（仅对沃尔夫冈生效）', '力量保持buff', '持续时间：8分钟', '效果：保持力量值不下降']
    },
    {
        id: 'zhei_staraniseicepalm',
        name: '八角玄冰棕',
        image:'img/zhei_staraniseicepalm.png',
        category: 'cuisine',
        recipe: '[[八角玄冰草花]] × 3 + 冰冻物品 × 1',
        buff: '幸运冰冻',
        attributes: '生命值：+50 / 饥饿值：+50 / 理智值：+50',
        features: ['食物类型：好东西', '保鲜时间：10天（PERISH_MED）', '烹饪时间：3分钟', '幸运冰冻buff', '持续时间：300秒（5分钟）', '效果：攻击时有15%概率冰冻目标', '冰冻效果：冰冻持续时间10秒，增加寒冷值5', '提示：听说，麻辣小龙虾吃完可以打队友，八角玄冰棕会使攻击概率冰冻，两者一起吃会发生什么呢？']
    },
    {
        id: 'zhei_phoenixpudding',
        name: '凤凰布丁',
        image:'img/zhei_phoenixpudding.png',
        category: 'cuisine',
        recipe: '[[鸡冠凤凰葵花]] × 3 + 红蘑菇或熟红蘑菇 × 1',
        buff: '睡眠免疫',
        attributes: '生命值：+50 / 饥饿值：+50 / 理智值：+50',
        features: ['食物类型：好东西', '保鲜时间：10天（PERISH_MED）', '烹饪时间：3分钟', '睡眠抗性buff', '持续时间：8分钟', '效果：抵抗睡眠效果', '睡眠免疫buff', '持续时间：4分钟', '效果：完全免疫睡眠效果', '清除昏睡状态：食用时立即清除当前昏睡状态', '提示：整日昏昏沉沉？来一个鸡冠凤凰葵做的料理吧']
    },
    {
        id: 'zhei_kopi_luwak',
        name: '猫屎咖啡',
        image:'img/zhei_kopi_luwak.png',
        category: 'cuisine',
        recipe: '浆果或多汁浆果或烤熟的浆果 × 1 + 甜味剂 × 2 + 冰冻物品 × 1',
        buff: '移动速度buff',
        attributes: '生命值：+5 / 饥饿值：+5 / 理智值：+50',
        features: ['食物类型：好东西', '保鲜时间：15天（PERISH_SLOW）', '烹饪时间：1分钟', '移动速度buff', '持续时间：4分钟', '效果：移动速度提升80%（1.8倍）', '用途：制作[[千机伞]]的材料（需要1个）']
    },
    {
        id: 'zhei_ice_cake',
        name: '寒冰蛋糕',
        image:'img/zhei_ice_cake.png',
        category: 'cuisine',
        recipe: '甜味剂 × 1 + 蛋 × 1 + 乳制品 × 1 + 果度 × 1',
        buff: '降温',
        attributes: '生命值：+60 / 饥饿值：+80 / 理智值：+40',
        features: ['食物类型：好东西', '保鲜时间：6天', '烹饪时间：2分钟', '用途：制作[[紫水晶刀]]的材料（需要5个）', '浮生最爱吃']
    },
    {
        id: 'zhei_potatoshreds',
        name: '酸辣土豆丝',
        image:'img/zhei_potatoshreds.png',
        category: 'cuisine',
        recipe: '土豆 × 3 + 辣椒 × 1',
        attributes: '生命值：+60 / 饥饿值：+75 / 理智值：+80',
        features: ['描述：酸辣可口', '食物类型：蔬菜（VEGGIE）', '保鲜时间：慢速腐烂（PERISH_SLOW）', '烹饪时间：0.75分钟', '料理亲和：沃尔夫冈专属，额外80%食物收益（饥饿值1.8倍，生命值和理智值额外获得80%增益）', '食用时会显示："酸辣土豆丝让大力士更加强壮！"']
    },
    {
        id: 'zhei_icecreamcone',
        name: '圆筒冰淇淋',
        image:'img/zhei_icecreamcone.png',
        category: 'cuisine',
        recipe: '冰冻物品 × 2 + 乳制品 × 1 + 不可食用物品 × 1（不能包含肉类、蔬菜、蛋类）',
        attributes: '生命值：+35 / 饥饿值：+35 / 理智值：+80',
        features: ['食物类型：好东西', '保鲜时间：3天（PERISH_SUPERFAST）', '烹饪时间：0.5分钟', '童年的回忆']
    },
    {
        id: 'zhei_hotpot',
        name: '热锅',
        image:'img/zhei_hotpot.png',
        category: 'cuisine',
        recipe: '蔬菜 × 1 + 肉类 × 1 + 树枝 × 1',
        buff: '保温',
        attributes: '生命值：+15 / 饥饿值：+30 / 理智值：+30',
        features: ['食物类型：好东西', '保鲜时间：3天（PERISH_SUPERFAST）', '烹饪时间：1分钟']
    },
    {
        id: 'zhei_chocolate',
        name: '巧克力',
        image:'img/zhei_chocolate.png',
        category: 'cuisine',
        recipe: '蝴蝶翅膀或月蝶翅膀 × 1 + 甜味剂 × 2 + 蛋 × 1',
        buff: '素食Buff',
        attributes: '+60血 / +75饱食 / +33San',
        features: ['食物类型：好东西', '保鲜时间：15天', '烹饪时间：2分钟', '素食buff（仅对薇格弗德和妥协的角色Wathom生效）', '持续时间：4分钟', '效果：允许薇格弗德和Wathom食用素食', '备注：龙炎的最爱']
    },
    {
        id: 'zhei_spicy_crayfish',
        name: '麻辣小龙虾',
        image:'img/zhei_spicy_crayfish.png',
        category: 'cuisine',
        recipe: '辣椒或熟辣椒 × 1 + 蔬菜 × 1 + 鱼类 × 1',
        buff: '大乱斗buff',
        attributes: '生命值：+25 / 饥饿值：+10 / 理智值：+40',
        features: ['食物类型：肉类', '保鲜时间：6天', '烹饪时间：1分钟', '大乱斗buff', '持续时间：4分钟', '可攻击队友（带电攻击可对队友造成麻痹效果）', '配置选项：大乱斗buff对队友造成伤害（默认禁用）']
    },
    {
        id: 'zhei_beef_steak',
        name: '牛排',
        image:'img/zhei_beef_steak.png',
        category: 'cuisine',
        recipe: '大肉或熟大肉 × 3（不包括怪物肉、青蛙腿、鸡腿、蝙蝠翅膀、小肉、蝙蝠鼻子）+ 蔬菜 × 1',
        attributes: '生命值：+10 / 饥饿值：+150 / 理智值：+20',
        features: ['食物类型：肉类', '保鲜时间：15天（PERISH_SLOW）', '烹饪时间：2分钟', '量大管饱']
    },
    {
        id: 'zhei_xiaolongbao',
        name: '小笼包',
        image:'img/zhei_xiaolongbao.png',
        category: 'cuisine',
        recipe: '大蒜或熟大蒜 × 1 + 肉类 × 2 + 蔬菜 × 1',
        attributes: '生命值：+10 / 饥饿值：+110 / 理智值：+5',
        features: ['食物类型：肉类', '保鲜时间：15天（PERISH_SLOW）', '烹饪时间：3分钟']
    },
    {
        id: 'zhei_zhu_bao',
        name: '小猪包',
        image:'img/zhei_zhu_bao.png',
        category: 'cuisine',
        recipe: '洋葱或熟洋葱 × 1 + 肉类 × 2 + 甜味剂 × 1',
        attributes: '生命值：+25 / 饥饿值：+110 / 理智值：+40',
        features: ['食物类型：肉类', '保鲜时间：15天（PERISH_SLOW）', '烹饪时间：2分钟', '萌萌的']
    },
    {
        id: 'zhei_panda_bao',
        name: '熊猫棕子',
        image:'img/zhei_panda_bao.png',
        category: 'cuisine',
        recipe: '蔬菜 × 3 + 水果 × 0.5',
        attributes: '生命值：+60 / 饥饿值：+90 / 理智值：+20',
        features: ['食物类型：蔬菜', '保鲜时间：15天（PERISH_SLOW）', '烹饪时间：1分钟', '是带有竹子香味的粽子，做的好精致（Dim的最爱）', '植物人吃了可以在buff期间吃回血料理恢复血量']
    },
    {
        id: 'zhei_iceflower',
        name: '八角玄冰草花',
        image:'img/zhei_iceflower.png',
        category: 'cuisine',
        recipe: '采摘[[八角玄冰草]]掉落',
        tech: '无',
        attributes: '+1血 / +9.4饱食 / +1San',
        features: ['食物类型：蔬菜', '蔬菜值：0.5', '腐烂时间：中等', '可堆叠：是（小物品堆叠）', '可交易：是（价值1金块）', '不能直接烤，但可以入锅烹饪']
    },
    {
        id: 'zhei_phoenixflower',
        name: '鸡冠凤凰葵花',
        image:'img/zhei_phoenixflower.png',
        category: 'cuisine',
        recipe: '采摘[[鸡冠凤凰葵]]掉落',
        tech: '无',
        attributes: '+1血 / +9.4饱食 / +1San',
        features: ['食物类型：蔬菜', '蔬菜值：0.5', '腐烂时间：中等', '可堆叠：是（小物品堆叠）', '可交易：是（价值1金块）', '不能直接烤，但可以入锅烹饪']
    },
    {
        id: 'zhei_xiangsiflower',
        name: '相思断肠红花',
        image:'img/zhei_xiangsiflower.png',
        category: 'cuisine',
        recipe: '采摘[[相思断肠红]]掉落',
        tech: '无',
        attributes: '+1血 / +9.4饱食 / +1San',
        features: ['食物类型：蔬菜', '蔬菜值：0.5', '腐烂时间：中等', '可堆叠：是（小物品堆叠）', '可交易：是（价值1金块）', '不能直接烤，但可以入锅烹饪']
    },
    {
        id: 'zhei_blazeflower',
        name: '烈火杏娇疏花',
        image:'img/zhei_blazeflower.png',
        category: 'cuisine',
        recipe: '采摘[[烈火杏娇疏]]掉落',
        tech: '无',
        attributes: '+1血 / +9.4饱食 / +1San',
        features: ['食物类型：蔬菜', '蔬菜值：0.5', '腐烂时间：中等', '可堆叠：是（小物品堆叠）', '可交易：是（价值1金块）', '不能直接烤，但可以入锅烹饪']
    },

    // ====================================================================
    // 植物 (Plants)
    // ====================================================================
    {
        id: 'icebush',
        name: '八角玄冰草',
        image:'img/icebush.png',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：月岛', '掉落：[[八角玄冰草花瓣]]× 1, 花瓣× 1, 冰(50%)× 1, [[八角玄冰芽穗]](8%)× 1', '产物用于制作[[玉食盒]]和[[八角玄冰棕]]']
    },
    {
        id: 'zhei_xiangsi',
        name: '相思断肠红',
        image:'img/zhei_xiangsi.png',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：蚁狮沙漠附近，荒漠', '掉落：[[相思断肠花]]× 1, 花瓣× 1, 蜂蜜(50%)× 1, [[相思断肠红芽穗]](8%)× 1', '产物用于烹饪[[相思断肠糕]]']
    },
    {
        id: 'zhei_phoenix',
        name: '鸡冠凤凰葵',
        image:'img/zhei_phoenix.png',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：猪王附近', '掉落：[[鸡冠凤凰葵花]]× 1, 花瓣× 1, 黄油(10%)× 1, [[鸡冠凤凰葵芽穗]](8%)× 1', '产物用于烹饪[[凤凰布丁]]']
    },
    {
        id: 'zhei_blaze',
        name: '烈火杏娇疏',
        image:'img/zhei_blaze.png',
        category: 'plants',
        recipe: '无 (天然生长)',
        tech: '无',
        features: ['位置：龙蝇沙漠附近', '掉落：[[烈火杏娇疏花]]× 1, 花瓣× 1, 红宝石(5%)× 1, [[烈火杏娇疏芽穗]](8%)× 1', '产物用于烹饪[火焰牛排]]']
    },

    // ====================================================================
    // 材料 (Materials)
    // ====================================================================
    {
        id: 'zhe_xkbaoshi',
        name: '星空宝石',
        image:'img/zhe_xkbaoshi.png',
        category: 'materials',
        recipe: '在太阳雕像珍品通过Boss试炼后掉落',
        tech: '无',
        features: [
            '可在地下档案馆解密为[[解密后的星空]]',
            '可交易：与猪王交易，1个兑换50个金块'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_chaoscrystal',
        name: '混沌水晶',
        image:'img/zhei_chaoscrystal.png',
        category: 'materials',
        recipe: '月食雕像仿品完成献祭后获得',
        tech: '无',
        features: [
            '武器强化：可将[[紫水晶剑]]和[[紫水晶刀]]强化为无限耐久',
            '使用方式：鼠标拿起混沌水晶，对物品栏中的紫水晶武器使用',
            '使用后混沌水晶会被消耗（移除）',
            '一次性使用：每个武器只能使用一次'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_eclipserelics',
        name: '月食遗物',
        image:'img/zhei_eclipserelics.png',
        category: 'materials',
        recipe: '采摘格罗姆花掉落 / 给[[月食雕像仿品]][[八角玄冰棕]]兑换（2个）',
        tech: '无',
        features: [
            '可用于制作：[[万物百宝]]、[[月食雕像仿品]]制作材料',
            '把[[月食遗物]]给[[月食雕像珍品]]可以兑换[[月食雕像仿品]]蓝图',
            '可交易：1个兑换7个金块',
            '可堆叠：堆叠上限20'
        ],
        hasDetail: true
    },
    {
        id: 'zhei_sunfires',
        name: '太阳火种',
        image:'img/zhei_sunfires.png',
        category: 'materials',
        recipe: '击杀龙蝇掉落 / 给[[太阳雕像仿品]][[火焰牛排]]兑换（1个）',
        tech: '无',
        features: [
            '可用于制作：[[万物百宝]]、[[太阳雕像仿品]]制作材料',
            '把[[太阳火种]]给[[太阳雕像珍品]]可以兑换[[太阳雕像仿品]]蓝图',
            '可交易：1个兑换7个金块',
            '可堆叠：堆叠上限20',
            '浮水：物品可以浮在水上，不会沉水'
        ],
        hasDetail: true
    },
];



