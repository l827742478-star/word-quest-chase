const chapters = [
  { id: 1, topic: "city", topicLabel: "CITY & SOCIETY", title: "CITY AFTER RAIN", cnTitle: "雨停以后，城市还在说谎。", deck: "一张被水泡开的车票，把她带到一栋没有名字的楼。", summary: "她以为只是一次普通的暴雨预警，却在排水口捡到一张写着明天日期的车票。", scenes: [
    { title: "她以为只是一场雨。", text: ["雨停在凌晨四点十七分。城市像一张被擦过的纸，所有灯光都显得过分干净。她沿着湿漉漉的人行道走，鞋底粘住了一小片{residue}，像有人故意把线索留在这里。", "地铁口的广播重复播报一条{notice}，声音平静得不像警告。她第一次意识到，今晚的雨也许不是天气。"], twist: "下一幕：那张车票上的终点站，今天根本不存在。" },
    { title: "车票写着明天。", text: ["车票的纸张已经{fragile}得像一片烤焦的叶子，可日期却清晰得刺眼。她把它贴近路灯，才看见背面有一道{threshold}形状的水印。", "老保安告诉她，楼道尽头有一扇门，只有在城市供水系统{collapse}时才会出现。"], twist: "她转身时，街边电子屏上的倒计时突然少了二十四小时。" },
    { title: "没有名字的楼。", text: ["门后不是房间，而是一条向下延伸的走廊。墙面上排列着城市每天的{allocate}记录：水、光、空气，像有人在给整座城分配呼吸。", "她在最后一栏写下自己的名字。红色光标停了三秒，屏幕只返回一个词：{witness}。"], twist: "案件档案已更新：她不再是调查者，而是唯一的目击者。" }
  ], words: [
    ["residue", "/ˈrezɪdjuː/", "n.", "残留物；剩余物", "像案发现场没擦干净的那一点痕迹。", "The residue on the pavement led her to the hidden door."],
    ["notice", "/ˈnəʊtɪs/", "n.", "通知；注意", "通知不是提醒，它也可能是提前写好的命令。", "She read the notice twice before touching the gate."],
    ["fragile", "/ˈfrædʒaɪl/", "adj.", "脆弱的；易碎的", "越薄的证据，越可能藏着最重的秘密。", "The fragile ticket survived the storm."],
    ["threshold", "/ˈθreʃhəʊld/", "n.", "门槛；起点", "跨过去，就不能假装自己没看见。", "She stood on the threshold and held her breath."],
    ["collapse", "/kəˈlæps/", "v./n.", "崩塌；倒闭", "系统先是安静，然后突然整个失去支撑。", "The old bridge may collapse after midnight."],
    ["allocate", "/ˈæləkeɪt/", "v.", "分配；拨给", "有人把资源分给每个人，也有人把人分成资源。", "The system will allocate water by district."],
    ["witness", "/ˈwɪtnəs/", "n./v.", "目击者；见证", "看见真相的人，从来不会只是路人。", "She was the only witness to the silent transfer."],
    ["predict", "/prɪˈdɪkt/", "v.", "预测；预言", "当预测准确到日期，它就不再像预测。", "The model can predict the city's next blackout."]
  ] },
  { id: 2, topic: "science", topicLabel: "SCIENCE & NATURE", title: "THE GLASS GREENHOUSE", cnTitle: "温室里长出的不是花。", deck: "一枚没有编号的种子，把研究员引向实验室的盲区。", summary: "一株植物只在夜里发光，叶脉里藏着一张改写实验结论的地图。", scenes: [
    { title: "种子只在夜里发光。", text: ["林夏第一次见到那枚种子时，它正躺在{specimen}盒的中央。透明表皮下有微弱的蓝光，像一颗被保存下来的星星。", "实验记录显示它对温度极其{sensitive}，却在断电后的黑暗里开始生长。"], twist: "叶片展开，第一条叶脉指向了实验室的监控盲区。" },
    { title: "植物记得谁来过。", text: ["她把样本送进隔离室，设备立刻显示出异常的{pattern}。每当某个人靠近，叶片就会向另一个方向转动。", "这不是本能反应。它似乎在{respond}一段人类听不见的声音。"], twist: "监控回放里，植物的影子比它本身多出一秒。" },
    { title: "地图写在叶脉里。", text: ["最后一片叶子长成了完整的{network}，连接着城市地下三条废弃管线。林夏忽然明白，这株植物从来不是被种出来的。", "她在报告末尾写下{consequence}：如果公开数据，整个项目会被迫终止；如果沉默，温室会继续扩张。"], twist: "她按下上传键，所有植物同时亮了起来。" }
  ], words: [
    ["specimen", "/ˈspesɪmən/", "n.", "样本；标本", "被放进盒子的东西，不代表它已经被控制。", "The specimen was sealed before the lights went out."],
    ["sensitive", "/ˈsensətɪv/", "adj.", "敏感的；易受影响的", "越敏感，越能听到别人忽略的动静。", "The sensor is sensitive to a sudden change in heat."],
    ["pattern", "/ˈpætn/", "n.", "模式；图案", "重复出现的细节，往往就是答案的形状。", "A strange pattern appeared on the leaf."],
    ["respond", "/rɪˈspɒnd/", "v.", "回应；反应", "它不是随机转向，它在回答某个问题。", "The plant responds to sound after midnight."],
    ["network", "/ˈnetwɜːk/", "n.", "网络；关系网", "真正的网络不只连接机器，也连接秘密。", "The underground network crosses the entire district."],
    ["consequence", "/ˈkɒnsɪkwens/", "n.", "后果", "按下发送键之前，后果已经在等你。", "Every choice has a consequence in the final report."],
    ["monitor", "/ˈmɒnɪtə(r)/", "v./n.", "监测；显示器", "被监测的不一定是数据，也可能是你。", "They monitor the room from a remote station."],
    ["restore", "/rɪˈstɔː(r)/", "v.", "恢复；修复", "修复旧系统，有时等于唤醒旧秘密。", "The team tried to restore the broken archive."]
  ] },
  { id: 3, topic: "city", topicLabel: "TECH & PEOPLE", title: "THE SILENT ELEVATOR", cnTitle: "电梯停在不存在的楼层。", deck: "一部没有按钮的电梯，让她听见了整栋楼的秘密。", summary: "公司每个人都收到同一条通知，只有她看见了隐藏的第二层。", scenes: [
    { title: "电梯没有按钮。", text: ["午休时，电梯门在她面前{reveal}，里面没有数字面板，只有一枚正在闪烁的圆点。", "她按下圆点，耳边传来一声{mechanical}的咔哒。电梯开始向上，却没有任何楼层经过。"], twist: "显示屏只写着：请勿到达你已经去过的地方。" },
    { title: "第十七层不存在。", text: ["门开在一层白色走廊。墙上的号码被刻意{omit}，像有人不希望访客记住顺序。", "她发现每间办公室的门都贴着同一枚{identity}标签，姓名却在不断变化。"], twist: "最后一扇门上的姓名，竟然是她入职前的名字。" },
    { title: "公司记得另一个她。", text: ["档案室里，旧电脑仍在运行。屏幕的{interface}简单得像十年前，可每一条记录都精准预测了她今天的动作。", "她用自己的工牌打开备份，系统要求她先{verify}：你是否同意成为这栋楼的下一名管理员？"], twist: "她没有点击同意。门外却响起了欢迎新管理员的掌声。" }
  ], words: [
    ["reveal", "/rɪˈviːl/", "v.", "揭示；显露", "门打开之前，秘密已经先露出一条缝。", "The elevator revealed a floor absent from the plan."],
    ["mechanical", "/məˈkænɪkl/", "adj.", "机械的；呆板的", "太机械的声音，反而像有人在背后操控。", "A mechanical click came from behind the wall."],
    ["omit", "/əˈmɪt/", "v.", "省略；遗漏", "被省略的不是空白，而是有人不想写的部分。", "The report omitted the most important detail."],
    ["identity", "/aɪˈdentəti/", "n.", "身份；同一性", "如果标签能被替换，身份就只是临时权限。", "The badge verified her identity at the door."],
    ["interface", "/ˈɪntəfeɪs/", "n.", "界面；接口", "界面是给人看的，接口才知道系统真正想做什么。", "The old interface hid a new command."],
    ["verify", "/ˈverɪfaɪ/", "v.", "核实；验证", "确认一次，就可能把自己写进系统。", "Please verify the name before opening the file."],
    ["access", "/ˈækses/", "n./v.", "通道；访问", "能进去不代表你有权知道里面有什么。", "Her access ended when the clock struck twelve."],
    ["administer", "/ədˈmɪnɪstə(r)/", "v.", "管理；执行", "真正的管理者，往往最先失去退出按钮。", "She was asked to administer the entire network."]
  ] },
  { id: 4, topic: "people", topicLabel: "WORK & CHOICE", title: "THE LAST INTERVIEW", cnTitle: "他的问题提前写好了答案。", deck: "一场面试变成一份选择题，她必须判断谁在面试谁。", summary: "候选人的简历在面试前被改写，而每个问题都在测试她是否会说真话。", scenes: [
    { title: "面试官问她明天。", text: ["会议室的玻璃映出三个人，可桌边只有两把椅子。对面的男人翻开一份{resume}，问她是否相信一个人可以被提前录用。", "她没有立刻回答。对方的目光很{intense}，像在等待一个早已写好的台词。"], twist: "桌上的录音笔亮起，文件名是她明天的日期。" },
    { title: "简历少了一年。", text: ["那一年被整齐地{alter}，像从纸上挖走一段记忆。她想起自己曾在这家公司实习，却找不到任何证据。", "面试官给出两个{alternative}：承认过去从未发生，或者承认现在不是真的。"], twist: "玻璃上的第三个人开始替她回答问题。" },
    { title: "她拿走了自己的答案。", text: ["她故意说了一句不符合流程的话。房间里的灯立刻{flicker}，墙后传来一阵急促的脚步。", "她从文件夹里抽出那张{conclusive}的录用通知，撕掉签名，只留下日期。"], twist: "她走出门，发现整栋公司都在等待她回头。" }
  ], words: [
    ["resume", "/ˈrezjumeɪ/", "n.", "简历；继续", "一份简历，既可以证明你是谁，也可以重新安排你是谁。", "Her resume contained a year she could not remember."],
    ["intense", "/ɪnˈtens/", "adj.", "强烈的；紧张的", "当注视太用力，它就不再是礼貌。", "The interview became intense after the lights went out."],
    ["alter", "/ˈɔːltə(r)/", "v.", "改变；修改", "被改过的文件，总会留下不自然的平整。", "Someone altered the date on the contract."],
    ["alternative", "/ɔːlˈtɜːnətɪv/", "n./adj.", "替代选择；非传统的", "当两个选项都像陷阱，第三个才是出口。", "She found an alternative route through the archive."],
    ["flicker", "/ˈflɪkə(r)/", "v./n.", "闪烁；摇曳", "光线不稳的时候，真相也会短暂露面。", "The screen began to flicker as she spoke."],
    ["conclusive", "/kənˈkluːsɪv/", "adj.", "决定性的；确凿的", "能结束争论的证据，未必能结束故事。", "The final message was not conclusive enough."],
    ["qualify", "/ˈkwɒlɪfaɪ/", "v.", "使合格；取得资格", "合格只是进入房间，不代表你能带走答案。", "Her score qualified her for the final interview."],
    ["negotiate", "/nɪˈɡəʊʃieɪt/", "v.", "谈判；协商", "真正的谈判，从拒绝第一个条件开始。", "They tried to negotiate before the deadline."]
  ] },
  { id: 5, topic: "daily", topicLabel: "HEALTH & TIME", title: "TWO MINUTES BEFORE DAWN", cnTitle: "她的闹钟提前知道了结局。", deck: "每天两分钟的空白，藏着她忘记的一整段人生。", summary: "她的手机在天亮前自动记录一条心率曲线，曲线末端总有一个陌生坐标。", scenes: [
    { title: "闹钟提前两分钟响。", text: ["她从梦里醒来，屏幕显示 05:58。手机的电量从百分之八十掉到{adequate}以下，像有人在两分钟里使用过它。", "健康应用的记录看起来{routine}，只有最后一栏多出一个她从未去过的地点。"], twist: "地点就在她家楼下，但地图上没有那条街。" },
    { title: "心率曲线有第二个人。", text: ["她打开记录，曲线在 05:59 突然出现两次心跳。那不是误差，而是一种{parallel}的节奏。", "医生建议她{consult}专家，可她发现预约时间早已被填好。"], twist: "预约人签名的笔迹，和她自己的完全一样。" },
    { title: "天亮前的空白。", text: ["她把手机放在镜子前，等待最后两分钟再次出现。屏幕开始{generate}一段视频，画面里的人正站在她身后。", "那个人没有脸，却准确地说出她从未告诉过任何人的{symptom}。"], twist: "太阳升起时，手机只剩下一条提醒：今晚记得回来。" }
  ], words: [
    ["adequate", "/ˈædɪkwət/", "adj.", "足够的；适当的", "刚好够用的东西，最容易被悄悄拿走。", "The battery was adequate before she went to sleep."],
    ["routine", "/ruːˈtiːn/", "n./adj.", "日常；常规的", "越像日常，越能把异常藏得漂亮。", "Her routine changed after the missing two minutes."],
    ["parallel", "/ˈpærəlel/", "adj./n.", "平行的；相似的人或事", "两个轨迹看起来不相交，却共享同一次心跳。", "A parallel signal appeared on the monitor."],
    ["consult", "/kənˈsʌlt/", "v.", "咨询；请教", "咨询别人之前，先确认你问的是不是自己。", "She decided to consult a specialist."],
    ["generate", "/ˈdʒenəreɪt/", "v.", "产生；生成", "自动生成的内容，也可能自动生成新的问题。", "The device generated a video at dawn."],
    ["symptom", "/ˈsɪmptəm/", "n.", "症状；征兆", "症状是身体留下的线索，不是结论。", "The strange symptom appeared every morning."],
    ["temporary", "/ˈtemprəri/", "adj.", "暂时的", "暂时的空白，也会变成永久的秘密。", "The loss of memory was temporary at first."],
    ["recover", "/rɪˈkʌvə(r)/", "v.", "恢复；找回", "找回记忆不等于找回原来的自己。", "She hoped to recover the missing recording."]
  ] },
  { id: 6, topic: "people", topicLabel: "COMMUNICATION", title: "THE UNREAD MESSAGE", cnTitle: "那条消息没有发给现在的她。", deck: "收件箱里多出一封未发送邮件，要求她今晚不要回家。", summary: "每读完一个词，邮件时间戳就向前跳一天，发件人却始终显示为她自己。", scenes: [
    { title: "发件人是她自己。", text: ["邮件没有主题，只有一句{prior}的提醒：今晚不要回家。她检查发送记录，找不到任何痕迹。", "附件是一段失真的录音，背景声像{distant}的海，却夹着她小时候住过的那栋楼的电梯声。"], twist: "邮件的发送时间，比现在早了七天。" },
    { title: "每读一个词，日期后退。", text: ["她把邮件投影到墙上，文字开始{shift}。每读完一个词，日期就向前跳一天，像有人催她追上自己的过去。", "最后一段话要求她{retain}一张旧照片，不要交给任何人。"], twist: "照片背面写着：如果你读到这里，说明我失败了。" },
    { title: "她决定回家。", text: ["她没有按邮件的命令做。她把录音、照片和电脑里的{archive}一起装进包里，走向那栋被拆了一半的旧楼。", "楼梯间里有人在等她。那人说，所有消息都只是{trigger}，真正的答案在她从来不敢打开的门后。"], twist: "门上的猫眼里，映出一个正在读邮件的她。" }
  ], words: [
    ["prior", "/ˈpraɪə(r)/", "adj.", "先前的；优先的", "先发生的事，未必拥有解释权。", "A prior message warned her not to return."],
    ["distant", "/ˈdɪstənt/", "adj.", "遥远的；疏远的", "距离会改变声音，却不会抹掉它。", "A distant voice repeated her name."],
    ["shift", "/ʃɪft/", "v./n.", "转移；变化；轮班", "只要位置移动一点，整件事就会换一种解释。", "The timestamp shifted whenever she read a line."],
    ["retain", "/rɪˈteɪn/", "v.", "保留；保持", "被要求保留的物证，通常最怕被看见。", "She chose to retain the original photograph."],
    ["archive", "/ˈɑːkaɪv/", "n./v.", "档案；存档", "存档不是结束，它只是让秘密换个地方呼吸。", "The archive contained messages from the future."],
    ["trigger", "/ˈtrɪɡə(r)/", "n./v.", "触发因素；触发", "看似普通的按钮，也可能打开整条因果链。", "The photograph became a trigger for her memory."],
    ["interpret", "/ɪnˈtɜːprət/", "v.", "解释；诠释", "你怎么解释线索，决定你最后看见什么。", "She interpreted the silence as a warning."],
    ["distort", "/dɪˈstɔːt/", "v.", "扭曲；歪曲", "失真的声音里，往往藏着最真的一句话。", "The old recording distorted her voice."]
  ] },
  { id: 7, topic: "daily", topicLabel: "TRAVEL & MEMORY", title: "THE EMPTY PLATFORM", cnTitle: "站台上的人都在等昨天。", deck: "一张过期车票把她带到一座没有返程的车站。", summary: "广播每隔十分钟念一次她的名字，但站牌上没有任何一个真实的目的地。", scenes: [
    { title: "站牌没有终点。", text: ["凌晨的车站空得不合常理。电子站牌反复闪烁，目的地一栏只留下一个{destination}的空格。", "她拿出车票，检票员说这张票已经{expire}，却仍然示意她上车。"], twist: "车厢里的乘客都带着同一个旧相框。" },
    { title: "广播叫出了她的名字。", text: ["广播突然停止杂音，用一种{formal}的语气宣布：请 17 号乘客准备下车。她明明没有拿到号码。", "她跟着人群穿过站台，发现每个人都在{wander}，像忘记了自己要去哪里。"], twist: "相框里的照片不是过去，而是明天的站台。" },
    { title: "返程票写着她的出生日期。", text: ["她在最后一节车厢找到一张{valid}的返程票，日期正是她出生那天。票背写着一句话：不是所有离开都需要回去。", "她终于明白，车站卖的不是车票，而是一次{departure}的许可。"], twist: "列车开走后，站台恢复正常，只有她没有影子。" }
  ], words: [
    ["destination", "/ˌdestɪˈneɪʃn/", "n.", "目的地", "没有终点的路线，最适合把人带到秘密里。", "The destination was left blank on every ticket."],
    ["expire", "/ɪkˈspaɪə(r)/", "v.", "到期；失效", "失效的东西，偶尔拥有最后一次被使用的权利。", "Her ticket had expired three years ago."],
    ["formal", "/ˈfɔːml/", "adj.", "正式的；正规的", "越正式的通知，越可能藏着不该说的话。", "The formal announcement echoed through the station."],
    ["wander", "/ˈwɒndə(r)/", "v.", "漫游；徘徊", "没有目的地的走，也是在寻找答案。", "She wandered along the empty platform."],
    ["valid", "/ˈvælɪd/", "adj.", "有效的；有根据的", "一张有效车票，可能通往一段无效的人生。", "The return ticket was still valid."],
    ["departure", "/dɪˈpɑːtʃə(r)/", "n.", "离开；出发", "离开并不总是逃走，有时是获得许可。", "The departure time appeared without a train."],
    ["route", "/ruːt/", "n.", "路线；航线", "路线被画出来之前，通常有人已经走过。", "The route changed after the final announcement."],
    ["transfer", "/trænsˈfɜː(r)/", "v./n.", "转移；换乘", "换乘的不是列车，也可能是身份。", "She had to transfer at the last station."]
  ] },
  { id: 8, topic: "science", topicLabel: "EDUCATION & FUTURE", title: "THE BLUE ARCHIVE", cnTitle: "最后一本书正在写她。", deck: "图书馆的蓝色档案会补全读者没有说出口的答案。", summary: "她借到一本没有作者的书，书中每一页都记录着她尚未做出的选择。", scenes: [
    { title: "没有作者的书。", text: ["图书馆闭馆前，她在最底层书架发现一本蓝色封面的书。目录页被整齐地{delete}，只剩下一个日期和她的名字。", "管理员说这本书从不外借，可借阅记录上却出现了她的{signature}。"], twist: "她翻到下一页，那里已经写好明天的天气。" },
    { title: "每一章都是未发生的事。", text: ["书中记载的事件过于{precise}：她会在 21:10 接到一通电话，会在 21:12 选择不接。", "她试着改变路线，书页却立刻{update}，像有另一个她在实时记录。"], twist: "唯一空白的章节，标题是“她终于说不”。" },
    { title: "她写下自己的结尾。", text: ["她拿起笔，先写下一句{outline}：没有任何故事可以替一个人做决定。", "墨迹没有消失。书页开始变重，像终于接受了一个{independent}的作者。"], twist: "离开图书馆时，门口的新书名变成了她的名字。" }
  ], words: [
    ["delete", "/dɪˈliːt/", "v.", "删除", "被删掉的内容，常常比留下的更会说话。", "Someone deleted the author's name from the cover."],
    ["signature", "/ˈsɪɡnətʃə(r)/", "n.", "签名；特征", "签名确认的不只是领取，也可能是同意。", "Her signature appeared in a book she never borrowed."],
    ["precise", "/prɪˈsaɪs/", "adj.", "精确的；明确的", "精确到时间的预言，已经不像巧合。", "The precise details made her feel watched."],
    ["update", "/ˌʌpˈdeɪt/", "v./n.", "更新；最新消息", "被更新的故事，说明有人还在继续写。", "The page updated before she changed her mind."],
    ["outline", "/ˈaʊtlaɪn/", "n./v.", "大纲；概述", "大纲能规划故事，却不能替你活完。", "She wrote an outline for a different ending."],
    ["independent", "/ˌɪndɪˈpendənt/", "adj.", "独立的；自主的", "独立不是没有人陪，而是答案由自己签字。", "She wanted an independent conclusion."],
    ["evaluate", "/ɪˈvæljueɪt/", "v.", "评估；评价", "评价别人以前，先确认标准是谁写的。", "The archive seemed to evaluate every choice."],
    ["sequence", "/ˈsiːkwəns/", "n.", "顺序；连续", "改变一个顺序，结局就会换一张脸。", "The sequence of events was impossible to ignore."]
  ] }
];

