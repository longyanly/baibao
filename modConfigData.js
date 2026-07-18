/**
 * Mod配置数据
 * 用于展示mod配置选项的详细信息
 */

const modConfigData = [
    {
        id: 'GEM_DROP_INTERVAL',
        name: '宝石掉落间隔',
        category: '万物百宝相关',
        options: '1-10天、15天、20天、30天',
        defaultValue: '8天',
        description: '设置万物百宝宝石掉落的间隔天数，控制万物百宝自动掉落宝石的频率'
    },
    {
        id: 'AUTO_WATER_RANGE',
        name: '万物百宝催生范围',
        category: '万物百宝相关',
        options: '3×3、5×5、11×11、15×15',
        defaultValue: '11×11',
        description: '设置万物百宝自动催熟和浇水的范围，影响自动照料农田的范围大小'
    },
    {
        id: 'HARVEST_RANGE',
        name: '封印之杖采集农田作物的地皮范围',
        category: '封印法杖相关',
        options: '3×3、5×5（默认）、7×7',
        defaultValue: '5×5',
        description: '设置封印法杖采集农田作物的地皮范围，以地皮为单位，影响封印法杖的采集范围'
    },
    {
        id: 'ENABLE_GROWTH',
        name: '启用催熟功能',
        category: '万物百宝相关',
        options: '启用、禁用',
        defaultValue: '禁用（false）',
        description: '启用/禁用万物百宝的催熟功能，控制万物百宝是否自动催熟周围作物'
    },
    {
        id: 'COLLECT_ANIMALS',
        name: '百宝收集小动物',
        category: '万物百宝相关',
        options: '启用、禁用',
        defaultValue: '禁用（false）',
        description: '启用/禁用收集小动物（兔子、鸟、蝴蝶等），控制万物百宝是否自动收集小动物'
    },
    {
        id: 'FERTILIZE_BOTANY',
        name: '子圭养护系统施肥',
        category: '万物百宝相关',
        options: '启用、禁用',
        defaultValue: '禁用（false）',
        description: '启用/禁用为子圭养护系统施肥，支持子圭·崇溟、子圭·益矩、子圭·利川、颤栗果树等'
    },
    {
        id: 'FAST_COOKING',
        name: '快速烹饪',
        category: '封印法杖相关',
        options: '启用、禁用',
        defaultValue: '启用（true）',
        description: '启用/禁用封印法杖2的快速烹饪功能，对原版锅和棱镜模组的月炆宝炊生效'
    },
    {
        id: 'BRAWL_BUFF_DAMAGE_TEAMMATES',
        name: '大乱斗buff对队友造成伤害',
        category: '战斗相关',
        options: '启用、禁用',
        defaultValue: '禁用（false）',
        description: '启用/禁用大乱斗buff是否对队友造成伤害，控制大乱斗buff的友伤机制'
    },
    {
        id: 'TC_CHEST_PRESERVE_MODE',
        name: '万物百宝反鲜模式',
        category: '万物百宝相关',
        options: '模式1：保鲜组件、模式2：月圆反鲜（默认，类似白熊冰箱）',
        defaultValue: '模式2（2）',
        description: '选择万物百宝的反鲜模式，模式2在月圆时触发反鲜效果'
    },
    {
        id: 'BX_BINXIANG_STACK_MODE',
        name: '白熊冰箱堆叠模式',
        category: '其他物品相关',
        options: '默认：默认无限堆叠、升级：需要弹性空间扩展器升级才能无限堆叠（默认）',
        defaultValue: '升级（"upgrade"）',
        description: '选择白熊冰箱的堆叠模式，控制白熊冰箱是否需要升级才能无限堆叠'
    },
    {
        id: 'ENABLE_BAIBAO_BUFF_DISPLAY',
        name: '启用百宝buff显示系统',
        category: 'UI和显示相关',
        options: '启用（默认）、禁用',
        defaultValue: '启用（true）',
        description: '启用/禁用百宝buff显示系统'
    },
    {
        id: 'ZHEI_FOODSBOX_FRESH_RATE',
        name: '玉食盒/好运石反鲜速率',
        category: '其他物品相关',
        options: '5%（默认）、10%、15%、20%、25%、30%、40%、50%、60%、70%、80%、90%、100%、120%、150%、200%',
        defaultValue: '5%（0.05）',
        description: '设置[[玉食盒]]与[[好运石]]容器的反鲜速率，控制恢复食物新鲜度的速度'
    },
    {
        id: 'ZHEI_GOOD_LUCK_SOAK_REGEN',
        name: '好运池泡澡回血回san速度',
        category: '其他物品相关',
        options: '0.5x、0.75x、1x（默认）、1.25x、1.5x、2x、3x',
        defaultValue: '1x（默认：血+5/秒、san+2.5/秒）',
        description: '调节[[好运池]]泡澡时的回血与回 san 速度倍数'
    },
    {
        id: 'ZHEI_SUPERPACK_ALLOW_ALL',
        name: '百宝迁移装置允许打包所有物品',
        category: '其他物品相关',
        options: '仅百宝箱（默认）、所有物品',
        defaultValue: '仅百宝箱（false）',
        description: '启用/禁用百宝迁移装置是否可以打包所有物品，控制百宝迁移装置的打包范围'
    },
    {
        id: 'ENABLE_SEED_TRANSLATION',
        name: '启用种子翻译功能',
        category: 'UI和显示相关',
        options: '禁用（默认）、启用',
        defaultValue: '禁用（false）',
        description: '启用/禁用种子翻译显示功能，鼠标悬停在种子上时显示实际作物名称，可翻译丰耘秘境和原版种子'
    },
    {
        id: 'ENABLE_WARDROBE_STORAGE',
        name: '启用衣柜存储功能',
        category: 'UI和显示相关',
        options: '启用（默认）、禁用',
        defaultValue: '启用（true）',
        description: '启用/禁用原版衣柜存储功能，5×5格子，可以存储装备物品'
    },
    {
        id: 'MOON_STATUE_FOOD_COOLDOWN',
        name: '月食雕像食物献祭冷却天数',
        category: '雕像系统相关',
        options: '1-10天、15天、20天',
        defaultValue: '8天',
        description: '设置月食雕像食物献祭的冷却天数，控制月食雕像献祭功能的冷却时间'
    },
    {
        id: 'MOON_STATUE_FOOD_DIFFICULTY',
        name: '月食雕像食物献祭难度',
        category: '雕像系统相关',
        options: '简单：只需要百宝料理、困难：百宝料理+原版料理（默认）',
        defaultValue: '困难（"hard"）',
        description: '选择月食雕像食物献祭的难度，控制献祭所需料理的范围'
    },
    {
        id: 'SUN_STATUE_BOSS_TRIAL_COOLDOWN',
        name: '太阳雕像Boss献祭试炼冷却天数',
        category: '雕像系统相关',
        options: '1-10天、15天、20天',
        defaultValue: '8天',
        description: '设置所有Boss击杀后的献祭试炼冷却天数，控制太阳雕像Boss试炼的冷却时间'
    },
    {
        id: 'ZHEI_FASTBE_ROT_SPEED',
        name: '神秘腐烂箱腐烂速度倍数',
        category: '其他物品相关',
        options: '1倍（正常速度）、2-10倍、15倍、20倍、500倍',
        defaultValue: '5倍',
        description: '设置神秘腐烂箱中物品的腐烂速度倍数，控制腐烂箱加速腐烂的效果'
    },
    {
        id: 'ZHEI_FARMGOD_WORK_RADIUS',
        name: '百宝种地的神工作半径',
        category: '其他物品相关',
        options: '10、12、14、16（默认）、18、20、24、32 码',
        defaultValue: '16 码',
        description: '同时影响[[星塔]]工作圈范围与[[百宝种地的神]]的农活半径（放置星塔时可预览该圈）'
    },
    {
        id: 'ZHEI_FARM_ZONE_CONVERT_TIME',
        name: '星塔转化时间',
        category: '其他物品相关',
        options: '30 秒、1 分钟、5 分钟、8 分钟（默认）、3 游戏天',
        defaultValue: '8 分钟',
        description: '[[星塔]]格内批量转化的默认耗时；仅木头→木炭固定 3 秒；格内任一有耐久物则整批固定 8 分钟'
    },
    {
        id: 'ZHEI_WA_REMOTE_CMD_RADIUS',
        name: '种地神遥控器指挥范围',
        category: '其他物品相关',
        options: '32 码、48 码（默认）、全图（0）',
        defaultValue: '48 码',
        description: '[[种地神遥控器]]「休息」「开始工作」生效范围：0 为全图所有种地神；大于 0 时仅指挥玩家附近该距离内的种地神'
    }
];

