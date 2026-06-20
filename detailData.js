/*格式： "ID(如果是日志，则为version)": `HTML内容`,
// 使用方法：填入你需要添加弹窗的物品的对应id，则自动添加弹窗
<p>...</p>：分段。

<ul><li>...</li></ul>：内容列表。

<b>...</b>：加粗核心重点。

<span style="color:red;">...</span>：给特定的文字上色（如警告提示）。

<img src="...">：如果你想在弹窗里展示更详细的合成表图片，也可以直接插入图片标签。
*/


/**

const detailData = {

    // 示例 1: 基础物品/建筑详情
    "example_item_id": `
        <p><b>这是第一段：基础介绍。</b>欢迎使用万物百宝百科，这里可以放置长篇的文字说明。</p>
        
        <p><span style="color:red;">这是警告文本：</span> 请务必注意，此操作不可逆！</p>
        
        <p><b>这是列表展示：</b></p>
        <ul>
            <li>列表项 A：描述内容 1</li>
            <li>列表项 B：描述内容 2</li>
            <li><b>加粗列表项 C：</b> 使用了 <b> 标签标注重点。</li>
        </ul>

        <p><b>这是图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="images/example.png" alt="说明图" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
            <br><small style="color:gray;">图片下方的小字说明</small>
        </div>
    `,

    // 示例 2: 角色背景详情
    "character_id": `
        <p><b>角色背景：</b></p>
        <p>他在一次实验意外中来到了这个世界。拥有以下特性：</p>
        <ul>
            <li>特性一：<span style="color:green;">正面增益文字</span></li>
            <li>特性二：<span style="color:orange;">特殊机制文字</span></li>
        </ul>
    `,

    // 示例 3: 更新日志详情 (ID 对应 logData 中的 version)
    "v1.0.0": `
        <p><b>版本 1.0.0 详细更新单：</b></p>
        <ul>
            <li>修复了 10 个已知 BUG。</li>
            <li>新增了 2 个隐藏地形。</li>
            <li>优化了整体运行效率。</li>
        </ul>
    `
};

 */
