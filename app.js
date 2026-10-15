const w = (word, phonetic, pos, meaning, hook, example, collocation, skill) => ({
  word, phonetic, pos, meaning, hook, example, collocation, skill
});

const chapters = [
  {
    id: 1, topic: "campus", topicLabel: "CAMPUS & STUDY", title: "THE MISSING SYLLABUS",
    cnTitle: "课程表少了一周，答案藏在空白里。", deck: "一次课堂讨论，把她带进一份被删掉的课程表。",
    summary: "她准备一场雅思口语模拟，却在图书馆找到一份会自动更新的课程表。",
    scenes: [
      { title: "The room that was not booked.", text: [
        "The department will {allocate} a quiet room for the study group before the {deadline}.",
        "Her tutor says the new {curriculum} rewards questions, not perfect silence."
      ], cn: "院系要在截止日期前分配一间自习室。新课程鼓励提问，而不是假装一切都懂。", twist: "课程表上的下一节课，地点写成了她从未去过的地下室。" },
      { title: "A seminar with two answers.", text: [
        "At the {seminar}, Mina has to {evaluate} two opposing claims about sleep and memory.",
        "She checks every source twice because a careless note could look like {plagiarism}."
      ], cn: "研讨课要求她评价关于睡眠与记忆的两种观点。她反复核对来源，避免不小心变成抄袭。", twist: "两个观点的作者，竟然用了同一段她昨晚写下的句子。" },
      { title: "The interview after the mock test.", text: [
        "A {scholarship} interview asks how she will {retain} motivation after a failed mock test.",
        "She answers in English: progress is not a score, but a habit she can rebuild."
      ], cn: "奖学金面试问她，模考失败后如何保留动力。她回答：进步不是分数，而是可以重建的习惯。", twist: "面试官递给她的不是结果，而是下一周缺失的课程表。" }
    ],
    words: [
      w("allocate", "/ˈæləkeɪt/", "v.", "分配；拨给", "把有限的时间像线索一样分给最重要的部分。", "The university will allocate more rooms for group study.", "allocate resources", "Writing Task 2"),
      w("curriculum", "/kəˈrɪkjələm/", "n.", "课程；课程体系", "课程表写的是知识，真正考验的是你如何走完它。", "The curriculum includes academic writing.", "school curriculum", "Academic Reading"),
      w("deadline", "/ˈdedlaɪn/", "n.", "截止日期", "截止线不是墙，是提醒你现在就要开始。", "She finished the essay before the deadline.", "meet a deadline", "Writing Task 2"),
      w("evaluate", "/ɪˈvæljueɪt/", "v.", "评估；评价", "评价观点前，先看清楚它用的证据。", "Students evaluate the benefits of online learning.", "evaluate the evidence", "Writing Task 2"),
      w("plagiarism", "/ˈpleɪdʒərɪzəm/", "n.", "剽窃；抄袭", "借来的句子没有出处，就会变成证据链上的漏洞。", "The college has strict rules against plagiarism.", "academic plagiarism", "Academic Reading"),
      w("seminar", "/ˈsemɪnɑː(r)/", "n.", "研讨课；专题讨论会", "研讨课不是听答案，而是练习提出更好的问题。", "She presented her argument at a seminar.", "attend a seminar", "Speaking Part 3"),
      w("scholarship", "/ˈskɒləʃɪp/", "n.", "奖学金", "奖学金给的是机会，真正的交换是持续努力。", "He applied for a scholarship to study abroad.", "receive a scholarship", "Speaking Part 2"),
      w("retain", "/rɪˈteɪn/", "v.", "保留；保持", "保留不是停在原地，而是把重要的东西带到下一幕。", "Regular review helps students retain new vocabulary.", "retain information", "Listening")
    ]
  },
  {
    id: 2, topic: "work", topicLabel: "WORK & SOCIETY", title: "THE SECOND OFFER",
    cnTitle: "第二份工作邀请，要求她删掉第一份人生。", deck: "一封工作邮件把她带进一场关于效率、选择与公平的谈判。",
    summary: "她同时收到两份 offer，唯一的区别是其中一份不允许她保留自己的名字。",
    scenes: [
      { title: "The offer with no salary.", text: [
        "The company wants to {recruit} a designer who can {contribute} ideas without waiting for permission.",
        "The contract sounds attractive, but the salary is hidden behind one word: {flexible}."
      ], cn: "公司想招聘能主动贡献想法的设计师。合同很诱人，但薪资只写着“灵活”。", twist: "所谓灵活，是薪资会根据她每一次沉默重新计算。" },
      { title: "A promotion made of silence.", text: [
        "Her manager promises to {promote} her if she accepts a less visible role.",
        "She asks whether the policy is {reliable}, or simply a polite way to reward obedience."
      ], cn: "经理承诺晋升，却要求她接受一个不被看见的岗位。她开始怀疑，这份承诺到底可靠还是只是奖励服从。", twist: "会议记录里，晋升已经发生，但她的名字被换成了“员工 B”。" },
      { title: "The table of unequal choices.", text: [
        "The final report links income {inequality} to a lack of public {initiative}.",
        "She chooses to {negotiate}: a fair offer must give people room to change the rules."
      ], cn: "报告把收入不平等与公共行动的缺失联系起来。她选择谈判：公平的机会必须允许人们改变规则。", twist: "她签下的不是劳动合同，而是一份要求所有人重新谈判的公开声明。" }
    ],
    words: [
      w("recruit", "/rɪˈkruːt/", "v.", "招聘；招募", "真正的招募，不只是找人填空，而是寻找能改变局面的人。", "The firm plans to recruit more graduates this year.", "recruit skilled workers", "Speaking Part 3"),
      w("contribute", "/kənˈtrɪbjuːt/", "v.", "贡献；促成", "把一部分想法放上桌，局面才会开始移动。", "Every member can contribute to the discussion.", "contribute to society", "Writing Task 2"),
      w("flexible", "/ˈfleksəbl/", "adj.", "灵活的", "灵活不是没有边界，而是知道什么时候可以换路线。", "Flexible working hours improve employee satisfaction.", "flexible working arrangements", "Speaking Part 3"),
      w("promote", "/prəˈməʊt/", "v.", "促进；晋升；推广", "被推广的不一定是能力，也可能是一个漂亮的故事。", "The campaign promotes healthier workplaces.", "promote equality", "Writing Task 2"),
      w("reliable", "/rɪˈlaɪəbl/", "adj.", "可靠的", "可靠的证据，应该经得起第二次阅读。", "The survey is based on reliable data.", "a reliable source", "Academic Reading"),
      w("inequality", "/ˌɪnɪˈkwɒləti/", "n.", "不平等", "当起点不同，单纯比较结果就不公平。", "Education can reduce social inequality.", "income inequality", "Writing Task 2"),
      w("initiative", "/ɪˈnɪʃətɪv/", "n.", "主动性；倡议", "主动迈出的一步，往往比等待许可更有用。", "The students launched an environmental initiative.", "take the initiative", "Speaking Part 2"),
      w("negotiate", "/nɪˈɡəʊʃieɪt/", "v.", "谈判；协商", "真正的谈判，从拒绝第一个不公平条件开始。", "The two sides negotiated a new agreement.", "negotiate a deal", "Speaking Part 3")
    ]
  },
  {
    id: 3, topic: "environment", topicLabel: "ENVIRONMENT & SCIENCE", title: "THE LAST WETLAND",
    cnTitle: "最后一片湿地，保存着城市的未来。", deck: "一份环境报告缺了最后一页，答案藏在鸟群改变的路线里。",
    summary: "她进入城市边缘的湿地调查水质，却发现所谓的空地正在替整座城市储存雨水。",
    scenes: [
      { title: "The birds changed direction.", text: [
        "The field team records a sharp fall in local {biodiversity} after the road is expanded.",
        "At sunset, the birds avoid the new lights, as if the habitat has become a warning."
      ], cn: "道路扩建后，生物多样性明显下降。夕阳下鸟群避开新灯，像是在发出警告。", twist: "鸟群飞过的路线，正好拼出一张被删掉的城市地图。" },
      { title: "A number in the smoke.", text: [
        "The factory promises to reduce carbon {emission}, but the monitor shows a different pattern.",
        "The scientist says real {evidence} must survive independent tests, not just a press release."
      ], cn: "工厂承诺减少碳排放，但监测器显示的趋势完全不同。科学家坚持，真正的证据必须经得起独立测试。", twist: "被删掉的最后一页记录着工厂把排放数据转移到了湿地名下。" },
      { title: "The choice beneath the water.", text: [
        "Her {hypothesis} is simple: a {sustainable} wetland can protect homes better than a concrete wall.",
        "After a season of {drought}, the old channel begins to fill again when the rain finally arrives."
      ], cn: "她的假设很简单：可持续的湿地比混凝土墙更能保护住宅。经历干旱后，旧水道在降雨时重新蓄水。", twist: "报告的结论没有要求拆掉工厂，而是要求城市承认湿地的价值。" }
    ],
    words: [
      w("biodiversity", "/ˌbaɪəʊdaɪˈvɜːsəti/", "n.", "生物多样性", "物种越丰富，环境就越有机会从意外中恢复。", "Wetlands are important for global biodiversity.", "protect biodiversity", "Academic Reading"),
      w("emission", "/ɪˈmɪʃn/", "n.", "排放；排放物", "看不见的排放，也会留下看得见的后果。", "The policy aims to cut carbon emissions.", "carbon emissions", "Writing Task 2"),
      w("evidence", "/ˈevɪdəns/", "n.", "证据", "观点可以先出现，证据必须随后跟上。", "There is strong evidence that forests reduce flooding.", "provide evidence", "Academic Reading"),
      w("sustainable", "/səˈsteɪnəbl/", "adj.", "可持续的", "真正的解决方案，应该能让下一代继续使用。", "The city is investing in sustainable transport.", "sustainable development", "Writing Task 2"),
      w("hypothesis", "/haɪˈpɒθəsɪs/", "n.", "假设", "假设是第一块拼图，不是最后的真相。", "The researchers tested a new hypothesis.", "test a hypothesis", "Academic Reading"),
      w("drought", "/draʊt/", "n.", "干旱", "水变少时，城市才会想起谁在替它储水。", "The region suffered from a severe drought.", "severe drought", "Listening"),
      w("conservation", "/ˌkɒnsəˈveɪʃn/", "n.", "保护；保存", "保护不是把自然锁起来，而是给它继续变化的空间。", "The park was created for wildlife conservation.", "nature conservation", "Speaking Part 3"),
      w("adapt", "/əˈdæpt/", "v.", "适应；改编", "能适应变化的系统，比看起来完美的系统更长久。", "Plants adapt to changes in temperature.", "adapt to climate change", "Writing Task 2")
    ]
  },
  {
    id: 4, topic: "travel", topicLabel: "TRAVEL & CITY", title: "THE ROUTE THAT MOVED",
    cnTitle: "地图上的终点，每天都在换位置。", deck: "她用一张城市通票寻找失联的朋友，却发现整条路线被重新规划。",
    summary: "导航把她带过陌生街区，所有公共交通都指向一个没有出现在旅游手册上的目的地。",
    scenes: [
      { title: "The itinerary has a blank page.", text: [
        "Her {itinerary} looks ordinary until the final day, when the {destination} is replaced by a blank line.",
        "The hotel confirms her {accommodation}, but the room number does not exist on any floor."
      ], cn: "行程表前几天都很普通，最后一天的目的地却变成空白。酒店确认了住宿，但房间号根本不存在。", twist: "前台递给她一张地图，地图只标出她还没有走过的街。" },
      { title: "The city moves during rush hour.", text: [
        "During the morning {commute}, unexpected {congestion} turns a ten-minute trip into an hour.",
        "A local guide says the traffic is not an accident; the city is testing a new route."
      ], cn: "早高峰通勤遇到拥堵，十分钟的路变成一小时。当地向导说，这不是意外，而是城市在测试新路线。", twist: "所有堵车车辆的车载地图，都出现了同一个隐藏地标。" },
      { title: "A landmark without a name.", text: [
        "The guide leads her to a famous {landmark} that is surprisingly {accessible} from the river.",
        "At the old station, the final {departure} is announced in a voice no tourist can understand."
      ], cn: "向导带她来到一处著名地标，从河边很容易到达。老车站广播最后一班出发，却使用了没人听过的语言。", twist: "她终于发现，广播念出的其实是失联朋友的名字。" }
    ],
    words: [
      w("itinerary", "/aɪˈtɪnərəri/", "n.", "行程；旅行计划", "行程表安排路线，也会暴露你真正想去哪里。", "Please send me your travel itinerary.", "detailed itinerary", "Speaking Part 2"),
      w("destination", "/ˌdestɪˈneɪʃn/", "n.", "目的地", "没有写出的终点，可能才是旅程真正的原因。", "The island has become a popular destination.", "tourist destination", "Speaking Part 2"),
      w("accommodation", "/əˌkɒməˈdeɪʃn/", "n.", "住宿；膳宿", "住宿不只是一张床，也是观察一座城市的窗口。", "The price includes accommodation and breakfast.", "student accommodation", "Speaking Part 2"),
      w("commute", "/kəˈmjuːt/", "n./v.", "通勤；往返", "每天重复的往返，最能看见城市真正的节奏。", "Her daily commute takes forty minutes.", "daily commute", "Speaking Part 1"),
      w("congestion", "/kənˈdʒestʃən/", "n.", "拥堵；堵塞", "道路拥堵时，城市的选择顺序会变得明显。", "Traffic congestion is a major urban problem.", "traffic congestion", "Writing Task 2"),
      w("landmark", "/ˈlændmɑːk/", "n.", "地标；里程碑", "地标让陌生城市有了可以记住的坐标。", "The bridge is a famous local landmark.", "historic landmark", "Speaking Part 2"),
      w("accessible", "/əkˈsesəbl/", "adj.", "可到达的；易理解的", "真正友好的城市，应该让更多人轻松到达。", "The museum is accessible by public transport.", "easily accessible", "Writing Task 2"),
      w("departure", "/dɪˈpɑːtʃə(r)/", "n.", "离开；出发", "每次出发都在重新定义你要回到哪里。", "The departure time was changed without notice.", "departure time", "Listening")
    ]
  },
  {
    id: 5, topic: "health", topicLabel: "HEALTH & LIFESTYLE", title: "THE TWO-MINUTE GAP",
    cnTitle: "每天两分钟的空白，藏着身体的提醒。", deck: "一条健康应用记录，迫使她重新安排自己的生活节奏。",
    summary: "她的睡眠报告每天少两分钟，直到那段空白开始影响她对现实的判断。",
    scenes: [
      { title: "The missing two minutes.", text: [
        "Her morning {routine} seems normal, but the sleep tracker records a gap that is not {adequate} for recovery.",
        "She writes down every detail instead of trusting a single graph."
      ], cn: "她的日常看起来正常，但睡眠记录出现一段不足以恢复精力的空白。她开始记录细节，而不是盲信一张图。", twist: "空白发生的时间，正是她每天最清醒的时候。" },
      { title: "A symptom with a schedule.", text: [
        "The doctor says the {symptom} may be linked to a long {sedentary} day rather than a serious disease.",
        "She learns that small changes in movement can reduce her {anxiety}."
      ], cn: "医生认为症状可能来自长时间久坐，而不是严重疾病。她发现小幅增加活动也能缓解焦虑。", twist: "健康应用把她每次散步都标成了“异常行为”。" },
      { title: "The body remembers.", text: [
        "To {recover}, she changes her {nutrition}, sleep and screen habits one step at a time.",
        "The report warns that people become more {vulnerable} when they ignore ordinary signals."
      ], cn: "为了恢复，她一点点调整饮食、睡眠和屏幕习惯。报告提醒，忽略普通信号会让人变得更脆弱。", twist: "她删掉应用后，第一次完整地睡到了天亮。" }
    ],
    words: [
      w("routine", "/ruːˈtiːn/", "n./adj.", "日常；常规的", "稳定的日常不是无聊，而是给身体留出安全感。", "A healthy routine can improve sleep quality.", "daily routine", "Speaking Part 1"),
      w("adequate", "/ˈædɪkwət/", "adj.", "足够的；适当的", "刚好够用不等于真正适合你的需要。", "Adults need adequate rest after intense work.", "adequate sleep", "Writing Task 2"),
      w("symptom", "/ˈsɪmptəm/", "n.", "症状；征兆", "症状是身体留下的线索，不是结论。", "A mild symptom does not always require medication.", "common symptom", "Listening"),
      w("sedentary", "/ˈsedntri/", "adj.", "久坐的", "身体不动太久，生活的其他部分也会变窄。", "A sedentary lifestyle can increase health risks.", "sedentary lifestyle", "Writing Task 2"),
      w("anxiety", "/æŋˈzaɪəti/", "n.", "焦虑；忧虑", "焦虑放大未来，规律的呼吸把人带回现在。", "Regular exercise may reduce anxiety.", "reduce anxiety", "Speaking Part 3"),
      w("recover", "/rɪˈkʌvə(r)/", "v.", "恢复；康复", "恢复不是回到原点，而是找到新的平衡。", "She needed a week to recover from exhaustion.", "recover from illness", "Speaking Part 2"),
      w("nutrition", "/njuˈtrɪʃn/", "n.", "营养；营养学", "营养是每天给未来的自己投票。", "Good nutrition supports concentration.", "balanced nutrition", "Writing Task 2"),
      w("vulnerable", "/ˈvʌlnərəbl/", "adj.", "脆弱的；易受伤害的", "承认脆弱不是失败，而是知道需要保护哪里。", "Young children are particularly vulnerable to infection.", "vulnerable groups", "Writing Task 2")
    ]
  },
  {
    id: 6, topic: "technology", topicLabel: "TECHNOLOGY & FUTURE", title: "THE FRIENDLY ALGORITHM",
    cnTitle: "最懂她的系统，最先替她做了决定。", deck: "一个看似贴心的推荐系统，让她开始怀疑自己的选择。",
    summary: "她发现每一次点击都在训练一个算法，而算法正在提前决定她明天会想什么。",
    scenes: [
      { title: "The recommendation knows too much.", text: [
        "The platform calls its latest {innovation} a friendly assistant, but the new {interface} hides more settings than it shows.",
        "She starts to question how much of her attention is being designed."
      ], cn: "平台把新产品称为友好的创新，但界面隐藏的设置比展示的更多。她开始怀疑自己的注意力是否被设计。", twist: "系统推荐的下一篇文章，标题正是她还没说出口的问题。" },
      { title: "Privacy has a price.", text: [
        "The app promises {privacy} while an {algorithm} predicts her location from ordinary searches.",
        "A notice says the process is automatic, although nobody explains who can challenge it."
      ], cn: "应用承诺保护隐私，却用算法从普通搜索预测她的位置。通知写着一切自动完成，却没人解释谁能提出质疑。", twist: "她点开隐私设置，发现自己没有关闭权限的按钮。" },
      { title: "The human decision.", text: [
        "The company wants to {automate} every customer reply, but one unusual case becomes an {obstacle}.",
        "The model can {predict} behaviour, yet the team still needs an {ethical} decision about responsibility."
      ], cn: "公司想自动化所有回复，但一个特殊案例成了障碍。模型能预测行为，却无法替团队承担伦理责任。", twist: "她选择保留人工判断，系统第一次给她显示了“无法预测”。" }
    ],
    words: [
      w("innovation", "/ˌɪnəˈveɪʃn/", "n.", "创新；新方法", "真正的创新会改变生活，不只是换一个漂亮界面。", "Innovation can improve access to education.", "technological innovation", "Writing Task 2"),
      w("interface", "/ˈɪntəfeɪs/", "n.", "界面；接口", "界面给人看的，接口让系统真正行动。", "The new interface is easier for older users.", "user interface", "Academic Reading"),
      w("privacy", "/ˈprɪvəsi/", "n.", "隐私", "越方便的服务，越应该说清楚它拿走了什么。", "People are increasingly concerned about online privacy.", "protect privacy", "Writing Task 2"),
      w("algorithm", "/ˈælɡərɪðəm/", "n.", "算法", "算法能发现规律，却不能替人决定价值。", "The algorithm recommends videos based on past behaviour.", "computer algorithm", "Academic Reading"),
      w("automate", "/ˈɔːtəmeɪt/", "v.", "使自动化", "自动化节省时间，也会重新定义谁负责。", "Many routine tasks can be automated.", "automate a process", "Speaking Part 3"),
      w("obstacle", "/ˈɒbstəkl/", "n.", "障碍", "障碍不是停止的标志，而是需要换策略的提示。", "Cost remains an obstacle to wider adoption.", "major obstacle", "Writing Task 2"),
      w("predict", "/prɪˈdɪkt/", "v.", "预测；预言", "能预测下一步，不代表理解人为什么这样走。", "No model can predict every human decision.", "predict future trends", "Academic Reading"),
      w("ethical", "/ˈeθɪkl/", "adj.", "道德的；伦理的", "技术越强，越需要有人问一句应不应该。", "The debate raises important ethical questions.", "ethical question", "Speaking Part 3")
    ]
  },
  {
    id: 7, topic: "society", topicLabel: "COMMUNICATION & SOCIETY", title: "THE UNREAD REPORT",
    cnTitle: "同一份报告，被不同的人读成了不同的真相。", deck: "她需要在争议公开前，把一份被误读的调查报告讲清楚。",
    summary: "数据没有变，变的是人们看数据的角度，以及他们愿意相信的故事。",
    scenes: [
      { title: "A headline without context.", text: [
        "The article is technically correct but deeply {misleading} because it removes the original {perspective}.",
        "She asks the editor to {clarify} what the survey actually measured."
      ], cn: "文章在技术上没错，却因为删除原始视角而严重误导。她要求编辑澄清调查到底测量了什么。", twist: "标题最吸引人的数字，来自一列从未被纳入结论的数据。" },
      { title: "The controversial sentence.", text: [
        "The proposal is {controversial}, so the speaker must {justify} every claim with a clear source.",
        "A short clip begins to {distort} the argument after it is shared online."
      ], cn: "提案有争议，因此发言者必须用清晰来源论证每个观点。短视频传播后，论证开始被扭曲。", twist: "完整录音里最重要的句子，从未出现在剪辑版本中。" },
      { title: "An agreement to disagree.", text: [
        "The panel does not reach a perfect {consensus}, but they agree to publish the full method.",
        "That small decision gives the public a fairer way to interpret the result."
      ], cn: "小组没有达成完美共识，却同意公开完整方法。这个决定让公众有更公平的方式理解结果。", twist: "报告最后一行写着：透明不是让所有人同意，而是让所有人看见。" }
    ],
    words: [
      w("misleading", "/ˌmɪsˈliːdɪŋ/", "adj.", "误导性的", "只给一半事实，往往比直接说错更危险。", "The graph gives a misleading impression of the trend.", "misleading information", "Writing Task 2"),
      w("perspective", "/pəˈspektɪv/", "n.", "观点；视角", "换一个视角，事实不会变，但意义可能会变。", "Travel can broaden a person's perspective.", "from a different perspective", "Speaking Part 3"),
      w("clarify", "/ˈklærəfaɪ/", "v.", "澄清；阐明", "澄清不是重复，而是把被省略的关系补回来。", "The speaker clarified the purpose of the survey.", "clarify a point", "Speaking Part 3"),
      w("controversial", "/ˌkɒntrəˈvɜːʃl/", "adj.", "有争议的", "有争议的观点更需要完整证据，而不是更大的声音。", "The policy remains controversial among residents.", "controversial issue", "Writing Task 2"),
      w("justify", "/ˈdʒʌstɪfaɪ/", "v.", "证明合理；为……辩护", "观点站得住，不是因为说得响，而是因为能解释。", "The government must justify the decision.", "justify a decision", "Writing Task 2"),
      w("distort", "/dɪˈstɔːt/", "v.", "扭曲；歪曲", "信息离开语境之后，最容易被重新剪裁。", "Short clips can distort public understanding.", "distort the facts", "Academic Reading"),
      w("consensus", "/kənˈsensəs/", "n.", "共识", "共识不是每个人想法一样，而是愿意继续对话。", "The committee reached a consensus after discussion.", "reach a consensus", "Speaking Part 3"),
      w("interpret", "/ɪnˈtɜːprət/", "v.", "解释；诠释", "你如何解释材料，决定别人看见哪条线索。", "Different readers may interpret the results differently.", "interpret data", "Academic Reading")
    ]
  },
  {
    id: 8, topic: "culture", topicLabel: "CULTURE & RESEARCH", title: "THE BLUE ARCHIVE", cnTitle: "最后一本书，正在写她的选择。", deck: "一座城市档案馆保存着一段没人愿意承认的共同记忆。",
    summary: "她在档案馆找到一本没有作者的书，每一页都记录着城市如何保存、遗忘与重写自己。",
    scenes: [
      { title: "The building that remembers.", text: [
        "The museum protects a piece of cultural {heritage} inside a carefully labelled {archive}.",
        "A guide says the collection is not a frozen past; it is a conversation with the present."
      ], cn: "博物馆把一段文化遗产保存在标注清晰的档案中。导游说，收藏不是冻结过去，而是与现在对话。", twist: "档案最底层有一本没有编号的蓝色书。" },
      { title: "The date is too precise.", text: [
        "The book gives a {precise} account of a decision made decades ago, but it does not name the people involved.",
        "She follows the {sequence} of small choices and finds the same street in today's city."
      ], cn: "书中精确记录了几十年前的一次决定，却没有写出相关人物。她顺着选择的顺序，找到了今天城市里的同一条街。", twist: "那条街正在被改造成一个只展示“成功历史”的新展馆。" },
      { title: "The ending is independent.", text: [
        "The curator wants to {sustain} a more honest collection, so she invites an {independent} researcher to review it.",
        "The review offers an {insight}: a {contemporary} city is strongest when it can remember disagreement."
      ], cn: "馆长想维持更诚实的收藏，于是邀请独立研究者重新审阅。研究结论是：当代城市最强大的地方，是它能记住分歧。", twist: "蓝色书的最后一页终于出现作者：每一个愿意继续追问的人。" }
    ],
    words: [
      w("heritage", "/ˈherɪtɪdʒ/", "n.", "遗产；传统", "遗产不是过去的装饰，而是今天仍在发生的选择。", "The building is part of the city's cultural heritage.", "cultural heritage", "Speaking Part 2"),
      w("archive", "/ˈɑːkaɪv/", "n./v.", "档案；存档", "存档不是结束，它让被忽略的声音换个地方呼吸。", "The archive contains thousands of historical documents.", "historical archive", "Academic Reading"),
      w("precise", "/prɪˈsaɪs/", "adj.", "精确的；明确的", "精确到日期的记录，往往说明有人认真保存过。", "The report provides a precise description of the process.", "precise definition", "Writing Task 2"),
      w("sequence", "/ˈsiːkwəns/", "n.", "顺序；连续", "改变一个顺序，结局就会换一张脸。", "The sequence of events was difficult to reconstruct.", "a sequence of events", "Listening"),
      w("sustain", "/səˈsteɪn/", "v.", "维持；支撑", "维持一件事，需要不断回答它为何值得继续。", "The project aims to sustain local communities.", "sustain growth", "Writing Task 2"),
      w("independent", "/ˌɪndɪˈpendənt/", "adj.", "独立的；自主的", "独立不是没有人陪，而是答案由自己签字。", "The study was reviewed by an independent panel.", "independent research", "Academic Reading"),
      w("insight", "/ˈɪnsaɪt/", "n.", "洞察；深刻见解", "洞察不是更多信息，而是看见信息之间的关系。", "The interview provides insight into local culture.", "provide insight into", "Speaking Part 3"),
      w("contemporary", "/kənˈtempərəri/", "adj.", "当代的；现代的", "当代不是忘记历史，而是决定如何继续讲述它。", "The gallery focuses on contemporary art.", "contemporary society", "Writing Task 2")
    ]
  }
];

