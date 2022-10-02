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
  const title = '王洪文副主席重要电话指示';
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
一、浙江两派某些头头，一不批林批孔，二不批陈励耘、南萍。有些人到工厂、农村去搞串连、抢枪、抢物资、抢车辆等，完全违背了批林批孔的斗争大方向，是极端错误的。在外边的一些人，应当回到原单位，参加批林批孔。
二、省委，特别是省军区，不坚决执行中央、中央军委的两次收枪的命令，是错误的。必须同中央、中央军委检查。
三、省委的一些主要负责人，主要是指书记、常委，到外地去养病的，应当回到工作岗位上来，同群众一起批林批孔，抓好工作。对不回来的，省委应当严肃处理。
四、在批林批孔的同时，要注意安排好工农业生产，特别是农业生产，要认真抓好，措施要落实。
温州的姚国彪抢枪等问题，已经不是一般的错误了，要责成省军区抓起来，拘留在省里。
`
          .split('\n')
          .map(i => i.trim())
          .filter((i) => i)
          .map((i) => ({
            text: i,
            type: ContentType.paragraph,
          })),
      ],
      authors: ['王洪文'],
      dates: [
        {
          year: 1974,
          month: 3,
          day: 16,
        },
      ],
      is_range_date: false,
      comments: [],
      comment_pivots: [],
      description: '这个电话是王副主席亲自打给谭启龙通知的，记录以后又核对了一次。王副主席说：前天晚上中央开会议论了这个问题，这时我归纳的几条。三月二十一日六时二十五分，王副主席办公室来电话，转达王副主席指示，将“浙江两派头头”，改为“浙江两派某些头头”。',
      page_start: parser_opt.page_limits[0][0],
      page_end: parser_opt.page_limits[0][1],
    },
  ];
  return res;
}