const storageKey = "word-quest-chase-v1";
const defaultState = { learned: [], activeChapter: 0, activeScene: 0, quizIndex: 0, lastStudy: null };
let state = loadState();
let quizState = { chapterIndex: 0, index: 0, answered: false, score: 0 };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const saveState = () => localStorage.setItem(storageKey, JSON.stringify(state));
function loadState() { try { return { ...defaultState, ...(JSON.parse(localStorage.getItem(storageKey)) || {}) }; } catch { return { ...defaultState }; } }
function currentChapter() { return chapters[state.activeChapter] || chapters[0]; }
function learnedCount(chapter) { return chapter.words.filter((word) => state.learned.includes(word[0])).length; }
function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900); }
function escapeHtml(value) { return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }

function renderLibrary() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const topic = $("#topicFilter").value;
  const sort = $("#sortSelect").value;
  let visible = chapters.filter((chapter) => {
    const haystack = [chapter.title, chapter.cnTitle, chapter.deck, chapter.topicLabel, ...chapter.words.map((word) => word[0])].join(" ").toLowerCase();
    return (topic === "all" || chapter.topic === topic) && (!query || haystack.includes(query));
  });
  if (sort === "progress") visible.sort((a, b) => learnedCount(b) - learnedCount(a));
  if (sort === "words") visible.sort((a, b) => b.words.length - a.words.length);
  $("#libraryMeta").textContent = `${visible.length.toString().padStart(2, "0")} 个剧情篇章 · ${visible.length * 8} 个词`;
  $("#totalLearned").textContent = state.learned.length;
  $("#chapterList").innerHTML = visible.length ? visible.map((chapter) => {
    const learned = learnedCount(chapter);
    const pct = Math.round((learned / chapter.words.length) * 100);
    return `<button class="chapter-card" type="button" data-chapter="${chapter.id - 1}">
      <span class="chapter-number">${String(chapter.id).padStart(2, "0")}</span>
      <span class="chapter-topic">${chapter.topicLabel}</span>
      <span class="chapter-copy"><h3>${escapeHtml(chapter.title)} · ${escapeHtml(chapter.cnTitle)}</h3><p>${escapeHtml(chapter.deck)}</p><span class="progress-line"><span style="width:${pct}%"></span></span></span>
      <span class="chapter-metrics"><strong>${chapter.words.length} WORDS</strong><br />${learned}/${chapter.words.length} 已点亮</span><span class="chapter-arrow">↗</span>
    </button>`;
  }).join("") : `<div class="review-empty"><p>没有找到匹配篇章，换个关键词再试一次。</p></div>`;
  $$("[data-chapter]").forEach((button) => button.addEventListener("click", () => openReader(Number(button.dataset.chapter))));
}