const allWords = chapters.flatMap((chapter) => chapter.words.map((word) => ({ ...word, chapter })));
const storageKey = "ielts-word-quest-v1";
const defaultState = { learned: [], activeChapter: 0, activeScene: 0, lastStudy: null };
let state = loadState();
let quizState = { index: 0, answered: false };

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const saveState = () => localStorage.setItem(storageKey, JSON.stringify(state));
function loadState() { try { return { ...defaultState, ...(JSON.parse(localStorage.getItem(storageKey)) || {}) }; } catch { return { ...defaultState }; } }
function currentChapter() { return chapters[state.activeChapter] || chapters[0]; }
function learnedCount(chapter) { return chapter.words.filter((word) => state.learned.includes(word.word)).length; }
function showToast(message) { const toast = $("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900); }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char])); }
function shuffle(items) { return [...items].sort(() => Math.random() - 0.5); }

function renderLibrary() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const topic = $("#topicFilter").value;
  const sort = $("#sortSelect").value;
  let visible = chapters.filter((chapter) => {
    const haystack = [chapter.title, chapter.cnTitle, chapter.deck, chapter.topicLabel, ...chapter.words.flatMap((word) => [word.word, word.meaning, word.collocation])].join(" ").toLowerCase();
    return (topic === "all" || chapter.topic === topic) && (!query || haystack.includes(query));
  });
  if (sort === "progress") visible.sort((a, b) => learnedCount(b) - learnedCount(a));
  if (sort === "words") visible.sort((a, b) => b.words.length - a.words.length);
  const totalWords = visible.reduce((sum, chapter) => sum + chapter.words.length, 0);
  $("#libraryMeta").textContent = `${String(visible.length).padStart(2, "0")} 个剧情篇章 · ${totalWords} 个雅思词`;
  $("#totalLearned").textContent = state.learned.length;
  $("#chapterList").innerHTML = visible.length ? visible.map((chapter) => {
    const learned = learnedCount(chapter);
    const pct = Math.round((learned / chapter.words.length) * 100);
    return `<button class="chapter-card" type="button" data-chapter="${chapter.id - 1}">
      <span class="chapter-number">${String(chapter.id).padStart(2, "0")}</span>
      <span class="chapter-topic">${escapeHtml(chapter.topicLabel)}</span>
      <span class="chapter-copy"><h3>${escapeHtml(chapter.title)} · ${escapeHtml(chapter.cnTitle)}</h3><p>${escapeHtml(chapter.deck)}</p><span class="progress-line"><span style="width:${pct}%"></span></span></span>
      <span class="chapter-metrics"><strong>${chapter.words.length} IELTS WORDS</strong><br />${learned}/${chapter.words.length} 已点亮</span><span class="chapter-arrow">↗</span>
    </button>`;
  }).join("") : `<div class="review-empty"><p>没有找到匹配篇章，换个关键词再试一次。</p></div>`;
  $$("[data-chapter]").forEach((button) => button.addEventListener("click", () => openReader(Number(button.dataset.chapter))));
}

function tokenise(text) {
  return text.split(/(\{[^}]+\})/g).map((part) => {
    if (!part.startsWith("{")) return escapeHtml(part);
    const word = part.slice(1, -1);
    return `<button class="word-chip" type="button" data-word="${word}">${word}</button>`;
  }).join("");
}
function renderReader() {
  const chapter = currentChapter();
  const scene = chapter.scenes[state.activeScene] || chapter.scenes[0];
  $("#readerKicker").textContent = `IELTS CASE ${String(chapter.id).padStart(2, "0")} · ${chapter.title}`;
  $("#readerProgress").textContent = `SCENE ${String(state.activeScene + 1).padStart(2, "0")} / ${String(chapter.scenes.length).padStart(2, "0")}`;
  $("#readerTitle").textContent = scene.title;
  $("#readerSummary").textContent = chapter.summary;
  $("#storyBody").innerHTML = scene.text.map((paragraph) => `<p>${tokenise(paragraph)}</p>`).join("") + `<div class="scene-translation"><span>中文辅助理解</span><p>${escapeHtml(scene.cn)}</p></div>`;
  $("#twistBox").textContent = `这一幕的反转：${scene.twist}`;
  $("#sceneButtons").innerHTML = chapter.scenes.map((item, index) => `<button class="scene-button ${index === state.activeScene ? "active" : ""}" data-scene="${index}" type="button">SCENE ${String(index + 1).padStart(2, "0")}</button>`).join("");
  const learned = learnedCount(chapter);
  $("#railProgressFill").style.width = `${Math.round((learned / chapter.words.length) * 100)}%`;
  $("#railProgressText").textContent = `${learned} / ${chapter.words.length} 雅思词已点亮`;
  $("#prevScene").disabled = state.activeScene === 0;
  $("#nextScene").textContent = state.activeScene === chapter.scenes.length - 1 ? "去做复盘 →" : "下一幕 →";
  $$("[data-word]").forEach((button) => button.addEventListener("click", () => openWord(button.dataset.word)));
  $$("[data-scene]").forEach((button) => button.addEventListener("click", () => { state.activeScene = Number(button.dataset.scene); saveState(); renderReader(); }));
}

