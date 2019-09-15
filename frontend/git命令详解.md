# git命令详解
```
这些是各种场合常见的 Git 命令：

开始一个工作区（参见：git help tutorial）
   clone      克隆一个仓库到一个新目录
   init       创建一个空的 Git 仓库或重新初始化一个已存在的仓库

在当前变更上工作（参见：git help everyday）
   add        添加文件内容至索引
   mv         移动或重命名一个文件、目录或符号链接
   reset      重置当前 HEAD 到指定状态
   rm         从工作区和索引中删除文件

检查历史和状态（参见：git help revisions）
   bisect     通过二分查找定位引入 bug 的提交
   grep       输出和模式匹配的行
   log        显示提交日志
   show       显示各种类型的对象
   status     显示工作区状态

扩展、标记和调校您的历史记录
   branch     列出、创建或删除分支
   checkout   切换分支或恢复工作区文件
   commit     记录变更到仓库
   diff       显示提交之间、提交和工作区之间等的差异
   merge      合并两个或更多开发历史
   rebase     在另一个分支上重新应用提交
   tag        创建、列出、删除或校验一个 GPG 签名的标签对象

协同（参见：git help workflows）
   fetch      从另外一个仓库下载对象和引用
   pull       获取并整合另外的仓库或一个本地分支
   push       更新远程引用和相关的对象

命令 'git help -a' 和 'git help -g' 显示可用的子命令和一些概念帮助。
查看 'git help <命令>' 或 'git help <概念>' 以获取给定子命令或概念的
帮助。
```
## clone
```
用法：git clone [<选项>] [--] <仓库> [<路径>]

    -v, --verbose         更加详细
    -q, --quiet           更加安静
    --progress            强制显示进度报告
    -n, --no-checkout     不创建一个检出
    --bare                创建一个纯仓库
    --mirror              创建一个镜像仓库（也是纯仓库）
    -l, --local           从本地仓库克隆
    --no-hardlinks        不使用本地硬链接，始终复制
    -s, --shared          设置为共享仓库
    --recurse-submodules[=<路径规格>]
                          在克隆时初始化子模组
    -j, --jobs <n>        并发克隆的子模组的数量
    --template <模板目录>
                          模板目录将被使用
    --reference <仓库>    参考仓库
    --reference-if-able <仓库>
                          参考仓库
    --dissociate          仅在克隆时参考 --reference 指向的本地仓库
    -o, --origin <名称>   使用 <名称> 而不是 'origin' 去跟踪上游
    -b, --branch <分支>   检出 <分支> 而不是远程 HEAD
    -u, --upload-pack <路径>
                          远程 git-upload-pack 路径
    --depth <深度>        创建一个指定深度的浅克隆
    --shallow-since <时间>
                          从一个特定时间创建一个浅克隆
    --shallow-exclude <版本>
                          深化浅克隆的历史，除了特定版本
    --single-branch       只克隆一个分支、HEAD 或 --branch
    --no-tags             不要克隆任何标签，并且后续获取操作也不下载它们
    --shallow-submodules  子模组将以浅下载模式克隆
    --separate-git-dir <git目录>
                          git目录和工作区分离
    -c, --config <key=value>
                          在新仓库中设置配置信息
    -4, --ipv4            只使用 IPv4 地址
    -6, --ipv6            只使用 IPv6 地址
    --filter <参数>       对象过滤
```

## init
```
用法：git init [-q | --quiet] [--bare] [--template=<模板目录>] [--shared[=<权限>]] [<目录>]

    --template <模板目录>
                          模板目录将被使用
    --bare                创建一个纯仓库
    --shared[=<权限>]     指定 git 仓库是多个用户之间共享的
    -q, --quiet           静默模式
    --separate-git-dir <git目录>
                          git目录和工作区分离
```

## add
```
用法：git add [<选项>] [--] <路径规格>...

    -n, --dry-run         演习
    -v, --verbose         冗长输出

    -i, --interactive     交互式拣选
    -p, --patch           交互式挑选数据块
    -e, --edit            编辑当前差异并应用
    -f, --force           允许添加忽略的文件
    -u, --update          更新已跟踪的文件
    --renormalize         对已跟踪文件（暗含 -u）重新归一换行符
    -N, --intent-to-add   只记录，该路径稍后再添加
    -A, --all             添加所有改变的已跟踪文件和未跟踪文件
    --ignore-removal      忽略工作区中移除的路径（和 --no-all 相同）
    --refresh             不添加，只刷新索引
    --ignore-errors       跳过因出错不能添加的文件
    --ignore-missing      检查在演习模式下文件（即使不存在）是否被忽略
    --chmod <(+/-)x>      覆盖列表里文件的可执行位

```

## mv
```
用法：git mv [<选项>] <源>... <目标>

    -v, --verbose         冗长输出
    -n, --dry-run         演习
    -f, --force           强制移动/重命令，即使目标存在
    -k                    跳过移动/重命名错误

```