function tokenise(text) { return text.split(/(\{[^}]+\})/g).map((part) => { if (!part.startsWith("{")) return escapeHtml(part); const word = part.slice(1, -1); return `<button class="word-chip" type="button" data-word="${word}">${word}</button>`; }).join(""); }
function renderReader() {
  const chapter = currentChapter();
  const scene = chapter.scenes[state.activeScene] || chapter.scenes[0];
  $("#readerKicker").textContent = `CASE ${String(chapter.id).padStart(2, "0")} · ${chapter.title}`;
  $("#readerProgress").textContent = `SCENE ${String(state.activeScene + 1).padStart(2, "0")} / ${String(chapter.scenes.length).padStart(2, "0")}`;
  $("#readerTitle").textContent = scene.title;
  $("#readerSummary").textContent = chapter.summary;
  $("#storyBody").innerHTML = scene.text.map((paragraph) => `<p>${tokenise(paragraph)}</p>`).join("");
  $("#twistBox").textContent = `这一幕的反转：${scene.twist}`;
  $("#sceneButtons").innerHTML = chapter.scenes.map((item, index) => `<button class="scene-button ${index === state.activeScene ? "active" : ""}" data-scene="${index}" type="button">SCENE ${String(index + 1).padStart(2, "0")}</button>`).join("");
  const learned = learnedCount(chapter);
  $("#railProgressFill").style.width = `${Math.round((learned / chapter.words.length) * 100)}%`;
  $("#railProgressText").textContent = `${learned} / ${chapter.words.length} 词已点亮`;
  $("#prevScene").disabled = state.activeScene === 0;
  $("#nextScene").textContent = state.activeScene === chapter.scenes.length - 1 ? "去做复盘 →" : "下一幕 →";
  $$("[data-word]").forEach((button) => button.addEventListener("click", () => openWord(button.dataset.word)));
  $$("[data-scene]").forEach((button) => button.addEventListener("click", () => { state.activeScene = Number(button.dataset.scene); saveState(); renderReader(); }));
}