function openReader(chapterIndex) { state.activeChapter = chapterIndex; state.activeScene = 0; saveState(); $("#readerOverlay").hidden = false; document.body.style.overflow = "hidden"; renderReader(); }
function closeReader() { $("#readerOverlay").hidden = true; document.body.style.overflow = ""; renderLibrary(); renderReview(); }
function openWord(wordText) {
  const word = currentChapter().words.find((item) => item.word === wordText);
  if (!word) return;
  $("#wordCategory").textContent = `${currentChapter().topicLabel} · WORD FILE`;
  $("#wordTitle").textContent = word.word;
  $("#wordPhonetic").textContent = `${word.phonetic} · ${word.pos}`;
  $("#wordMeaning").textContent = word.meaning;
  $("#wordHook").textContent = word.hook;
  $("#wordExample").textContent = word.example;
  $("#wordCollocation").textContent = word.collocation;
  $("#wordSkill").textContent = word.skill;
  $("#learnButton").textContent = state.learned.includes(word.word) ? "已点亮 · 再看一眼" : "点亮这个词";
  $("#learnButton").dataset.word = word.word;
  $("#wordModal").hidden = false;
}
function closeWord() { $("#wordModal").hidden = true; }
function learnWord() {
  const word = $("#learnButton").dataset.word;
  if (!state.learned.includes(word)) { state.learned.push(word); state.lastStudy = new Date().toISOString(); saveState(); showToast(`已点亮 ${word}，它会进入今日雅思复盘`); renderReader(); renderLibrary(); renderReview(); }
  else showToast(`${word} 已在你的雅思词汇档案里`);
}

