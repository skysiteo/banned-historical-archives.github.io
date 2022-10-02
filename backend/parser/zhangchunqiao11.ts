import {
  ContentPart,
  ContentType,
  ParserOption,
  ParserResult,
} from '../../types';

export async function parse(
  imgPath: string,
  parser_opt: ParserOption,
): Promise<ParserResult[]> {
  const title = '张春桥同志十一月二十五日在市革会扩大会议上的讲话纪要';
  const parts: ContentPart[] =[{
    text: title,
    type: ContentType.title,
  }];
  const res: ParserResult[] = [
    {
      title,
      parts: [
        ...parts,
        ...`
现在有个问题跟大家商量一下，就是修改党章的问题。姚文元同志给毛主席的一封信大家都看了吧，重要批转之后，全国都进行了讨论，党、政、军、民一致要求召开九大，坚决拥护主席有关召开九大的指示，意见都说一致的，所不同的只是时间问题，有的说，明年上半年开，有的说明年下半年开，大家要求在九大前出毛选第五卷，很强烈。中央文革已讨论过，当时还抽不出使时间来搞这个工作，主席也不同意出，今年二月，也没有时间搞下去，今年十月间，又向主席请示了，根据当前情况，可以腾出手来搞毛选，主席也同意了，想把五卷、六卷一道搞出来，一到四卷还要作些补充，各地还要求中央编一本党内两条路线斗争的历史，搞一本党史。现在还搞不出来。为了使党章修改得快一些，中央要上海负责。我跟革命委员会的同志和一部分群众组织代表商量以后，大家一致认为这是主席交给我们上海广大党员、无产阶级革命派和革命人民的一项非常光荣、非常艰巨的任务，由于我们对党建设不了解困难很多。但一定要搞出来，我们现在成立了一个党章修改小组，十个人，由我、姚文元、徐景贤三个人作召集人，今天已开始工作。另外，我们调了二百多个调查员，分别到工厂、学校、机关、农村组织四十个点，同那里的积极分子、革命群众结合起来，成立一个党章修改小组，每组拿出一本修改草案，不是一般的改一改，从总纲开始，都要修改，认为不对的，就批判修改；认为还要改的，把老的拿上来也可以，集中后发下去再讨论。
另外，由工总司、两个机关联络站、部队发动群众自己搞，现在有七十多个单位根本说自己搞。这比邓小平搞的总要好吧，可能有更多的单位要搞。有个学生（不是党员）写了厚厚的一本，我还没有看完，这些人比我们的党员还要关心党，集中一百多本后，报中央，总纲要认真写。中央也要搞，再发到全国讨论，这样就能写出一个比较完整的党章。这是个打算。我接触了一些同志，有些同志是理解的，认识到是个艰巨任务；有些同志不大理解，抽人不大同意。抽人一定要抽好的，否则，将来写出反党的党章怎么办？
上海最近的工作，有个缺点。就是过去造反的时候，跟中央跟得很紧。这一个月跟的不大紧，对九大的准备工作不够重视。讨了一个巧，认为姚文元同志已经写了一份调查报告。当前九大的准备工作是个头等重要的工作，从政治上、思想上、组织上都要准备。一年多的无产阶级文化大革命就是为九大作了准备，从组织上把一大批叛徒从中央到基层揪出来，总的是一小撮。这个一年半，可以说是整党、整政、整军、整民、整学，中心是整党，但还没有结束。九大的会议不但是开个会，而要从政治上、思想上、组织上解决问题。明确这一点，就不会为眼前的一些问题而迷失方向。最近对大批判抓得也不够紧，对陶铸，姚文元同志写了一批判文章，对邓小平怎么样？对陈丕显、曹荻秋怎么样？前一个时期，外面造谣言，说毛主席接见了陈丕显，认为陈丕显还打不倒，他要是出来，肯定还会有人鼓掌，陈丕显、曹荻秋，我是说现在就是没有打倒，有些人就是要想把无产阶级文化大革命破坏掉，想把上海市革命委员会会搞垮掉，资产阶级就高兴，陈、曹就高兴，不在于反映这个问题，问题是我们没有把握住斗争大方向。有些事情我要负责任，上次来了又匆匆地走了，对毛主席的指示没有很好的落实。要把九大的准备工作很好地抓起来。主席的指示只要稍稍离开一步，跟起来就很吃力了。抓了九大的准备工作，其他的派性就没有地位了，而且可以很好地团结我们的力量，把工作搞好。有些同志就是私心杂念多。有些单位原来是很先进的，先进转化为落后是很容易的。“铁联”谢鹏飞以前是先进的，但转化为落后不太难，我们相信，广大的战士是紧跟毛主席的，我们要相信大多数。有些人（气愤地）反对市革命委员会，象有些坏蛋反对党中央一样，他们采取各个击破的办法，开始反对我和姚文元同志，看看不行了，后来反对徐景贤，还给他取了一个名字，叫徐老三的叫法，这是流氓，我们共产党里面没有老几老几的，这是青红帮的叫法，土匪是座山雕的部下，你们都要算老几，那么红卫兵算老几？广大的工人、农民算老几？问题是我们的所谓造反派也是算老几老几了。
徐景贤有缺点可以批评，我张春桥也可以批评的，后来有些人反对王承龙，你们把他们整个灰溜溜，有什么好处啊？对谁有利啊？有些人没有这样想过，希望他们没有这样想过，当然有些问题是客观存在的。你要打倒张春桥、徐景贤、王承龙，你写你的，我们搞我们的。只要我们把打倒走资派工作抓好了，上海的工作就会大大地推进一步。
普陀区为什么对武斗这么感兴趣？我相信真正的工人是不会对武斗有这么大兴趣的，这里面肯定有坏人，你们看好了。
修改党章要同恢复党员的组织生活结合起来。现在来看，恢复党员的组织生活也不是很容易的。有些地方公开提出不要党了；有些党员尾毛翘得老高，这个就不对，认为到最后，还是我党员要起来，教育后改了，同教育后不改的要区别。尾巴翘得老高的要放下来；尾巴斩不掉的就要夹起来。
一方面要做好修改党章的工作，一方面要做好工作。参加修改党章的同志，包括我在内，要一面调查，一面修改，一个月要拿出初稿。参加调查的同志，两个星期要拿出来，时间不多，一定要抓紧。因为这里面还有一个学习的问题在内，你起码要晓得什么是毛主席的建党路线，所以要学习。毛主席现在在看《联共（布）党史》，特别是对这一场无产阶级文化大革命到底反映了党内一个什么问题？它又提出了一些什么问题？反对的是什么？都要弄清楚。你搞九大的党章，一定要搞毛主席建党路线的党章。我们的党章要体现马列主义历史上最转的党章。七大的党章是刘少奇搞的，八大的党章是邓小平搞的，这次我们搞，这也是考考我们，看我们怎么样？如果我们确是认认真真的搞了，那么即使有错误，改起来也是深刻的。下去搞调查的人，要听听党员，非党员各方面人的意见。请同志们要注意恢复党的 组织生活，我们这里讲了，有些人不够党员条件，它想要退党，你有个时间去教育他提高他，倒不如劝他退党吧。将来觉悟提高以后，再进来吧。有一些目前还没有定性质，但群众意见比较大的党员，暂时慢点参加。如果死气沉沉的人都搞进来，象周信芳那种乌龟王八蛋都搞进来，不好“朝气蓬勃”。我建议一定要写进去，有些人年纪不算大，小病大养，死气沉沉，要有革命的朝气，革命的组织的组织性和纪律性，要更好地运用马列主义。
我们把以上的打算，一一向主席作了汇报。昨天（二十四日）毛主席已打电报来，说这样做得好。（热烈鼓掌）
顺便说一下，有几个问题：
第一，青年团怎么办？有些人说，红卫兵代替青年团，但部队里没有红卫兵，工厂、农村红卫兵也比较少，团从中央开始，肯定要整顿，但怎样代替，大家要研究。
第二，最近冲向社会的问题又有些抬头，有些人还在外面胡闹，人家不欢迎，主要是对学生，而是去当诸葛亮，而是一个不高明的诸葛亮，反而增加人家的矛盾。
第三，在无产阶级文化大革命中表现极坏，但还没有定性的，暂不参加组织生活，不要拼命去拉，还是劝他退党吧，但你们不要到外面去乱讲，主要应由群众决定。（以上纪要，未经本人审阅，仅供参考）
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['张春桥'],
      dates: [
        {
          year: 1967,
          month: 11,
          day: 25,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '',
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}