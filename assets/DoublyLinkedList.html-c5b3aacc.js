import{_ as n,o as s,c as a,d as p}from"./app-75535683.js";const t={},e=p(`<h3 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表" aria-hidden="true">#</a> 双向链表</h3><blockquote><p>双向链表和普通链表的区别在于，在链表中，一个节点只有链向下一个节点的链接；而在双向链表中，链接是双向的：一个链向下一个元素，另一个链向前一个元素。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token keyword">function</span> <span class="token function">defaultEquals</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">===</span>b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> element<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>equalsFn <span class="token operator">=</span>equalsFn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 向链表中添加元素</span>
    <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">let</span> current<span class="token punctuation">;</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//向一个空链表中插入元素</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token comment">//向一个非空链表中插入元素</span>
        current <span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token comment">// 循环获取到最后一项</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>current<span class="token punctuation">.</span>next <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 将指针指向新元素</span>
        current<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 链表长度加1</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 根据位置从链表中移除元素</span>
    <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//判断index的合法性 不合法直接返回undefined</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建对第一个元素的引用</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">// 移除第一项</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>

          <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> current<span class="token punctuation">.</span>element<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 循环迭代列表直到目标位置</span>
    <span class="token function">getElementAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// 判断传入的index是否合法</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index<span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>conut <span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//1</span>
        <span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">//2 初始化node变量 该变量会从链表的第一个元素head开始迭代整个链表</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index <span class="token operator">&amp;&amp;</span> node<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//3  结束循环时 node中保存的将是index位置元素的引用</span>
          node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span> 
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> node <span class="token comment">//4</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//5  如果不合法 返回undefined</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 往指定位置插入元素</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index<span class="token operator">&lt;=</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//1 检查插入位置是否合法</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//生成需要插入的数据</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span> <span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//如果要在开头插入的话</span>
          <span class="token keyword">const</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span> <span class="token comment">//保存第一条数据</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">;</span> <span class="token comment">//2 将第一条的指针指向第一条数据</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// 将head的引用指向 node</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//3 找到要插入的目标位置 表示需要插入元素的前一个位置</span>
          <span class="token keyword">const</span> current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next<span class="token punctuation">;</span><span class="token comment">//4 插入新元素位置之后的一个元素的引用</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">;</span><span class="token comment">//5  把新元素和当前元素连接起来</span>
          previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span><span class="token comment">//6 让之前元素指向新元素</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 链表长度＋1</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 返回新增成功</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 返回一个元素的位置</span>
    <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>   <span class="token comment">// 定义一个初始值 用于循环整个链表</span>
      <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">&amp;&amp;</span>current <span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//从索引0开始 直到链表长度为止</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">defaultEquals</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span>current<span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">//验证当前节点元素和目标元素是否相等</span>
          <span class="token keyword">return</span> i <span class="token comment">//如果相等 就返回当前索引</span>
        <span class="token punctuation">}</span>
        current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//将下一个链表节点指向current</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 从链表移除指定元素</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//找到指定元素在链表中的位置</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 根据位置移除该元素</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取当前链表的长度</span>
    <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//返回当前链表是否为空</span>
    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取head</span>
    <span class="token function">getHead</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//将 LinkedList 对象转换成一个字符串</span>
    <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> current <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          objString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>objString<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>current<span class="token punctuation">.</span>element<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
          current <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> objString<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">//双向链表</span>
  <span class="token keyword">class</span> <span class="token class-name">DoublyNode</span> <span class="token keyword">extends</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> next<span class="token punctuation">,</span>prev</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">DoublyLinkedList</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedList</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">equalsFn <span class="token operator">=</span> defaultEquals</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>equalsFn<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//保存对链表最后一个元素的引用</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 双向链表添加元素</span>
    <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>index<span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index <span class="token operator">&lt;=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DoublyNode</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//如果是第一项</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
            current<span class="token punctuation">.</span>prev <span class="token operator">=</span> node<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> node<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">//如果是最后一项</span>
            current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span>
            current<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
            node<span class="token punctuation">.</span>prev <span class="token operator">=</span> current<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> node<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token keyword">const</span> previous <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          current <span class="token operator">=</span> previous<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          node<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">;</span>
          previous<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
          current<span class="token punctuation">.</span>prev <span class="token operator">=</span> node<span class="token punctuation">;</span>
          node<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//双向链表从任意位置移除元素</span>
    <span class="token function">removeAt</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//判断index是否合法</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">&amp;&amp;</span> index<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
         <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span> <span class="token comment">//改变head的引用，将其从current改为下一个元素</span>
          <span class="token comment">//如果只有一项 更新tail </span>
          <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">===</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token comment">// 被删除元素的下一个元素的prev改为undefined 因为这个元素成为新的第一个元素</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
         <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">//如果是最后一项</span>
          current <span class="token operator">=</span><span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">;</span> 
          <span class="token comment">//把tail的引用更新为双向链表中倒数第二个元素 删除最后一个元素</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token operator">=</span> current<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
          <span class="token comment">//将倒数第二个元素的next指向undefined</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>tail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          <span class="token comment">//从双向链表中间删除一个元素 </span>
          <span class="token comment">//迭代双向链表 直到要找到的位置</span>
          current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getElementAt</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> previous <span class="token operator">=</span> current<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
          <span class="token comment">//将前一个元素的next指向下一个元素</span>
          previous<span class="token punctuation">.</span>next <span class="token operator">=</span> current<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
          <span class="token comment">// 将下一个元素的prev指向前一个元素</span>
          current<span class="token punctuation">.</span>next<span class="token punctuation">.</span>prev <span class="token operator">=</span> previous<span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token operator">--</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> current<span class="token punctuation">.</span>element<span class="token punctuation">;</span> <span class="token comment">// 返回删除的元素</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","DoublyLinkedList.html.vue"]]);export{k as default};