function quizWords() {
  const learned = allWords.filter((item) => state.learned.includes(item.word));
  return learned.length ? Array.from({ length: 3 }, (_, index) => learned[index % learned.length]) : allWords.slice(0, 3);
}
function renderReview() {
  const words = quizWords();
  const word = words[quizState.index] || words[0];
  if (!state.learned.length) { $("#reviewPanel").innerHTML = `<div class="review-empty"><p>✦ 未点亮 · 点击任意篇章里的橙色雅思词汇开始</p></div>`; return; }
  const distractors = shuffle(allWords.filter((item) => item.word !== word.word && item.meaning !== word.meaning)).slice(0, 3);
  const choices = shuffle([word, ...distractors]);
  $("#reviewPanel").innerHTML = `<div class="review-progress">IELTS QUICK RECALL ${String(quizState.index + 1).padStart(2, "0")} / 03 · ${state.learned.length} WORDS IN YOUR FILE</div><h3 class="review-question">在 ${word.skill} 语境中， “${word.word}” 最接近的意思是：</h3><div class="review-options">${choices.map((choice) => `<button class="review-option" type="button" data-answer="${escapeHtml(choice.word)}">${escapeHtml(choice.meaning)}</button>`).join("")}</div><div class="review-footer"><span class="review-feedback" id="reviewFeedback">选择一个答案</span><button class="button button-primary" id="nextQuiz" type="button" disabled>下一题 →</button></div>`;
  $$("[data-answer]").forEach((button) => button.addEventListener("click", () => answerQuiz(button, word.word)));
  $("#nextQuiz").addEventListener("click", () => { if (quizState.index < 2) { quizState.index += 1; renderReview(); } else { showToast("雅思复盘完成，今天的记忆已经锁上"); quizState.index = 0; renderReview(); } });
}
function answerQuiz(button, correct) {
  if (quizState.answered) return;
  quizState.answered = true;
  const isCorrect = button.dataset.answer === correct;
  button.classList.add(isCorrect ? "correct" : "wrong");
  const answer = allWords.find((item) => item.word === correct);
  $("#reviewFeedback").textContent = isCorrect ? "答对了 · 这条雅思线索已经接上" : `答案是：${answer.word}`;
  $("#nextQuiz").disabled = false;
  $$("[data-answer]").forEach((item) => { if (item.dataset.answer === correct) item.classList.add("correct"); });
  setTimeout(() => { quizState.answered = false; }, 0);
}