const detailData = {
    "tc_chest": `
        <p><b>万物百宝</b>是一个功能丰富的建筑，集存储、自动收集、自动照料、科技站、礼物等功能于一体。</p>
        
        <p><b>制作配方：</b>月食遗物 × 2 + 太阳火种 × 2 + 金块 × 50</p>
        <p><b>科技要求：</b>太阳雕像科技（需要太阳雕像仿品作为科技站）</p>
        <p><b>特殊：</b>不可被拆解</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/baibao1.png" alt="万物百宝1" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px; margin-bottom: 10px;">
        </div>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/baibao2.png" alt="万物百宝2" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px; margin-bottom: 10px;">
        </div>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/baibao3.png" alt="万物百宝3" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px; margin-bottom: 10px;">
        </div>
        
        <p><b>容器系统：</b></p>
        <ul>
            <li>容器大小：<b>10×15 = 150个格子</b>（左侧）+ <b>10个特殊格子</b>（右侧）= <b>160个格子</b></li>
            <li>布局：
                <ul>
                    <li>左侧：10列×15行 = 150个存储格子</li>
                    <li>右侧：10个特殊功能格子
                        <ul>
                            <li>科技格子（右上角5个）</li>
                            <li>宝石格子（右下角5个）</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>无限堆叠：支持无限堆叠物品</li>
            <li>整理功能：可整理左侧150个格子，支持列锁定</li>
        </ul>
        
        <p><b>宝石功能系统（右下角）：</b></p>
        <p>通过放入不同宝石激活功能：</p>
        
        <p><b>橙宝石：自动收集</b></p>
        <ul>
            <li>功能：自动收集地图上的物品</li>
            <li>收集间隔：默认 <b>4秒</b>（可通过星翼调整为30秒或1天）</li>
            <li>收集范围：全图</li>
            <li>收集条件：
                <ul>
                    <li>物品必须是容器中已有的同类物品</li>
                    <li>或垃圾类物品（如面包屑、预加工食物等）</li>
                </ul>
            </li>
            <li>可配置是否收集小动物（兔子、鸟、蝴蝶等）</li>
            <li>兼容性：兼容防卡模组，不会收集鸟笼中的鸟</li>
        </ul>
        
        <p><b>绿宝石：种田大师</b></p>
        <ul>
            <li>功能：自动浇水施肥</li>
            <li>执行间隔：<b>55秒</b></li>
            <li>作用范围：可配置（默认 <b>11×11</b>，可选3×3、5×5、15×15）</li>
            <li>功能：
                <ul>
                    <li>地皮浇水施肥：为农田地皮添加 <b>100%</b> 水分和 <b>100%</b> 养分</li>
                    <li>浇水：保护枯萎植物、为植物添加湿度</li>
                    <li>施肥：为可施肥植物施肥</li>
                </ul>
            </li>
        </ul>
        
        <p><b>黄宝石：自动照料</b></p>
        <ul>
            <li>功能：自动照料和催熟作物（需配置启用）</li>
            <li>执行间隔：<b>60秒</b></li>
            <li>作用范围：可配置（默认 <b>11×11</b>）</li>
            <li>功能：
                <ul>
                    <li>照料农田作物：缓解植物压力（注意当百宝照料后，玩家还可以手动对话，不过并没有啥作用，因为百宝照料已经生效了）</li>
                    <li>催熟植物：促进各种植物的生长阶段</li>
                    <li>催熟大理石：促进大理石生长</li>
                    <li>催熟特殊植物：支持棱镜模组的子圭奇型岩等</li>
                </ul>
            </li>
        </ul>
        
        <p><b>蓝宝石：自动催熟</b></p>
        <ul>
            <li>功能：自动催熟灌木和可采集的移植物（注意这个和黄宝石的催熟是有区别的哦，黄宝石只能催熟农田的作物，蓝宝石催移植物）（需配置启用）</li>
            <li>执行间隔：<b>60秒</b></li>
            <li>作用范围：可配置（默认 <b>11×11</b>）</li>
            <li>功能：
                <ul>
                    <li>催熟灌木：恢复灌木的采集状态</li>
                    <li>催熟其他可采集植物</li>
                </ul>
            </li>
        </ul>
        
        <p><b>紫宝石：秒杀亮茄</b></p>
        <ul>
            <li>功能：自动秒杀亮茄植物</li>
            <li>执行间隔：<b>1秒</b></li>
            <li>作用范围：可配置（默认 <b>11×11</b>）</li>
            <li>开关控制：需要同时开启"开关"按钮才能生效</li>
        </ul>
        
        <p><b>全科技和回耐功能（右上角151）：</b></p>
        <p><b>纯粹辉煌修理和升级</b></p>
        <ul>
            <li>功能：自动修理容器内物品并突破状态上限</li>
            <li>修理间隔：<b>1秒</b></li>
            <li>修理百分比：每次 <b>2%</b></li>
            <li>升级百分比：每次 <b>2%</b></li>
            <li>最高状态上限：原本的 <b>3倍</b></li>
            <li>说明：只有五个格子放入 <b>5个纯粹辉煌</b> 时才会激活修理功能</li>
        </ul>
        
        <p><b>科技解锁系统（右上角）：</b></p>
        <p>根据放入的物品解锁不同科技等级：</p>
        <ul>
            <li><b>混沌水晶</b>（zhei_chaoscrystal）：解锁制图桌科技，炼金引擎科技，暗影操控仪科技，太阳雕像科技，书籍科技，远古科技（整塔），天体祭坛科技，暗影术基座科技，辉煌铁匠铺科技（就是说后期只需要一个混沌水晶即可解锁所有）</li>
            <li><b>星空宝石</b>（zhe_xkbaoshi）：解锁制图桌科技，炼金引擎科技，暗影操控仪科技，太阳雕像科技，书籍科技，远古科技（整塔），天体祭坛科技</li>
            <li><b>彩虹宝石</b>（opalpreciousgem）：解锁制图桌科技，炼金引擎科技，暗影操控仪科技，太阳雕像科技，书籍科技（就是老奶奶的书架）</li>
            <li><b>太阳火种</b>（zhei_sunfires）：解锁制图桌科技，炼金引擎科技，暗影操控仪科技，太阳雕像科技（百宝专属科技）</li>
            <li><b>月食遗物</b>（zhei_eclipserelics）：解锁制图桌科技和炼金引擎科技</li>
        </ul>
        
        <p><b>控制按钮功能：</b></p>
        <ul>
            <li><b>控制按钮：</b>开启/关闭万物百宝的所有自动功能，状态显示：显示当前控制状态、收集间隔、催熟功能状态，提示信息：显示各宝石功能说明</li>
            <li><b>收集按钮：</b>手动触发一次收集，说明：收集容器中已有的同类物品</li>
            <li><b>整理按钮：</b>整理左侧150个格子的物品，整理规则：按物品类型分类排序，优先合并同类物品，支持列锁定功能（锁定列不参与整理）</li>
            <li><b>开关按钮：</b>控制秒杀亮茄功能的开关，说明：只有当控制按钮状态是开启，开关按钮状态是打开，且放入紫宝石时，秒杀亮茄功能才会生效</li>
            <li><b>锁定/解锁按钮（10个）：</b>锁定/解锁指定区块(15个格子)，说明：锁定的区块在整理时会完全跳过，不会整理其中的物品</li>
        </ul>
        
        <p><b>反鲜功能系统：</b></p>
        <p>根据配置选择反鲜模式：</p>
        <ul>
            <li><b>模式1：</b>反鲜（反鲜速率 <b>1000%</b>）</li>
            <li><b>模式2：</b>月圆反鲜（默认）
                <ul>
                    <li>冰块：完全停止腐烂（0倍腐烂率）</li>
                    <li>其他物品：<b>0.1倍</b>腐烂率（类似白熊冰箱）</li>
                    <li>月圆触发：月圆开始时触发反鲜效果</li>
                    <li>反鲜机制：
                        <ul>
                            <li>单次恢复值：<b>3.5点</b>新鲜度</li>
                            <li>随机选择新鲜度低于 <b>99.5%</b> 的物品进行恢复</li>
                            <li>优先恢复新鲜度最低的物品</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        
        <p><b>宝石掉落系统：</b></p>
        <ul>
            <li>触发条件：
                <ul>
                    <li>夜晚触发</li>
                    <li>每 <b>N天</b> 触发一次（N = 配置的宝石掉落间隔，默认 <b>8天</b>）</li>
                    <li>前150个格子必须全部是金块（goldnugget）</li>
                </ul>
            </li>
            <li>掉落物品：每种宝石各 <b>1个</b>
                <ul>
                    <li>红宝石（redgem）</li>
                    <li>蓝宝石（bluegem）</li>
                    <li>绿宝石（greengem）</li>
                    <li>黄宝石（yellowgem）</li>
                    <li>紫宝石（purplegem）</li>
                    <li>橙宝石（orangegem）</li>
                </ul>
            </li>
        </ul>
        
        <p><b>礼物功能：</b></p>
        <ul>
            <li>功能：可作像二本一样靠近领取礼物</li>
        </ul>
        
        <p><b>UI位置调整：</b></p>
        <ul>
            <li>功能：可以拖动UI调整位置</li>
            <li>操作：鼠标放在UI中间，<b>ALT+鼠标右键</b>拖动</li>
        </ul>
        
        <p style="margin-top: 20px; padding: 10px; background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;"><b>PS：</b>如遇某个功能未生效，请最先查看控制按钮是处于开启状态吗，那个是总开关。</p>
    `,
    "tc_chest_small": `
        <p><b>百宝小型</b>（游戏内名 <b>万物百宝小型</b>，预制体 <code>tc_chest_small</code>）是[[万物百宝]]的精简版建筑：<b>更小号的收纳界面</b>，保留钥物解锁科技、橙宝石全图收集与整理等核心体验，<b>不包含</b>大件万物百宝那样的多宝石自动化格子。</p>

        <p><b>制作配方：</b>[[月食遗物]] × 1 + [[太阳火种]] × 1 + 金块 × 25</p>
        <p><b>科技要求：</b>太阳雕像科技（需在[[太阳雕像仿品]]旁解锁与放置）；<b>不可拆解</b></p>

        <p><b>容器布局：</b></p>
        <ul>
            <li><b>左侧 45 格：</b>主收纳区，<b>无限堆叠</b>；面板上有<b>整理</b>按钮，仅整理这 45 格</li>
            <li><b>右上 1 格（科技钥物）：</b>放入物品决定解锁的科技树，规则与万物百宝右上角钥物一致——例如[[混沌水晶]]、[[星空宝石]]、彩虹宝石、[[太阳火种]]、[[月食遗物]]等（单格任选其一）</li>
            <li><b>右下 1 格：</b>任意物品格；当<b>控制</b>为<b>开</b>且本格放入<b>橙宝石</b>时，启用与万物百宝共用的<b>全图自动收集</b>逻辑（收集规则、黑名单等与大百宝一致）</li>
        </ul>

        <p><b>控制与收集间隔：</b></p>
        <ul>
            <li><b>控制</b>为总开关：关闭时不会自动收集</li>
            <li>小型百宝面板提供间隔切换（如默认、30 秒、1 游戏日等，以游戏内按钮说明为准）；也可由[[星翼]]等在符合条件时改写间隔</li>
        </ul>

        <p><b>保鲜与月圆：</b></p>
        <ul>
            <li>使用与万物百宝相同的模组保鲜配置（模式 1 持续反鲜 / 模式 2 月圆反鲜等）</li>
            <li>在<b>月圆反鲜</b>模式下，<b>满月</b>时会对箱内食物做一次<b>新鲜度恢复</b>（单次总量有限，随机选取未满新鲜的物品）</li>
        </ul>

        <p><b>宝石之夜：</b></p>
        <ul>
            <li>在夜晚且到达配置的间隔天数时，若<b>左侧 45 格全部为金块</b>，会掉落红宝石、蓝宝石、绿宝石、黄宝石、紫宝石、橙宝石各 1（与大百宝同类机制，格子数量对应为 45 格）</li>
        </ul>

        <p><b>礼物：</b>带有礼物机标签，可靠近领取礼物（表现接近二本礼物机制）。</p>

        <p><b>界面拖动：</b>面板格子外围设有透明拖拽区，按模组提示使用<b>右键拖动</b>调整位置；也可使用全局「复原百宝界面位置」重置存档中的面板坐标。</p>

        <p><b>皮肤：</b>支持与万物百宝共用的资源展示月亮主题皮肤（如「万物百宝小型-月亮」）。</p>
    `,
    "zhei_xinglan": `
        <p><b>星澜</b>是<b>万物百宝专属角色</b>，需与万物百宝模组一同开启。具备空间亲和、等级成长与多项屏幕技能，并与百宝料理、材料深度联动。</p>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">一、模组与选人信息</h3>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>名称</b></td><td style="border:1px solid #ccc; padding:8px;">星澜</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>标题</b></td><td style="border:1px solid #ccc; padding:8px;">在宇宙中旅行的少女 / 具有空间亲和</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>生存评价</b></td><td style="border:1px solid #ccc; padding:8px;">在永恒大陆上面来回穿梭</td></tr>
        </table>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">二、三维与等级成长</h3>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:120px;"><b>生命</b></td><td style="border:1px solid #ccc; padding:8px;">基础 <b>200</b>，满 10 级上限 <b>350</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>饥饿</b></td><td style="border:1px solid #ccc; padding:8px;"><b>200</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>理智</b></td><td style="border:1px solid #ccc; padding:8px;">基础 <b>150</b>，每升 1 级 <b>+35</b>（满级 +350）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>攻击倍率</b></td><td style="border:1px solid #ccc; padding:8px;">0 级 <b>1 倍</b>，满级 <b>2 倍</b>，随等级线性提升</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>减伤</b></td><td style="border:1px solid #ccc; padding:8px;">每级 <b>+2.5%</b> 伤害吸收，满级 <b>25%</b>（机制类似薇格弗德）</td></tr>
        </table>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">三、开局与防刷</h3>
        <ul>
            <li><b>初始物品：</b>[[解密后的星空]] × 1 + [[星星粉尘]] × 10</li>
            <li><b>防刷：</b>同一档内换角色不会重复获得第二份[[解密后的星空]]；开局[[星星粉尘]]会归一化为 10 个</li>
            <li><b>经验保留：</b>换人物再选回星澜时，等级经验不会清零</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">四、特质与爱好</h3>
        <ul>
            <li><b>最喜爱：</b>[[熊猫棕子]]，生命 / 饥饿 / 理智收益 <b>× 1.8</b></li>
            <li><b>科技：</b>自带一级科学加成（类似维克巴顿）</li>
            <li><b>读书：</b>天生会读书；可读能力勋章专属书而<b>无需佩戴智慧勋章</b>（0 级可读，1 级前还不能制作书籍类配方）</li>
            <li><b>诅咒：</b>免疫猴子诅咒</li>
            <li><b>0 级特质：</b>随身携带或手持五种<b>热能工具</b>（裂隙斧 / 镐 / 铲 / 锤 / 锄）时，工具储存的温度不会被动下降</li>
            <li><b>表情：</b>特定舞蹈表情期间，会周期性照料附近农田作物（约 25 格内）</li>
            <li><b>棱镜：</b>自带星界亲和，靠近棱镜颤栗花不会惊动它</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">五、等级与经验</h3>
        <ul>
            <li><b>满级：</b>10 级；简单模式每级 <b>300</b> 经验（共 3000），困难模式每级 <b>750</b>（共 7500），可在模组设置中切换</li>
            <li><b>[[经验星尘]]：</b>仅星澜食用，每颗 <b>+50</b> 经验</li>
            <li><b>Boss 掉落：</b>星澜<b>击杀</b>大型 Boss 或雕像 Boss 时，按概率在尸体处额外掉落 1 颗（默认 <b>30%</b>，可在模组设置中调整）</li>
            <li><b>助攻：</b>对同一 Boss 造成有效攻击后，若由<b>他人完成击杀</b>，星澜也可按同样概率获得掉落（多阶段 Boss 按当前阶段计算；克劳斯须进入二阶段）</li>
            <li><b>幸运：</b>佩戴马蹄铁等提升幸运的装备时，掉落概率还有额外加成（最多约再提高 35 个百分点）</li>
            <li><b>界面：</b>屏幕会显示当前等级与本级经验进度</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">六、各等级解锁（摘要）</h3>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px; width:48px;"><b>等级</b></td><td style="border:1px solid #ccc; padding:6px;"><b>解锁内容</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">0</td><td style="border:1px solid #ccc; padding:6px;">人物栏可制荆棘甲、女武神盔、茶几、五种热能工具、热能陷阱、裂隙药膏等；百宝联动可炼虫腺体（[[火焰牛排]]×2）、[[太阳火种]]（[[火焰牛排]]×100）等</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">1</td><td style="border:1px solid #ccc; padding:6px;">采集 / 建造 / 烹饪 / 播种 / 收获等动作<b>明显加快</b>；可制作书籍类配方；[[星空伞]]、[[星空基站套装]]、[[星空盛宴]]（炼金引擎人物配方）；种子、空瓶、堆肥纸、猴尾草等合成；百宝[[百宝瓶]]（月亮玻璃×5）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">2</td><td style="border:1px solid #ccc; padding:6px;">屏幕技能<b>「星河之邀」</b>；从任意锅收菜时<b>概率额外获得随机调味版</b>（基础 30%，3 级起每级 +10%）；可制小恶魔灵魂、绝望石甲、绝望头盔；棱镜电气重铸台旁可制作[[灵魂契约]]；人物栏 500 金锭可合成子圭奇型岩</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">3</td><td style="border:1px solid #ccc; padding:6px;">屏幕技能<b>「星河治愈」</b>：点地释放法阵（消耗 15 理智 + 15 饥饿，冷却 60 秒）；可制沙之石；起锅调味概率继续随等级上升</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">4</td><td style="border:1px solid #ccc; padding:6px;">四季书 [[春分]] / [[夏立]] / [[秋收]] / [[冬藏]]（[[太阳雕像仿品]]四阶科技 + [[经验星尘]]×3 等）；食人花种子合成</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">5</td><td style="border:1px solid #ccc; padding:6px;">黄 / 绿 / 彩虹宝石、硝石、大理石、月岩、金丝雀羽毛、独角鲸角等人物栏转化配方</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">10</td><td style="border:1px solid #ccc; padding:6px;">纯粹辉煌、虚空布、[[星星粉尘]]（[[星星碎片]]×5 转化）</td></tr>
        </table>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">七、屏幕技能</h3>
        <p><b>星河之眼（夜视）</b></p>
        <ul>
            <li>技能栏或快捷键开启（默认 <b>H</b>，可在[[百宝花杖]]→快捷键设置中修改，也可选「无」仅用按钮）</li>
            <li>开启后持续消耗约 <b>0.6 饥饿 / 秒</b>、<b>0.5 理智 / 秒</b></li>
            <li>沙尘暴中若无护目镜则无法开启，已开会被强制关闭</li>
        </ul>
        <p><b>星河之邀（2 级）</b></p>
        <ul>
            <li>消耗 <b>10 理智 + 10 饥饿</b>，在附近队友身旁生成<b>星界道标</b>（持续约 10 秒）</li>
            <li>队友右键触摸道标可<b>传送到星澜身边</b>；技能冷却与道标存在时间一致</li>
        </ul>
        <p><b>星河治愈（3 级）</b></p>
        <ul>
            <li>点地释放：消耗 <b>15 理智 + 15 饥饿</b>，冷却 <b>60 秒</b>，施法距离约 <b>12</b> 格</li>
            <li>法阵半径约 <b>8</b>，持续 <b>48 秒</b>；圈内星澜与队友缓慢回血，并获得 <b>+10% 攻击与移速</b>（离圈或法阵结束消失）</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">八、影袭连击</h3>
        <ul>
            <li>对同一目标普通攻击累计 <b>10</b> 次后，触发<b>四道分身</b>从四周突进</li>
            <li>每道分身伤害默认 <b>100</b>（模组设置可选 50 / 75 / 100 / 125 / 150 / 200）</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">九、锅收菜调味（2 级起）</h3>
        <ul>
            <li>星澜从<b>任意锅</b>收取成品时，概率额外获得一份<b>随机调味版</b>同种料理（该料理须有对应调味版；棱镜 mod 收录的种类同样算在内）</li>
            <li>2 级概率为基础 <b>30%</b>；3 级起每升 1 级再 <b>+10%</b>（上限 100%）</li>
            <li>[[白熊冰箱]]的「收锅」功能与上述规则一致</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">十、专属道具（详见各词条）</h3>
        <ul>
            <li><b>传送：</b>[[星空伞]] + [[星空基站套装]] — 手持伞右键选基站，再在地图上点选折跃；附近约 <b>3 格</b>内队友可<b>一同传送</b>；伞耐久可用[[星星碎片]]补充（约 5%/次）</li>
            <li><b>烹饪：</b>[[星空盛宴]] — 研磨 / 烹饪 / 调味三合一便携锅，<b>1 级</b>可制作（[[星星粉尘]]×10 + [[熊猫棕子]]×8 + 蓝宝石×2）；部署后<b>队友可用</b>；锅内保鲜可在模组设置中单独调整</li>
            <li><b>四季书：</b>[[春分]] / [[夏立]] / [[秋收]] / [[冬藏]] — <b>4 级</b>、太阳雕像四阶科技；<b>仅星澜</b>可诵读改季，[[薇克巴顿]]不可用</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">十一、模组设置</h3>
        <ul>
            <li>影袭分身单次伤害、等级经验模式（简单 / 困难）、Boss 经验星尘掉落概率</li>
            <li>[[星空盛宴]]锅内保鲜强度（与万物百宝箱类设置相互独立）</li>
        </ul>

        <h3 style="margin:1em 0 0.5em; color:#c0392b;">十二、与其他模组联动</h3>
        <p>星澜必须和<b>万物百宝</b>一起开；未开百宝时选人界面会提示。下面按常见模组说明已做的联动——没装对应模组时，相关功能自然用不上，一般也不影响其它玩法。</p>

        <p><b>万物百宝（必开）</b></p>
        <ul>
            <li>[[解密后的星空]]、[[星星粉尘]]、[[星星碎片]]、[[熊猫棕子]]、[[火焰牛排]]、[[太阳火种]] 等核心材料均来自百宝</li>
            <li>[[百宝花杖]]里可改<b>星河之眼</b>快捷键（默认 H）；星澜皮肤在百宝小店 / 花杖皮肤页统一管理</li>
            <li>[[白熊冰箱]]「收锅」同样享受星澜 2 级起的<b>起锅调味</b>加成</li>
            <li>悬停星澜或[[星空盛宴]]时，百宝会显示等级、锅内保鲜等信息；锅界面拖拽方式与百宝容器一致</li>
            <li>[[星空盛宴]]「整理储物」的归类顺序与百宝大箱相同</li>
            <li>星澜手持热能园艺锄刨地时，可<b>一次开垦 3×3</b>（与[[封印法杖]]的刨地效果类似）</li>
        </ul>

        <p><b>棱镜</b></p>
        <ul>
            <li><b>2 级</b>可在激活的<b>电气重铸台</b>旁制作[[灵魂契约]]，材料与棱镜原版相同（灵魂×20、地图卷轴×5、告密的心×2、噩梦燃料×20）</li>
            <li><b>2 级</b>还可用 500 金锭在人物栏合成<b>子圭奇型岩</b></li>
            <li>靠近棱镜<b>颤栗花</b>不会把它吓跑</li>
            <li>[[星空盛宴]]可<b>无视月圆</b>制作棱镜月相四件套——<b>月饼</b>、<b>月酿</b>须在<b>白天</b>；<b>花儿粑</b>、<b>花儿酒</b>须在<b>黑夜</b>（食材搭配与棱镜一致，仅改为看昼夜、不等月圆）</li>
        </ul>

        <p><b>能力勋章</b></p>
        <ul>
            <li>星澜<b>不用戴智慧勋章</b>也能读勋章专属书，例如：陷阱重置、不朽、怪物、未解、自动陷阱、种植书等</li>
            <li>[[星空盛宴]]研磨时，会一并识别能力勋章的研磨配方（与原版盐 / 椒 / 蒜 / 蜜等规则并存）</li>
        </ul>

        <p><b>丰耘秘境</b></p>
        <ul>
            <li>[[星空盛宴]]研磨支持丰耘秘境的专属原料；精华类材料的产出份数与丰耘锅一致</li>
        </ul>

        <p><b>永不妥协</b></p>
        <ul>
            <li><b>爆破蓝莓：</b>星澜靠近不会引爆；星澜挖掘时也不会连锁炸响周围的蓝莓</li>
        </ul>

        <p><b>联机版官方内容</b></p>
        <ul>
            <li>制作[[夏立]]需要<b>红眼冠</b>（联机版「猪镇」饰品）</li>
            <li>四季书需先解锁[[太阳雕像仿品]]四阶科技</li>
            <li>[[星空盛宴]]另支持<b>原版沃利便携烹饪锅</b>食谱；安装了<b>神话书说</b>等模组时，须其料理写入便携锅食谱池方可制作（未满四格也会预览，与[[饭桶]]类似）</li>
        </ul>

        <p><b>信息辅助类模组（可选）</b></p>
        <ul>
            <li>安装 <b>ShowMe</b> 时，悬停[[星空盛宴]]格子可查看腐烂等信息</li>
            <li>安装 <b>Insight</b> 时，悬停锅本体可查看锅内保鲜倍率</li>
        </ul>
    `,
    "zhei_character_test": `
        <p>该角色背景故事：来自永恒领域的神秘探险家。</p>
    `,
    "v1.0.1": `
        <p>修复了已知的所有贴图错误。</p>
    `,
    "zhei_wetgoop": `
        <p><b>饭桶</b>是一款自动烹饪工具，可以自动将食材放入范围内的锅并开始烹饪。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/fantong.png" alt="饭桶" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>使用方法：</b></p>
        <ul>
            <li>装备法杖后，右键法杖唤出施法轮盘</li>
            <li>在饭桶的 4 个格子中放入食材作为模板</li>
            <li>左侧会显示将要做出的食物</li>
            <li>施法后自动将身上的食材放入范围内的锅并开始烹饪</li>
        </ul>
        
        <p><b>核心功能：</b></p>
        <ul>
            <li><b>自动做饭：</b>施法后自动将食材放入范围内的锅并开始烹饪</li>
            <li><b>作用范围：</b>固定 12 格</li>
            <li><b>容器空间：</b>4 格，用于放置食材模板</li>
            <li><b>消耗：</b>每次施法消耗 10 点理智值</li>
        </ul>
        
        <p><b>模式切换（4 种模式）：</b></p>
        <ul>
            <li><b>模式 1：</b>仅普通锅（百宝自己的锅也可以）</li>
            <li><b>模式 2：</b>仅大厨锅（需要大厨能力）</li>
            <li><b>模式 3：</b>仅月炆宝炊</li>
            <li><b>模式 4：</b>所有锅（这里的所有指的是上面三种都生效）</li>
        </ul>
        
        <p><b>制作配方：</b>食谱 × 1 + 木炭 × 5 + 莎草纸 × 1</p>
        <p><b>制作科技：</b>炼金引擎（二本）</p>
        
        <p><span style="color:orange;">提示：饭桶不是桶</span></p>
    `,
    "zhei_zfantong": `
        <p><b>真饭桶</b>（预制体 <code>zhei_zfantong</code>）是落地<b>烹饪站建筑</b>：在联动范围内从冰箱类容器<b>扣取食材</b>，抛物飞入附近的<b>空锅</b>并自动开煮。可视作手持[[饭桶]]的「定点升级版」——不消耗理智、不依赖装备施法，用书本式界面编排三排方案、浏览料理图鉴并一键下锅。</p>

        <p><b>制作配方：</b>石砖 × 15 + 电子元件 × 10 + 荧光果 × 8 + [[饭桶]] × 1（会<b>消耗</b>一只饭桶）</p>
        <p><b>制作科技：</b>暗影操控器（四本）；制作栏为百宝结构/容器类</p>

        <p><b>两种距离（勿混用）：</b></p>
        <ul>
            <li><b>联动半径</b>（默认世界单位 <b>12</b>，模组配置 <code>ZHEI_ZFANTONG_LINK_RANGE</code>，建议取 4 的倍数）：以真饭桶为中心的<b>球半径</b>，用于发现[[白熊冰箱]]/盐盒/原版冰箱、校验扣料是否在范围内、搜索可用空锅。放置预览圈与悬停文案（「联动识别半径：N，约合 X 格」）与此一致</li>
            <li><b>贴身范围</b>（固定约 <b>4</b> 世界单位 ≈ 1 格）：打开界面、点「烹饪」、同步锁定方案等 RPC 须在此距离内；<b>不会</b>随联动半径变大而在远处操作</li>
            <li>占用期间若开门者<b>走远</b>超出贴身范围，服务端会强制关界面、释放占用并播放关闭动画；主动点「关闭」也会释放占用</li>
        </ul>

        <p><b>认可的「食材来源」：</b></p>
        <ul>
            <li>默认：[[白熊冰箱]]（<code>bx_binxiang</code>）、原版冰箱、盐盒</li>
            <li>棱镜：月藏宝匣 <code>hiddenmoonlight</code>、月藏宝匣·无限 <code>hiddenmoonlight_inf</code>（白名单兼容）</li>
            <li>全息投影魔方等：预制体带 <code>zhei_zfantong_fridge</code> 标签且具备标准容器组件即可参与</li>
            <li>其它模组容器：在预制体上添加同上标签即可接入</li>
        </ul>

        <p><b>界面结构：</b></p>
        <ul>
            <li>右键专用动作「打开」（<code>ZHEI_ZFANTONG_OPEN</code>，联机/专用服可用；他人占用时提示「队友使用中」）</li>
            <li><b>「烹饪」页</b>（主工作区）：
                <ul>
                    <li>左侧：联动范围内冰箱/盐盒食材格（可筛选肉/菜/果/其他），带滚动条</li>
                    <li><b>第一步</b>：三排 × 四格食材槽；点空槽切换当前编辑排；每排可「锁定」保留四格（关界面仍保留），「选用」指定哪一排入锅；点槽内食材可清除</li>
                    <li><b>第二步</b>：切换锅型档位（普通锅 / 大厨便携锅 / [[百宝炊具]]）</li>
                    <li><b>第三步</b>：根据当前四格与锅型显示预测成品与属性</li>
                    <li>底部「关闭 / 烹饪」：确认后从冰箱扣料，食材<b>抛物飞入</b>目标锅（飞行中带 <code>zhei_wetgoop_exclude_autocollect</code>，不会被百宝自动收集吸走），四格到齐后自动 <code>StartCooking</code></li>
                </ul>
            </li>
            <li><b>料理书签</b>：烹饪锅 / 大厨便携锅 / 百宝料理 / 模组料理等（与百宝小店料理页数据同源；「模组料理」页可点「刷新模组料理」重扫列表）。在书签里点某道菜：先在「烹饪」页选好锅型，再点该菜可<b>自动选料</b>并下锅（<code>zhei_zfantong_recipe_fill</code>，优先较便宜的同类食材；百宝与原版料理均有四格需求表）</li>
        </ul>

        <p><b>口渴 mod 兼容（<code>zhei_thirst_kettle_recipes</code>）：</b></p>
        <ul>
            <li>启用<b>口渴 mod</b>且其已向 <code>cooking.recipes</code> 注册对应配方表时，真饭桶 UI 会<b>动态追加</b>下列书签（未检测到则不显示；顺序固定为 煮饮 → 酿酒 → 蒸馏）：
                <ul>
                    <li><b>「煮饮」</b>：读取 <code>kettle</code> 或 <code>portablekettle</code>（茶壶 / 便携茶壶）</li>
                    <li><b>「酿酒」</b>：读取 <code>brewery</code>（酿酒桶）</li>
                    <li><b>「蒸馏」</b>：读取 <code>distillers</code>（蒸馏台）</li>
                </ul>
            </li>
            <li><b>仅查阅，不能自动下锅</b>：这些书签用于浏览饮品配方与属性，<b>不会</b>像烹饪锅 / 百宝料理页那样点选后自动选料、抛物入锅；仍须在口渴 mod 自己的煮饮站建筑上制作</li>
            <li>展示内容：中文饮品名、配方字符串（含手写覆盖与推断兜底）、生命 / 饥饿 / 理智 / <b>口渴</b> 四维属性，以及 <code>oneat_desc</code> 食用效果（由 <code>zhei_thirst_zh_strings</code> 汉化，不依赖当前游戏语言）</li>
            <li>会自动跳过失败产物占位（如 <code>goopydrink</code>、<code>spoiled_drink</code>、<code>disinfectant</code> 等）</li>
            <li>与百宝小店「料理」页的口渴标签逻辑一致；书签总数 ≥ 7 时界面会分两行排布标签</li>
        </ul>

        <p><b>锅型与批量烹饪：</b></p>
        <ul>
            <li>三档锅型对应三套预测表：普通锅（非大厨、非百宝炊具）、大厨便携锅（须玩家带 <code>masterchef</code> 标签）、[[百宝炊具]]（<code>zhei_cookpot1</code>）</li>
            <li>目标须为<b>空锅</b>：未在煮、未完工、容器关闭、无在途飞行占位；<b>不含</b>便携香料站</li>
            <li>一次「烹饪」会按联动范围内<b>空锅数量</b>与<b>各 prefab 总库存</b>取较小值，尽量<b>同时入多口锅</b>；UI 四格主要用于指定配方，补料时可从其它冰箱按距离就近取同 prefab</li>
            <li>扣料中途失败时，已扣下的料会丢在目标锅脚下（不会退回冰箱）</li>
        </ul>

        <p><b>方案持久化：</b></p>
        <ul>
            <li>锁定的排会同步至服务端实体存档（<code>_zhei_zfantong_row_state</code>），读档后可通过 RPC 拉回；客户端另有按 GUID 的会话缓存</li>
            <li>未锁定排在下厨后关界面会清空；锁定排缺货时飘字「锁定方案已保留，范围内冰箱暂缺该食材…」</li>
        </ul>

        <p><b>烹饪失败提示（节选，以游戏内飘字为准）：</b></p>
        <ul>
            <li>离真饭桶太远；冰箱无效或已失效；有食材不在联动范围内；格子无效；槽里不是可用食材；联动范围内食材不够；附近没有符合档位的空锅；目标锅失效；取料失败（可能被别人先用掉）等</li>
        </ul>

        <p><b>多人规则：</b>同一时间仅一名玩家占用；他人无法打开。开门者离档（<code>ms_playerleft</code>）会释放占用并关动画。</p>

        <p><b>其它：</b>手持可部署物靠近真饭桶时，会显示与联动半径一致的辅助圈（与万物百宝 deployhelper 同类）；可用锤子拆除（工作量 4），掉落合成材料类战利品。</p>
    `,
    "zhei_qianjisan": `
        <p><b>千机伞</b>是一款具有跳劈能力的强力武器，攻击附带<b>高贵的真伤</b>，并具有随机伤害倍率、吸血效果等多种特性。</p>
        
        <p><b>高贵的真伤：</b></p>
        <ul>
            <li>每次攻击附带一定量的真实伤害，无视护甲与抗性</li>
        </ul>
        
        <p><b>基础武器属性：</b></p>
        <ul>
            <li>基础伤害：<b>75</b></li>
            <li>攻击范围：<b>3</b></li>
            <li>移动速度加成：<b>5%</b></li>
            <li>耐久：<span style="color:green;">无耐久</span></li>
        </ul>
        
        <p><b>随机伤害倍率：</b></p>
        <ul>
            <li><b>0.75倍：</b>10% 概率</li>
            <li><b>1.0倍：</b>70% 概率</li>
            <li><b>1.5倍：</b>15% 概率</li>
            <li><b>5.0倍：</b>5% 概率</li>
        </ul>
        <p><b>保底机制：</b>连续29次未出5倍时，第30次必定5倍。保底计数器在触发5倍后重置。</p>
        
        <p><b>吸血效果：</b></p>
        <ul>
            <li>吸血比例：<b>20%</b>（按实际伤害计算）</li>
            <li>仅在玩家受伤时生效</li>
            <li>仅对可吸血目标生效（有生命值的目标）</li>
        </ul>
        
        <p><b>跳劈能力：</b></p>
        <ul>
            <li>跳劈距离：<b>15</b></li>
            <li>跳劈过程中不会触发陷阱（比如妥协的海象夹子）</li>
        </ul>
        
        <p><b>位面伤害：</b></p>
        <ul>
            <li>位面伤害：<b>10点</b>（对位面生物额外伤害）</li>
        </ul>
        
        <p><b>防雨功能：</b></p>
        <ul>
            <li>防雨效果：<b>100%</b>（完全防雨，等同于原版雨伞）</li>
        </ul>
        
        <p><b>制作配方：</b>蜘蛛丝 × 25 + [[猫屎咖啡]] × 1 + 火腿棒 × 1</p>
        <p><b>制作科技：</b>太阳雕像科技</p>
    `,
    "zhei_qianjisan_chaos": `
        <p><b>千机伞混沌</b>是[[千机伞]]经[[混沌水晶]]变异后的混沌武器，在保留跳劈与防雨等能力的基础上，拥有<b>高贵的真伤</b>与<b>百分比伤害</b>，且攻击时有概率触发铥矿护盾。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>手持[[混沌水晶]]，对物品栏中的[[千机伞]]使用，即可将其变异为千机伞混沌（消耗混沌水晶）</li>
        </ul>
        
        <p><b>高贵的真伤与百分比伤害：</b></p>
        <ul>
            <li>每次攻击附带真实伤害，无视护甲与抗性</li>
            <li>百分比伤害：目标最大血量越高，造成的伤害越高，Boss战表现突出</li>
            <li>对低血量目标有伤害保底，不低于正常千机伞</li>
        </ul>
        
        <p><b>铥矿护盾：</b></p>
        <ul>
            <li>攻击时有 <b>30%</b> 概率触发铥矿护盾效果</li>
        </ul>
        
        <p><b>保留能力：</b></p>
        <ul>
            <li>跳劈能力、防雨功能等与[[千机伞]]一致</li>
        </ul>
    `,
    "book_moon_chaos": `
        <p><b>月之魔典混沌</b>是月之魔典经[[混沌水晶]]变异后的混沌书籍，读书后会将月相变为<b>月黑</b>。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>手持[[混沌水晶]]，对物品栏中的<b>月之魔典</b>（book_moon）使用，即可将其变异为月之魔典混沌（消耗混沌水晶）</li>
        </ul>
        
        <p><b>使用效果：</b></p>
        <ul>
            <li>阅读后：将当前月相变为<b>月黑</b></li>
        </ul>
    `,
    "book_horticulture_chaos": `
        <p><b>园艺学简编混沌</b>是园艺学简编经[[混沌水晶]]变异后的混沌书籍，催生时不影响巨大化、无数量限制，并可催熟起源模组的琉璃树结果与水中木。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>手持[[混沌水晶]]，对物品栏中的<b>园艺学简编</b>（book_horticulture）使用，即可将其变异为园艺学简编混沌（消耗混沌水晶）</li>
        </ul>
        
        <p><b>催生效果：</b></p>
        <ul>
            <li>催生不影响作物巨大化</li>
            <li>无催生数量限制</li>
            <li>可催熟起源模组中的琉璃树结果</li>
            <li>可催生水中木</li>
        </ul>
    `,
    "bomb_lunarplant_chaos": `
        <p><b>亮茄炸弹混沌</b>是亮茄炸弹经[[混沌水晶]]变异后的混沌投掷武器，可无限投掷且不消耗物品，落地爆炸后会在敌人之间弹射，每次弹射都会爆炸；投掷冷却、弹射次数与伤害可在模组配置中调整。<b>使用时身上需携带纯粹辉煌</b>。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>手持[[混沌水晶]]，对物品栏中的<b>亮茄炸弹</b>（bomb_lunarplant）使用，即可将其变异为亮茄炸弹混沌（消耗混沌水晶）</li>
        </ul>
        
        <p><b>使用方式：</b></p>
        <ul>
            <li>身上需携带<b>纯粹辉煌</b>方可正常使用</li>
            <li>投掷或攻击时生成弹体，不消耗物品</li>
            <li>有投掷冷却时间（模组配置可调）</li>
        </ul>
        
        <p><b>爆炸与弹射：</b></p>
        <ul>
            <li>落地/命中时爆炸，随后在敌人之间弹射</li>
            <li>每次弹射都会造成爆炸伤害</li>
            <li>最大弹射次数、平面伤害、冷却时间等可在模组配置中调整</li>
        </ul>
    `,
    "zhei_yushan_chaos": `
        <p><b>羽扇混沌</b>是[[羽扇]]经[[混沌水晶]]变异后的混沌工具，一次可划出<b>两道</b>旋风，第二道会飞向与目标同距离的最近单位；后续模组将增加配置以调节旋风数量。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>手持[[混沌水晶]]，对物品栏中的[[羽扇]]使用，即可将其变异为羽扇混沌（消耗混沌水晶）</li>
        </ul>
        
        <p><b>旋风效果：</b></p>
        <ul>
            <li>一次划出 <b>两道</b> 旋风</li>
            <li>第二道旋风飞向与目标同距离的最近单位</li>
            <li>后续可通过模组配置调节旋风数量</li>
        </ul>
    `,
    "zhei_zishuijingdao": `
        <p><b>紫水晶刀</b>是一把高伤害武器，具备斩杀、充能、无限耐久强化等功能。适合需要高伤害和斩杀能力的战斗场景。</p>
        
        <p><b>基础武器属性：</b></p>
        <ul>
            <li>基础伤害：<b>59</b></li>
            <li>位面伤害：<b>12</b></li>
            <li>对暗影阵营伤害加成</li>
        </ul>
        
        <p><b>斩杀能力：</b></p>
        <ul>
            <li>当目标血量 <b>≤ 10%</b> 时，直接斩杀</li>
            <li>无视剩余血量，直接击杀</li>
        </ul>
        
        <p><b>耐久系统：</b></p>
        <ul>
            <li>最大耐久：<b>300</b></li>
            <li>初始耐久：<b>300</b></li>
            <li>耐久为 0 时武器会消失</li>
            <li>可通过填充噩梦燃料恢复耐久</li>
        </ul>
        
        <p><b>充能系统：</b></p>
        <ul>
            <li>充能材料：<b>噩梦燃料</b>（nightmarefuel）</li>
            <li>充能方式：鼠标拿着噩梦燃料，右键点击物品栏中的紫水晶刀</li>
            <li>充能效果：每个噩梦燃料恢复 <b>50 点</b>耐久</li>
            <li>充能上限：不能超过最大耐久（300）</li>
        </ul>
        
        <p><b>无限耐久强化：</b></p>
        <ul>
            <li>强化材料：<b>混沌水晶</b>（zhei_chaoscrystal）</li>
            <li>强化方式：鼠标拿着混沌水晶，右键点击物品栏中的紫水晶刀</li>
            <li>强化效果：永久移除耐久，武器变为<span style="color:green;">无限耐久</span></li>
        </ul>
        
        <p><b>制作配方：</b>[[寒冰蛋糕]] × 5 + 玻璃碎片 × 5 + 铥矿碎片 × 5</p>
        <p><b>制作科技：</b>太阳雕像科技</p>
    `,
    "zhei_zishuijingjian": `
        <p><b>紫水晶剑</b>是一把电击武器，具有耐久、多种充能方式、电击攻击能力，以及对月亮生物的伤害加成。通过[[混沌水晶]]可强化为无限耐久。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li><b>原版坎普斯</b>（krampus）死亡时有 <b>1%</b> 概率掉落</li>
            <li><b>勋章模组 - 淘气坎普斯</b>（medal_naughty_krampus）死亡时有 <b>1%</b> 概率掉落</li>
            <li><b>勋章模组 - 暗影坎普斯</b>（medal_rage_krampus）死亡时有 <b>1%</b> 概率掉落</li>
            <li>玩家淘气值达到50时会出现坎普斯</li>
        </ul>
        
        <p><b>基础武器属性：</b></p>
        <ul>
            <li>基础伤害：<b>55</b>（有耐久时）</li>
            <li>位面伤害：<b>14</b>（有耐久时）</li>
            <li>无耐久时：伤害和位面伤害均为 <b>0</b></li>
        </ul>
        
        <p><b>耐久系统：</b></p>
        <ul>
            <li>最大耐久：<b>500次</b>使用</li>
            <li>初始耐久：<b>500</b>（满耐久）</li>
            <li>耐久为 0 时：武器不会消失，但无法造成伤害</li>
            <li>耐久为 0 时：失去电击攻击能力</li>
        </ul>
        
        <p><b>电击攻击能力：</b></p>
        <ul>
            <li>有耐久时：装备后获得电击攻击能力</li>
            <li>无耐久时：失去电击攻击能力</li>
        </ul>
        
        <p><b>对暗影生物伤害加成：</b></p>
        <ul>
            <li>对月亮阵营生物有额外伤害加成</li>
        </ul>
        
        <p><b>充能方式：</b></p>
        <ul>
            <li><b>方式1 - 避雷针：</b>鼠标拿起剑右键点击已充电的避雷针，直接回满 <b>500</b> 耐久</li>
            <li><b>方式2 - 月熠：</b>鼠标拿起月熠（moonstorm_spark），对着紫水晶剑使用，+<b>100</b> 耐久（消耗1个月熠）</li>
            <li><b>方式3 - 电气石：</b>鼠标拿起紫水晶剑，对着物品栏中的棱镜电气石使用，+<b>100</b> 耐久（消耗电气石10%的能量）</li>
            <li><b>方式4 - 带电晶石：</b>鼠标拿起紫水晶剑，对着物品栏中的带电晶石使用，+<b>125</b> 耐久（消耗1个带电晶石）</li>
        </ul>
        
        <p><b>混沌水晶强化：</b></p>
        <ul>
            <li>可使用[[混沌水晶]]（zhei_chaoscrystal）强化</li>
            <li>强化后：移除耐久系统，变为<span style="color:green;">无限耐久</span></li>
            <li>强化后：永久保持电击攻击能力</li>
        </ul>
    `,
    "zhei_potato_helmet": `
        <p><b>土豆头</b>（prefab：<code>zhei_potato_helmet</code>）</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:12px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:72px; vertical-align:top;"><b>制作</b></td><td style="border:1px solid #ccc; padding:8px;">土豆 ×3、花瓣 ×2</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>科技</b></td><td style="border:1px solid #ccc; padding:8px;">炼金引擎（二本）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>护甲</b></td><td style="border:1px solid #ccc; padding:8px;">耐久 <b>630</b>；<b>80%</b> 防御值；和土豆甲有套装效果。</td></tr>
        </table>
        <p><b>套装效果：土豆套装（耐饿）</b></p>
        <ul>
            <li><b>同时装备：</b>[[土豆头]] + [[土豆甲]]</li>
            <li><b>表现：</b>饥饿消耗显著变慢（耐饿）</li>
        </ul>
        <p><b>与番茄套对比</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px;"></td><td style="border:1px solid #ccc; padding:6px;"><b>番茄头/番茄甲</b></td><td style="border:1px solid #ccc; padding:6px;"><b>土豆头/土豆甲</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><b>材料</b></td><td style="border:1px solid #ccc; padding:6px;">番茄×3 + 花瓣×2（甲多绳子×1）</td><td style="border:1px solid #ccc; padding:6px;">土豆×3 + 花瓣×2（甲多绳子×1）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><b>套装方向</b></td><td style="border:1px solid #ccc; padding:6px;">限伤</td><td style="border:1px solid #ccc; padding:6px;">耐饿</td></tr>
        </table>
    `,
    "zhei_potato_armor": `
        <p><b>土豆甲</b>（prefab：<code>zhei_potato_armor</code>）</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:12px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:72px; vertical-align:top;"><b>制作</b></td><td style="border:1px solid #ccc; padding:8px;">土豆 ×3、花瓣 ×2、绳子 ×1</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>科技</b></td><td style="border:1px solid #ccc; padding:8px;">炼金引擎（二本）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>护甲</b></td><td style="border:1px solid #ccc; padding:8px;">耐久 <b>430</b>；防御值与<b>木甲</b>同档</td></tr>
        </table>
        <p><b>套装效果：土豆套装（耐饿）</b></p>
        <ul>
            <li><b>同时装备：</b>[[土豆头]] + [[土豆甲]]</li>
            <li><b>表现：</b>饥饿消耗显著变慢（耐饿）</li>
        </ul>
        <p><b>与番茄套对比</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px;"></td><td style="border:1px solid #ccc; padding:6px;"><b>番茄头/番茄甲</b></td><td style="border:1px solid #ccc; padding:6px;"><b>土豆头/土豆甲</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><b>材料</b></td><td style="border:1px solid #ccc; padding:6px;">番茄×3 + 花瓣×2（甲多绳子×1）</td><td style="border:1px solid #ccc; padding:6px;">土豆×3 + 花瓣×2（甲多绳子×1）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;"><b>套装方向</b></td><td style="border:1px solid #ccc; padding:6px;">限伤</td><td style="border:1px solid #ccc; padding:6px;">耐饿</td></tr>
        </table>
    `,
    "zhei_tomato_helmet": `
        <p><b>番茄头</b>（prefab：<code>zhei_tomato_helmet</code>）</p>
        <table style="border-collapse:collapse; width:100%; max-width:480px; margin:12px 0;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>项目</b></td><td style="border:1px solid #ccc; padding:8px;"><b>数值</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">耐久</td><td style="border:1px solid #ccc; padding:8px;"><b>630</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">防御值</td><td style="border:1px solid #ccc; padding:8px;"><b>80%</b></td></tr>
        </table>
        <p><b>制作：</b>番茄 ×3、花瓣 ×2　<b>科技：</b>炼金引擎（二本）</p>
        <p><b>套装：</b>与 [[番茄甲]] 组成番茄套装（限伤，<code>zhei_tomato_set_*</code>）。与 [[土豆头]] / [[土豆甲]] 对比见土豆套词条。</p>
        <p><b>限伤效果说明（番茄套装）</b></p>
        <ul>
            <li><b>单次伤害上限：</b>非位面类伤害，单次最多按 <b>50</b> 点参与本套装的限伤结算。</li>
            <li><b>位面伤害：</b><b>不算</b>进上述「单次 50」的限伤规则（位面伤害仍按游戏原有位面/护甲逻辑单独结算）。</li>
            <li><b>与 80% 防御叠加：</b>番茄头提供 <b>80%</b> 防御值时，实际受到的生命扣除大致可按 <b>50 × (1 − 0.8) = 10</b> 理解（先限伤再按防御比例结算；示意算法，以模组内为准）。</li>
        </ul>
    `,
    "zhei_tomato_armor": `
        <p><b>番茄甲</b>（prefab：<code>zhei_tomato_armor</code>）</p>
        <table style="border-collapse:collapse; width:100%; max-width:480px; margin:12px 0;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>项目</b></td><td style="border:1px solid #ccc; padding:8px;"><b>数值</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">耐久</td><td style="border:1px solid #ccc; padding:8px;"><b>430</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;">防御值</td><td style="border:1px solid #ccc; padding:8px;">与<b>木甲</b>相同</td></tr>
        </table>
        <p><b>制作：</b>番茄 ×3、花瓣 ×2、绳子 ×1　<b>科技：</b>炼金引擎（二本）</p>
        <p><b>套装：</b>与 [[番茄头]] 组成番茄套装（限伤，<code>zhei_tomato_set_*</code>）。与 [[土豆头]] / [[土豆甲]] 对比见土豆套词条。</p>
        <p><b>限伤效果说明（番茄套装）</b></p>
        <ul>
            <li><b>单次伤害上限：</b>非位面类伤害，单次最多按 <b>50</b> 点参与本套装的限伤结算。</li>
            <li><b>位面伤害：</b><b>不算</b>进上述「单次 50」的限伤规则（位面伤害仍按游戏原有位面/护甲逻辑单独结算）。</li>
            <li><b>与 80% 防御叠加：</b>番茄头提供 <b>80%</b> 防御值时，实际受到的生命扣除大致可按 <b>50 × (1 − 0.8) = 10</b> 理解（先限伤再按防御比例结算；示意算法，以模组内为准）。</li>
        </ul>
    `,
    "zhei_haotian": `
        <p><b>昊天锤 · 一览</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:10px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>显示名</b></td><td style="border:1px solid #ccc; padding:8px;">昊天锤</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>Prefab</b></td><td style="border:1px solid #ccc; padding:8px;"><code>zhei_haotian</code></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>获取</b></td><td style="border:1px solid #ccc; padding:8px;">仅 [[百宝鼎]] 炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>炼制时间</b></td><td style="border:1px solid #ccc; padding:8px;"><b>3</b> 游戏天（模组可配置）；与 [[星尘盾]] 同档</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>材料</b></td><td style="border:1px solid #ccc; padding:8px; line-height:1.5;">生 / 未烤熟 [[星空灵果]] <code>zhei_xklg</code> ×<b>2</b><br>犀角 <code>minotaurhorn</code> ×<b>1</b><br>铥矿 <code>thulecite</code> ×<b>15</b><br>锤 <code>hammer</code> ×<b>1</b><br>→ <b>1</b> 把</td></tr>
        </table>
        <p><b>战斗与耐久</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px;"><b>项目</b></td><td style="border:1px solid #ccc; padding:6px;"><b>数值 / 说明</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">耐久（次数）</td><td style="border:1px solid #ccc; padding:6px;"><b>225</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">普攻消耗</td><td style="border:1px solid #ccc; padding:6px;">每次命中 <b>1</b> 点</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">凌天一击消耗</td><td style="border:1px solid #ccc; padding:6px;">每次 <b>5</b> 点</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">耐久为 0</td><td style="border:1px solid #ccc; padding:6px;">伤害变为 <b>0</b>，凌天一击伤害为 <b>0</b>，无法再打人及施放<b>有效</b>跳劈</td></tr>
        </table>
        <p><b>攻击类型与伤害</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px; width:160px;"><b>攻击类型</b></td><td style="border:1px solid #ccc; padding:6px;"><b>伤害</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">普攻</td><td style="border:1px solid #ccc; padding:6px;"><b>70</b> + 位面 <b>10</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">凌天一击（AOE 跳劈）</td><td style="border:1px solid #ccc; padding:6px;"><b>200</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">凌天一击 · 落地电场</td><td style="border:1px solid #ccc; padding:6px;">约 <b>20%</b> 概率触发；处于电场中的生物会被<b>持续触电</b>；电场持续约 <b>6.5</b> 秒，半径约 <b>6</b></td></tr>
        </table>
        <p><b>修复（星空灵果）</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:88px;"><b>材料</b></td><td style="border:1px solid #ccc; padding:8px;">仅<b>未烤熟</b> [[星空灵果]]（<code>zhei_xklg</code>）；<b>熟果不能修锤</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>效率</b></td><td style="border:1px solid #ccc; padding:8px;">每颗灵果 = <b>20</b> 点耐久</td></tr>
        </table>
    `,
    "zhei_stardust_shield": `
        <p><b>星尘盾 · 一览</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:10px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>显示名</b></td><td style="border:1px solid #ccc; padding:8px;">星尘盾</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>Prefab</b></td><td style="border:1px solid #ccc; padding:8px;"><code>zhei_stardust_shield</code></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>获取</b></td><td style="border:1px solid #ccc; padding:8px;">[[百宝鼎]]炼制；炼制时间与 [[昊天锤]] 相同，默认 <b>3</b> 日（模组配置可改）。</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>材料</b><br><small>须与鼎内完全一致</small></td><td style="border:1px solid #ccc; padding:8px; line-height:1.5;">[[星星粉尘]] <code>zhei_xingxingfc1</code> ×<b>1</b><br>[[星星碎片]] <code>zhei_xingxingsp</code> ×<b>5</b><br>月亮玻璃 <code>moonglass</code> ×<b>10</b><br>克苏鲁之盾 <code>shieldofterror</code> ×<b>1</b><br>→ 产出 <b>1</b> 面</td></tr>
        </table>
        <p><b>面板与形态</b>（对齐克苏鲁之盾思路）</p>
        <ul>
            <li>可<b>鼠标右键</b>进行盾反，或<b>通过 [[百宝花杖]]</b>设置盾反快捷键。</li>
            <li>可<b>喂食</b>。</li>
            <li><span style="color:#666;">在此感谢棱镜作者梧桐山大佬提供的代码参考与灵感，感谢梧大的付出。</span></li>
        </ul>
        <p><b>盾反 · 启迪碎片（环绕）</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px; width:88px;"><b>项目</b></td><td style="border:1px solid #ccc; padding:6px;"><b>内容</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">上限</td><td style="border:1px solid #ccc; padding:6px;"><b>5</b> 片</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">增长</td><td style="border:1px solid #ccc; padding:6px;">每次<b>盾反成功</b> <b>+1</b> 片</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">挡伤</td><td style="border:1px solid #ccc; padding:6px;"><b>受击</b>时若身上有碎片：用 <b>1</b> 片<b>抵消本次所受伤害</b>并消耗该片</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">卸下</td><td style="border:1px solid #ccc; padding:6px;">卸下盾牌后，碎片<b>仍保留在玩家身上</b>并继续可用于挡伤</td></tr>
        </table>
        <p><b>盾反成功时的其它效果</b></p>
        <ul>
            <li><b>吸血：</b>若血量未满，按本次<b>格挡相关伤害</b>的 <b>8%</b> 回血。</li>
            <li><b>满 5 片：</b>本段<b>举盾结束</b>时清空全部碎片，各自落下<b>月晶陨石</b>：每个目标连砸 <b>5</b> 次，单次 <b>50</b> 伤害。</li>
        </ul>
        <p><b>其它</b></p>
        <ul>
            <li>当碎片数量达到 <b>5</b> 片时，若同时存在<b>很多目标</b>的攻击且本段盾反成功，会<b>锁定所有盾反成功的目标</b>并分别降下月晶陨石。</li>
        </ul>
        <p><b>快捷键</b></p>
        <ul>
            <li>星尘盾<b>盾反 / 举盾</b>可用快捷键（默认 <b>V</b>）；亦可在 [[百宝花杖]] 中设置「星尘盾盾反快捷键」。</li>
        </ul>
    `,
    "zhei_staff": `
        <p><b>封印之杖2</b>是集工具、法术、容器于一体的多功能法杖。提供6个实用法术，支持快速烹饪、双倍食物收集、农场管理等，适合建家和日常使用。</p>
        
        <p><b>基础属性：</b></p>
        <ul>
            <li>移动速度加成：<b>25%</b></li>
            <li>武器伤害：<b>2</b></li>
            <li>装备时：自动打开容器界面（<b>1个格子</b>）</li>
        </ul>
        
        <p><b>施法方式：</b>手持法杖，右键法杖施法</p>
        
        <p><b>工具功能（效率3）：</b></p>
        <ul>
            <li>砍伐</li>
            <li>挖掘</li>
            <li>锤击（可切换开关，百宝花杖可以局内设置快捷键）</li>
            <li>捕虫网</li>
            <li>钓鱼竿</li>
            <li>困难工作：可以震动疯猪的柱子</li>
            <li>可以摧毁天体死后掉落的贡品，敲掉一个返还10个月岩</li>
            <li>可以摧毁犀牛死后的箱子，箱子物品掉落并额外给5个铥矿</li>
        </ul>
        
        <p><b>法术系统（6个法术）：</b></p>
        
        <p><b>1. 远程采集</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>4半径</b>（1个格子）</li>
            <li>功能：从锅中收集双倍食物（已完成烹饪的锅）、采集蜂箱、拾取可收集物品、普通采集动作</li>
            <li>排除：花和重物</li>
        </ul>
        
        <p><b>2. 远程集中种植</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>12半径</b></li>
            <li>功能：从法杖容器放入可以种植的东西，在指定位置种植在一个点位上面</li>
            <li>可以放入的东西：原版基本可以种植的东西都可以，然后百宝自己的植物，棱镜的子圭奇型岩，以及其他mod可以种植的东西(这里就不详细描述了)</li>
        </ul>
        
        <p><b>3. 照料</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>6半径</b>（5×5网格）</li>
            <li>功能：照料可照料的农场作物，减少作物压力值 <b>3点</b></li>
        </ul>
        
        <p><b>4. 施肥</b></p>
        <ul>
            <li>消耗理智：<b>40点</b></li>
            <li>作用范围：<b>12半径</b>（9×9网格）</li>
            <li>功能：为可施肥的植物施肥、为农场土地添加养分（<b>100点</b>三种养分）</li>
            <li>可使绿洲鱼数量直接补满</li>
            <li>施肥可以复苏农田腐烂的巨大化作物（没巨大化的也可以）</li>
            <li>为子圭·崇溟、子圭·益矩、子圭·利川补充养分和水分（需配置启用默认关闭）</li>
            <li>为颤栗果树补充满肥力（需配置启用默认关闭）</li>
        </ul>
        
        <p><b>5. 浇水</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>12半径</b>（9×9网格）</li>
            <li>功能：复苏夏天枯萎的移植物（浆果，草，树枝，等等）、为农场土地添加水分（<b>100点</b>）</li>
        </ul>
        
        <p><b>6. 快速烹饪</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>12半径</b>（9×9网格，间隔4格）</li>
            <li>功能：对原版锅立即完成烹饪、对棱镜月炆宝炊立即完成烹饪</li>
            <li>如果锅正在烹饪，会立即完成当前烹饪</li>
            <li>会持久化保存，直到锅被移除或拆除</li>
            <li>配置：可通过模组配置启用/禁用</li>
        </ul>
        
        <p><b>特殊机制：</b></p>
        <ul>
            <li><b>快速施法</b></li>
            <li><b>双倍食物收集：</b>继承原食物的新鲜度</li>
        </ul>
        
        <p><b>制作配方：</b>紫宝石 × 1 + 金块 × 30 + 步行手杖 × 1</p>
        <p><b>制作科技：</b>远古科技</p>
    `,
    "sealingwand_dream": `
        <p><b>封印之杖</b>是专注于农场管理的多功能法杖，提供8个实用法术，支持快速收获、开垦、种子复制粘贴等，适合农场玩家使用。同时具备水上行走和移除碰撞体积的能力，提升探索效率。</p>
        
        <p><b>基础属性：</b></p>
        <ul>
            <li>移动速度加成：<b>25%</b></li>
            <li>武器伤害：步行手杖伤害</li>
        </ul>
        
        <p><b>工具功能（效率3）：</b></p>
        <ul>
            <li>砍伐</li>
            <li>挖掘</li>
            <li>捕虫网</li>
            <li>困难工作：疯猪柱子</li>
        </ul>
        
        <p><b>特殊能力：</b></p>
        <ul>
            <li>水上行走</li>
            <li>虚空行走</li>
            <li>移除碰撞体积：装备时移除角色碰撞体积，可穿过障碍物</li>
        </ul>
        
        <p><b>施法方式：</b>手持法杖，右键空地施法</p>
        
        <p><b>法术系统（8个法术，每个消耗10点理智值）：</b></p>
        
        <p><b>1. 收集（农田的巨大作物或者未巨大化的）</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：可配置（默认 <b>5x5网格</b>范围）</li>
            <li>功能：敲碎巨大作物并给予玩家、摘取所有可收获的农场作物</li>
        </ul>
        
        <p><b>2. 采集（采集和拾取物品）</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>10半径</b></li>
            <li>功能：拾取范围内的所有可拾取物品、采集非农场植物（如浆果、草、树枝等）</li>
            <li>（和法杖2施法区别就是不用瞄准，某人真懒啊瞄准都不想瞄了）</li>
        </ul>
        
        <p><b>3. 灭火</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：原版灭火书范围</li>
            <li>功能：熄灭范围内的所有火焰和冒烟物体</li>
        </ul>
        
        <p><b>4. 开垦（3×3）</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>3×3地皮</b></li>
            <li>功能：在指定地皮上开垦 <b>9块</b>农场土地、自动移除农场杂物</li>
        </ul>
        
        <p><b>5. 开垦（10）</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>10块</b>土地（按六边形排列）</li>
            <li>功能：在指定地皮上开垦 <b>10块</b>农场土地、自动移除农场杂物</li>
        </ul>
        
        <p><b>6. 挖起树根</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：<b>6半径</b></li>
            <li>功能：挖起范围内的所有树根</li>
        </ul>
        
        <p><b>7. 复制种子</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：单个地皮</li>
            <li>功能：记录指定地皮上所有作物的种子类型和位置、保存种子排列顺序</li>
        </ul>
        
        <p><b>8. 粘贴种子</b></p>
        <ul>
            <li>消耗理智：<b>10点</b></li>
            <li>作用范围：单个地皮</li>
            <li>功能：在指定地皮上按照复制的模式种植种子、需要玩家背包中有对应的种子</li>
            <li>如果种子数量不足或土地被占用，会提示</li>
        </ul>
        
        <p><b>特殊机制：</b></p>
        <ul>
            <li><b>快速施法</b></li>
            <li><b>巨大作物处理：</b>第一次施法：摘下巨大作物并移至身边（未敲碎）；再次施法：敲碎巨大作物并给予玩家种子和作物</li>
            <li><b>种子复制粘贴系统：</b>
                <ul>
                    <li>错误提示："种子数量大于土壤"：土地数量不足</li>
                    <li>错误提示："我身上种子有缺失"：种子数量不足</li>
                    <li>错误提示："我得先找一块地皮作为模板"：未复制就粘贴</li>
                </ul>
            </li>
        </ul>
        
        <p><b>制作配方：</b>蓝月眼 × 2 + 鼹鼠 × 2 + 绿宝石 × 1</p>
        <p><b>制作科技：</b>天体科技</p>
    `,
    "tc_chest_portable": `
        <p><b>星翼</b>是可携带的远程控制中心，提供共享容器、远程控制全图所有[[万物百宝]]的功能、跨世界穿越等功能。适合需要远程管理多个百宝箱的玩家使用。</p>
        
        <p><b>共享容器系统：</b></p>
        <ul>
            <li>所有星翼共享同一个容器空间</li>
            <li>多个星翼之间物品互通</li>
            <li>容器大小：<b>3×3</b>（9格）</li>
        </ul>
        
        <p><b>远程控制全图万物百宝：</b></p>
        <p>星翼可以远程控制地图上所有[[万物百宝]]（tc_chest）的行为（地下也可控制地上，地上也可控制地下）</p>
        
        <p><b>控制按钮功能：</b></p>
        <ul>
            <li><b>开启按钮：</b>开启全图所有万物百宝的功能，启用所有百宝箱的自动收集、催熟等功能</li>
            <li><b>暂停按钮：</b>关闭全图所有万物百宝的功能，禁用所有百宝箱的自动收集、催熟等功能</li>
            <li><b>30s按钮：</b>将全图所有万物百宝的自动收集时间间隔调整为 <b>30秒</b>，所有百宝箱每30秒自动收集一次</li>
            <li><b>一天按钮：</b>将全图所有万物百宝的自动收集时间间隔调整为 <b>一天</b>，所有百宝箱每1天自动收集一次</li>
        </ul>
        
        <p><b>跨世界穿越功能：</b></p>
        <ul>
            <li>功能：与其他世界的星翼容器交换道具</li>
            <li>机制：点击"穿越"按钮后，将当前世界的容器内容发送到另一个世界，另一个世界的容器内容会传送到当前世界</li>
            <li>地上世界和地下世界之间的穿越</li>
            <li>限制：穿越过程中按钮会被禁用，防止重复点击；需要目标世界可用才能穿越（不兼容独行长路）</li>
        </ul>
        
        <p><b>制作配方：</b>啜食者皮 × 4 + 废料 × 2 + 玻璃碎片 × 5</p>
        <p><b>制作科技：</b>炼金引擎（二本）</p>
    `,
    "bx_binxiang": `
        <p><b>白熊冰箱</b>是功能增强的冰箱，提供16格大容量存储、保鲜功能、下雨/下雪回鲜功能、无限堆叠功能、特殊物品支持等。适合需要大量存储和保鲜食物的玩家使用。</p>
        
        <p><b>容器系统：</b></p>
        <ul>
            <li>容器大小：<b>4×4</b>（16格）</li>
        </ul>
        
        <p><b>保鲜功能：</b></p>
        <ul>
            <li>冰块：完全停止腐烂</li>
            <li>其他物品：<b>0.1倍</b>腐烂率</li>
        </ul>
        
        <p><b>回鲜功能（下雨/下雪触发）：</b></p>
        <ul>
            <li>触发条件：开始下雨时触发、开始下雪时触发</li>
            <li>回鲜机制：
                <ul>
                    <li>单次恢复值：<b>3.5点</b>新鲜度</li>
                    <li>随机选择容器内新鲜度低于 <b>99.5%</b> 的物品进行恢复</li>
                    <li>优先恢复新鲜度最低的物品</li>
                    <li>如果恢复值足够，会将物品恢复到 <b>100%</b> 新鲜度</li>
                </ul>
            </li>
        </ul>
        
        <p><b>无限堆叠功能：</b></p>
        <p>支持两种堆叠模式（可通过模组配置选择）：</p>
        <ul>
            <li><b>模式1：默认无限堆叠</b> - 默认启用无限堆叠，无需升级即可使用</li>
            <li><b>模式2：需要升级</b> - 默认不启用无限堆叠，需要使用弹性空间扩展器，敲击时会返还弹性空间扩展器</li>
        </ul>
        
        <p><b>快捷按钮：</b></p>
        <ul>
            <li><b>整理：</b>一键整理当前冰箱内物品的排序</li>
            <li><b>合并：</b>收集半径 <b>3 格</b>范围内其他白熊冰箱内的食材到本冰箱，方便快速整理多个冰箱</li>
        </ul>
        
        <p><b>光照：</b></p>
        <ul>
            <li>白熊冰箱具有微弱的发光效果</li>
        </ul>
        
        <p><b>物品限制：</b></p>
        <p><b>允许放入的物品：</b></p>
        <ul>
            <li>所有原版冰箱可以放入的物品</li>
            <li>特殊物品列表：
                <ul>
                    <li>噩梦燃料（nightmarefuel）</li>
                    <li>骨头（boneshard）</li>
                    <li>树枝（twigs）</li>
                    <li>高鸟蛋（tallbirdegg）</li>
                    <li>牛角（horn）</li>
                    <li>熊毛（bearger_fur）</li>
                    <li>伏特羊角（lightninggoathorn）</li>
                    <li>石果（rock_avocado_fruit）</li>
                    <li>毛丛（furtuft）</li>
                    <li>尘土块（refined_dust）</li>
                    <li>琥珀美食（dustmeringue）</li>
                    <li>易腐烂物品</li>
                </ul>
            </li>
        </ul>
        <p><b>禁止放入的物品：</b></p>
        <ul>
            <li>小生物（smallcreature 标签）</li>
        </ul>
        
        <p><b>制作配方：</b>金块 × 10 + 齿轮 × 5 + 石砖 × 5</p>
        <p><b>制作科技：</b>炼金引擎（二本）</p>
        
        <p><span style="color:orange;">可爱的泡泡</span></p>
    `,
    "zhe_xkbaoshi": `
        <p><b>星空宝石</b>是闪烁星光的宝石，可在地下档案馆解密为解密后的星空。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>来源：在月食雕像珍品（zhei_sunsculpture1）通过Boss试炼后掉落</li>
            <li>可交易：与猪王交易，<b>1个兑换50个金块</b></li>
        </ul>
        
        <p><b>用途：</b></p>
        <ul>
            <li>可在地下档案馆使用解密法阵解密为解密后的星空</li>
        </ul>
    `,
    "zhe_xkbaoshix": `
        <p><b>解密后的星空</b>是解密后的星空宝石，可记录多个传送锚点，支持跨世界传送。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/xinkongui.png" alt="解密后的星空界面" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px; margin-bottom: 10px;">
            <img src="img/xinkong2.png" alt="解密后的星空" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li>在地下档案馆使用解密法阵解密星空宝石（zhe_xkbaoshi）获得</li>
        </ul>
        
        <p><b>锚点管理系统：</b></p>
        <ul>
            <li>全局共享：所有玩家共享同一锚点</li>
            <li>多锚点：可记录多个传送锚点</li>
        </ul>
        
        <p><b>传送功能：</b></p>
        <ul>
            <li>跨世界传送：支持不同世界之间的传送</li>
            <li>传送方式：生成空间裂隙进行传送</li>
        </ul>
        
        <p><b>界面系统：</b></p>
        <ul>
            <li>右键打开：在物品栏中右键打开锚点管理界面</li>
            <li>功能：
                <ul>
                    <li>添加锚点：在当前位置添加锚点</li>
                    <li>删除锚点：删除指定锚点</li>
                    <li>修改锚点名称：修改锚点的名称</li>
                    <li>传送：点击锚点进行传送</li>
                </ul>
            </li>
        </ul>
        
        <p><b>特殊效果：</b></p>
        <ul>
            <li>跳虫洞不摔跤：拥有解密后的星空的玩家跳虫洞时不会摔跤</li>
        </ul>
    `,
    "zhei_chaoscrystal": `
        <p><b>混沌水晶</b>（zhei_chaoscrystal）蕴含混沌力量，可对多种百宝或联动物品使用。手持水晶对<b>物品栏中</b>的目标右键，消耗 1 颗水晶，效果永久（同一目标不可重复处理）。</p>
        
        <p><b>获取方式：</b>[[月食雕像仿品]]（zhei_moon_statue）完成献祭后获得 1 颗。</p>
        
        <p><b>可作用物品一览：</b></p>
        <div style="overflow-x:auto;">
        <table style="border-collapse:collapse; width:100%; min-width:720px; font-size:0.9em;">
            <tr style="background:#f0f0f0;"><th style="border:1px solid #ccc; padding:6px; white-space:nowrap;">类型</th><th style="border:1px solid #ccc; padding:6px;">目标</th><th style="border:1px solid #ccc; padding:6px;">结果 / 效果</th><th style="border:1px solid #ccc; padding:6px;">动作提示</th><th style="border:1px solid #ccc; padding:6px;">备注</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">移除耐久</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">[[紫水晶剑]]（zhei_zishuijingjian）<br>[[紫水晶刀]]（zhei_zishuijingdao）</td><td style="border:1px solid #ccc; padding:6px;">无限耐久；剑会恢复伤害与电击</td><td style="border:1px solid #ccc; padding:6px;">移除耐久</td><td style="border:1px solid #ccc; padding:6px;">须手持于物品栏；有 finiteuses 且未处理过</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">移除耐久</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">丰耘秘境：自然亲和子塔（honor_stower）<br>辉煌多用工具（honor_multitool）</td><td style="border:1px solid #ccc; padding:6px;">无限耐久</td><td style="border:1px solid #ccc; padding:6px;">移除耐久</td><td style="border:1px solid #ccc; padding:6px;">已有 hide_percentage 标签则不可再用</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">月之魔典（book_moon）</td><td style="border:1px solid #ccc; padding:6px;">[[月之魔典混沌]]</td><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">保留当前耐久</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">[[千机伞]]（zhei_qianjisan）</td><td style="border:1px solid #ccc; padding:6px;">[[千机伞混沌]]</td><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">可传递皮肤</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">园艺学简编（book_horticulture）</td><td style="border:1px solid #ccc; padding:6px;">园艺学简编混沌</td><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">—</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">亮茄炸弹（bomb_lunarplant）</td><td style="border:1px solid #ccc; padding:6px;">[[亮茄炸弹混沌]]</td><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">无 finiteuses 也可变异</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">[[羽扇]]（zhei_yushan）</td><td style="border:1px solid #ccc; padding:6px;">[[羽扇混沌]]</td><td style="border:1px solid #ccc; padding:6px;">变异</td><td style="border:1px solid #ccc; padding:6px;">—</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">独立变异</td><td style="border:1px solid #ccc; padding:6px;">[[百宝包装]]（tc_baibao_giftwrap）</td><td style="border:1px solid #ccc; padding:6px;">[[百宝包装·混沌]]</td><td style="border:1px solid #ccc; padding:6px;">混沌包装</td><td style="border:1px solid #ccc; padding:6px;">须手持；叠多张→1 张混沌版</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">独立变异</td><td style="border:1px solid #ccc; padding:6px;">百宝迁移打包纸（zhei_superpack_wrap）</td><td style="border:1px solid #ccc; padding:6px;">[[百宝迁移装置·混沌]]</td><td style="border:1px solid #ccc; padding:6px;">混沌迁移</td><td style="border:1px solid #ccc; padding:6px;">须手持；叠多张→1 张混沌版</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">背包升级</td><td style="border:1px solid #ccc; padding:6px;">[[百宝背包]]（zhei_backpackd）</td><td style="border:1px solid #ccc; padding:6px;">混沌保鲜（腐烂倍率 0）</td><td style="border:1px solid #ccc; padding:6px;">混沌保鲜</td><td style="border:1px solid #ccc; padding:6px;">不可重复升级</td></tr>
        </table>
        </div>

        <p><b>使用条件（通用）：</b></p>
        <ul>
            <li>除[[百宝背包]]外，「移除耐久 / 变异」类目标须在物品栏中且为<b>手持</b>状态（不可对地上物品使用）</li>
            <li>「移除耐久」类：目标须有 finiteuses 组件且未标记 chaos_crystal_used（亮茄炸弹除外）</li>
            <li>包装纸 / 迁移纸的独立变异：同样须手持；无论叠多少张，成功时<b>只保留 1 张</b>混沌版且不可再堆叠</li>
        </ul>
        
        <p><b>消耗：</b>每次成功使用消耗 1 颗混沌水晶（移除、变异、混沌保鲜均消耗）。</p>
        
        <p><span style="color:#666;">游戏内检视文案亦列出：紫水晶武器、月之魔典、千机伞、园艺学简编、亮茄炸弹、[[百宝包装]]、百宝迁移打包纸，以及[[百宝背包]]混沌保鲜。</span></p>
    `,
    "tc_baibao_giftwrap": `
        <p><b>百宝包装</b>（tc_baibao_giftwrap）是万物百宝模组自带的<b>礼物打包纸</b>，用法类似原版节日礼物包装，但打包界面为更大的 <b>4×4（16 格）</b>，一次能装入更多物品。</p>

        <p><b>打包界面：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/giftwrap_ui.png" alt="百宝包装界面" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>

        <p><b>制作配方：</b>莎草纸 × 1 + 花瓣 × 1</p>
        <p><b>制作科技：</b>炼金引擎（二本）；<b>一次制作 4 张</b>（与原版 giftwrap 产出数量一致）</p>
        <p><b>制作分类：</b>百宝工具栏</p>

        <p><b>使用方法：</b></p>
        <ul>
            <li>手持或在物品栏中右键包装纸，打开 4×4 打包界面</li>
            <li>放入要打包的物品后点击「打包」按钮（WRAPBUNDLE）</li>
            <li>成功打包后<b>消耗 1 张</b>百宝包装，产出<b>百宝礼物</b>（tc_baibao_gift，显示名「百宝礼物」）</li>
        </ul>

        <p><b>与原版礼物包装对比：</b></p>
        <ul>
            <li><b>格口：</b>百宝包装 <b>4×4</b>；原版节日礼物包装 <b>2×2</b></li>
            <li><b>产出物：</b>百宝礼物（独立 prefab），与节日包装产出的 gift 分开，互不影响</li>
            <li>礼物外观仍使用 gift 动画（小/中/大盒随装入格数变化）</li>
        </ul>

        <p><b>不可放入打包格的物品：</b>带 <code>irreplaceable</code>、<code>_container</code>、<code>bundle</code>、<code>nobundling</code> 标签的物品（与 bundle 类容器通用限制一致）。</p>

        <p><b>百宝礼物（产出物）：</b></p>
        <ul>
            <li>可 unwrap 取回内容；燃烧/鬼魂作祟等行为对齐原版 gift</li>
            <li><b>鼠标悬停</b>可查看盒内完整物品列表（百宝悬停 RPC，不截断省略；兼容 Show Me / Insight 等模组）</li>
        </ul>

        <p><b>混沌升级：</b>手持[[混沌水晶]]，对物品栏中<b>已拿在手上</b>的百宝包装右键「混沌包装」，消耗 1 颗水晶，变为[[百宝包装·混沌]]；若当时叠有多张，变异后<b>只保留 1 张</b>混沌版。</p>

        <p><b>其它：</b>可堆叠（中等堆叠上限）；可作微量燃料；会沉水。</p>
    `,
    "tc_baibao_giftwrap_chaos": `
        <p><b>百宝包装·混沌</b>（tc_baibao_giftwrap_chaos）是[[百宝包装]]经[[混沌水晶]]变异后的<b>永久打包工具</b>：界面仍为 4×4，但格内可无限堆叠，且打包时<b>不再消耗自身</b>。</p>

        <p><b>获取：</b>手持[[混沌水晶]]，对物品栏中的[[百宝包装]]右键使用（须为手持状态）；消耗 1 颗混沌水晶。无论当时叠有多少张普通包装，变异后<b>只得到 1 张</b>混沌包装，且<b>不可再堆叠</b>。</p>

        <p><b>与普通百宝包装差异：</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px; width:120px;"><b>项目</b></td><td style="border:1px solid #ccc; padding:6px;"><b>百宝包装</b></td><td style="border:1px solid #ccc; padding:6px;"><b>百宝包装·混沌</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">打包格口</td><td style="border:1px solid #ccc; padding:6px;">4×4</td><td style="border:1px solid #ccc; padding:6px;">4×4</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">格内堆叠</td><td style="border:1px solid #ccc; padding:6px;">原版堆叠规则</td><td style="border:1px solid #ccc; padding:6px;"><b>无限堆叠</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">每次打包</td><td style="border:1px solid #ccc; padding:6px;">消耗 1 张纸</td><td style="border:1px solid #ccc; padding:6px;"><b>不消耗</b>，可反复使用</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">物品堆叠</td><td style="border:1px solid #ccc; padding:6px;">可堆叠</td><td style="border:1px solid #ccc; padding:6px;">不可堆叠（仅 1 张）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">产出</td><td style="border:1px solid #ccc; padding:6px;" colspan="2">百宝礼物（tc_baibao_gift），悬停预览相同</td></tr>
        </table>

        <p><b>机制说明：</b>混沌版在开始打包时会清空 bundler 对包装纸的引用，避免取消打包时误退还一张普通纸；因此实际表现为「这张混沌纸永远在物品栏里，只产出礼物盒」。</p>

        <p><span style="color:#666;">已是混沌版时无法再次混沌化；失败时角色会提示「无法将百宝包装混沌化」。</span></p>
    `,
    "tc_baibao_broom": `
        <p><b>百宝扫把</b>（预制体 <code>tc_baibao_broom</code>）是在原版<b>清洁扫把</b>基础上附加百宝咒术的<b>批量换肤工具</b>。动画与物品栏图标暂用原版清洁扫把资源，逻辑独立（不修改原版 <code>reskin_tool</code>）。</p>

        <p><b>制作配方：</b>清洁扫把 × 1 + 花瓣 × 4 + 绳子 × 1</p>
        <p><b>制作科技：</b>炼金引擎（二本）；百宝工具栏</p>

        <p><b>操作方式（对齐棱镜「敝帚之珍」）：</b></p>
        <ul>
            <li><b>装备</b>后：对可换肤目标<b>左键</b> = 副模式；<b>右键</b> = 主模式</li>
            <li>已装备时在<b>物品栏右键</b>扫把 → 「切换」，循环主模式：顺序 → 逆序 → 随机 → 复制粘贴</li>
            <li>对地面<b>范围施法</b>（AOE 准星）→ 以落点为中心、半径 <b>4</b> 批量换肤，使用当前主模式（复制模式下范围施法等同粘贴）</li>
            <li>悬停物品栏扫把可查看「当前模式」；复制模式下另显示「已复制：种类·皮肤名」</li>
        </ul>

        <p><b>四种模式：</b></p>
        <ul>
            <li><b>顺序</b>：在已拥有的皮肤列表中切到下一张</li>
            <li><b>逆序</b>：切到上一张；部分仅皮肤、不可选「原皮」的种类到边界会停住</li>
            <li><b>随机</b>：从已拥有皮肤中随机挑选（尽量不同于当前）</li>
            <li><b>复制粘贴</b>：主模式为「复制」时右键目标只记录皮肤不更换；副模式为「粘贴」时左键对<b>同 prefab 种类</b>目标应用已复制皮肤。左键点不同种类会先复制</li>
        </ul>

        <p><b>目标与限制：</b></p>
        <ul>
            <li>规则与原版清洁扫把一致：须为 <code>PREFAB_SKINS</code> 登记种类，且玩家<b>拥有</b>对应皮肤（含可解锁皮肤差异）</li>
            <li>他人绑定建筑（<code>_playerlink</code> 非本人）不可换肤；地上掉落物不可换肤</li>
            <li>百宝相关换肤特效针对部分 prefab 做了偏移/缩放（如 [[万物百宝]]、[[百宝小型]]、[[百宝炊具]]、[[百宝背包]]、[[百宝灯]]、[[星星灯笼]]、[[水晶蜡烛]]、[[星槎护符]]、[[饭桌]] 等）</li>
            <li>[[万物百宝]]若处于全息投影魔方皮肤，扫把会读取魔方当前映射的皮肤再切换</li>
            <li>虫洞、洞穴出入口等仍支持成对换肤（与原版扫把相同）</li>
        </ul>

        <p><b>其它：</b>换肤成功播放清洁扫把 FX 并延迟触发 <code>reskinned</code> 事件（供百宝灯、背包等刷新外观）；可作中等燃料；主模式与复制信息随物品存档。</p>
    `,
    "zhei_baibao_detector_item": `
        <p><b>百宝探测器</b>（物品 <code>zhei_baibao_detector_item</code>，放置后为 <code>zhei_baibao_detector</code>）参考原版档案馆共振器，用于<b>一次扫描同时指示多个重要目标</b>。</p>

        <p><b>制作配方：</b>石头 × 5 + 电子元件 × 2 + [[星星碎片]] × 1</p>
        <p><b>制作科技：</b>炼金引擎（二本）；百宝结构 / 工具栏</p>

        <p><b>使用方法：</b></p>
        <ul>
            <li>从物品栏<b>部署</b>到地面 → 播放放置动画，约 <b>5 秒</b>后开始扫描（扫描半径极大，等效<b>全图</b>）</li>
            <li>找到目标后：本体转向<b>最近</b>目标并发射光束；在每个目标方向地面生成<b>箭头标记</b>（<code>zhei_baibao_detector_base</code>），持续 <b>30 秒</b></li>
            <li>扫描结束（无论是否找到）消耗 <b>1</b> 次耐久；未找到时进入 idle 循环动画</li>
            <li>处于 idle 状态时可<b>收起</b>为物品（便携结构 dismantle），耐久按比例保留；部署者靠近时会自动收回背包</li>
        </ul>

        <p><b>可同时探测的目标：</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:560px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px;"><b>目标</b></td><td style="border:1px solid #ccc; padding:6px;"><b>说明</b></td><td style="border:1px solid #ccc; padding:6px;"><b>标记颜色</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">流浪商人</td><td style="border:1px solid #ccc; padding:6px;">含剧情藏起来（<code>RemoveFromScene</code>）时仍可定位；也会查 <code>wanderingtraderspawner</code></td><td style="border:1px solid #ccc; padding:6px;">白</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">[[太阳雕像珍品]]</td><td style="border:1px solid #ccc; padding:6px;"><code>zhei_sunsculpture1</code>，须在地上且非 limbo</td><td style="border:1px solid #ccc; padding:6px;">橙</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">[[月食雕像珍品]]</td><td style="border:1px solid #ccc; padding:6px;"><code>zhei_moon_statue1</code></td><td style="border:1px solid #ccc; padding:6px;">紫</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">艾力冈之剑</td><td style="border:1px solid #ccc; padding:6px;">掉落在地上的 <code>agronssword</code></td><td style="border:1px solid #ccc; padding:6px;">红</td></tr>
        </table>

        <p><b>耐久与拆除：</b></p>
        <ul>
            <li>共 <b>10</b> 次；耗尽后小型坍塌 FX 并消失</li>
            <li>锤子拆除（工作量 3）按拆解配方返还：石头 × 5 + 电子元件 × 2 + [[星星碎片]] × 1</li>
        </ul>

        <p><b>音效 / 动画：</b>复用 grotto 档案馆共振器的放置、扫描、光束与收起音效。</p>
    `,
    "zhei_superpack_wrap_chaos": `
        <p><b>百宝迁移装置·混沌</b>（预制体 <code>zhei_superpack_wrap_chaos</code>）是百宝迁移<b>打包纸</b>（<code>zhei_superpack_wrap</code>）经[[混沌水晶]]变异后的<b>永久工具</b>：外观、动画与普通迁移纸相同，但带有 <code>zhei_superpack_wrap_chaos</code> 标签，且成功「迁移」后<b>不再消耗自身</b>。</p>

        <p><b>与普通纸 / 包裹的区别：</b></p>
        <ul>
            <li><b>zhei_superpack_wrap</b>（普通打包纸）：远古科技制作（捆绑包装 + 金块 + 绳子），可堆叠；每次迁移 -1 张</li>
            <li><b>zhei_superpack_wrap_chaos</b>（本条目）：混沌变异获得，<b>不可堆叠</b>；迁移不消耗</li>
            <li><b>zhei_superpack</b>（迁移产物）：打包后生成的「xxx包裹」，可 unwrap 或<b>栽种</b>部署还原实体——不是本条目</li>
        </ul>

        <p><b>获取：</b></p>
        <ul>
            <li>先制作普通百宝迁移打包纸（配方见[[百宝迁移装置]]词条）</li>
            <li>手持[[混沌水晶]]，对物品栏中<b>已拿在手上</b>的普通打包纸右键，选择<b>「混沌迁移」</b>（动作 <code>ZHEI_CHAOS_MUTATE_SUPERPACK</code>）</li>
            <li>消耗 1 颗混沌水晶；无论当时叠有多少张普通纸，成功时<b>只保留 1 张</b>混沌纸</li>
            <li>已是混沌版或条件不符时会提示「无法将百宝迁移装置混沌化」</li>
        </ul>

        <p><b>使用方法（迁移）：</b></p>
        <ul>
            <li>手持混沌打包纸，对<b>场景中</b>或<b>物品栏里</b>符合条件的目标右键，选择<b>「迁移」</b>（<code>ZHEI_MIGRATE</code>，有效距离约 20）</li>
            <li>目标被移除，并在你的物品栏生成名为「<i>目标名</i>包裹」的 <code>zhei_superpack</code></li>
            <li><b>混沌版关键差异：</b>代码在迁移成功后<b>不会</b> <code>Remove</code> 手中的打包纸，可反复迁移；普通纸会扣 1 张</li>
        </ul>

        <p><b>可迁移目标（CanBundleItem）：</b></p>
        <ul>
            <li><b>默认（模组配置关闭「打包所有物品」）：</b>[[万物百宝]]（tc_chest）、[[百宝小型]]（tc_chest_small）、[[月食雕像仿品]]（zhei_moon_statue）</li>
            <li><b>配置开启后：</b>凡带 <code>inspectable</code>、且不是玩家/角色/已是 bundle/包裹类（unwrappable）的可检视实体，范围更广（仍不能打包包裹本身）</li>
            <li>具体开关见模组配置「百宝迁移装置允许打包所有物品」（<code>ZHEI_SUPERPACK_ALLOW_ALL</code>）</li>
        </ul>

        <p><b>产出包裹（zhei_superpack）特性：</b></p>
        <ul>
            <li><b>unwrap：</b>解开取回内容，并掉落 1 张蜡纸（waxpaper）</li>
            <li><b>栽种部署：</b>在地面部署可还原被打包的实体（含容器内物品状态）</li>
            <li><b>放置预览：</b>百宝模组建筑优先用 <code>prefab_placer</code>；其它物品若无 placer 则尝试读取 bank/build/anim 用动态放置器预览</li>
            <li><b>传送门：</b>若打包前目标与其它传送门成对绑定，会写入包裹并在部署时恢复链接</li>
        </ul>

        <p><b>与普通打包纸对照：</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px; width:120px;"><b>项目</b></td><td style="border:1px solid #ccc; padding:6px;"><b>普通打包纸</b></td><td style="border:1px solid #ccc; padding:6px;"><b>百宝迁移装置·混沌</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">堆叠</td><td style="border:1px solid #ccc; padding:6px;">可堆叠</td><td style="border:1px solid #ccc; padding:6px;"><b>不可堆叠</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">每次迁移</td><td style="border:1px solid #ccc; padding:6px;">消耗 1 张</td><td style="border:1px solid #ccc; padding:6px;"><b>不消耗</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">迁移逻辑</td><td style="border:1px solid #ccc; padding:6px;" colspan="2">相同（产出 zhei_superpack、目标范围一致）</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">沉水</td><td style="border:1px solid #ccc; padding:6px;" colspan="2">均不沉水；可浮水</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">燃料</td><td style="border:1px solid #ccc; padding:6px;" colspan="2">中等燃料；可燃烧、作祟点燃</td></tr>
        </table>

        <p><span style="color:#666;">检视文案：被混沌侵蚀的迁移装置——多张叠放变异后合并为一张，不可再堆叠；每次迁移不消耗自身，可反复使用。</span></p>
    `,
    "zhei_eclipserelics": `
        <p><b>月食遗物</b>是月亮上掉落的某种东西，或许有什么大作用。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li><b>方式1：</b>采摘格罗姆花（statueglommer）时掉落，采摘时直接放入玩家物品栏，如果物品栏满了则掉落在地上</li>
            <li><b>方式2：</b>给月食雕像仿品（zhei_moon_statue）八角玄冰棕（zhei_staraniseicepalm）兑换2个<b>月食遗物</b></li>
        </ul>
        
        <p><b>核心功能：</b></p>
        <ul>
            <li><b>制作材料：</b>万物百宝制作材料、月食雕像仿品制作材料</li>
            <li>给月食雕像珍品可以兑换月食雕像仿品蓝图</li>
            <li><b>交易：</b>1个兑换 <b>7个金块</b></li>
            <li><b>堆叠功能：</b>可堆叠，堆叠上限 <b>20</b></li>
        </ul>
    `,
    "zhei_sunfires": `
        <p><b>太阳火种</b>好像是太阳掉落的，或许有什么大作用。</p>
        
        <p><b>获取方式：</b></p>
        <ul>
            <li><b>方式1：</b>击杀龙蝇（dragonfly）时掉落，龙蝇死亡时在死亡位置生成太阳火种</li>
            <li><b>方式2：</b>给太阳雕像仿品（zhei_sunsculpture）火焰牛排（zhei_flaming_steak）兑换1个<b>太阳火种</b></li>
        </ul>
        
        <p><b>核心功能：</b></p>
        <ul>
            <li><b>制作材料：</b>万物百宝制作材料、太阳雕像仿品制作材料</li>
            <li>把太阳火种给太阳雕像珍品可以兑换太阳雕像仿品蓝图</li>
            <li><b>交易功能：</b>1个兑换 <b>7个金块</b></li>
            <li><b>堆叠功能：</b>可堆叠，堆叠上限 <b>20</b></li>
            <li><b>浮水：</b>物品可以浮在水上，不会沉水</li>
        </ul>
    `,
    "moon_statue_terrain": `
        <p><b>月亮雕像地形</b>是位于地下世界的特殊地形，以月食雕像珍品为中心的特殊布局。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/moon_statue_terrain_1.png" alt="月亮雕像地形" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>基本信息：</b></p>
        <ul>
            <li>地皮类型：<b>蓝蘑菇林地皮</b></li>
            <li>生成位置：<b>地下世界</b></li>
        </ul>
        
        <p><b>地形布局：</b></p>
        <ul>
            <li>中心位置：雕像位于布局中心</li>
            <li>地皮：全部使用蓝蘑菇林地皮</li>
        </ul>
        
        <p><b>布局内容：</b></p>
        <ul>
            <li><b>中心雕像：</b>[[月食雕像珍品]]（zhei_moon_statue1）位于布局中心</li>
            <li><b>周围装饰：</b>
                <ul>
                    <li>16个蓝蘑菇（blue_mushroom）围绕雕像一圈</li>
                    <li>高蘑菇树（mushtree_tall）</li>
                    <li>洞穴花（flower_cave）</li>
                </ul>
            </li>
        </ul>
        
        <p><b>连接方式：</b>连接到地下世界主区域</p>
        <p><b>光照效果：</b>雕像有紫色微光</p>
    `,
    "sun_statue_terrain": `
        <p><b>太阳雕像地形</b>是位于主世界的特殊地形，以太阳雕像珍品为中心的特殊布局。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/sun_statue_terrain_1.png" alt="太阳雕像地形" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>基本信息：</b></p>
        <ul>
            <li>地皮类型：<b>卵石路地皮</b>（WORLD_TILES.ROAD）</li>
            <li>生成位置：<b>主世界</b>连接到主大陆</li>
        </ul>
        
        <p><b>地形布局：</b></p>
        <ul>
            <li>中心位置：雕像位于布局中心</li>
            <li>地皮：全部使用卵石路地皮</li>
        </ul>
        
        <p><b>布局内容：</b></p>
        <ul>
            <li><b>中心雕像：</b>太阳雕像珍品（zhei_sunsculpture1）位于布局中心</li>
        </ul>
        
        <p><b>特殊彩蛋：</b></p>
        <ul>
            <li>步行手杖（cane）：雕像左侧</li>
            <li>猪皮头盔（footballhat）：雕像右侧</li>
            <li>木甲（armorwood）：雕像下方</li>
        </ul>
    `,
    "zhei_moon_statue": `
        <p><b>月食雕像仿品</b>是散发紫色光芒的雕像仿品，可兑换月食遗物和献祭料理。</p>
        
        <p><b>图片展示：</b><span style="color:red;">（感谢群友"呵"提供的原版料理配方列表）</span></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/liaoli.png" alt="月食雕像仿品" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
            <img src="img/yuanbanliaoli.png" alt="原版料理" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px; margin-top: 15px;">
        </div>
        
        <p><b>制作配方：</b>月食遗物 × 1 + 大理石 × 5 + 荧光果 × 8 + 月岩 × 3</p>
        <p><b>科技要求：</b>需蓝图解锁（给月食雕像珍品一个月食遗物掉落）</p>
        
        <p><b>兑换功能：</b></p>
        <ul>
            <li>接受物品：八角玄冰棕（zhei_staraniseicepalm）</li>
            <li>给予物品：<b>2个</b>月食遗物（zhei_eclipserelics）</li>
            <li>冷却时间：<b>2天</b></li>
            <li>说明：可重复兑换，冷却期间无法兑换</li>
        </ul>
        
        <p><b>献祭功能：</b></p>
        <ul>
            <li>接受物品：料理（需在献祭列表中的，游戏内可以打开百宝花杖的料理介绍页面里面基本上有所有的料理了）</li>
            <li>简单模式：只接受百宝料理</li>
            <li>困难模式：原版基本上所有的料理+百宝的所有料理</li>
            <li>献祭限制：
                <ul>
                    <li>每种料理只能献祭一次</li>
                    <li>献祭冷却期间不能献祭</li>
                    <li>不接受排除列表中的料理（如牛奶帽）</li>
                </ul>
            </li>
            <li>完成奖励：献祭完所有要求的料理后，给予 <b>1个混沌水晶</b>（zhei_chaoscrystal）</li>
            <li>冷却时间：<b>8天</b>（可配置）</li>
        </ul>
        
        <p><b>开采功能：</b></p>
        <ul>
            <li>开采方式：使用稿子开采</li>
            <li>开采次数：<b>20次</b></li>
            <li>掉落物品：
                <ul>
                    <li>1个月食遗物</li>
                    <li>3个大理石</li>
                    <li>4个荧光果</li>
                    <li>2个月岩</li>
                </ul>
            </li>
        </ul>
        
        <p><b>特殊效果：</b>光照：紫色微光（半径 <b>2.0格</b>）</p>
    `,
    "zhei_moon_statue1": `
        <p><b>月食雕像珍品</b>是散发紫色光芒的古老雕像，上面的符号似乎在诉说着什么。</p>
        
        <p><b>生成位置：</b>地下世界，周围有16个蓝蘑菇</p>
        
        <p><b>兑换功能：</b></p>
        <ul>
            <li><b>物品1：</b>接受物品：月食遗物（zhei_eclipserelics）</li>
            <li>给予物品：月食雕像仿品蓝图（zhei_moon_statue_blueprint）</li>
            <li><b>物品2：</b>接受物品：莎草纸（papyrus）</li>
            <li>给予物品：随机Boss草图</li>
            <li>草图概率：
                <ul>
                    <li>低概率组（<b>5%</b>）：月后三个Boss、天体英雄、远古守护者</li>
                    <li>高概率组（<b>95%</b>）：其他所有Boss</li>
                </ul>
            </li>
        </ul>
        
        <p><b>特殊效果：</b>光照：紫色微光（半径 <b>2.0格</b>）</p>
    `,
    "zhei_sunsculpture": `
        <p><b>太阳雕像仿品</b>是散发温暖光芒的雕像仿品，可作为科技站使用。</p>
        
        <p><b>制作配方：</b>太阳火种 × 1 + 大理石 × 5 + 荧光果 × 8 + 月岩 × 3</p>
        <p><b>科技要求：</b>需蓝图解锁（给太阳雕像珍品一个太阳火种掉落）</p>
        
        <p><b>科技站功能：</b></p>
        <ul>
            <li>科技树：自定义科技树，最高等级 <b>4</b></li>
            <li>作用：作为科技站，可在附近制作需要太阳雕像科技的物品,物品有：千机伞（zhei_qianjisan）万物百宝（tc_chest）紫水晶刀
            （zhei_zishuijingdao）</li>
        </ul>
        
        <p><b>兑换功能：</b></p>
        <ul>
            <li>接受物品：火焰牛排（zhei_flaming_steak）</li>
            <li>给予物品：<b>1个</b>太阳火种（zhei_sunfires）</li>
            <li>冷却时间：<b>2天</b></li>
            <li>说明：可重复兑换，冷却期间不可兑换</li>
        </ul>
        
        <p><b>开采功能：</b></p>
        <ul>
            <li>开采方式：使用稿子开采</li>
            <li>开采次数：<b>20次</b></li>
            <li>掉落物品：
                <ul>
                    <li>1个太阳火种</li>
                    <li>3个大理石</li>
                    <li>4个荧光果</li>
                    <li>2个月岩</li>
                </ul>
            </li>
        </ul>
        
        <p><b>特殊效果：</b>光照：暖黄色微光（半径 <b>2.0格</b>，类似提灯颜色）</p>
    `,
    "zhei_sunsculpture1": `
        <p><b>太阳雕像珍品</b>是散发温暖光芒的古老雕像，仿佛在诉说着太阳的传说。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/boss.png" alt="太阳雕像珍品" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>生成位置：</b>主世界的独立岛屿，周围有步行手杖、猪皮头盔和木甲</p>
        
        <p><b>Boss试炼功能：</b></p>
        <ul>
            <li>接受物品：Boss草图</li>
            <li>召唤Boss：根据草图召唤对应的Boss</li>
            <li>支持的Boss类型：<b>18种Boss</b>
                <ul>
                    <li>普通Boss：巨鹿、熊獾、龙蝇、麋鹿鹅、克劳斯、毒菌蟾蜍、蜂后、恐怖之眼、蚁狮、邪天翁</li>
                    <li>暗影三基佬：需要三个草图（骑士、主教、战车）才能召唤</li>
                    <li>双子魔眼：需要双子魔眼草图才能召唤</li>
                    <li>月后Boss：变异熊、变异狼、变异巨鹿</li>
                    <li>天体Boss：天体英雄</li>
                    <li>远古守护者：远古守护者</li>
                    <li>梦魇疯猪：梦魇疯猪</li>
                </ul>
            </li>
        </ul>
        
        <p><b>特殊Boss处理：</b></p>
        <ul>
            <li><b>暗影三基佬：</b>需要三个草图（骑士、主教、战车）才能召唤，允许消失，消失时不记录为击杀，当三基佬消失时就可以重新召唤</li>
            <li><b>双子魔眼：</b>需要双子魔眼草图才能召唤</li>
            <li><b>龙蝇、麋鹿鹅、蚁狮、邪天翁：</b>防止飞走/消失（只对雕像召唤的Boss生效，原版的boss还是自己的逻辑）</li>
            <li><b>梦魇疯猪：</b>会自动生成3个柱子</li>
        </ul>
        
        <p><b>奖励系统：</b></p>
        <ul>
            <li>奖励Boss列表：<b>14种Boss</b>（不包括月后Boss、天体英雄）</li>
            <li>奖励条件：击杀所有奖励Boss后（14个哦别傻傻的以为是18个），掉落 <b>1个星空宝石</b>（zhe_xkbaoshi）</li>
            <li>冷却机制：击杀所有18种Boss后，开始冷却（默认 <b>8天</b>，可配置）</li>
            <li>冷却期间：不能召唤新的Boss</li>
        </ul>
        
        <p><b>兑换功能：</b></p>
        <ul>
            <li>接受物品：太阳火种（zhei_sunfires）</li>
            <li>给予物品：太阳雕像仿品蓝图（zhei_sunsculpture_blueprint）</li>
            <li>限制：冷却期间不能兑换</li>
        </ul>
        
        <p><b>状态显示：</b></p>
        <ul>
            <li>检查时显示：
                <ul>
                    <li>献祭试炼冷却时间（如果有）</li>
                    <li>已击杀Boss数量（已击杀/总数）</li>
                    <li>未击杀Boss列表</li>
                </ul>
            </li>
        </ul>
        
        <p><b>特殊效果：</b>光照：暖黄色微光（半径 <b>2.0格</b>）</p>
    `,
    "zhei_cookpot1": `
        <p><b>百宝炊具</b>是支持大厨料理的烹饪锅，提供大厨料理支持、百宝料理加速、快速烹饪支持等功能。适合需要制作大厨料理或经常烹饪百宝料理的玩家使用。</p>
        
        <p><b>制作配方：</b>电子元件 × 3 + 木炭 × 9 + 树枝 × 9</p>
        <p><b>科技要求：</b>炼金引擎（二本）</p>
        
        <p><b>大厨料理支持：</b></p>
        <ul>
            <li>支持范围：
                <ul>
                    <li>所有原版料理</li>
                    <li>所有大厨专属料理</li>
                </ul>
            </li>
            <li>实现方式：兼容 Insight 和智能锅 mod</li>
            <li>普通角色可用：所有角色都能使用</li>
        </ul>
        
        <p><b>百宝料理加速：</b></p>
        <ul>
            <li>加速机制：烹饪百宝料理速度提升 <b>30%</b></li>
            <li>速度倍率：
                <ul>
                    <li>百宝料理：加速 <b>30%</b></li>
                    <li>其他料理：正常速度</li>
                </ul>
            </li>
        </ul>
        
        <p><b>快速烹饪支持：</b></p>
        <ul>
            <li>功能：支持封印之杖2（zhei_staff）的快速烹饪功能</li>
            <li>使用封印之杖2的快速烹饪功能可立即完成</li>
        </ul>
        <p><b>使用技巧：</b></p>
        <ul>
            <li><b>大厨料理：</b>可制作所有大厨专属料理，无需大厨角色</li>
            <li><b>百宝料理加速：</b>烹饪百宝料理时自动加速30%</li>
            <li><b>快速烹饪：</b>使用封印之杖2的快速烹饪功能可立即完成</li>
            <li><b>饭桶识别：</b>饭桶的大厨锅模式或者普通模式都可以识别百宝炊具</li>
        </ul>
    `,
    "zhei_qiding": `
        <p><b>百宝鼎</b>（zhei_qiding）是百宝制作栏中的炼制建筑：鼎上有容器格子，放入与某条配方种类、数量一致的材料（部分配方要求<b>恰好</b>这些物品、不能多不能少，避免与别的配方冲突）。关盖后界面有「炼制」；炼制结束再「取出」产物。鼠标悬停鼎身可看当前炼制状态/预测。</p>
        
        <p><b>制作配方：</b>龙蝇鳞片 × 1 + [[太阳火种]] × 1 + 石砖 × 5 + 红宝石 × 1</p>
        <p><b>科技要求：</b>需在[[太阳雕像仿品]]旁作为制作站解锁/制作</p>
        <p><b>制作分类：</b>百宝制作栏</p>
        
        <p><b>使用说明：</b></p>
        <ul>
            <li>鼎内容器放入材料 → 关盖 → 点击「炼制」→ 时间到后「取出」</li>
            <li>[[昊天锤]]、[[星尘盾]]等长耗时可在模组配置里改炼制天数（默认 <b>3</b> 天，与昼夜相关配置一致）</li>
        </ul>
        
        <p><b>可炼制物品一览：</b></p>
        <div style="overflow-x:auto;">
        <table style="border-collapse:collapse; width:100%; min-width:720px; font-size:0.82em;">
            <tr style="background:#f0f0f0;"><th style="border:1px solid #ccc; padding:6px; white-space:nowrap;">类型</th><th style="border:1px solid #ccc; padding:6px;">产物（数量）</th><th style="border:1px solid #ccc; padding:6px;">材料（逐项数量）</th><th style="border:1px solid #ccc; padding:6px; white-space:nowrap;">炼制时间</th><th style="border:1px solid #ccc; padding:6px;">备注</th></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">神兵</td><td style="border:1px solid #ccc; padding:6px;">[[昊天锤]] ×<b>1</b>（zhei_haotian）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">未烤熟星空果实（zhei_xklg）×<b>2</b><br>犀牛角（minotaurhorn）×<b>1</b><br>铥矿（thulecite）×<b>15</b><br>锤子（hammer）×<b>1</b></td><td style="border:1px solid #ccc; padding:6px;">模组可配置天数 × 一昼夜（默认 3 天）</td><td style="border:1px solid #ccc; padding:6px;">无制作栏配方，仅鼎炼</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">盾</td><td style="border:1px solid #ccc; padding:6px;">[[星尘盾]] ×<b>1</b>（zhei_stardust_shield）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">星星粉尘（zhei_xingxingfc1）×<b>1</b><br>星星碎片（zhei_xingxingsp）×<b>5</b><br>月亮玻璃（moonglass）×<b>10</b><br>克苏鲁之盾（shieldofterror）×<b>1</b></td><td style="border:1px solid #ccc; padding:6px;">与 [[昊天锤]] 同档（默认约 3 天）</td><td style="border:1px solid #ccc; padding:6px;">须<b>恰好</b>四种、数量完全匹配；多放易误匹配</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">粉尘</td><td style="border:1px solid #ccc; padding:6px;">星星粉尘 ×<b>1</b>/套（zhei_xingxingfc1）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">星星碎片（zhei_xingxingsp）×<b>4</b>（每套）<br><small>总量为 4 的倍数时可一次多套</small></td><td style="border:1px solid #ccc; padding:6px;">1 天/套</td><td style="border:1px solid #ccc; padding:6px;">总量为 4 的倍数可按套数一次炼多份</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">灯笼</td><td style="border:1px solid #ccc; padding:6px;">星星灯笼 ×<b>1</b>（zhei_lantern_2）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">星星碎片（zhei_xingxingsp）×<b>1</b><br>荧光果（lightbulb）×<b>10</b><br>木头（log）×<b>5</b><br>莎草纸（papyrus）×<b>5</b></td><td style="border:1px solid #ccc; padding:6px;">1 天</td><td style="border:1px solid #ccc; padding:6px;">须<b>恰好</b>四种、数量完全匹配；暖金照明，荧光果补燃料</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">精华</td><td style="border:1px solid #ccc; padding:6px;">相思断肠红精华 ×<b>1</b>/套（zhei_xiangsijh）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">相思断肠红芽穗（zhei_xiaoxiangsi）×<b>2</b><br>[[相思断肠红花]]（zhei_xiangsiflower）×<b>2</b></td><td style="border:1px solid #ccc; padding:6px;">120 秒/套（约 2 分钟）</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">精华</td><td style="border:1px solid #ccc; padding:6px;">八角玄冰草精华 ×<b>1</b>/套（zhei_xuanbinjh）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">八角玄冰芽穗（zhei_xiaoice）×<b>2</b><br>[[八角玄冰草花]]（zhei_iceflower）×<b>2</b></td><td style="border:1px solid #ccc; padding:6px;">120 秒/套（约 2 分钟）</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">精华</td><td style="border:1px solid #ccc; padding:6px;">烈火杏娇疏精华 ×<b>1</b>/套（zhei_liehuojh）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">烈火杏娇疏芽穗（zhei_xiaoblaze）×<b>2</b><br>[[烈火杏娇疏花]]（zhei_blazeflower）×<b>2</b></td><td style="border:1px solid #ccc; padding:6px;">90 秒/套（约 1 分 30 秒）</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">精华</td><td style="border:1px solid #ccc; padding:6px;">鸡冠凤凰葵精华 ×<b>1</b>/套（zhei_jiguanjh）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">鸡冠凤凰葵芽穗（zhei_xiaophoenix）×<b>2</b><br>[[鸡冠凤凰葵花]]（zhei_phoenixflower）×<b>2</b></td><td style="border:1px solid #ccc; padding:6px;">70 秒/套（约 1 分 10 秒）</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">灵药</td><td style="border:1px solid #ccc; padding:6px;">相思断肠灵药 ×<b>2</b>/批（zhei_xiangsiyao）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">相思断肠红精华 ×<b>3</b>（每批）<br><small>精华共 6、9…（3 的倍数）时可一次多批（6→4、9→6…）</small></td><td style="border:1px solid #ccc; padding:6px;">240 秒/批（4 分钟）</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">灵药</td><td style="border:1px solid #ccc; padding:6px;">烈火杏娇疏灵药 ×<b>2</b>/批（zhei_liehuoyao）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">烈火杏娇疏精华 ×<b>3</b>（每批）<br><small>精华共 6、9…（3 的倍数）时可一次多批（6→4、9→6…）</small></td><td style="border:1px solid #ccc; padding:6px;">240 秒/批</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">灵药</td><td style="border:1px solid #ccc; padding:6px;">八角玄冰灵药 ×<b>2</b>/批（zhei_xuanbinyao）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">八角玄冰草精华 ×<b>3</b>（每批）<br><small>精华共 6、9…（3 的倍数）时可一次多批（6→4、9→6…）</small></td><td style="border:1px solid #ccc; padding:6px;">240 秒/批</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">灵药</td><td style="border:1px solid #ccc; padding:6px;">鸡冠凤凰灵药 ×<b>2</b>/批（zhei_jiguanyao）</td><td style="border:1px solid #ccc; padding:6px; line-height:1.5;">鸡冠凤凰葵精华 ×<b>3</b>（每批）<br><small>精华共 6、9…（3 的倍数）时可一次多批（6→4、9→6…）</small></td><td style="border:1px solid #ccc; padding:6px;">240 秒/批</td><td style="border:1px solid #ccc; padding:6px;">可倍数炼制</td></tr>
        </table>
        </div>
        <p><b>补充说明：</b></p>
        <ul>
            <li>星星粉尘：炼制时间为 1 天/套（与星星灯笼同档）。</li>
            <li>四种精华：每套需对应<b>芽穗 ×2 + 花 ×2</b>；材料按套数成比例增加时，产物份数同比（倍数炼制）。</li>
            <li>四种灵药：每批需对应精华 ×<b>3</b>，炼出 <b>2</b> 份灵药；精华总数为 3 的倍数时可一次多批（例如 6 份精华 → 4 份灵药，9 → 6…）。</li>
        </ul>
    `,
    "zhei_xiangsiyao": `
        <p><b>Buff 标签：</b>名刀司命</p>
        <p><b>Buff 作用：</b>被救起的队友获得：保命类效果 <b>3 秒</b>内免伤。</p>
        <p><b>相思断肠灵药</b>偏<b>团队救援</b>：自己吃下后，尝试拉起身边倒地的队友。</p>
        <p><b>获取：</b>[[百宝鼎]]炼制，鼎内放入<b>相思断肠红精华 ×3</b>，炼制约 <b>4 分钟</b>，产出 <b>2</b> 份；精华为 3 的倍数时可一次多批（6→4、9→6…）。</p>
        <p><b>自身：</b>作为料理食用回复 <b>10</b> 点生命。</p>
        <p><b>队友：</b>以食用者为中心、半径约 <b>45</b> 内，每名需要救援的其他玩家（鬼魂 / 死亡等）：复活并拉满生命（清除生命惩罚、血条满），饥饿与理智约 <b>50%</b>，体温约 <b>25℃</b>；并为其挂名刀司命 buff。</p>
        <p><span style="color:#666;"><b>一句话：</b>自吃回血，大范围复活队友并赋予保命增益。</span></p>
    `,
    "zhei_liehuoyao": `
        <p><b>Buff 标签：</b>火免抗性</p>
        <p><b>Buff 作用：</b>持续 <b>2</b> 天——火焰免疫、免疫火焰伤害和过热，大力士肌肉不掉。命中敌人时在常规伤害外再追加 <b>20</b> 点位面真伤。</p>
        <p><b>烈火杏娇疏灵药</b>食用后获得火免抗性 buff。</p>
        <p><b>获取：</b>[[百宝鼎]]炼制，鼎内放入<b>烈火杏娇疏精华 ×3</b>，炼制约 <b>4 分钟</b>，产出 <b>2</b> 份；精华为 3 的倍数时可一次多批（6→4、9→6…）。</p>
        <p><span style="color:#666;"><b>一句话：</b>2 天火免 + 攻击追加真伤。</span></p>
    `,
    "zhei_xuanbinyao": `
        <p><b>Buff 标签：</b>极致寒冰</p>
        <p><b>Buff 作用：</b>持续 <b>1</b> 天——免疫过冷导致的扣血；保持干燥、不潮湿；攻击 <b>15%</b> 概率触发与[[八角玄冰棕]]同类冰冻；目标解冻或碎冰时再受 <b>30</b> 点物理伤害。</p>
        <p><b>八角玄冰灵药</b>食用后获得极致寒冰 buff。</p>
        <p><b>获取：</b>[[百宝鼎]]炼制，鼎内放入<b>八角玄冰草精华 ×3</b>，炼制约 <b>4 分钟</b>，产出 <b>2</b> 份；精华为 3 的倍数时可一次多批（6→4、9→6…）。</p>
        <p><span style="color:#666;"><b>一句话：</b>1 天防寒防潮 + 概率冰冻与碎冰补刀。</span></p>
    `,
    "zhei_jiguanyao": `
        <p><b>Buff 标签：</b>熬夜大师</p>
        <p><b>Buff 作用：</b>持续 <b>1</b> 天——昏睡值抗性 + 免疫；攻击时召唤与启迪之冠同类的月灵，每次攻击扣 <b>1</b> 理智。</p>
        <p><b>鸡冠凤凰灵药</b>食用后获得熬夜大师 buff。</p>
        <p><b>获取：</b>[[百宝鼎]]炼制，鼎内放入<b>鸡冠凤凰葵精华 ×3</b>，炼制约 <b>4 分钟</b>，产出 <b>2</b> 份；精华为 3 的倍数时可一次多批（6→4、9→6…）。</p>
        <p><span style="color:#666;"><b>一句话：</b>1 日防睡 + 启迪之冠式月灵追击（每次攻扣 1 理智）。</span></p>
    `,
    "zhei_xiangsijh": `
        <p><b>检视：</b>相思之力凝成的一滴精粹，温润却有韧性。</p>
        <p><b>炼制：</b>[[百宝鼎]]中放入 [[相思断肠红芽穗]] ×2、[[相思断肠红花]] ×2，炼制 <b>2 分钟</b>/套。</p>
        <p><b>补充（玩法）：</b>四种精华在鼎内均可按「芽穗 ×2 + 花 ×2」为一套成比例一次炼多份（与百宝鼎 allow_multiples 逻辑一致）。同种精华 ×3 可炼 [[相思断肠灵药]] ×2（炼 <b>4 分钟</b>）。</p>
    `,
    "zhei_xuanbinjh": `
        <p><b>检视：</b>寒意被提炼得更纯粹，握久了指尖都发凉。</p>
        <p><b>炼制：</b>[[百宝鼎]]中放入 [[八角玄冰芽穗]] ×2、[[八角玄冰草花]] ×2，炼制 <b>2 分钟</b>/套。</p>
        <p><b>补充（玩法）：</b>四种精华在鼎内均可按「芽穗 ×2 + 花 ×2」为一套成比例一次炼多份（与百宝鼎 allow_multiples 逻辑一致）。同种精华 ×3 可炼 [[八角玄冰灵药]] ×2（炼 <b>4 分钟</b>）。</p>
    `,
    "zhei_liehuojh": `
        <p><b>检视：</b>炽热药性被锁在其中，像一簇收束的火苗。</p>
        <p><b>炼制：</b>[[百宝鼎]]中放入 [[烈火杏娇疏芽穗]] ×2、[[烈火杏娇疏花]] ×2，炼制 <b>1 分 30 秒</b>/套。</p>
        <p><b>补充（玩法）：</b>四种精华在鼎内均可按「芽穗 ×2 + 花 ×2」为一套成比例一次炼多份（与百宝鼎 allow_multiples 逻辑一致）。同种精华 ×3 可炼 [[烈火杏娇疏灵药]] ×2（炼 <b>4 分钟</b>）。</p>
    `,
    "zhei_jiguanjh": `
        <p><b>检视：</b>如同凤凰尾焰留下的精华，暖意轻盈却绵长。</p>
        <p><b>炼制：</b>[[百宝鼎]]中放入 [[鸡冠凤凰葵芽穗]] ×2、[[鸡冠凤凰葵花]] ×2，炼制 <b>1 分 10 秒</b>/套。</p>
        <p><b>补充（玩法）：</b>四种精华在鼎内均可按「芽穗 ×2 + 花 ×2」为一套成比例一次炼多份（与百宝鼎 allow_multiples 逻辑一致）。同种精华 ×3 可炼 [[鸡冠凤凰灵药]] ×2（炼 <b>4 分钟</b>）。</p>
    `,
    "zhei_seed_bundle": `
        <p><b>星空种子包 · 一览</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:10px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>显示名</b></td><td style="border:1px solid #ccc; padding:8px;">星空种子包</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>Prefab</b></td><td style="border:1px solid #ccc; padding:8px;"><code>zhei_seed_bundle</code></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>科技</b></td><td style="border:1px solid #ccc; padding:8px;">二本（<code>TECH.SCIENCE_TWO</code>），即炼金引擎</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>配方</b></td><td style="border:1px solid #ccc; padding:8px; line-height:1.5;">普通种子 <code>seeds</code> × <b>3</b> → 星空种子包 × <b>1</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>拆包内容</b></td><td style="border:1px solid #ccc; padding:8px; line-height:1.5;"><b>星空果实种子</b> <code>zhei_xklg_seeds</code>：随机 <b>1～2</b> 颗；<b>灭霸果种子</b> <code>zhei_mbg_seeds</code>：随机 <b>1～2</b> 颗（两类<b>独立随机</b>，合计一般 <b>2～4</b> 颗）。</td></tr>
        </table>
        <p><span style="color:#666;">用于种植 [[星空灵果]]、[[灭霸果]]，详见作物词条。</span></p>
    `,
    "zhei_xingxingsp": `
        <p><b>星星碎片</b>（prefab：<code>zhei_xingxingsp</code>）</p>
        <p><b>基本</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:8px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:88px;"><b>名称</b></td><td style="border:1px solid #ccc; padding:8px;">星星碎片</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>堆叠</b></td><td style="border:1px solid #ccc; padding:8px;">最大 <b>20</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>地面光</b></td><td style="border:1px solid #ccc; padding:8px;">丢在地上时有淡<b>紫</b>光（半径约 <b>1.05</b>）</td></tr>
        </table>
        <p><b>获取方式</b></p>
        <ul>
            <li><b>1）普通夜晚 · 地表坠落</b><br>仅<b>地表主世界</b>，<b>洞穴不触发</b>。每个<b>进入夜晚</b>的时刻，默认 <b>25%</b> 概率（见模组配置「星星碎片·夜晚掉落概率」）。<b>全员有份</b>。</li>
            <li><b>2）月圆 · 流星雨（额外碎片 + 祝福）</b><br>满月夜，默认 <b>5%</b>（可配 <b>0%</b> 关闭）。全服公告，并给有效玩家祝福。流星雨结束后可有<b>星沐祝福</b>，可拆成<b>星沐·微光</b> / <b>缓愈</b> / <b>星屑拖尾</b>等。</li>
        </ul>
        <p><b>主要用途（合成 / 放置）</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:8px 0; font-size:0.95em;">
            <tr style="background:#f5f5f5;"><td style="border:1px solid #ccc; padding:6px; width:90px;"><b>用途</b></td><td style="border:1px solid #ccc; padding:6px;"><b>材料/条件</b></td><td style="border:1px solid #ccc; padding:6px;"><b>备注</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">[[星星粉尘]]</td><td style="border:1px solid #ccc; padding:6px;">[[百宝鼎]]：星星碎片 ×<b>4</b>，<b>1 游戏天</b>；总量为 <b>4 的倍数</b>时可一次多份炼制</td><td style="border:1px solid #ccc; padding:6px;">详见 [[星星粉尘]]、[[百宝鼎]] 可炼总表</td></tr>
            <tr><td style="border:1px solid #ccc; padding:6px;">[[星星灯笼]]</td><td style="border:1px solid #ccc; padding:6px;">[[百宝鼎]]：碎片×1 + 荧光果×10 + 木头×5 + 莎草纸×5，<b>1 游戏天</b>；须四种数量恰好匹配</td><td style="border:1px solid #ccc; padding:6px;">详见 [[星星灯笼]]</td></tr>
        </table>
        <p><span style="color:#666;">另：星尘盾等仍见 [[百宝鼎]] 可炼总表。</span></p>
    `,
    "zhei_xingxingfc1": `
        <p><b>星星粉尘</b>（zhei_xingxingfc1）— 万物百宝 Treasure Chest</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:12px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:72px; vertical-align:top;"><b>来源</b></td><td style="border:1px solid #ccc; padding:8px;">[[百宝鼎]]炼制：放入 [[星星碎片]] ×4，炼制 <b>1 游戏天</b>；碎片为 <b>4 的倍数</b>时可一次炼多份。</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>用途</b></td><td style="border:1px solid #ccc; padding:8px;">炼 [[星尘盾]] 的材料之一：星星粉尘 ×1、星星碎片 ×5、月亮玻璃 ×10、克苏鲁之盾 ×1（与 [[昊天锤]] 同档长耗时；鼎内须<b>恰好匹配</b>）。</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>其它</b></td><td style="border:1px solid #ccc; padding:8px;">物品带微光，落地时较亮。</td></tr>
        </table>
    `,
    "zhei_lantern_2": `
        <p><b>星星灯笼 · 一览</b></p>
        <table style="border-collapse:collapse; width:100%; max-width:720px; margin:10px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:100px;"><b>显示名</b></td><td style="border:1px solid #ccc; padding:8px;">星星灯笼</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>Prefab</b></td><td style="border:1px solid #ccc; padding:8px;"><code>zhei_lantern_2</code></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>获取</b></td><td style="border:1px solid #ccc; padding:8px;">[[百宝鼎]]炼制 <b>1 游戏天</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>配方</b></td><td style="border:1px solid #ccc; padding:8px; line-height:1.5;">须与鼎内物品<b>完全一致</b>（四种、数量恰好）：<br>[[星星碎片]] <code>zhei_xingxingsp</code> ×<b>1</b>、荧光果 <code>lightbulb</code> ×<b>10</b>、木头 <code>log</code> ×<b>5</b>、莎草纸 <code>papyrus</code> ×<b>5</b> → 产出 <b>1</b> 个</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>装备</b></td><td style="border:1px solid #ccc; padding:8px;"><b>手部</b>；移速 = 原版<b>步行手杖</b></td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>燃料</b></td><td style="border:1px solid #ccc; padding:8px;">与原版<b>提灯</b>同类：荧光果等洞穴燃料，或投入 <b>[[星星碎片]]</b>（比荧光果加的耐久<b>更多</b>）。初始耐久约比红灯笼多约 <b>18%</b>。</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px;"><b>补充</b></td><td style="border:1px solid #ccc; padding:8px;"><b>雨天</b>会加速消耗；有遮蔽 / 雨免等时按<b>原版逻辑</b>减轻。</td></tr>
        </table>
    `,
    "zhei_exp_stardust": `
        <p><b>经验星尘</b> — [[星澜]]专用成长道具。</p>
        <table style="border-collapse:collapse; width:100%; max-width:640px; margin:12px 0;">
            <tr><td style="border:1px solid #ccc; padding:8px; width:72px; vertical-align:top;"><b>定位</b></td><td style="border:1px solid #ccc; padding:8px;">只有[[星澜]]吃掉才会加经验，每颗 <b>+50</b>。</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>掉落</b></td><td style="border:1px solid #ccc; padding:8px;">星澜<b>击杀</b> epic / 雕像 Boss 时按概率额外掉落 1 颗（默认 <b>30%</b>，可配置）；<b>助攻</b>（对该 Boss 实体造成有效攻击后由他人击杀）同样可结算。马蹄铁等幸运可饱和提高概率。</td></tr>
            <tr><td style="border:1px solid #ccc; padding:8px; vertical-align:top;"><b>其它</b></td><td style="border:1px solid #ccc; padding:8px;">可食用、可堆叠（最大 <b>20</b>）；地面有淡天蓝微光。</td></tr>
        </table>
    `,
    "zhei_xklg": `
        <p><b>星空灵果</b>（prefab：<code>zhei_xklg</code>）— 万物百宝农作物</p>
        <p><b>农田与生长</b></p>
        <ul>
            <li><b>适宜季节：</b>秋、春、夏</li>
            <li><b>产物名称：</b>星空果实（生/熟）— 烹饪标签 <b>1</b> 单位果度（<code>fruit = 1</code>）</li>
        </ul>
        <p><b>星空果注意：</b>田里采摘会<b>触电</b>，需佩戴<b>防电类装备</b>后再采收。</p>
        <p><b>获取种子</b></p>
        <ul>
            <li><b>[[星空种子包]]：</b>在炼金引擎（二本）用<b>普通种子 ×3</b>合成；拆包规则与 prefab 见 [[星空种子包]] 词条。</li>
        </ul>
        <p><b>其它用途（星空灵果 / 星空果实）</b></p>
        <ul>
            <li><b>[[昊天锤]]：</b>[[百宝鼎]]炼制配方需<b>未烤熟星空果实</b>（<code>zhei_xklg</code>）×<b>2</b>；每颗参与修理时提供 <b>20</b> 点耐久。</li>
        </ul>
        <p><b>棱镜联动：</b>长出<b>巨大的星空灵果</b>后，可使用<b>棱镜</b>模组的<b>幻想法杖</b>对其进行幻化；<b>巨大的灭霸果</b>同理。</p>
    `,
    "zhei_mbg": `
        <p><b>灭霸果</b>（prefab：<code>zhei_mbg</code>）— 万物百宝农作物</p>
        <p><b>农田与生长</b></p>
        <ul>
            <li><b>适宜季节：</b>秋、冬、春</li>
            <li><b>产物：</b>灭霸果（生/熟）— 烹饪标签 <b>1</b> 单位蔬菜度（<code>veggie = 1</code>）</li>
        </ul>
        <p><b>获取种子</b></p>
        <ul>
            <li>与 [[星空灵果]] 共用 <b>[[星空种子包]]</b>：炼金引擎（二本）普通种子 ×3 合成；拆包见 [[星空种子包]]。</li>
        </ul>
        <p><b>棱镜联动：</b>长出<b>巨大的灭霸果</b>后，可使用<b>棱镜</b>模组的<b>幻想法杖</b>对其进行幻化；<b>巨大的星空灵果</b>同理）。</p>
    `,
    "zhei_dengg": `
        <p><b>百宝灯</b>是自动昼夜开关的装饰性照明建筑，提供自动昼夜开关、光照系统等功能。适合需要自动照明和装饰的玩家使用。</p>
        
        <p><b>制作配方：</b>金丝雀羽毛 × 2 + 金块 × 3 + 石砖 × 1</p>
        <p><b>科技要求：</b>暗影操控器（四本）</p>
        
        <p><b>详细描述：</b></p>
        <ul>
            <li>开启时：一盏明亮的灯</li>
            <li>关闭时：一盏熄灭的灯</li>
        </ul>
        
        <p><b>自动昼夜开关：</b></p>
        <ul>
            <li>开启条件：夜晚（isnight）或黄昏（isdusk）</li>
            <li>关闭条件：白天（isday）</li>
            <li>自动切换：自动开关</li>
        </ul>
        <p><b>光照系统：</b></p>
        <ul>
            <li>光照半径：<b>5.5格</b>，与原版蘑菇灯一致</li>
        </ul>
        
        <p><b>物理属性：</b></p>
        <ul>
            <li>障碍物物理：半径 <b>0.2格</b></li>
            <li>放置半径：<b>0.5格</b>（智能放置）</li>
        </ul>
    `,
    "zhei_yots_lantern_post_item": `
        <p><b>荷花灯柱套装</b>是可部署的照明建筑物品，先做出套装放入物品栏，再右键部署为地面实体<b>荷花灯柱</b>。点亮方式与原版喜庆灯柱相同。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/zhei_yots_lantern_post.png" alt="荷花灯柱套装" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>制作配方：</b>花瓣 × 2 + 莎草纸 × 4 + 绳子 × 1 + 荧光果（灯泡果）× 1</p>
        <p><b>科技要求：</b>炼金引擎（二本）；需在炼金引擎旁解锁原型；制作分类为百宝（TC_BAIBAO）</p>
        
        <p><b>部署：</b></p>
        <ul>
            <li>将「荷花灯柱套装」放入物品栏，右键部署为地面实体「荷花灯柱」</li>
        </ul>
        
        <p><b>点亮：</b></p>
        <ul>
            <li>与原版喜庆灯柱相同：灯柱带<b>单格槽</b>，放入光源即可点亮</li>
            <li>例如：荧光果、孢子等带 <b>lightbattery</b> / <b>spore</b> / <b>lightcontainer</b> 的物品</li>
        </ul>
        
        <p><b>星星碎片：</b></p>
        <ul>
            <li>槽内放入模组<b>星星碎片</b>时，灯光为偏紫的星辉色，照明范围大于普通燃料</li>
            <li>并带与人造日光类似的逻辑，利于夜间农田/作物在夜晚生长</li>
        </ul>
    `,
    "zhei_displaytable": `
        <p><b>展示柜</b>是能展示物品的容器建筑，提供物品展示、<b>全图收集</b>、整理、升级等功能。适合用于基地装饰和物品管理。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/zhei_displaytable_1.png" alt="展示柜" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>制作配方：</b>木板 × 5 + 清洁扫把 × 1 + 活木 × 1</p>
        <p><b>科技要求：</b>暗影操控器（四本）</p>
        
        <p><b>容器系统：</b></p>
        <ul>
            <li>容器大小：<b>5×5</b>（25个格子）</li>
            <li>前 <b>11个槽位</b>会显示</li>
        </ul>
        
        <p><b>物品展示功能：</b></p>
        <ul>
            <li>展示机制：前11个槽位的物品会在建筑上显示图标</li>
        </ul>
        
        <p><b>收集按钮：</b></p>
        <ul>
            <li>打开展示柜 UI 后，界面下方左侧为<b>「收集」</b>按钮（悬停提示：<b>全图收集</b>）</li>
            <li>点击后触发一次<b>全图扫描</b>（<code>DoCollect(true)</code>，与[[百宝小型]]手动点收集相同），不是关容器时自动收，也<b>没有 12 格半径</b>限制</li>
            <li><b>收集规则：</b>只吸入<b>展示柜里已经有的 prefab</b>（同类堆叠进格；不可堆叠物须有空位）</li>
            <li><b>额外：</b>若柜内已有垃圾类/预加工食物等（与万物百宝橙宝石收集相同的 rubbish 规则），也会一并吸</li>
            <li><b>不会收集：</b>已被拾取/在容器中的物品；鸟笼诱饵、陷阱 bait 等「占用中」物品；饭桶/真饭桶抛物飞行中（<code>zhei_wetgoop_exclude_autocollect</code> 等）；模组配置关闭时的小动物</li>
            <li><b>兼容：</b>与万物百宝共用收集缓存，不吸鸟笼内鸟等（与防卡逻辑一致）</li>
        </ul>
        
        <p><b>整理按钮：</b></p>
        <ul>
            <li>界面下方右侧<b>「整理」</b>按钮（悬停：整理展示柜中的物品）</li>
            <li>对 25 格按万物百宝左侧相同的 <code>PreciseClassification</code> 规则分类排序，并优先合并同类</li>
        </ul>
        
        <p><b>升级功能：</b></p>
        <ul>
            <li>升级方式：使用弹性空间扩展器（chestupgrade_stacksize）升级</li>
            <li>敲击返还：升级后敲击会返还弹性空间扩展器</li>
        </ul>
        
        <p><b>使用建议：</b></p>
        <ul>
            <li>用途：展示和存储物品</li>
            <li>建议：放置在基地，用于展示收藏品</li>
            <li>技巧：
                <ul>
                    <li>先放入要收纳的物品种类，再点<b>收集</b>做全图同类回收</li>
                    <li>使用<b>整理</b>合并堆叠；可用弹性空间扩展器启用无限堆叠</li>
                </ul>
            </li>
        </ul>
    `,
    "zhei_meatrack_hermit_multi": `
        <p><b>百宝巨架</b>（zhei_meatrack_hermit_multi）是多槽位巨型晾晒建筑，支持批量风干，并新增海水过滤为淡水的功能。</p>
        
        <p><b>制作配方：</b>浮木 × 3 + [[星星碎片]] × 5 + 绳子 × 3 + 海水瓶 × 3</p>
        <p><b>科技要求：</b>太阳雕像科技（需在[[太阳雕像仿品]]旁制作）</p>
        
        <p><b>核心功能：</b></p>
        <ul>
            <li><b>巨型晾晒：</b>3×3 共 <b>9格</b> 晾晒位，可同时处理多份可风干食材</li>
            <li><b>海水过滤：</b>支持向巨架倒入海水，按周期转换为淡水并产出盐晶</li>
            <li><b>百宝瓶联动：</b>支持取淡水/倒海水交互，便于循环补水与取水</li>
            <li><b>状态反馈：</b>带晾晒状态与盐渍相关显示提示</li>
        </ul>
        
        <p><b>使用建议：</b></p>
        <ul>
            <li>适合放在基地烹饪区附近，集中处理肉干与海带等风干食材</li>
            <li>搭配[[百宝瓶]]与[[白熊冰箱]]使用，可形成“取水-烹饪-保鲜”流程</li>
        </ul>
    `,
    "zhei_table": `
        <p><b>饭桌</b>是一张可以展示料理的饭桌，提供物品展示和保鲜功能。适合用于基地装饰和料理保存。</p>
        
        <p><b>制作配方：</b>木板 × 2 + 绳子 × 1 + 盐晶 × 1</p>
        <p><b>科技要求：</b>炼金引擎（二本）</p>
        
        <p><b>详细描述：</b></p>
        <ul>
            <li>空桌：一张可以展示料理的饭桌</li>
            <li>有料理：一张展示着料理名称的饭桌</li>
        </ul>
        
        <p><b>容器系统：</b></p>
        <ul>
            <li>容器大小：<b>1个格子</b></li>
            <li>布局：单格容器</li>
            <li>物品限制：只能放入料理
                <ul>
                    <li>包括原版料理</li>
                    <li>包括调味后的料理</li>
                </ul>
            </li>
        </ul>
        
        <p><b>物品展示功能：</b></p>
        <ul>
            <li>展示机制：第一个格子的物品会在桌子上显示</li>
        </ul>
        
        <p><b>保鲜功能：</b></p>
        <ul>
            <li>保鲜效果：完全停止腐烂</li>
            <li>说明：放在餐桌上的料理不会腐烂</li>
        </ul>
        <p><b>使用建议：</b></p>
        <ul>
            <li>用途：展示和保存料理</li>
            <li>建议：放置在基地，用于展示料理</li>
            <li>技巧：
                <ul>
                    <li>可以永久保存料理（不会腐烂）</li>
                    <li>适合展示特殊料理或收藏品</li>
                    <li>可以四方向放置，适应不同布局</li>
                </ul>
            </li>
        </ul>
    `,
    "zhei_fastbe": `
        <p><b>神秘腐烂箱</b>是神秘的箱子，里面的物品会快速腐烂，用于快速获得腐烂食物，制作肥料等。</p>
        
        <p><b>制作配方：</b>腐烂食物 × 20 + 木板 × 5 + 绳子 × 3</p>
        <p><b>科技要求：</b>炼金引擎（二本）</p>
        <p><b>最小间距：</b>1.5</p>
        
        <p><b>快速腐烂功能：</b></p>
        <ul>
            <li>腐烂速度倍数：可配置（默认 <b>5倍</b>）</li>
            <li>默认值：<b>5倍</b></li>
            <li>说明：容器内物品的腐烂速度是正常的 <b>5倍</b></li>
            <li>用途：快速获得腐烂食物，用于制作肥料等</li>
        </ul>
        
        <p><b>容器系统：</b></p>
        <ul>
            <li>容器大小：<b>3×3</b> = <b>9个格子</b></li>
            <li>布局：3 行 3 列</li>
        </ul>
        
        <p><b>基础功能：</b></p>
        <ul>
            <li>可被锤子破坏：需要 <b>2次</b>锤击</li>
            <li>可被烧毁
        </ul>
        <p><b>注意事项：</b></p>
        <ul>
            <li><span style="color:red;">不要存放需要保鲜的物品</span></li>
            <li>适合存放需要快速腐烂的物品（如制作肥料）</li>
            <li>腐烂速度倍数可在 mod 配置中调整（默认 5 倍）</li>
        </ul>
    `,
    "zhei_floral_cane": `
        <p><b>百宝花杖</b>是一根可以帮你打扮、缩放和恢复建筑原样的花杖。随心缩放并恢复建筑原样的魔法花杖。</p>
        
        <p><b>图片展示：</b></p>
        <div style="text-align:center; margin: 15px 0;">
            <img src="img/zhei_floral_cane_ui.png" alt="百宝花杖界面" style="max-width:100%; border: 2px solid #d35400; border-radius: 8px;">
        </div>
        
        <p><b>制作配方：</b>花瓣 × 4 + 树枝 × 2 + 绳子 × 1</p>
        <p><b>科技要求：</b>炼金引擎（二本）</p>
        
        <p><b>建筑缩放系统：</b></p>
        <p>百宝花杖有三种模式，可对建筑进行缩放操作：</p>
        
        <p><b>1. 恢复原状模式</b></p>
        <ul>
            <li>功能：将建筑恢复到最初被调整前的原始大小和朝向</li>
            <li>提示语："恢复原样吧"</li>
        </ul>
        
        <p><b>2. 放大模式</b></p>
        <ul>
            <li>功能：每次点击放大建筑</li>
            <li>缩放步进：每次增加 <b>0.15倍</b></li>
            <li>提示语："大!大!大!"</li>
        </ul>
        
        <p><b>3. 缩小模式</b></p>
        <ul>
            <li>功能：每次点击缩小建筑</li>
            <li>缩放步进：每次减少 <b>0.15倍</b></li>
            <li>提示语："小!小!小!"</li>
        </ul>
        
        <p><b>缩放参数：</b></p>
        <ul>
            <li>缩放范围：<b>0.3倍 ~ 3.0倍</b></li>
            <li>缩放步进：<b>0.15倍</b></li>
            <li>缩放方式：相对于原始大小的倍数</li>
        </ul>
        <p><b>有效目标：</b></p>
        <ul>
            <li>建筑（structure 标签）</li>
            <li>墙（wall 标签）</li>
            <li>树（tree 标签）</li>
            <li>石头（boulder 标签）</li>
            <li>可部署物品（deployable 标签）</li>
            <li>其他可检查物品（inspectable 标签）</li>
        </ul>
        <p><b>无效目标：</b></p>
        <ul>
            <li>玩家、幽灵、特效、投射物</li>
            <li>小型/大型生物</li>
            <li>不可点击物品</li>
        </ul>
        
        <p><b>状态持久化：</b></p>
        <ul>
            <li>重新启动游戏放大或缩小的状态会被保存</li>
            <li>支持恢复到原始状态</li>
        </ul>
        
        <p><b>模式切换界面：</b></p>
        <ul>
            <li>打开方式：右键点击百宝花杖（在物品栏或装备时）</li>
            <li>界面功能：
                <ul>
                    <li>选择三种模式（恢复原状、放大、缩小）</li>
                    <li>百宝淘宝按钮（打开百宝淘宝小店界面）</li>
                    <li>兑换皮肤按钮（打开皮肤兑换 CDK 界面）</li>
                </ul>
            </li>
            <li>支持局内快捷键设置</li>
        </ul>
        
        <p><b>施法系统：</b></p>
        <ul>
            <li>施法方式：装备后左键点击目标建筑</li>
        </ul>
        
        <p><b>特殊功能：</b></p>
        <p><b>1. 百宝淘宝</b></p>
        <ul>
            <li>功能：通过花杖界面打开百宝淘宝小店</li>
            <li>用途：
                <ul>
                    <li>可以查看料理制作方式（方便做料理献祭任务，如果有其他mod作者像兼容这个界面加入自己的料理，可以私聊我告诉你如何兼容）</li>
                    <li>可以看皮肤列表（皮肤获取方式通过活动或者赞助获得,群号：808847558）</li>
                </ul>
            </li>
        </ul>
        
        <p><b>2. 兑换皮肤</b></p>
        <ul>
            <li>功能：通过花杖界面打开皮肤兑换 CDK 界面</li>
            <li>用途：使用 CDK 兑换百宝相关皮肤</li>
        </ul>
        
        <p><b>使用说明：</b></p>
        <ol>
            <li>制作并装备百宝花杖</li>
            <li>右键打开模式选择界面</li>
            <li>选择需要的模式（恢复原状、放大、缩小）</li>
            <li>左键点击目标建筑进行缩放操作</li>
            <li>可多次点击同一建筑进行连续缩放</li>
            <li>使用恢复原状模式可恢复到最初状态</li>
        </ol>
        
        <p><b>注意事项：</b></p>
        <ul>
            <li>缩放范围限制在 <b>0.3倍 ~ 3.0倍</b>之间</li>
            <li>缩放状态会保存到存档中</li>
            <li>只能对符合条件的建筑使用</li>
            <li>恢复原状模式会恢复到第一次调整前的状态</li>
        </ul>
    `,
    "zhei_backpackd": `
        <p><b>百宝背包</b>（zhei_backpackd）是一个功能强大的背包，结合了坎普斯背包的容量、盐盒的保鲜、雨衣的防水和防雷电，并支持升级为无限堆叠；还能通过[[混沌水晶]]触发<b>混沌保鲜</b>升级。</p>
        
        <p><b>基本信息：</b></p>
        <ul>
            <li><b>预制物名称：</b>zhei_backpackd</li>
            <li><b>显示名称：</b>百宝背包</li>
            <li><b>描述：</b>具有保鲜、防水和防雷电能力的背包</li>
        </ul>
        
        <p><b>容器功能：</b></p>
        <ul>
            <li><b>格子数量：</b>2×14（<b>28格</b>，与坎普斯背包相同）</li>
            <li><b>保鲜功能：</b>
                <ul>
                    <li>保鲜倍数：与盐盒相同</li>
                </ul>
            </li>
            <li><b>防水功能：</b>
                <ul>
                    <li>防水值：与雨衣相同</li>
                </ul>
            </li>
            <li><b>防雷电功能：</b>
                <ul>
                    <li>与雨衣相同</li>
                </ul>
            </li>
            <li><b>不可燃烧：</b>不可被烧毁</li>
            <li><b>升级功能：</b>
                <ul>
                    <li>支持使用"弹性空间扩展器"（chestupgrade_stacksize）升级</li>
                    <li>升级后：启用无限堆叠</li>
                    <li>升级次数：只能升级一次</li>
                </ul>
            </li>
            <li><b>混沌保鲜升级：</b>
                <ul>
                    <li>强化材料：[[混沌水晶]]（zhei_chaoscrystal）</li>
                    <li>强化方式：手持混沌水晶，右键点击物品栏中的百宝背包</li>
                    <li>强化后效果：背包内食物暂停腐烂（保鲜倍率为 0）</li>
                    <li>强化限制：仅可升级一次（已升级背包不可重复使用）</li>
                </ul>
            </li>
        </ul>
        
        <p><b>装备信息：</b></p>
        <ul>
            <li><b>科技要求：</b>太阳雕像科技（TECH.SUN_SCULPTURE_FOUR）</li>
            <li><b>制作材料：</b>
                <ul>
                    <li>1个蓝色月眼（bluemooneye）</li>
                    <li>2个太阳火种（zhei_sunfires）</li>
                    <li>3个月食遗物（zhei_eclipserelics）</li>
                    <li>70点血量</li>
                </ul>
            </li>
        </ul>
        
        <p><b>总结：</b></p>
        <p>百宝背包是一个功能背包，结合了坎普斯背包的容量、盐盒的保鲜、雨衣的防水和防雷电，并支持升级为无限堆叠。还可通过[[混沌水晶]]进行混沌保鲜升级，让背包内食物暂停腐烂。制作需要太阳雕像科技，每次制作都必须在太阳雕像科技站附近。</p>
    `,
    "zhei_pingzi11": `
        <p><b>百宝瓶</b>（zhei_pingzi11）是一个可在空瓶/海水/淡水三种状态间切换的功能道具，可与[[百宝巨架]]联动进行水资源循环。</p>
        
        <p><b>制作配方：</b>[[百宝鼎]]炼制：月亮玻璃 × 5</p>
        <p><b>炼制时间：</b>约 <b>1.5 游戏日</b>（支持倍数炼制）</p>
        
        <p><b>三种状态：</b></p>
        <ul>
            <li><b>空瓶：</b>[[百宝瓶]]（zhei_pingzi11）</li>
            <li><b>海水瓶：</b>百宝瓶（海水）（zhei_pingzi11_seawater）</li>
            <li><b>淡水瓶：</b>百宝瓶（淡水）（zhei_pingzi11_freshwater）</li>
        </ul>
        
        <p><b>主要用法：</b></p>
        <ul>
            <li><b>取海水：</b>手持空瓶右键海面，转换为海水瓶</li>
            <li><b>倒入海水：</b>手持海水瓶右键[[百宝巨架]]，为巨架水罐补充海水并返还空瓶</li>
            <li><b>取淡水：</b>手持空瓶右键[[百宝巨架]]，从巨架水罐提取淡水并转换为淡水瓶</li>
            <li><b>灌水壶：</b>手持淡水瓶右键水壶进行灌水</li>
            <li><b>投掷泼水：</b>淡水瓶可投掷触发泼水效果，使用后返还空瓶</li>
        </ul>
        
        <p><b>联动说明：</b></p>
        <ul>
            <li>与[[百宝巨架]]配合可形成“海水输入 → 过滤产淡水 → 回收使用”的循环</li>
            <li>与水壶联动后，可作为基地浇灌补水链路的一环</li>
        </ul>
    `,
    "zhei_xinglan_portablecookpot_item": `
        <p><b>星空盛宴</b>是[[星澜]]的专属便携锅，集<b>研磨</b>、<b>烹饪</b>、<b>调味</b>于一体。</p>
        
        <p><b>制作条件：</b></p>
        <ul>
            <li>角色条件：仅[[星澜]]可制作（<b>一级</b>解锁）</li>
            <li>科技条件：炼金引擎（二本）</li>
            <li>配方：[[星星粉尘]] × 10 + [[熊猫棕子]] × 8 + 蓝宝石 × 2</li>
        </ul>
        
        <p><b>核心功能：</b></p>
        <ul>
            <li><b>三合一流程：</b>支持研磨、烹饪、调味全流程处理</li>
            <li><b>双成品位：</b>烹饪产出区有两格成品位，兼容同优先级概率配方的多结果场景</li>
            <li><b>大容量结构：</b>上层工作区 + 下方储物区，便于批量备料</li>
            <li><b>便携部署：</b>可随身携带并随时部署为地上锅</li>
            <li><b>进度保持：</b>收回/再部署会保留容器内容、开关状态与计时进度</li>
        </ul>
        
        <p><b>使用方法：</b></p>
        <ol>
            <li>[[星澜]]一级后在人物栏制作，随身携带或部署到地面</li>
            <li>打开锅界面，上方分别开关<b>研磨 · 烹饪 · 调味</b>（可单独或组合使用）</li>
            <li><b>研磨：</b>原料放入研磨格，开启后产出调料；支持原版盐/椒/蒜/蜜及能力勋章、丰耘秘境等原料</li>
            <li><b>烹饪：</b>四格食材放入烹饪区并开启「烹饪」；界面会预览将做出的菜（不必放满四格）</li>
            <li><b>调味：</b>成品 + 调料放入对应格，开启后产出调味版料理</li>
            <li>下方 6×3 储物格可备料；点「整理」归类顺序与[[万物百宝]]大箱相同</li>
            <li>收回再部署会保留格内物品、开关状态与计时进度；队友也可使用已部署的锅</li>
        </ol>

        <p><b>棱镜月相四件套（本锅特色）：</b></p>
        <ul>
            <li>安装<b>棱镜</b>后，本锅可<b>无视月圆</b>制作月相四件套，不必等棱镜月炆宝炊的月圆条件</li>
            <li>限制改为<b>白天 / 黑夜</b>（看游戏内昼夜，不是月相盘上的月亮形态）：
                <ul>
                    <li><b>白天</b>可做：<b>月饼</b>、<b>月酿</b></li>
                    <li><b>黑夜</b>可做：<b>花儿粑</b>、<b>花儿酒</b></li>
                </ul>
            </li>
            <li>食材搭配与棱镜<b>月炆宝炊</b>相同，只是不用等月圆、改看昼夜</li>
        </ul>

        <p><b>其它烹饪说明：</b></p>
        <ul>
            <li>除上述四道菜外，「烹饪」侧走<b>沃利便携烹饪锅</b>食谱池；其它模组料理须写入该池才能制作</li>
            <li>[[星澜]] 2 级起从任意锅收菜有概率额外获得调味版，本锅收菜同样适用</li>
        </ul>

        <p><b>与其他模组联动：</b></p>
        <ul>
            <li><b>能力勋章 / 丰耘秘境：</b>研磨侧合并对应调味原料规则</li>
            <li>若安装了 ShowMe 或 Insight，悬停可查看格内腐烂与锅内保鲜信息</li>
            <li>更多人物级联动见 [[星澜]]词条「与其他模组联动」</li>
        </ul>
    `,
    "zhei_xinglan_starsky_umbrella": `
        <p><b>星空伞</b>是[[星澜]]的折跃传送道具，可与[[星空基站套装]]构成传送网络。</p>
        
        <p><b>制作条件：</b></p>
        <ul>
            <li>角色条件：[[星澜]]<b>一级</b>解锁</li>
            <li>科技条件：炼金引擎（二本）</li>
            <li>配方：蜘蛛丝 × 2 + 金块 × 2 + 电子元件 × 1</li>
        </ul>
        
        <p><b>使用方式：</b></p>
        <ul>
            <li>手持星空伞右键，选择要联动的[[星空基站]]</li>
            <li>在地图上点击目标点，进行折跃传送</li>
            <li>传送后会消耗伞的能量</li>
        </ul>
        
        <p><b>能量与联机：</b></p>
        <ul>
            <li>可用[[星星碎片]]补充能量（每次约恢复 5%）</li>
            <li>支持携带附近约 <b>3 格</b>内队友一同传送</li>
        </ul>
    `,
    "zhei_xinglan_starsky_pad_item": `
        <p><b>星空基站套装</b>是可部署的传送站道具，部署后生成[[星空基站]]，作为星空伞的折跃锚点。</p>
        
        <p><b>制作条件：</b></p>
        <ul>
            <li>角色条件：[[星澜]]<b>一级</b>解锁</li>
            <li>科技条件：炼金引擎（二本）</li>
            <li>配方：石砖 × 2 + 齿轮 × 1 + 金块 × 2</li>
        </ul>
        
        <p><b>基站特性：</b></p>
        <ul>
            <li>部署后形成固定传送落点，可被星空伞选中</li>
            <li>无需接入发电机也可作为折跃基站使用</li>
            <li>支持回收为套装物品，便于搬家或重布点</li>
        </ul>
        
        <p><b>联机说明：</b></p>
        <ul>
            <li>基站可被队伍共享，方便多人快速跨点位移动</li>
            <li>建议在基地、Boss 点和资源点各部署一座，提升往返效率</li>
        </ul>
    `,
    "zhei_chun_books": `
        <p><b>春分</b>是[[星澜]]四季书之一，仅星澜可诵读的季节法典。</p>
        <ul>
            <li><b>解锁：</b>[[星澜]]四级 + 太阳雕像科技</li>
            <li><b>配方：</b>莎草纸 × 5 + 食人花肉茎球 × 1 + 彩虹宝石 × 1 + [[经验星尘]] × 3</li>
            <li><b>效果：</b>读完后将世界季节引向春季</li>
            <li><b>限制：</b>仅星澜可读，薇克巴顿与其他角色不可用</li>
        </ul>
    `,
    "zhei_summer_books": `
        <p><b>夏立</b>是[[星澜]]四季书之一，仅星澜可诵读的季节法典。</p>
        <ul>
            <li><b>解锁：</b>[[星澜]]四级 + 太阳雕像科技</li>
            <li><b>配方：</b>莎草纸 × 5 + 红眼冠（COTL 饰品）× 1 + 彩虹宝石 × 1 + [[经验星尘]] × 3</li>
            <li><b>效果：</b>读完后将世界季节引向夏季</li>
            <li><b>限制：</b>仅星澜可读，薇克巴顿与其他角色不可用</li>
        </ul>
    `,
    "zhei_qiu_books": `
        <p><b>秋收</b>是[[星澜]]四季书之一，仅星澜可诵读的季节法典。</p>
        <ul>
            <li><b>解锁：</b>[[星澜]]四级 + 太阳雕像科技</li>
            <li><b>配方：</b>莎草纸 × 5 + 熊皮 × 1 + 彩虹宝石 × 1 + [[经验星尘]] × 3</li>
            <li><b>效果：</b>读完后将世界季节引向秋季</li>
            <li><b>限制：</b>仅星澜可读，薇克巴顿与其他角色不可用</li>
        </ul>
    `,
    "zhei_dong_books": `
        <p><b>冬藏</b>是[[星澜]]四季书之一，仅星澜可诵读的季节法典。</p>
        <ul>
            <li><b>解锁：</b>[[星澜]]四级 + 太阳雕像科技</li>
            <li><b>配方：</b>莎草纸 × 5 + 麋鹿茸 × 1 + 彩虹宝石 × 1 + [[经验星尘]] × 3</li>
            <li><b>效果：</b>读完后将世界季节引向冬季</li>
            <li><b>限制：</b>仅星澜可读，薇克巴顿与其他角色不可用</li>
        </ul>
    `,
    "tips": `
        <h3 style="margin:0 0 0.8em; color:#c0392b;">一、实用技巧</h3>
        <p>想到啥写啥，供开荒与日常参考。</p>
        <ol>
            <li>若有幸得到[[紫水晶剑]]，再吃[[八角玄冰棕]]，配合潮湿加成，能体验「刀刀烈火」的爽感。</li>
            <li>[[混沌水晶]]是什么？模组里有一位神秘男子，给予特定物品后可发挥奇妙效果——详见[[混沌水晶]]词条。</li>
            <li>[[千机伞]]想跳劈更丝滑？试试<b>关闭延迟补偿</b>，改为<b>点按</b>攻击键触发。</li>
            <li>纯粹辉煌配合[[万物百宝]]非常强：140 格超大书架、三倍耐久修理等，后期省心不少。</li>
            <li>想「挥挥手」就吃上饭？用[[真饭桶]]连冰箱带锅，一键下锅。</li>
            <li>不想被猴子变成小力士？快吃[[火焰牛排]]。</li>
            <li>嫌划船出海麻烦？装备[[封印之杖]]可<b>水上行走</b>，还能穿障探索，不必一直划船。</li>
            <li>传说混沌之力可令[[紫水晶剑]]、[[紫水晶刀]]融合升级（手持[[混沌水晶]]强化为无限耐久）。</li>
            <li>想要可爱的海绵宝宝皮肤？欢迎加入万物百宝官方群：<b>808847558</b>。</li>
            <li>向[[太阳雕像仿品]]献祭料理，可触碰到混沌的力量（获得[[混沌水晶]]等）。</li>
            <li>想大量刷木头、大理石？集中种植 + [[羽扇]]（或[[羽扇混沌]]）或许是正解。</li>
            <li>地里菜烂了？用[[封印之杖2]]的<b>施肥</b>法术照料农田。</li>
            <li>通过太阳的试炼（[[太阳雕像仿品]]相关流程），可获得随意穿梭时空的能力——[[星空伞]]、[[解密后的星空]]等。</li>
            <li>想快乐种地、分分钟巨大化？交给万物百宝：[[万物百宝]]绿宝石照料、[[百宝鼎]]灵药等。</li>
            <li>与建家党联动的[[星槎护符]]，非常适合喜欢建家的玩家。</li>
            <li>吃下[[相思断肠糕]]，可在濒死时挽救队友（自动救援类效果）。</li>
            <li>[[酸辣土豆丝]]能为沃尔夫冈提供<b>额外 80%</b>的料理回复，大力士专属福利。</li>
            <li>[[封印之杖]]、[[封印之杖2]]、[[百宝花杖]]等是非常方便的万用工具：采集、建造、烹饪、农场管理、施肥……</li>
            <li>百宝的趣味料理（如[[八角玄冰棕]]、[[火焰牛排]]、[[熊猫棕子]]等）真的能解决大部分烦恼。</li>
            <li>[[玉食盒]]、[[百宝背包]]、[[展示柜]]、[[白熊冰箱]]等可用原版<b>弹性空间扩展器</b>升级为无限堆叠（敲掉容器会返还扩展器；白熊冰箱默认须先升级，也可用棱镜月石角撑）</li>
            <li>[[万物百宝]]的<b>橙色宝石</b>全图自动收集，特别适合各类资源工厂收纳。</li>
            <li>[[混沌水晶]]与丰耘秘境的<b>自然亲和子塔</b>融合，可解锁<b>无限耐久</b>（详见[[混沌水晶]]）。</li>
        </ol>

        <h3 style="margin:1.2em 0 0.8em; color:#c0392b;">二、快速获得[[万物百宝]]</h3>
        <p>百宝是本模组核心建筑，早点做出来能极大改善体验。</p>
        <p><b>需要什么</b></p>
        <ul>
            <li>制作配方：[[月食遗物]] × 2 + [[太阳火种]] × 2 + 金块 × 50</li>
            <li>科技：[[太阳雕像仿品]]（太阳雕像四阶）</li>
            <li><b>[[太阳火种]]：</b>击杀龙蝇掉落；月圆夜采集格罗姆之花；或向[[太阳雕像仿品]]献祭[[火焰牛排]]兑换（有冷却）</li>
            <li><b>[[月食遗物]]：</b>向[[月食雕像仿品]]献祭[[八角玄冰棕]]等；流程与太阳线类似，需下洞找[[月食雕像珍品]]</li>
        </ul>
        <p><b>推荐流程（太阳线）</b></p>
        <ol>
            <li>准备[[八角玄冰棕]]等百宝料理，配合土豆甲等续航，<b>击杀龙蝇</b>拿到[[太阳火种]]</li>
            <li>用火种在[[太阳雕像珍品]]处换取<b>仿品雕像图纸</b></li>
            <li>制作[[太阳雕像仿品]]，献祭[[火焰牛排]]等方式持续获取火种</li>
            <li>反复击败龙蝇、积累材料，凑齐仿品与献祭所需</li>
            <li>月食线：下洞找[[月食雕像珍品]] → 换图纸 → 建[[月食雕像仿品]] → 献祭[[八角玄冰棕]]等换[[月食遗物]]</li>
            <li>材料齐备后，在[[太阳雕像仿品]]旁制作[[万物百宝]]</li>
        </ol>
        <p>掌握「珍品 → 仿品 → 献祭换材料 → 做百宝」这条链，就能源源不断造出百宝相关建筑与资源。</p>

        <h3 style="margin:1.2em 0 0.8em; color:#c0392b;">三、能力勋章懒人刷包裹</h3>
        <p><span style="color:#666;">仅限同时爱玩多模组的朋友。</span></p>
        <p><b>前置模组：</b>能力勋章、丰耘秘境、万物百宝、棱镜。</p>
        <ul>
            <li>较舒适地刷取<b>能力勋章包裹</b>与<b>不朽果实</b>等后期资源</li>
            <li>丰耘秘境的<b>自然亲和子塔</b>经[[混沌水晶]]强化后变为<b>无限耐久</b></li>
            <li>棱镜的<b>子圭崇明</b>在水肥充足时，可长期挂机刷材料</li>
            <li>玩[[星澜]]时，佩戴原版<b>幸运马蹄铁</b>等可提升[[经验星尘]] Boss 掉落概率；助攻击杀同样可结算，详见[[星澜]]词条</li>
        </ul>
    `
};
