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
        <p>这是万物百宝箱的使用技巧：</p>
        <ul>
            <li>放入橙宝石可开启自动捡拾。</li>
            <li>放入紫宝石可秒杀亮茄。</li>
        </ul>
    `,
    "zhei_character_test": `
        <p>该角色背景故事：来自永恒领域的神秘探险家。</p>
    `,
    "v1.0.1": `
        <p>修复了已知的所有贴图错误。</p>
    `
};