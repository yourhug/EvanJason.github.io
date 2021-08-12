import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: '' },
    'pagePath': "posts/Echarts 配置和知识点.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/Echarts 配置和知识点.html",
    'title': "Echarts 配置和知识点",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Echarts 配置和知识点</h1>\n<h4 id="tooltip-confine"><a href="https://echarts.apache.org/zh/option.html#tooltip">tooltip.</a> <a href="https://echarts.apache.org/zh/option.html#tooltip.confine">confine</a><a class="anchor" href="#tooltip-confine">§</a></h4>\n<p>boolean</p>\n<p>是否将 tooltip 框限制在图表的区域内。</p>\n<p>当图表外层的 dom 被设置为 <code>\'overflow: hidden\'</code>，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。</p>\n<p>formatter 字符串格式化</p>\n<p>双Y轴图</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">let</span> x1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewUsers3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x3 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManyfirstRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Xmax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymax <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\nyAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    <span class="token comment">// 第一条Y轴</span>\n    name<span class="token operator">:</span> <span class="token string">\'单位(人)\'</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Xmax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> Xmax <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span><span class="token comment">//第二条Y轴</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}%\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> TwoYaxis<span class="token punctuation">,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> Ymin<span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Ymax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> <span class="token number">20</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">//自定义工具</span>\ntoolbox<span class="token operator">:</span> <span class="token punctuation">{</span>\n    feature<span class="token operator">:</span> <span class="token punctuation">{</span>\n        myTool<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 是否显示</span>\n            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                title<span class="token operator">:</span> <span class="token string">\'导出\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            dataView<span class="token operator">:</span> <span class="token punctuation">{</span>\n                readOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    title<span class="token operator">:</span> <span class="token string">\'查看\'</span><span class="token punctuation">,</span>\n                        <span class="token comment">// lang: [\'数据视图\', \'关闭\', \'刷新\'],</span>\n                        <span class="token function-variable function">optionToContent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>opt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                            <span class="token comment">// 坐标数据</span>\n                            <span class="token keyword">const</span> axisData <span class="token operator">=</span> opt<span class="token punctuation">.</span>xAxis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n                            <span class="token comment">// 折线图数据</span>\n                            <span class="token keyword">const</span> series <span class="token operator">=</span> opt<span class="token punctuation">.</span>series<span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> tdHeads <span class="token operator">=</span> <span class="token string">\'&lt;td  style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">时间&lt;/td>\'</span><span class="token punctuation">;</span> <span class="token comment">//表头</span>\n                            <span class="token comment">// 数据</span>\n                            <span class="token keyword">let</span> tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token comment">// 组装表头</span>\n                                tdHeads <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;table id="tableExcel" style="border: 1px solid #e9eaec;width:100%;border-collapse:collapse;font-size:14px;text-align:center">&lt;tbody>&lt;tr></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdHeads<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n                            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> axisData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> series<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                    <span class="token comment">// 组装表数据</span>\n                                    tdBodys <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>series<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                <span class="token punctuation">}</span>\n                                table <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;tr>&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>axisData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdBodys<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span>\n                            <span class="token comment">// table += \'&lt;/tbody>&lt;/table>&lt;div style="position: absolute; bottom: 0px; right: 0;z-index: 10;">&lt;div style="float: right; margin-right: 20px; border: none; cursor: pointer; padding: 2px 5px; font-size: 12px; border-radius: 3px; background-color: rgb(194, 53, 49); color: rgb(255, 255, 255);">导出&lt;/div>&lt;/div>\';</span>\n                            table <span class="token operator">+=</span> <span class="token string">\'&lt;/tbody>&lt;/table>\'</span><span class="token punctuation">;</span>\n                            <span class="token keyword">return</span> table<span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Powered by\u00A0",
        React.createElement("a", { href: "https://github.com/xcatliu/pagic", target: "_blank" }, "Pagic")),
    'contentTitle': React.createElement("h1", { key: "0" }, "Echarts \u914D\u7F6E\u548C\u77E5\u8BC6\u70B9"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h4 id="tooltip-confine"><a href="https://echarts.apache.org/zh/option.html#tooltip">tooltip.</a> <a href="https://echarts.apache.org/zh/option.html#tooltip.confine">confine</a><a class="anchor" href="#tooltip-confine">§</a></h4>\n<p>boolean</p>\n<p>是否将 tooltip 框限制在图表的区域内。</p>\n<p>当图表外层的 dom 被设置为 <code>\'overflow: hidden\'</code>，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。</p>\n<p>formatter 字符串格式化</p>\n<p>双Y轴图</p>\n<pre class="language-typescript"><code class="language-typescript"><span class="token keyword">let</span> x1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewUsers3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManynewRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> x3 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ManyfirstRoles3<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>x1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> x3<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Xmax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymax <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> Ymin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\nyAxis<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    <span class="token comment">// 第一条Y轴</span>\n    name<span class="token operator">:</span> <span class="token string">\'单位(人)\'</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Xmax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> Xmax <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">{</span><span class="token comment">//第二条Y轴</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'value\'</span><span class="token punctuation">,</span>\n    axisLabel<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        interval<span class="token operator">:</span> <span class="token string">\'auto\'</span><span class="token punctuation">,</span>\n        formatter<span class="token operator">:</span> <span class="token string">\'{value}%\'</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    splitLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// show: true,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    nameTextStyle<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// y轴上方单位的颜色</span>\n        color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    axisLine<span class="token operator">:</span> <span class="token punctuation">{</span>\n        show<span class="token operator">:</span> TwoYaxis<span class="token punctuation">,</span>\n        lineStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">\'solid\'</span><span class="token punctuation">,</span>\n            color<span class="token operator">:</span> <span class="token string">\'#e8eaec\'</span><span class="token punctuation">,</span> <span class="token comment">// 左边线的颜色</span>\n            width<span class="token operator">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span> <span class="token comment">// 坐标线的宽度</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        textStyle<span class="token operator">:</span> <span class="token punctuation">{</span>\n            color<span class="token operator">:</span> <span class="token string">\'#808695\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    min<span class="token operator">:</span> Ymin<span class="token punctuation">,</span>\n    max<span class="token operator">:</span> Ymax<span class="token punctuation">,</span>\n    splitNumber<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    interval<span class="token operator">:</span> <span class="token number">20</span>\n<span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">,</span>\n</code></pre>\n<pre class="language-typescript"><code class="language-typescript"><span class="token comment">//自定义工具</span>\ntoolbox<span class="token operator">:</span> <span class="token punctuation">{</span>\n    feature<span class="token operator">:</span> <span class="token punctuation">{</span>\n        myTool<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 是否显示</span>\n            show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                title<span class="token operator">:</span> <span class="token string">\'导出\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            dataView<span class="token operator">:</span> <span class="token punctuation">{</span>\n                readOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    title<span class="token operator">:</span> <span class="token string">\'查看\'</span><span class="token punctuation">,</span>\n                        <span class="token comment">// lang: [\'数据视图\', \'关闭\', \'刷新\'],</span>\n                        <span class="token function-variable function">optionToContent</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>opt<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                            <span class="token comment">// 坐标数据</span>\n                            <span class="token keyword">const</span> axisData <span class="token operator">=</span> opt<span class="token punctuation">.</span>xAxis<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>\n                            <span class="token comment">// 折线图数据</span>\n                            <span class="token keyword">const</span> series <span class="token operator">=</span> opt<span class="token punctuation">.</span>series<span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> tdHeads <span class="token operator">=</span> <span class="token string">\'&lt;td  style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;">时间&lt;/td>\'</span><span class="token punctuation">;</span> <span class="token comment">//表头</span>\n                            <span class="token comment">// 数据</span>\n                            <span class="token keyword">let</span> tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            series<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token comment">// 组装表头</span>\n                                tdHeads <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="background:#ebf7ff;padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                            <span class="token keyword">let</span> table <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;table id="tableExcel" style="border: 1px solid #e9eaec;width:100%;border-collapse:collapse;font-size:14px;text-align:center">&lt;tbody>&lt;tr></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdHeads<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> &lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n                            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> axisData<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> series<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                                    <span class="token comment">// 组装表数据</span>\n                                    tdBodys <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>series<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                <span class="token punctuation">}</span>\n                                table <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;tr>&lt;td style="padding: 0 10px;min-width: 0;height: 48px;box-sizing: border-box;text-overflow: ellipsis;vertical-align: middle;border-bottom: 1px solid #e9eaec;"></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>axisData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>tdBodys<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/tr></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n                                tdBodys <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n                            <span class="token punctuation">}</span>\n                            <span class="token comment">// table += \'&lt;/tbody>&lt;/table>&lt;div style="position: absolute; bottom: 0px; right: 0;z-index: 10;">&lt;div style="float: right; margin-right: 20px; border: none; cursor: pointer; padding: 2px 5px; font-size: 12px; border-radius: 3px; background-color: rgb(194, 53, 49); color: rgb(255, 255, 255);">导出&lt;/div>&lt;/div>\';</span>\n                            table <span class="token operator">+=</span> <span class="token string">\'&lt;/tbody>&lt;/table>\'</span><span class="token punctuation">;</span>\n                            <span class="token keyword">return</span> table<span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>'
        } }),
    'toc': null,
    'author': "深海如梦",
    'contributors': [],
    'date': "Mon Dec 28 2020 10:00:21 GMT+0800 (中国标准时间)",
    'updated': null,
    'excerpt': "Echarts 配置和知识点",
    'cover': undefined,
    'categories': [
        "Angular",
        "Echarts"
    ],
    'tags': [
        "知识点",
        "配置",
        "Echarts"
    ],
    'blog': {
        "isPost": true,
        "posts": [
            {
                "pagePath": "posts/数组的深浅拷贝.md",
                "title": "数组的深浅拷贝",
                "link": "posts/数组的深浅拷贝.html",
                "date": "Fri Aug 20 2021 10:26:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "深浅拷贝"
                ],
                "excerpt": "数组的深浅拷贝"
            },
            {
                "pagePath": "posts/Vs Code 前端常用插件.md",
                "title": "前端常用插件",
                "link": "posts/Vs Code 前端常用插件.html",
                "date": "2021-08-11T14:15:56.581Z",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "vscode"
                ],
                "tags": [
                    "vscode",
                    "插件"
                ],
                "excerpt": "前端常用插件",
                "cover": "../pic/image-20210409094037510.png"
            },
            {
                "pagePath": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.md",
                "title": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题",
                "link": "posts/解决webpack css和js分开打包后， ie不识别 defineProperty 的问题.html",
                "date": "Thu May 27 2021 15:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "tags": [
                    "webpack",
                    "ie",
                    "defineProperty"
                ],
                "excerpt": "解决webpack css和js分开打包后， ie不识别 defineProperty 的问题"
            },
            {
                "pagePath": "posts/antd表格穿梭框功能.md",
                "title": "antd表格穿梭框功能",
                "link": "posts/antd表格穿梭框功能.html",
                "date": "Sat May 15 2021 13:46:09 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "穿梭框",
                    "表格"
                ],
                "excerpt": "angular-antd穿梭框功能实现"
            },
            {
                "pagePath": "posts/git的运用操作.md",
                "title": "git的运用操作",
                "link": "posts/git的运用操作.html",
                "date": "Sat Apr 10 2021 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "git"
                ],
                "tags": [
                    "git"
                ],
                "excerpt": "git的运用操作",
                "cover": "../pic/a145b3dc-f7ad-4797-afc3-1187e214a171.png"
            },
            {
                "pagePath": "posts/Echarts 配置和知识点.md",
                "title": "Echarts 配置和知识点",
                "link": "posts/Echarts 配置和知识点.html",
                "date": "Mon Dec 28 2020 10:00:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "Echarts"
                ],
                "tags": [
                    "知识点",
                    "配置",
                    "Echarts"
                ],
                "excerpt": "Echarts 配置和知识点"
            },
            {
                "pagePath": "posts/树形控件功能实现.md",
                "title": "树形控件功能",
                "link": "posts/树形控件功能实现.html",
                "date": "Wed Dec 23 2020 09:45:45 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "antd",
                    "Angular"
                ],
                "tags": [
                    "树形控件",
                    "功能"
                ],
                "excerpt": "树形控件功能",
                "cover": "../pic/image-20210415160710543.png"
            },
            {
                "pagePath": "posts/angular项目 页面加水印.md",
                "title": "angular项目 页面加水印",
                "link": "posts/angular项目 页面加水印.html",
                "date": "Sun Dec 6 2020 20:25:12 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "水印",
                    "页面水印",
                    "Angular"
                ],
                "excerpt": "html 使用 <div style=\"position: fixed;top: 0;left: 0;\"> <div *ngFor=\"let item of watermarkList\" class=\"watermarkList\"> <div [ngStyle]=\"item.objStyle\"> {{item.txt}} </div> </div> </div> ts // 页面水印 watermarkL..."
            },
            {
                "pagePath": "posts/wangEditor富文本编辑器.md",
                "title": "wangEditor富文本编辑器",
                "link": "posts/wangEditor富文本编辑器.html",
                "date": "Mon Nov 23 2020 16:20:21 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "wangEditor",
                    "Angular",
                    "富文本"
                ],
                "tags": [
                    "wangEditor",
                    "富文本"
                ],
                "excerpt": "wangEditor富文本编辑器"
            },
            {
                "pagePath": "posts/angular 复制粘贴事件.md",
                "title": "angular 复制粘贴事件",
                "link": "posts/angular 复制粘贴事件.html",
                "date": "‎‎Fri Nov 20 2020 11:03:08 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular",
                    "ngx-clipboard"
                ],
                "tags": [
                    "antd",
                    "复制粘贴"
                ],
                "excerpt": "angular 复制粘贴事件"
            },
            {
                "pagePath": "posts/Angular 多类名条件判断.md",
                "title": "Angular 多类名条件判断",
                "link": "posts/Angular 多类名条件判断.html",
                "date": "‎Thu Oct 22 2020 14:20:13 GMT+0800 (中国标准时间)",
                "updated": null,
                "author": "深海如梦",
                "contributors": [],
                "categories": [
                    "Angular"
                ],
                "tags": [
                    "antd",
                    "条件判断",
                    "多类名"
                ],
                "excerpt": "Angular 多类名条件判断"
            }
        ],
        "categories": [
            {
                "name": "Angular",
                "count": 7
            },
            {
                "name": "antd",
                "count": 2
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ngx-clipboard",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            }
        ],
        "tags": [
            {
                "name": "antd",
                "count": 3
            },
            {
                "name": "Angular",
                "count": 1
            },
            {
                "name": "defineProperty",
                "count": 1
            },
            {
                "name": "Echarts",
                "count": 1
            },
            {
                "name": "git",
                "count": 1
            },
            {
                "name": "ie",
                "count": 1
            },
            {
                "name": "vscode",
                "count": 1
            },
            {
                "name": "wangEditor",
                "count": 1
            },
            {
                "name": "webpack",
                "count": 1
            },
            {
                "name": "功能",
                "count": 1
            },
            {
                "name": "复制粘贴",
                "count": 1
            },
            {
                "name": "多类名",
                "count": 1
            },
            {
                "name": "富文本",
                "count": 1
            },
            {
                "name": "插件",
                "count": 1
            },
            {
                "name": "条件判断",
                "count": 1
            },
            {
                "name": "树形控件",
                "count": 1
            },
            {
                "name": "水印",
                "count": 1
            },
            {
                "name": "深浅拷贝",
                "count": 1
            },
            {
                "name": "知识点",
                "count": 1
            },
            {
                "name": "穿梭框",
                "count": 1
            },
            {
                "name": "表格",
                "count": 1
            },
            {
                "name": "配置",
                "count": 1
            },
            {
                "name": "页面水印",
                "count": 1
            }
        ]
    }
};