function openReader(chapterIndex) { state.activeChapter = chapterIndex; state.activeScene = 0; saveState(); $("#readerOverlay").hidden = false; document.body.style.overflow = "hidden"; renderReader(); }
function closeReader() { $("#readerOverlay").hidden = true; document.body.style.overflow = ""; renderLibrary(); renderReview(); }

function openWord(wordText) {
  const word = currentChapter().words.find((item) => item[0] === wordText); if (!word) return;
  $("#wordCategory").textContent = `${currentChapter().topicLabel} · WORD FILE`;
  $("#wordTitle").textContent = word[0]; $("#wordPhonetic").textContent = `${word[1]} · ${word[2]}`; $("#wordMeaning").textContent = word[3]; $("#wordHook").textContent = word[4]; $("#wordExample").textContent = word[5];
  $("#learnButton").textContent = state.learned.includes(word[0]) ? "已点亮 · 再看一眼" : "点亮这个词";
  $("#learnButton").dataset.word = word[0]; $("#wordModal").hidden = false;
}
function closeWord() { $("#wordModal").hidden = true; }
function learnWord() { const word = $("#learnButton").dataset.word; if (!state.learned.includes(word)) { state.learned.push(word); state.lastStudy = new Date().toISOString(); saveState(); showToast(`已点亮 ${word}，它会进入今日复盘`); renderReader(); renderLibrary(); renderReview(); } else showToast(`${word} 已在你的词汇档案里`); }