## reset 
```
用法：git reset [--mixed | --soft | --hard | --merge | --keep] [-q] [<提交>]
  或：git reset [-q] [<树或提交>] [--] <路径>...
  或：git reset --patch [<树或提交>] [--] [<路径>...]

    -q, --quiet           安静模式，只报告错误
    --mixed               重置 HEAD 和索引
    --soft                只重置 HEAD
    --hard                重置 HEAD、索引和工作区
    --merge               重置 HEAD、索引和工作区
    --keep                重置 HEAD 但保存本地变更
    --recurse-submodules[=<reset>]
                          control recursive updating of submodules
    -p, --patch           交互式挑选数据块
    -N, --intent-to-add   将删除的路径标记为稍后添加
```

## rm
```
用法：git rm [<选项>] [--] <文件>...

    -n, --dry-run         演习
    -q, --quiet           不列出删除的文件
    --cached              只从索引区删除
    -f, --force           忽略文件更新状态检查
    -r                    允许递归删除
    --ignore-unmatch      即使没有匹配，也以零状态退出

```

## bisect
```
用法：git bisect [help|start|bad|good|new|old|terms|skip|next|reset|visualize|view|replay|log|run]
```

## grep 
```
用法：git grep [<选项>] [-e] <模式> [<版本>...] [[--] <路径>...]

    --cached              在索引区搜索而不是在工作区
    --no-index            在未被 git 管理的内容中查找
    --untracked           在跟踪和未跟踪的文件中搜索
    --exclude-standard    忽略 '.gitignore' 包含的文件
    --recurse-submodules  在每一个子模组中递归搜索

    -v, --invert-match    显示未匹配的行
    -i, --ignore-case     不区分大小写匹配
    -w, --word-regexp     只在单词边界匹配模式
    -a, --text            把二进制文件当做文本处理
    -I                    不在二进制文件中匹配模式
    --textconv            用 textconv 过滤器处理二进制文件
    --max-depth <深度>    最多以指定的深度向下寻找

    -E, --extended-regexp
                          使用扩展的 POSIX 正则表达式
    -G, --basic-regexp    使用基本的 POSIX 正则表达式（默认）
    -F, --fixed-strings   把模式解析为固定的字符串
    -P, --perl-regexp     使用 Perl 兼容的正则表达式

    -n, --line-number     显示行号
    -h                    不显示文件名
    -H                    显示文件名
    --full-name           显示相对于顶级目录的文件名
    -l, --files-with-matches
                          只显示文件名而不显示匹配的行
    --name-only           和 --files-with-matches 同义
    -L, --files-without-match
                          只显示未匹配的文件名
    -z, --null            在文件名后输出 NUL 字符
    -c, --count           显示总匹配行数，而不显示匹配的行
    --color[=<何时>]      高亮显示匹配项
    --break               在不同文件的匹配项之间打印空行
    --heading             只在同一文件的匹配项的上面显示一次文件名

    -C, --context <n>     显示匹配项前后的 <n> 行上下文
    -B, --before-context <n>
                          显示匹配项前 <n> 行上下文
    -A, --after-context <n>
                          显示匹配项后 <n> 行上下文
    --threads <n>         使用 <n> 个工作线程
    -数字                 快捷键 -C 数字
    -p, --show-function   在匹配的前面显示一行函数名
    -W, --function-context
                          显示所在函数的前后内容

    -f <文件>             从文件读取模式
    -e <模式>             匹配 <模式>
    --and                 组合用 -e 参数设定的模式
    --or                  
    --not                 
    (                     
    )                     
    -q, --quiet           不输出，而用退出码标识命中状态
    --all-match           只显示匹配所有模式的文件中的匹配

    -O, --open-files-in-pager[=<分页>]
                          分页显示匹配的文件
    --ext-grep            允许调用 grep(1)（本次构建忽略）
```

## status 
```
用法：git status [<选项>] [--] <路径规格>...

    -v, --verbose         冗长输出
    -s, --short           以简洁的格式显示状态
    -b, --branch          显示分支信息
    --show-stash          显示贮藏区信息
    --ahead-behind        计算完整的领先/落后值
    --porcelain[=<版本>]  机器可读的输出
    --long                以长格式显示状态（默认）
    -z, --null            条目以 NUL 字符结尾
    -u, --untracked-files[=<模式>]
                          显示未跟踪的文件，“模式”的可选参数：all、normal、no。（默认：all）
    --ignored[=<模式>]    显示已忽略的文件，可选模式：traditional、matching、no。（默认：traditional）
    --ignore-submodules[=<何时>]
                          忽略子模组的更改，“何时”的可选参数：all、dirty、untracked。（默认：all）
    --column[=<风格>]     以列的方式显示未跟踪的文件
    --no-renames          不检测重命名
    -M, --find-renames[=<n>]
                          检测重命名，可以设置索引相似度


```