# Tips
- <a href="#1">react</a>
- <a href="#1">redux</a>
- <a href="#1">redux-saga</a>
- <a href="#1">svg</a>
- <a href="#1">d3</a>
- <a href="#antd">antd</a>


### <a name="antd">antd使用</a>
- antd table组件启用表体滚动时列不对齐问题的解决方案

table组件在启用表体滚动时，也就是```overflow-y: scroll```，滚动条会占用表体的宽度，导致表体单元格宽度减小，而表头单元格宽度不变，从而导致表头与内容之间出现不对齐的现象。解决方案是，对表头也设置滚动，然后通过设置```margin-right: -20px;padding-right: 20px```来隐藏滚动条。