function quizWords() { const learned = currentChapter().words.filter((word) => state.learned.includes(word[0])); return learned.length >= 3 ? learned.slice(0, 3) : currentChapter().words.slice(0, 3); }
function renderReview() {
  const words = quizWords(); const word = words[quizState.index] || words[0]; const learned = state.learned.length;
  if (!learned) { $("#reviewPanel").innerHTML = `<div class="review-empty"><p>✦ 未点亮 · 点击任意篇章里的橙色词汇开始</p></div>`; return; }
  const choices = [word[3], ...currentChapter().words.filter((item) => item[0] !== word[0]).slice(0, 3).map((item) => item[3])].sort(() => Math.random() - .5);
  $("#reviewPanel").innerHTML = `<div class="review-progress">QUICK RECALL ${String(quizState.index + 1).padStart(2, "0")} / 03 · ${learned} WORDS IN YOUR FILE</div><h3 class="review-question">在「${currentChapter().cnTitle}」里出现过 “${word[0]}”，最接近的意思是：</h3><div class="review-options">${choices.map((choice) => `<button class="review-option" type="button" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join("")}</div><div class="review-footer"><span class="review-feedback" id="reviewFeedback">选择一个答案</span><button class="button button-primary" id="nextQuiz" type="button" disabled>下一题 →</button></div>`;
  $$("[data-answer]").forEach((button) => button.addEventListener("click", () => answerQuiz(button, word[3])));
  $("#nextQuiz").addEventListener("click", () => { if (quizState.index < 2) { quizState.index += 1; renderReview(); } else { showToast("复盘完成，今天的记忆已经锁上"); quizState.index = 0; renderReview(); } });
}
function answerQuiz(button, correct) { if (quizState.answered) return; quizState.answered = true; const isCorrect = button.dataset.answer === correct; button.classList.add(isCorrect ? "correct" : "wrong"); $("#reviewFeedback").textContent = isCorrect ? "答对了 · 这条线索已经接上" : `答案是：${correct}`; $("#nextQuiz").disabled = false; $$("[data-answer]").forEach((item) => { if (item.dataset.answer === correct) item.classList.add("correct"); }); setTimeout(() => { quizState.answered = false; }, 0); }

$("#searchInput").addEventListener("input", renderLibrary); $("#topicFilter").addEventListener("change", renderLibrary); $("#sortSelect").addEventListener("change", renderLibrary);
$("#closeReader").addEventListener("click", closeReader); $("#prevScene").addEventListener("click", () => { if (state.activeScene > 0) { state.activeScene -= 1; saveState(); renderReader(); } }); $("#nextScene").addEventListener("click", () => { if (state.activeScene < currentChapter().scenes.length - 1) { state.activeScene += 1; saveState(); renderReader(); } else { closeReader(); $("#review").scrollIntoView({ behavior: "smooth" }); } });
$$('[data-close-word]').forEach((element) => element.addEventListener("click", closeWord)); $("#learnButton").addEventListener("click", learnWord); $("#warmup").addEventListener("click", () => { if (!state.learned.length) { openReader(0); showToast("先点亮三个词，再来做热身题"); } else { $("#review").scrollIntoView({ behavior: "smooth" }); renderReview(); } });
$("#clearProgress").addEventListener("click", () => { if (window.confirm("确定清空本地学习进度吗？")) { state = { ...defaultState }; saveState(); renderLibrary(); renderReview(); showToast("进度已清空"); } });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeWord(); if (!$("#readerOverlay").hidden) closeReader(); } });
renderLibrary(); renderReview();