$("#searchInput").addEventListener("input", renderLibrary);
$("#topicFilter").addEventListener("change", renderLibrary);
$("#sortSelect").addEventListener("change", renderLibrary);
$("#closeReader").addEventListener("click", closeReader);
$("#prevScene").addEventListener("click", () => { if (state.activeScene > 0) { state.activeScene -= 1; saveState(); renderReader(); } });
$("#nextScene").addEventListener("click", () => { if (state.activeScene < currentChapter().scenes.length - 1) { state.activeScene += 1; saveState(); renderReader(); } else { closeReader(); $("#review").scrollIntoView({ behavior: "smooth" }); } });
$$("[data-close-word]").forEach((element) => element.addEventListener("click", closeWord));
$("#learnButton").addEventListener("click", learnWord);
$("#warmup").addEventListener("click", () => { if (!state.learned.length) { openReader(0); showToast("先点亮三个雅思词，再来做热身题"); } else { $("#review").scrollIntoView({ behavior: "smooth" }); renderReview(); } });
$("#clearProgress").addEventListener("click", () => { if (window.confirm("确定清空本地雅思学习进度吗？")) { state = { ...defaultState }; saveState(); renderLibrary(); renderReview(); showToast("雅思学习进度已清空"); } });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeWord(); if (!$("#readerOverlay").hidden) closeReader(); } });
renderLibrary();
renderReview();
